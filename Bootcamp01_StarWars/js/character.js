const printDetailCharacter = (url) => {
    mainContainer.innerHTML = "";
    getCharacter(url).then(response => {
        console.log(response)
        let characterDetail = formatCharacterDetail(response);

        mainContainer.innerHTML = `
     <section class="section">
        <h3 class="section__title">CHARACTERS</h3>
        <section class="section__container">
           ${characterDetail}
        </section>
    </section>
    `;
    addEventListenerToOptions('species', response.species)
    addEventListenerToOptions('starships', response.starships)
    addEventListenerToOptions('films', response.films)
    });
}
const getCharacter = async(url) => {
    let response = await fetch(url)
    let data = await response.json();
    data = formatDataCharacter(data)
    return data;
}
const formatDataCharacter = (data) =>{
    let dataFormated = {
        name: data.name,
        img: "assets/images/characters/" + data.url.replace("https://swapi.dev/api/people/", "").replace("/", "") + ".jpg",
        gender: data.gender,
        mass: data.mass,
        height: data.height,
        species: mapOptions(data.species, 'species'),
        starships: mapOptions(data.starships, 'starships'),
        films: mapOptions(data.films, 'films'),
    }
    return dataFormated;
}

const formatCharacterDetail = (character) => {
    let films = formatOptions('films', character.films);
    let starships = formatOptions('starships', character.starships);
    let species = formatOptions('species', character.species);

    return `
    <div class="detail">
        <img class="detail__img" src="${character.img}">
        <div class="detail__info-container">
            <h4 class="detail__title"> ${character.name}</h4>
            <p class="detail__info-title"> GENDER </p>
            <p class="detail__info"> ${character.gender} </p>
            <p class="detail__info-title"> HEIGHT </p>
            <p class="detail__info"> ${character.height} </p>
            <p class="detail__info-title"> MASS </p>
            <p class="detail__info"> ${character.mass} </p>
        </div>
        <div class="detail__options-container">
            ${species}
            ${starships}
            ${films}
        </div>
    </div>
    `
}
/*

*/