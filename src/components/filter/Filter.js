import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Form, SearchInput, Select } from "./Filter.styles";

const Filter = ({ search, setSearch, select, setSelect}) => {
  /*
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    function filterCountry() {
      const countryName = document.querySelectorAll(".country-name");

      countryName.forEach((name) => {
        if (name.innerText.toLowerCase().includes(search.toLowerCase())) {
          name.parentElement.parentElement.parentElement.style.display =
            "block";
        } else {
          name.parentElement.parentElement.parentElement.style.display = "none";
        }
      });
    }
    filterCountry();
  }, [search]);
  */

  return (
    <>
      <Form onSubmit={(event) => event.preventDefault()}>
        <SearchInput>
          <IoSearchSharp />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for a Country"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </SearchInput>

        <div className="select">
          <Select
            value={select}
            onChange={({ target }) => setSelect(target.value)}
          >
            <option value="" disabled>
              Filter by region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </Select>
        </div>
      </Form>
    </>
  );
};

export default Filter;
