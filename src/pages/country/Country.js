import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Container, Button } from "./Country.styles";

import CountryView from "../../components/countryView/CountryView";

const Country = () => {
  return (
    <>
      <Container>
        <Button href="/">
          <FaArrowLeft />
          <span>Back</span>
        </Button>
      </Container>

      <CountryView />
    </>
  );
};

export default Country;
