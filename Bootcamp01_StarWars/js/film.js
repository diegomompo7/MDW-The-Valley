const printDetailFilm = (url) => {
    mainContainer.innerHTML = "";
    getFilm(url).then(response => {
        console.log(response)
        let filmDetail = formatFilmDetail(response);

        mainContainer.innerHTML = `
     <section class="section">
        <h3 class="section__title">FILMS</h3>
        <section class="section__container">
           ${filmDetail}
        </section>
    </section>
    `;
    addEventListenerToOptions('characters', response.characters)
    addEventListenerToOptions('planets', response.planets)
    addEventListenerToOptions('starships', response.starships)
    addEventListenerToOptions('species', response.species)
    });
}
const getFilm = async(url) => {
    let response = await fetch(url)
    let data = await response.json();
    data = formatDataFilm(data)
    return data;
}
const formatDataFilm = (data) =>{
    let dataFormated = {
        title: data.title.toUpperCase(),
        img: "assets/images/films/" + data.url.replace("https://swapi.dev/api/films/", "").replace("/", "") + ".jpg",
        episode: getRomanNumber(data.episode_id),
        director: data.director,
        date: data.release_date,
        characters: mapOptions(data.characters, 'characters'),
        planets: mapOptions(data.planets, 'planets'),
        starships: mapOptions(data.starships, 'starships'),
        species: mapOptions(data.species, 'species'),
    }
    return dataFormated;
}

const formatFilmDetail = (film) => {
    let characters = formatOptions('characters', film.characters);
    let planets = formatOptions('planets', film.planets);
    let starships = formatOptions('starships', film.starships);
    let species = formatOptions('species', film.species);

    return `
    <div class="detail">
        <img class="detail__img" src="${film.img}">
        <div class="detail__info-container">
            <h4 class="detail__title"> ${film.title}</h4>
            <p class="detail__info-title"> EPISODE </p>
            <p class="detail__info"> ${film.episode} </p>
            <p class="detail__info-title"> DIRECTOR </p>
            <p class="detail__info"> ${film.director} </p>
            <p class="detail__info-title"> DATE </p>
            <p class="detail__info"> ${film.date} </p>
        </div>
        <div class="detail__options-container">
        ${characters}
        ${planets}
        ${starships}
        ${species}
        </div>
    </div>
    `
}