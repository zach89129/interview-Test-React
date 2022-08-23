import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const StyledSearch = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: solid black 1px;
  /* box-shadow: 10px 10px 10px rgb(0, 0, 0, 0.4); */
  box-shadow: 10px 10px 10px #deb89b;
  width: 50vw;
  font-size: 30px;
  text-decoration: underline;
  background-color: #f2f2f2;
`;

const StyledInput = styled.input`
  margin-top: 10px;
  width: 200px;
  height: 20px;
  text-align: center;
`;

const SearchBar = ({ searchResults, setSearchResults, setSearchErr }) => {
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
          setSearchErr(false);
        })
        .catch((err) => {
          setSearchResults();
          setSearchErr(true);
        });
    } else {
      alert("Please type in a pokemons' name");
    }
  };

  return (
    <div>
      <StyledSearch onSubmit={handleSubmit}>
        <label htmlFor="name">Name of Pokemon</label>
        <StyledInput
          type="text"
          name="name"
          id="name"
          placeholder={searchResults?.name}
          value={formData.name}
          onChange={handleChange}
        />
      </StyledSearch>
    </div>
  );
};

export default SearchBar;
