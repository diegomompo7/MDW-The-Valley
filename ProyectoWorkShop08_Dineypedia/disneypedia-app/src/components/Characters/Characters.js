import './Characters.scss';
import React from 'react';
import Button from '../Button/Button';
//import { useDebounce } from 'use-debounce';

let URL_API = "https://api.disneyapi.dev/characters?page="

const Characters = () => {

    const [characters, setCharacters] = React.useState([])
    const [pag, setPag] = React.useState("https://api.disneyapi.dev/characters?page=1")
    const [previousPage, setPreviousPage] = React.useState("")
    const [nextPage, setNextPage] = React.useState("")


    React.useEffect(() => {

        fetch(pag)
            .then((response) =>
                response.json()
            )
            .then((data) => {
                setCharacters(data.data)
                setPreviousPage(data.previousPage)
                setNextPage(data.nextPage)
                console.log(data)
            })
    }, [pag])

    return (
        <div>
            <div className='items'>
                {characters.map((charac) => {
                    return (
                        <div className='items__list'>
                            {(charac?.imageUrl) ? <img src={charac.imageUrl} className='items__list--img' ></img> : 
                            <p className='items__list--text'>Sin imagen</p>}
                            <p className='items__list--text'>{charac.name}</p>
                        </div>
                    )
                })}
            </div>
            <Button pPage={previousPage} nPage={nextPage} setPag={setPag}></Button>
        </div>
    )

}

export default Characters