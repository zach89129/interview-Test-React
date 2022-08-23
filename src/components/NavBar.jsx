import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 70px;
  max-width: 100%;
  margin-top: 5px;
  margin-bottom: 0px;
  background: transparent;
  font-size: 28px;
  text-decoration: none;
`;

const StyledButton = styled.button`
  font-size: 28px;
  border-radius: 10px;

  &:hover {
    background-color: darkgray;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  &:visited {
    color: inherit;
  }
`;

const NavBar = ({ user }) => {
  return (
    <StyledNav>
      <StyledButton>
        <StyledLink to="/" style={{ textDecoration: "none" }}>
          Home
        </StyledLink>
      </StyledButton>
      <StyledButton>
        <StyledLink
          to="/favorites"
          style={{
            textDecoration: "none",
          }}
        >
          My Favorites
        </StyledLink>
      </StyledButton>

      <div>{user.name}'s Pokedex</div>
    </StyledNav>
  );
};

export default NavBar;
