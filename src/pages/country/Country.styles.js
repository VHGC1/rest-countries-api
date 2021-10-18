import styled from "styled-components";

export const Container = styled("div")`
  padding: 50px 50px 0;

  @media (max-width: 900px){
    padding: 30px 30px 0;
  }
`

export const Button = styled("a")`
  display: flex;
  width: fit-content;
  align-items: center;
  background-color: ${({ theme: { theme } }) => theme.background};
  color: ${({ theme: { theme } }) => theme.color};
  border-radius: 3px;
  padding: 7px 30px;
  box-shadow: ${({ theme: { theme } }) => theme.boxShadow};

  span {
    margin-left: 5px;
  }

  
`;