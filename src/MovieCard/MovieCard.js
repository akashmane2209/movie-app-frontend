import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";
import StarRating from "react-star-ratings";
const { Meta } = Card;

export default class MovieCard extends Component {
  render() {
    return (
      <Card
        style={{ width: 150, marginRight: 20, marginTop: 20 }}
        cover={
          <img
            alt="example"
            src="https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
          />
        }
        actions={[<Icon type="eye" theme="filled" />]}
      >
        <p style={{ fontSize: 12 }}>Title</p>
        <p style={{ fontSize: 16 }}>
          <b>Joker Is The Best Movie</b>
        </p>
        <p style={{ fontSize: 12 }}>
          <b>Date of Release:</b> 2019-10-02
        </p>
        <StarRating
          rating={4.5}
          starRatedColor="#F5E400"
          starDimension="15px"
          starSpacing="0.5px"
        />
      </Card>
    );
  }
}
