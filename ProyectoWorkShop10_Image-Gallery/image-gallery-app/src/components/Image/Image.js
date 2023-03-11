import React from "react";
import useFetch from "../../hooks/useFetch";
import Search from "../Search/Search";
import "./Image.css";

let initialValue = {
  imageList: []
}

if(localStorage.getItem("image")){
  initialValue = JSON.parse(localStorage.getItem("image"))
}

const reduce = (state, action) => {
  const newState = { ...state }

  switch (action.type) {
    case "ADD IMAGE":
      const newImage = {
        id: action.payload.id,
        imgUrl: action.payload.imgUrl,
        alt: action.payload.alt
      }

      newState.imageList = [...newState.imageList, newImage]
      let newImageString =  JSON.stringify(newState);
      localStorage.setItem("image", newImageString)

      break;
    default:
      console.log("ACTION TYPE NOT SUPPORTED")
  }
  return newState
}

const orderList = (info) => {
  console.log(info)
  let arrayOrder

  (info && (arrayOrder = info.sort((a, b) => {
    if(a.alt > b.alt){
      return 1
    }else{
      return -1
    }
  })))

  console.log(arrayOrder)

  return arrayOrder
  
}

const Image = () => {
  const [getImages, setGetImages] = React.useState([]);
  const [info] = useFetch(getImages)
  const [state, dispatch] = React.useReducer(reduce, initialValue)
  const orderImagesList = React.useMemo(() => orderList(info))

  const searchImage = (text) => {
    setGetImages(text)
    let favourites = localStorage.getItem("image")
    console.log(favourites)
  };

  const addFavouriteImg = React.useCallback((img) => {
    const payloadToAdd = {
      id: img.id,
      imgUrl: img.src.small,
      alt: img.alt
    }

    dispatch({ type: "ADD IMAGE", payload: payloadToAdd })
  }, []);

  return (
    <div className="img">
      <Search searchImage={searchImage}></Search>

      {(!info) ? <p>Introduce un texto de búsqueda</p> :

      <>
      <h3>Resultados de busqueda:</h3>
      <div className="img__container">
        {(orderImagesList && orderImagesList.map((img) => (
          <div key={img.id}>
            <img
              className="img__box"
              alt="busqueda"
              src={img.src.small}
              onClick={() => {
                addFavouriteImg(img);
              }}
            ></img>
            <p>{img.alt}</p>
          </div>
        )))}
      </div>
      </>}

      <h3>Guardar en Favoritos</h3>
      <div className="img__container">
        {state.imageList.map((img) => (
          <div>
              <img className="img__box" key={img.id} alt="busqueda" src={img.imgUrl}></img>
              <p>{img.alt}</p>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Image;
