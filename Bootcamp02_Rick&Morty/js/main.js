const mainContainer = document.querySelector(".main");

window.onload = () => {
    printPage('HOME');
}

const printPage = (section, url) => {
    adaptHeader(section);

    switch(section){
        case 'HOME':
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