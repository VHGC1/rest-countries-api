import styled from "styled-components";

export const Form = styled("form")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 40px 50px;
`;

export const SearchInput = styled("div")`
  display: flex;
  background-color: ${({ theme: { theme } }) => theme.background};
  color: ${({ theme: { theme } }) => theme.color};
  padding: 12px;
  font-family: inherit;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  box-shadow: ${({ theme: { theme } }) => theme.boxShadow};

  input {
    display: block;
    background-color: ${({ theme: { theme } }) => theme.background};
    color: ${({ theme: { theme } }) => theme.color};
    border: none;
    margin-left: 1rem;
    width: 100%;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${({ theme: { theme } }) => theme.background}
      inset;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme: { theme } }) =>
      theme.color} !important;
  }

  input::placeholder {
    color: ${({ theme: { theme } }) => theme.color};
  }

  @media (min-width: 900px) {
    width: 30%;
  }

  @media (max-width: 460px) {
    margin-bottom: 20px;
  }
`;

export const Select = styled("select")`
  background-color: ${({ theme: { theme } }) => theme.background};
  padding: 12px;
  font-family: inherit;
  border: none;
  border-radius: 5px;
  color: ${({ theme: { theme } }) => theme.color};
  box-shadow: ${({ theme: { theme } }) => theme.boxShadow};
`;
