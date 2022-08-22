import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
`;

const NavBar = () => {
  return (
    <StyledNav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">My Favorites</Link>
      </li>

      <div> Pokedex</div>
    </StyledNav>
  );
};

export default NavBar;
