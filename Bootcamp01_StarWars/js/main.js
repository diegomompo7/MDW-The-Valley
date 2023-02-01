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
            console.log("Pinta personajes");
            break;
        case 'STARSHIPS':
            console.log("Pinta naves");
            break;
        case 'SPECIES':
            console.log("Pinta especies");
            break;
        case 'PLANETS':
            console.log("Pinta planetas");
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