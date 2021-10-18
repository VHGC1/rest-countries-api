import styled from "styled-components";

export const CountriesSection = styled("section")`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
  padding: 0 50px 50px;

  @media (max-width: 1360px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled("div")`
  background-color: ${({ theme: { theme } }) => theme.background};
  border-radius: 5px;
  height: 100%;
  box-shadow: ${({ theme: { theme } }) => theme.boxShadow};

  a {
    color: ${({ theme: { theme } }) => theme.color};
  }

  img {
  }
`;

export const ImgWrapper = styled("div")`
  height: 180px;
  width: 100%;

  img {
    object-fit: cover;
    vertical-align: bottom;
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 5px 5px 0 0;
  }
`;

export const Details = styled("div")`
  padding: 20px;

  width: 100%;
  height: auto;

  h4 {
    margin: 10px 0;
  }

  span {
    font-weight: 300;
  }
`;