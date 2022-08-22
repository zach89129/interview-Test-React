import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./views/HomePage";
import Favorites from "./views/Favorites";
import UserCreate from "./views/UserCreate";

function App() {
  const [user, setUser] = useState(
    JSON.parse(window.sessionStorage.getItem("user")) !== null
      ? JSON.parse(window.sessionStorage.getItem("user"))
      : null
  );

  const [searchResults, setSearchResults] = useState();

  const [favPoke, setFavPoke] = useState([]);

  useEffect(() => {
    window.sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    let sessionUser = window.sessionStorage.getItem("user");
    if (sessionUser) setUser(JSON.parse(window.sessionStorage.getItem("user")));
    else setUser(null);
  }, []);

  return (
    <div>
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
            />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites favPoke={favPoke} user={user} />}
        />
        <Route
          path="/user"
          element={<UserCreate setUser={setUser} user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
