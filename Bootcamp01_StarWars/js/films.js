const URL_BASE = "https://swapi.dev/api";

const getFilms = async() => {
    let url = URL_BASE + "/films/";
    let response = await fetch(url)
    let data = await response.json();

    return data;
}

const printFilms = () => {
    mainContainer.innerHTML = `
    <section class="section">
        <h3 class="section__title">FILMS</h3>
        <section class="section__container">
            <div class="card">
                <h4 class="card__title">LA AMENAZA FANTASMA</h4>
                <img class="card__img" src="assets/images/films/1.jpg"></img>
                <div class="card__info-container">
                    <p class="card__info-title">EPISODE</p>
                    <p class="card__info">I</p>
                    <p class="card__info-title">DIECTOR</p>
                    <p class="card__info">George Lucas</p>
                    <p class="card__info-title">DATE</p>
                    <p class="card__info">1977-01-05</p>
                    <a class="card__link" href="#">+ MORE DETAILS</a>
                </div>
            </div>
            <div class="card">
                <h4 class="card__title">LA AMENAZA FANTASMA</h4>
                <img class="card__img" src="assets/images/films/1.jpg"></img>
                <div class="card__info-container">
                    <p class="card__info-title">EPISODE</p>
                    <p class="card__info">I</p>
                    <p class="card__info-title">DIECTOR</p>
                    <p class="card__info">George Lucas</p>
                    <p class="card__info-title">DATE</p>
                    <p class="card__info">1977-01-05</p>
                    <a class="card__link" href="#">+ MORE DETAILS</a>
                </div>
            </div>
            <div class="card">
                <h4 class="card__title">LA AMENAZA FANTASMA</h4>
                <img class="card__img" src="assets/images/films/1.jpg"></img>
                <div class="card__info-container">
                    <p class="card__info-title">EPISODE</p>
                    <p class="card__info">I</p>
                    <p class="card__info-title">DIECTOR</p>
                    <p class="card__info">George Lucas</p>
                    <p class="card__info-title">DATE</p>
                    <p class="card__info">1977-01-05</p>
                    <a class="card__link" href="#">+ MORE DETAILS</a>
                </div>
            </div>
            <div class="card">
                <h4 class="card__title">LA AMENAZA FANTASMA</h4>
                <img class="card__img" src="assets/images/films/1.jpg"></img>
                <div class="card__info-container">
                    <p class="card__info-title">EPISODE</p>
                    <p class="card__info">I</p>
                    <p class="card__info-title">DIECTOR</p>
                    <p class="card__info">George Lucas</p>
                    <p class="card__info-title">DATE</p>
                    <p class="card__info">1977-01-05</p>
                    <a class="card__link" href="#">+ MORE DETAILS</a>
                </div>
            </div>
            <div class="card">
                <h4 class="card__title">LA AMENAZA FANTASMA</h4>
                <img class="card__img" src="assets/images/films/1.jpg"></img>
                <div class="card__info-container">
                    <p class="card__info-title">EPISODE</p>
                    <p class="card__info">I</p>
                    <p class="card__info-title">DIECTOR</p>
                    <p class="card__info">George Lucas</p>
                    <p class="card__info-title">DATE</p>
                    <p class="card__info">1977-01-05</p>
                    <a class="card__link" href="#">+ MORE DETAILS</a>
                </div>
            </div>
            <div class="card">
                <h4 class="card__title">LA AMENAZA FANTASMA</h4>
                <img class="card__img" src="assets/images/films/1.jpg"></img>
                <div class="card__info-container">
                    <p class="card__info-title">EPISODE</p>
                    <p class="card__info">I</p>
                    <p class="card__info-title">DIECTOR</p>
                    <p class="card__info">George Lucas</p>
                    <p class="card__info-title">DATE</p>
                    <p class="card__info">1977-01-05</p>
                    <a class="card__link" href="#">+ MORE DETAILS</a>
                </div>
            </div>        
        </section>
    </section>
    `;

    getFilms().then(response => {
        console.log(response);
    })
}