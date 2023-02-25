import './Characters.scss';
import React from 'react';
import Button from '../Button/Button';
import Detail from './Details/Deatils';
import Loading from '../Loading/Loading'
import { useDebounce } from 'use-debounce';

const URL_API = "https://api.disneyapi.dev/characters?page="
const Characters = () => {

    const [characters, setCharacters] = React.useState([])
    const [pag, setPag] = React.useState(1)
    const [previousPage, setPreviousPage] = React.useState("")
    const [nextPage, setNextPage] = React.useState("")
    const [pageDetailCharacters, setPageDetailCharacters] = React.useState("");
    const [detailCharacters, setDetailCharacters] = React.useState("")
    const [loading, setLoading] = React.useState(false)


    React.useEffect(() => {

        console.log(URL_API + pag)

        setLoading(true)

        fetch(URL_API + pag)
            .then((response) =>
                response.json()

            )
            .then((data) => {
                setCharacters(data.data)
                setPreviousPage(data.previousPage)
                setNextPage(data.nextPage)
                console.log(data)
                setLoading(false)

            })
    }, [pag])

    React.useEffect(() => {

        if (pageDetailCharacters) {
            setLoading(true)
                fetch(pageDetailCharacters)
                    .then((response) =>
                        response.json()
                    )
                    .then((data) => {
                        setDetailCharacters(data)
                        setLoading(false)
                    })
        }
    }, [pageDetailCharacters])

    console.log(detailCharacters)

    return (
        <div>
            {loading && <Loading></Loading>}
            <div className='items'>
                {characters.map((charac) => {
                    return (
                        <div className='items__list' key={charac.id} onClick={() => setPageDetailCharacters(charac.url)}>
                            {(charac?.imageUrl) ? <img src={charac.imageUrl} className='items__list--img' alt={`Imagen de ${charac.name}`}></img> :
                                <p className='items__list--text'>Sin imagen</p>}
                            <p className='items__list--text'>{charac.name}</p>
                        </div>
                    )
                })}
            </div>
            <Button pPage={previousPage} nPage={nextPage} setPag={setPag} numberPage={pag}></Button>
            {detailCharacters && <Detail details={detailCharacters} setDetCharac={setDetailCharacters}></Detail>}
        </div>
    )

}

export default Characters