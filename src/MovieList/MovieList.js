import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import MovieCard from "../MovieCard/MovieCard";
export default class MovieList extends Component {
  render() {
    return (
      <div
        style={{
          padding: 24,
          background: "#fff",
          minHeight: "80vh",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    );
  }
}
