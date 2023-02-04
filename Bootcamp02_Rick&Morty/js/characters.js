let urlNext = '';

const printCharacters = () => {
    mainContainer.innerHTML="";
   
    getCharacter().then(response => {
        let charactersCards = formatCharactersCards(response);

        mainContainer.innerHTML = `
            <section class="section">
                <div class="section__text">
                    <h3 class="section__text-title">CHARACTERS FINDER</h3>
                </div>
                <section class="section-container">
                    ${charactersCards}
                </section>
                <button class="section__more"> +MORE </button>
            </section>
        `;
        addEventListenerToMore();
    })
}

const getCharacter = async() => {
    if(urlNext === null || urlNext === '') {
        let url = URL_BASE + "/character";
        urlNext = url
    }
    let response = await fetch(urlNext);
    let data = await response.json();
    urlNext = data.info.next;
    console.log(urlNext)
    data = mapDataCharacters(data.results);
    return data;

} 
const mapDataCharacters = (data) => {
    let dataMapped = data.map(character => {
        let object =  {
            name: character.name,
            status: character.status,
            urlImage: character.image,
            species: character.species,
            gender: character.gender,
            origin: character.origin.name,
            location: character.location.name,
            urlDetails: character.url

        }
        return object;
    })
    return dataMapped;
}
const formatCharactersCards = (characters) =>{
    let templatesCharacters = characters.map(character => {
        return `
            <div class="card">
                <div class="card__text>
                    <h2 class="card__text-name"> ${character.name}</h2>
                    <div class="card__status">
                    <p class="card__status-text"> ${character.status}</p>
                    </div>
                </div>
                <div class="card-container">
                    <img class="card__img" src=" ${character.urlImage}">
                    <div class="card__info-container">
                        <p class="card__info-title">SPECIES</p>
                        <p class="card__info">${character.species}</p>
                        <p class="card__info-title">GENDER</p>
                        <p class="card__info">${character.gender}</p>
                        <p class="card__info-title">ORIGIN</p>
                        <p class="card__info">${character.origin}</p>
                        <p class="card__info-title">LOCATION</p>
                        <p class="card__info">${character.location}</p>
                </div>
                <div class"card-more">
                    <a class="card__link" href="#">+ MORE DETAILS</a>
                </div>
            </div>
        `   
    }).join('');

    return templatesCharacters;
}
const addEventListenerToMore = () => {
    let moreCards = document.getElementsByClassName('section__more')[0];
    moreCards.addEventListener('click', () => {
        printMoreCharacters();
    })


}

const printMoreCharacters = () => {
       
    getCharacter().then(response => {
        let charactersCards = formatCharactersCards(response);

        let sectionContainer = document.getElementsByClassName('section-container')[0];

        sectionContainer.innerHTML += charactersCards;
        
    })
}