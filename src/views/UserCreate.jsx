import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pika from "../assets/pika.gif";

const PokeImg = styled.img`
  height: 500px;
  width: auto;
`;

const StyledLogin = styled.form`
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

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    <ContainerDiv>
      <StyledLogin onSubmit={handleSubmit}>
        <header>What is your name Poke-trainer?</header>
        <StyledInput
          type="text"
          placeholder="Type Name Here"
          value={user?.name}
          name="name"
          onChange={handleChange}
        />
      </StyledLogin>
      <div>
        <PokeImg src={pika} alt="loading..." />
      </div>
    </ContainerDiv>
  );
};

export default UserCreate;
