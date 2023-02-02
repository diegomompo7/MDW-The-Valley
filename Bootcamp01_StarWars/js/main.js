const mainContainer = document.querySelector(".main");

window.onload = () => {
    printPage('HOME');
}

const printPage = (section, url) => {
    adaptHeader(section);

    console.log(section)
    console.log(url)

    switch(section){
        case 'HOME':
            printHome();
            break;
        case 'FILMS':
            url ? printDetailFilm(url) :  printFilms();
            break;
        case 'CHARACTERS':
            url ? printDetailCharacter(url) : printCharacters();
            break;
        case 'STARSHIPS':
            url ? printDetailStarship(url) : printStarships();
            break;
        case 'SPECIES':
            url ? printDetailSpecie(url) : printSpecies();
            break;
        case 'PLANETS':
            url ? printDetailPlanet(url) : printPlanets();
            break;
        default:
            printHome();
            break;
    }
}

const adaptHeader = (section) => {
    const header = document.querySelector('header');
    if(section == 'HOME'){
        header.classList.add('header--home')
    }
    else{
        header.classList.remove('header--home')
    }
}