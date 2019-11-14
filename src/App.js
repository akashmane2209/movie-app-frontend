import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Header from "./Header/Header";
import MovieList from "./MovieList/MovieList";
import MovieDetail from "./MovieDetail/MovieDetail";

function App() {
  return (
    <div>
      <Header />
      <MovieList />

      <MovieDetail />
    </div>
  );
}

export default App;
