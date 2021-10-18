import React, { useEffect, useState } from "react";
import Filter from "../../components/filter/Filter";
import CountriesFetch from "../../components/countriesFetch/CountriesFetch"
import Loading from "../../components/loading/Loading";
import useFetch from "../../hooks/useFetch"

const url = "https://restcountries.com/v2/all";

const Countries = () => {
  const [search, setSearch] = useState([])
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    request(url);
  }, [request]);

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <>
      <Filter search={search} setSearch={setSearch} />
      {loading && <Loading/>}
      {data ? <CountriesFetch data={data}/> : <p>{error}</p> }
    </>
  );
};

export default Countries;
