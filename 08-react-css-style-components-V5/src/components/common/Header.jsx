import React from "react";
import styled from "styled-components";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Toggle } from "./Toggle.js";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.nav`
  display: ${(p) => (p.isOpen ? "block" : "none")};
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${(p) => p.theme.primaryColor};
  background: white;
  color: black;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
  }
`;

// here we have de-structured isActive so it wil not pass to link so we wil not get any error.
const Link = ({ isActive, children, ...props }) => (
  <ReactRouterLink {...props}>{children}</ReactRouterLink>
);

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? `bold` : `normal`)};
`;

export const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((prev) => !prev)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>

      <Menu isOpen={menuOpen}>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === "/login"}>
          Login
        </StyledLink>
        <Toggle />
      </Menu>
    </HeaderWrapper>
  );
};
