import React from "react";

const useFetch = (text) => {

    const [info, setInfo] = React.useState([])

    React.useEffect(() => {

        const options = {
            headers: {
                Authorization:
                    "R6Sr6j8ll6LwP7c7BEiO9jF9ZMOGJGLMZZ1o38PIURoivqvtwsXxzFhq",
            },
        };

        const finalUrl = `https://api.pexels.com/v1/search?query=${text}`;
        fetch(finalUrl, options)
            .then((data) => data.json())
            .then((dataParsed) => {
                setInfo(dataParsed.photos)
                console.log(dataParsed.photos);
            });
    }, [text])

    return [info];
}

export default useFetch