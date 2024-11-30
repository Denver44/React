import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';

const LargeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 8px;
      border-radius: 6px;
      font-size: 1em;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 0.8em;
    `;
  }
};

const Button = styled.button`
  color: white;
  background: ${(p) =>
    p.secondary ? p.theme.primaryColor : p.theme.secondaryColor};
  ${LargeStyles};
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

// export const Button = styled.button`
//   color: white;
//   background: ${(p) =>
//     p.secondary ? p.theme.primaryColor : p.theme.secondaryColor};
//   ${(p) =>
//     p.large
//       ? css`
//           padding: 8px;
//           border-radius: 6px;
//           font-size: 0.9em;
//         `
//       : css`
//           padding: 8px;
//           border-radius: 4px;
//           font-size: 0.75em;
//         `}
//   font-weight: bold;
//   box-shadow: none;
//   border: none;
//   width: 100%;
//   display: block;
//   white-space: none;

//   &:hover {
//     cursor: pointer;
//   }
//   &:disabled {
//     background: #eee;
//     color: #666;
//   }
// `;

Button.propTypes = {
  large: PropTypes.bool,
  secondary: PropTypes.bool,
};

export { Button };
