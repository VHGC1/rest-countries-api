import styled from "styled-components";

export const Button = styled("button")`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${({ theme: { theme } }) => theme.color};
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`;
