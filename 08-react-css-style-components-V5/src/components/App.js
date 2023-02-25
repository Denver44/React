import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LightTheme from "themes/light";
import DarkTheme from "themes/dark";
const GlobalStyle = createGlobalStyle`
body{
  background: white;
  min-height : 100vh;
  margin : 0;
  color : black;
  font-family: 'Kaushan Script';
}
`;

const App = () => {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <>
      <ThemeProvider theme={{ ...theme, setTheme }}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
