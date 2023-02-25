import './Details.scss'

const Detail = ({ details, setDetCharac}) => {
    return (
        <div className='container'>
            <div className='detail' onClick={() => {setDetCharac("")}}>

                <h3 className='detail__text'>{details.name}</h3>
                {(details?.imageUrl) ? <img src={details.imageUrl} className='detail__img' alt={`Imagen de ${details.name}`}></img> : <p>Sin imagen</p>}
                {details?.allies.length > 0 && <p className='detail__desc'><strong>Aliados:</strong>{details.allies.join(", ")}</p>}
                {details?.enemies.length > 0 && <p className='detail__desc'><strong>Enemigos :</strong> {details.enemies.join(", ")}</p>}
                {details?.films.length > 0 && <p className='detail__desc'><strong>Películas :</strong> {details.films.join(", ")}</p>}
                {details?.parkAttractions.length > 0 && <p className='detail__desc'><strong>Atracciones:</strong> {details.parkAttractions.join(", ")}</p>}
                {details?.shortFilms.length > 0 && <p className='detail__desc'><strong>Cortos :</strong> {details.shortFilms.join(", ")}</p>}
                {details?.tvShows.length > 0 && <p className='detail__desc'><strong>Series TV :</strong> {details.tvShows.join(", ")}</p>}
                {details?.videoGames.length > 0 && <p className='detail__desc'><strong>Videojuegos :</strong> {details.videoGames.join(", ")}</p>}
            </div>
        </div>
    )
}

export default Detail