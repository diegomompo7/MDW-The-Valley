const printDetailPlanet = (url) => {
    mainContainer.innerHTML = "";
    getPlanet(url).then(response => {
        console.log(response)
        let planetDetail = formatPlanetDetail(response);

        mainContainer.innerHTML = `
     <section class="section">
        <h3 class="section__title">PLANET</h3>
        <section class="section__container">
           ${planetDetail}
        </section>
    </section>
    `;
    addEventListenerToOptions('characters', response.characters)
    addEventListenerToOptions('films', response.films)
    });
}
const getPlanet = async(url) => {
    let response = await fetch(url)
    let data = await response.json();
    data = formatDataPlanet(data)
    return data;
}
const formatDataPlanet = (data) =>{
    let dataFormated = {
        name: data.name,
        img: "assets/images/planets/" + data.url.replace("https://swapi.dev/api/planets/", "").replace("/", "") + ".jpg",
        population: data.population,
        terrain: data.terrain,
        climate: data.climate,
        characters: mapOptions(data.residents, 'characters'),
        films: mapOptions(data.films, 'films'),
    }
    return dataFormated;
}

const formatPlanetDetail = (planet) => {
    let characters = formatOptions('characters', planet.characters);
    let films = formatOptions('films', planet.films);

    return `
    <div class="detail">
        <img class="detail__img" src="${planet.img}">
        <div class="detail__info-container">
            <h4 class="detail__title"> ${planet.name}</h4>
            <p class="detail__info-title"> POPULATION </p>
            <p class="detail__info"> ${planet.population} </p>
            <p class="detail__info-title"> TERRAIN </p>
            <p class="detail__info"> ${planet.terrain} </p>
            <p class="detail__info-title"> CLIMATE </p>
            <p class="detail__info"> ${planet.climate} </p>
        </div>
        <div class="detail__options-container">
            ${characters}
            ${films}
        </div>
    </div>
    `
}
/*        */