import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogin = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: solid black 1px;
  /* box-shadow: 10px 10px 10px rgb(0, 0, 0, 0.4); */
  box-shadow: 10px 10px 10px #deb89b;
  width: 50vw;
`;

const UserCreate = ({ setUser, user }) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.sessionStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  return (
    <div>
      <StyledLogin onSubmit={handleSubmit}>
        <header>Whats your name Poke-trainer?</header>
        <input
          type="text"
          placeholder="Type Name Here"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
      </StyledLogin>
    </div>
  );
};

export default UserCreate;
