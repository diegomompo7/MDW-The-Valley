import React from "react";
import './ImageCard.css'

const ImageCard = ({children, imageUrl}) => {
  return(
    <div className="card">
      <img src={imageUrl}></img>
      {children}
    </div>
  )
}

export default ImageCard