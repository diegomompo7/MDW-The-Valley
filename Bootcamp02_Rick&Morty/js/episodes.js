let urlNextEpisodes = '';
let nameEpisode = []
let dateEpisode = []
let season = []
let idEpisode;
let idSeason = 1;
let cont = 1;
let seasonObject = new Object()
let seasonArray = []

const printEpisodes = () => {
    mainContainer.innerHTML="";
   
    getEpisodes().then(response => {
        let episodesCards = formatEpisodesCards(response);

        mainContainer.innerHTML = `
            <section class="section">
                <div class="section__text">
                    <h3 class="section__text-title">EPISODES</h3>
                </div>
                <section class="section-container">
                    ${episodesCards}
                </section>
                <div class = "section__more">
                    <button class="section__more-details"> +MORE </button>
                </div>
            </section>
        `;
        addEventListenerToMoreEpisodes();
        addEventsToEpisodeLinks(response);
    })
}

const getEpisodes = async() => {
    if(urlNextEpisodes === null || urlNextEpisodes === '') {
        let url = URL_BASE + "/episode";
        urlNextEpisodes = url
    }
    let response = await fetch(urlNextEpisodes);
    let data = await response.json();
    urlNextEpisodes = data.info.next;
    console.log(urlNextEpisodes)

    console.log(season)

    data = mapDataEpisodes(data.results);
    return data;

} 
const mapDataEpisodes = async(data) => {
        let dataMapped = []
        let dataSeason = []
        dataSeason = data.map(idSeason => idSeason.episode.slice(0,3))
        season.push(dataSeason)

        console.log(season)

        for(let i=1; i<=dataSeason.length;i++){
            if(dataSeason[i] != dataSeason[i-1] || dataSeason[i] > dataSeason.length){

                console.log(dataSeason[i-1])
                dataIdEpisode = data.filter(id => id.episode.includes(dataSeason[i-1]))
                console.log(dataIdEpisode)
                dataMapped = dataIdEpisode.map(episode => {
                let object =  {
                    name: episode.name,
                    date: episode.air_date,
                    episode: episode.episode,
                    urlDetails: episode.url
    
                }
                nameEpisode.push(episode.name)
                dateEpisode.push(dataIdEpisode[0].air_date, dataIdEpisode[dataIdEpisode.length-1].air_date)
                idEpisode = dataIdEpisode[dataIdEpisode.length-1].episode.charAt(2)
                return object;
                })

                console.log(dateEpisode)
                console.log(nameEpisode)

                seasonObject = {
                    dateEpisode: dateEpisode, 
                    idEpisode: idEpisode, 
                    nameEpisode: nameEpisode,
                }

                seasonArray.push(seasonObject)

                console.log(seasonArray)

                dateEpisode = []
                idEpisode = 0;
                nameEpisode = []
                seasonObject = new Object()
        }

    }
    return dataMapped;
}
const formatEpisodesCards = (episodes) =>{
    console.log(episodes)
    let nameEp = printNameEpisodes();

    let templatesEpisodes =  `
            <div class="card">
                <div class="card__text--detail2">
                    <h2 class="card__text--detail2-name"> SEASON ${idEpisode}</h2>
                </div>
                <div class="card__container">
                    <div class="card__info-container card__info-container--details2">
                        <div class="card__info">
                            <p class="card__info-title card__info-title--details2">DATE</p>
                            <p class="card__info card__info--details2">${dateEpisode[0]} - ${dateEpisode[1]}</p>
                            <p class="card__info-title card__info-title--episodes">EPISODES</p>
                            ${nameEp}
                        </div>
                    </div>
                </div>
            </div>
        `  

    return templatesEpisodes;
}
const printNameEpisodes = () =>{
    let printName = [...document.getElementsByClassName('card__info')]

    nameEpisode.forEach(element => {
        printName.innerHTML += `
        <div class="card__more">
            <a class="card__more-link" href="#">${element}</a>
        </div>`
    })
    return printName.innerHTML;
}
const addEventListenerToMoreEpisodes = () => {
    let moreCards = document.getElementsByClassName('section__more')[0];
    moreCards.addEventListener('click', () => {
        printMoreEpisodes();
    })


}

const printMoreEpisodes = () => {
       
    getEpisodes().then(response => {
        let episodesCards = formatEpisodesCards(response);

        let sectionContainer = document.getElementsByClassName('section-container')[0];

        sectionContainer.innerHTML += episodesCards;
        
    })
}
const addEventsToEpisodeLinks = (episodes) => {
    let cardLinks = [...document.getElementsByClassName('card__more-link')];
    console.log(cardLinks)
    cardLinks.forEach((element, i) => {
        element.addEventListener('click', () => {
            printPage('LOCALIZACIONES', episodes[i].urlDetails)
        })
    })
}