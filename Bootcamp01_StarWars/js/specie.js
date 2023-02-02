const printDetailSpecie = (url) => {
    mainContainer.innerHTML = "";
    getSpecie(url).then(response => {
        console.log(response)
        let specieDetail = formatSpecieDetail(response);

        mainContainer.innerHTML = `
     <section class="section">
        <h3 class="section__title">SPECIE</h3>
        <section class="section__container">
           ${specieDetail}
        </section>
    </section>
    `;
    addEventListenerToOptions('characters', response.characters)
    addEventListenerToOptions('films', response.films)
    });
}
const getSpecie = async(url) => {
    let response = await fetch(url)
    let data = await response.json();
    data = formatDataSpecie(data)
    return data;
}
const formatDataSpecie = (data) =>{
    let dataFormated = {
        name: data.name,
        img: "assets/images/species/" + data.url.replace("https://swapi.dev/api/species/", "").replace("/", "") + ".jpg",
        classification: data.classification,
        lifespan: data.average_lifespan,
        language: data.language,
        characters: mapOptions(data.residents, 'characters'),
        films: mapOptions(data.films, 'films'),
    }
    return dataFormated;
}

const formatSpecieDetail = (specie) => {
    let characters = formatOptions('characters', specie.characters);
    let films = formatOptions('films', specie.films);

    return `
    <div class="detail">
        <img class="detail__img" src="${specie.img}">
        <div class="detail__info-container">
            <h4 class="detail__title"> ${specie.name}</h4>
            <p class="detail__info-title"> CLASSIFICATION </p>
            <p class="detail__info"> ${specie.classification} </p>
            <p class="detail__info-title"> LIFESPAN WORLD </p>
            <p class="detail__info"> ${specie.lifespan} </p>
            <p class="detail__info-title"> LANGUAGE </p>
            <p class="detail__info"> ${specie.language} </p>
        </div>
        <div class="detail__options-container">
            ${characters}
            ${films}
        </div>
    </div>
    `
}
/*           <div class="card">
            <h4 class="card__title">${specie.name}</h4>
            <img class="card__img" src=${specie.img}></img>
            <div class="card__info-container">
                <p class="card__info-title">CLASSIFICATION</p>
                <p class="card__info">${specie.classification}</p>
                <p class="card__info-title">LIFESPAN</p>
                <p class="card__info">${specie.lifespan}</p>
                <p class="card__info-title">LANGUAGE</p>
                <p class="card__info">${specie.language}</p>
                <a class="card__link" href="#">+ MORE DETAILS</a>
            </div>
        </div>     */