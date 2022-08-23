import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./views/HomePage";
import Favorites from "./views/Favorites";
import UserCreate from "./views/UserCreate";
import FavoriteDetails from "./views/FavoriteDetails";

function App() {
  const [user, setUser] = useState(
    JSON.parse(window.sessionStorage.getItem("user")) !== null
      ? JSON.parse(window.sessionStorage.getItem("user"))
      : null
  );

  const [singlePoke, setSinglePoke] = useState({});

  const [searchErr, setSearchErr] = useState(false);
  const [searchResults, setSearchResults] = useState();

  const [favPoke, setFavPoke] = useState(
    JSON.parse(window.sessionStorage.getItem("Favorites")) !== null
      ? JSON.parse(window.sessionStorage.getItem("Favorites"))
      : []
  );

  useEffect(() => {
    window.sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    let sessionUser = window.sessionStorage.getItem("user");
    if (sessionUser) setUser(JSON.parse(window.sessionStorage.getItem("user")));
    else setUser(null);
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("Favorites", JSON.stringify(favPoke));
  }, [favPoke]);

  useEffect(() => {
    let sessionUser = window.sessionStorage.getItem("Favorites");
    if (sessionUser)
      setFavPoke(JSON.parse(window.sessionStorage.getItem("Favorites")));
    else setFavPoke(null);
  }, []);

  return (
    <div
      style={
        searchErr
          ? { backgroundColor: "#f2f2f2" }
          : { backgroundColor: "white" }
      }
    >
      <NavBar user={user} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setFavPoke={setFavPoke}
              favPoke={favPoke}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              searchErr={searchErr}
              setSearchErr={setSearchErr}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favPoke={favPoke}
              user={user}
              setSinglePoke={setSinglePoke}
              setFavPoke={setFavPoke}
            />
          }
        />
        <Route
          path="/user"
          element={<UserCreate setUser={setUser} user={user} />}
        />
        <Route
          path="/favorites/:pokemon"
          element={<FavoriteDetails singlePoke={singlePoke} />}
        />
      </Routes>
    </div>
  );
}

export default App;
