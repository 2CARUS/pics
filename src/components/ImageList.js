import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  /*
  so props.images is an array, and we call map
  which takes in a function which tells you
  what the map function can specifically return
  */
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
