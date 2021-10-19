import React, { useEffect, useState } from "react";
import Filter from "../../components/filter/Filter";
import CountriesFetch from "../../components/countriesFetch/CountriesFetch";
import Loading from "../../components/loading/Loading";
import useFetch from "../../hooks/useFetch";

const url = "https://restcountries.com/v2/all";

const Countries = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const [filteredData, setFilteredData] = useState([]);
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    request(url);
  }, [request]);

  useEffect(() => {
    data && setFilteredData(data.filter((country) => country.name.toLowerCase().includes(search.toLowerCase())))
  }, [search, data]);

  return (
    <>
      <Filter
        search={search}
        setSearch={setSearch}
        select={select}
        setSelect={setSelect}
      />
      {loading && <Loading />}
      {data ? <CountriesFetch data={filteredData ? filteredData : data} /> : <p>{error}</p>}
    </>
  );
};

export default Countries;
