import React from "react";
import "./AnimeCard.css";

const AnimeCard = ({ item }) => {
  return (
    <div className="card">
      <img src={item.main_picture.medium} alt="img" />
      <p>{item.title}</p>
    </div>
  );
};

export default AnimeCard;
