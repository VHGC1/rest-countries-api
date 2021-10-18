import styled from "styled-components";

export const Wrapper = styled("section")`
  padding: 50px;

  img {
    max-width: 100%;
  }

  @media (max-width: 900px) {
    padding: 30px;
    margin-bottom: 1rem;
  }
`;

export const Button = styled("a")`
  display: flex;
  width: fit-content;
  align-items: center;
  background-color: ${({ theme: { theme } }) => theme.background};
  color: ${({ theme: { theme } }) => theme.color};
  border-radius: 3px;
  padding: 7px 30px;
  box-shadow: ${({ theme: { theme } }) => theme.boxShadow};
  margin-bottom: 25px;

  span {
    margin-left: 5px;
  }
`;

export const Container = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  grid-gap: 5rem;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const WrapperCountryDetails = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    font-size: 30px;
    letter-spacing: 1px;
  }

  @media (max-width: 900px) {
    gap: 1rem;
  }
`;

export const CountryDetails = styled("div")`
  display: flex;
  justify-content: space-between;

  h5 {
    font-weight: 600;
    font-size: 16px;
    margin: 10px 0;
  }

  span {
    font-weight: 300;
  }
`;

export const BorderCountries = styled("div")`
  display: flex;
  align-items: center;

  h5 {
    font-size: 16px;
    font-weight: 600;

    margin-right: 20px;
  }

  ul {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  ul li {
    background-color: ${({ theme: { theme } }) => theme.background};
    color: ${({ theme: { theme } }) => theme.color};
    padding: 2px 20px;
    border-radius: 1px;
    box-shadow: ${({ theme: { theme } }) => theme.boxShadow};
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    h5 {
      font-size: 18px;
    }

    ul {
      justify-content: center;
      margin-top: 10px;
    }
  }
`;
