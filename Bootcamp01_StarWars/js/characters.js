const printCharacters = () => {
        mainContainer.innerHTML = "";
        getCharacters().then(response => {
            let charactersCards = formatCharactersCards(response);
    
            mainContainer.innerHTML = `
         <section class="section">
            <h3 class="section__title">CHARACTERS</h3>
            <section class="section__container">
               ${charactersCards}
            </section>
        </section>
        `;
        addEventsToCharacterLinks(response);
        });
}
const formatCharactersCards = (characters) => {
    let templatesCharacters = characters.map(character => {
        return `
            <div class="card">
                <h4 class="card__title">${character.name}</h4>
                <img class="card__img" src=${character.img}></img>
                <div class="card__info-container">
                    <p class="card__info-title">GENDER</p>
                    <p class="card__info">${character.gender}</p>
                    <p class="card__info-title">HEIGHT</p>
                    <p class="card__info">${character.height}</p>
                    <p class="card__info-title">MASS</p>
                    <p class="card__info">${character.mass}</p>
                
                </div>
            </div>
        `
    }).join('')

    return templatesCharacters;
}

const getCharacters = async() => {
    let url = URL_BASE + "/people/";
    let urlNext =  null;
    let dataAll  = [];

    do{
        let response = (urlNext !== null) ? await fetch(urlNext) : await fetch(url)
        data = await response.json();
        dataAll = [...dataAll, ...mapDataCharacters(data.results)]
        urlNext = data.next;
        console.log(dataAll)

    }while (data.next != null)

    return dataAll;
}

const mapDataCharacters = (data) =>{
    let dataMapped = data.map(character => {
        let object = {
            name: character.name,
            img: "assets/images/characters/" + character.url.replace("https://swapi.dev/api/people/", "").replace("/", "") + ".jpg",
            gender: character.gender,
            mass: character.mass,
            height: character.height,
            urlDetail: character.url,
        }

        return object
    });

    return dataMapped
}
const addEventsToCharacterLinks = (characters) => {
    let cardLinks = [...document.getElementsByClassName('card__link')];
    console.log(cardLinks)
    cardLinks.forEach((element, i) => {
        element.addEventListener('click', () => {
            printPage('CHARACTERS', characters[i].urlDetail)
        })
    })
}