import styled from "styled-components";

const { pathname } = window.location;

export const HeaderWrapper = styled("header")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
  color: ${({ theme: { theme } }) => theme.color};
  background-color: ${({ theme: { theme } }) => theme.background};
  box-shadow: 0 5px 10px hsla(200, 15%, 8%, 0.1);

  h1 {
    font-weight: 300;
  }

  @media (max-width: 900px){
    ${pathname === "/" ? null : "padding: 30px"}
  }

  @media (max-width: 475px){
    padding: 10px 25px;

    h1 {
      font-size: 18px;
    }
  }
`;
