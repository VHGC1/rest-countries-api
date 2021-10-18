import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Wrapper,
  Container,
  WrapperCountryDetails,
  CountryDetails,
  BorderCountries,
} from "./CountryView.styles";

const CountryView = () => {
  const [country, setCountry] = useState([]);
  const { alpha2Code } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v2/alpha/${alpha2Code}`
      );
      const country = await response.json();
      setCountry([country]);
    };
    fetchCountryData();
  }, [alpha2Code]);

  return (
    <>
      <Wrapper>
        {country.map(
          ({
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          }) => {
            return (
              <Container key={numericCode}>
                <div>
                  <img src={flag} alt={name} />
                </div>

                <WrapperCountryDetails>
                  <div>
                    <h2>{name}</h2>
                  </div>

                  <CountryDetails>
                    <div>
                      <h5>
                        Native Name: <span>{nativeName}</span>
                      </h5>
                      <h5>
                        Population: <span>{population}</span>
                      </h5>
                      <h5>
                        Region: <span>{region}</span>
                      </h5>
                      <h5>
                        Sub Region: <span>{subregion}</span>
                      </h5>
                      <h5>
                        Capital: <span>{capital}</span>
                      </h5>
                    </div>
                    <div>
                      <h5>
                        Top Level Domain: <span>{topLevelDomain}</span>
                      </h5>
                      {currencies && (
                        <h5>
                          Currencies:{" "}
                          <span>
                            {currencies.map(({ name }) => (
                              <span key={name}>{name}</span>
                            ))}
                          </span>
                        </h5>
                      )}

                      {currencies && (
                        <h5>
                        Languages:{" "}
                        {languages.map(({ name }) => (
                          <span key={name}>{name} </span>
                        ))}
                      </h5>
                    
                      )}
                      </div>
                  </CountryDetails>

                  {borders && (
                    <BorderCountries>
                      <h5>Border Countries:</h5>
                      <ul>
                        {borders.map((border) => (
                          <li key={border}>{border}</li>
                        ))}
                      </ul>
                    </BorderCountries>
                  )}
                </WrapperCountryDetails>
              </Container>
            );
          }
        )}
      </Wrapper>
    </>
  );
};

export default CountryView;
