import styled from "styled-components";

const Button = styled.button`
  font-weight: ${({ normal }) => (normal ? 400 : 700)};
  font-size: 16px;
  color: var(--red);
  background-color: #fff;
  border: 1px solid var(--red);
  border-radius: 50px;
  padding: 13px 45px;
  cursor: pointer;
  transition: var(--transition);
  ${({ big }) =>
    big &&
    `
    box-shadow: 0px 35px 50px rgba(245, 56, 56, 0.35);
    padding: 17.5px 77.5px;
    border-radius: var(--br1);
    background-color: var(--red);
    color: #fff;

  `};

  &:hover {
    background-color: var(--red);
    border: 1px solid var(--red);
    color: #fff;
    transform: scale(0.98);
  }
  &:active {
    transform: scale(1.02);
  }
`;

export default Button;
