import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const StyledSearch = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: solid black 1px;
  /* box-shadow: 10px 10px 10px rgb(0, 0, 0, 0.4); */
  box-shadow: 10px 10px 10px #deb89b;
  width: 50vw;
`;

const SearchBar = ({ searchResults, setSearchResults }) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length > 2) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${formData.name}`)
        .then((res) => {
          setSearchResults(res.data);
          //   setFavPoke((favPoke) => [...favPoke, res.data]);
          setFormData({
            name: "",
          });
        });
    } else {
      alert("Please type in a pokemons' name");
    }
  };

  return (
    <div>
      <StyledSearch onSubmit={handleSubmit}>
        <label htmlFor="name">Name of Pokemon</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </StyledSearch>
    </div>
  );
};

export default SearchBar;
