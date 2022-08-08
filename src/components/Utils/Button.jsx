import styled from "styled-components";

export const Button = styled.button`
  background-color: #fff;
  width: 158px;
  height: 44px;
  background: #ad1fea;
  border-radius: 10px;
  color: #fff;
  border: none;
`;

// import classNames from 'classnames';
// import classes from './Button.module.css';

// function Button({ children, color, ...props }) {
//   const buttonClassName = classNames(classes.Button, {
//     [classes['Button--purple']]: color === 'purple',
//     [classes['Button--blue']]: color === 'blue',
//     [classes['Button--black']]: color === 'black',
//     [classes['Button--red']]: color === 'red',
//   });

//   return (
//     <button className={buttonClassName} {...props}>
//       {children}
//     </button>
//   );
// }

// export default Button;
