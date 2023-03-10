import React from "react"
import Search from "../Search/Search"

const Image = () => {

    const [getImages, setGetImages] = React.useState([])
    const [favouriteList, setFavouriteList] = React.useState([])

    const searchImage = (text) => {
        const options = {
            headers: {
                'Authorization': "R6Sr6j8ll6LwP7c7BEiO9jF9ZMOGJGLMZZ1o38PIURoivqvtwsXxzFhq"
            }
        };

        const finalUrl = `https://api.pexels.com/v1/search?query=${text}`;
        fetch(finalUrl, options)
            .then(data => data.json())
            .then(dataParsed => {
                console.log(dataParsed.photos);
                setGetImages(dataParsed.photos)
            });
    }

    const selectedImage = (img) => {
        setFavouriteList([...favouriteList, img])
    }

    console.log(favouriteList)

    return (
        <div>
            <Search searchImage={searchImage}></Search>

            <h3>Resultados de busqueda:</h3>

            {
                getImages.map((img) =>
                    <img src={img.src.small} onClick={() => { selectedImage(img.src.small) }}></img>
                )
            }

            <h3>Guardar en Favoritos</h3>

            {
                favouriteList.map((img) =>
                    <img src={img}></img>
                )
            }

        </div>
    )
}

export default Image