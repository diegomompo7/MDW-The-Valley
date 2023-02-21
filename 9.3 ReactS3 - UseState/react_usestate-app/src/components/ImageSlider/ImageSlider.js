import "./ImageSlider.css";
import React from "react";


const ImageSlider= ({images}) => {

  
  const previousImage = () => {
    const value = currentImage - 1;
    if (value >= 0) {
      setCurrentImage(value);
    } else {
      console.error("Ya has llegado al principio de las imágenes, esta es la primera.");
    }
  }

  const nextImage = () => {
    const value = currentImage + 1;
    if (value < images.length) {
      setCurrentImage(value);
    } else {
      console.error("Ya has llegado al final del array, esta es la última.");
    }
  }


  const [currentImage, setCurrentImage] = React.useState(0);

  return (
    <div className="image-slider">
      <span className="image-slider__indicator">{currentImage + 1} de {images.length}</span>
      <button onClick={previousImage}>Anterior</button>
      <img alt="Random sample to show useState" src={images[currentImage]}></img>
      <button onClick={nextImage}>Siguiente</button>
    </div>
  );
}

export default ImageSlider;