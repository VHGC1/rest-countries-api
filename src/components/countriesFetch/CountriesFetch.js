import React from "react";
import { Link } from "react-router-dom";
import { CountriesSection, Card, ImgWrapper, Details } from "./CountriesFetch.styles";

const CountriesFetch = ({ data }) => {
  
  return (
    <>
      <CountriesSection>
        {data.map(
          ({
            name,
            population,
            region,
            capital,
            flag,
            alpha2Code,
          }) => {
            return (
              <Card key={name}>
                <Link to={`/countries/${alpha2Code}`}>
                  <ImgWrapper>
                    <img src={flag} alt={name} />
                  </ImgWrapper>

                  <Details>
                    <h3 className="country-name">{name}</h3>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </Details>
                </Link>
              </Card>
            );
          }
        )}
      </CountriesSection>
    </>
  );
};

export default CountriesFetch;
