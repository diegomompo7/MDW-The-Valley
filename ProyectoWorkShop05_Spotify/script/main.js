const list = [
	{
		id: 0,
		author: 'C.Tangana',
		title: 'Me Maten',
		cover: 'tangana_cover.png',
		duration: 10,
	},
	{
		id: 1,
		author: 'Rosalía',
		title: 'Despechá',
		cover: 'rosalia_cover.png',
		duration: 5,
	},
	{
		id: 2,
		author: 'Shakira',
		title: 'Te felicito',
		cover: 'shakira_cover.png',
		duration: 8,
	},
	{
		id: 3,
		author: 'Quevedo',
		title: 'Quédate',
		cover: 'quevedo_cover.png',
		duration: 12,
	},
	{
		id: 4,
		author: 'Bad Bunny',
		title: 'Tití me preguntó',
		cover: 'bad_cover.png',
		duration: 20,
	},
];

currentID = list[0].id;
time = 0;
let isPlaying = false;
let playerMedia = document.querySelectorAll(".player__media--btn");
let controlMedia = document.querySelectorAll(".player__controls--btn")
let imgCover = document.getElementsByClassName("player__cover--img")[0]
let songName = document.getElementsByClassName("player__details--song")[0]
let artistName = document.getElementsByClassName(" player__details--artist")[0]
let timerStart = document.getElementsByClassName(" player__time--timer")[0]
let timerEnd = document.getElementsByClassName(" player__time--timer")[1]


// Pasa los segundos a minutos
const getMinutes = (s) => {
	const minutes =
		Math.floor(s / 60) < 10 ? '0' + Math.floor(s / 60) : Math.floor(s / 60);
	const seconds =
		Math.floor(s % 60) < 10 ? '0' + Math.floor(s % 60) : Math.floor(s % 60);
	return minutes + ':' + seconds;
};

function nextReproductor(){
	currentID++;
	if(currentID > list.length-1){
		currentID=0;
	}
	if(currentID >= 0){
		console.log(currentID)
	}

}
function printSong(){
	console.log(list[currentID])
	imgCover.src = "./assets/" + list[currentID].cover
	songName.textContent = list[currentID].title
	artistName.textContent = list[currentID].author
	timerEnd.textContent = getMinutes(list[currentID].duration)

}

function backReproductor(){
	if(currentID === 0){
		currentID=list.length-1;
	}else{
		console.log(currentID)
		currentID--;
	}
}
function timeReproductor(){
	time++;
}
function playReproductor(){
	if(!isPlaying){
		console.log("True")
		isPlaying=true;
		let element = document.getElementsByClassName("fa-play")[0];
		console.log(element);
		element.classList.replace("fa-play", "fa-pause");

		timerStart.textContent = "00:" + setInterval(timeReproductor(), 1000)

	}else{
		console.log("False")
		isPlaying=false;
		let element = document.getElementsByClassName("fa-pause")[0];
		console.log(element);
		element.classList.replace("fa-pause", "fa-play");
	}
}
function playerClick(op) {
	switch (op) {
		case 'shuffle':
			console.log("aleatorio")
			break;
		case 'repeat':
			console.log("repetir")
		break;
		case 'btn-back':
			console.log("Hacia atrás")
			backReproductor();
			printSong();
			break;
		case 'btn-play':
			console.log("Reproducir")
			playReproductor();
			break;
		case 'btn-foward':
			console.log("Hacia adelante")
			nextReproductor();
			printSong();
			break;
	}
}


function gestionReproductor() {
	playerMedia.forEach(boton => {
		boton.addEventListener('click', () => playerClick(boton.id));
	})
	controlMedia.forEach(boton => {
		boton.addEventListener('click', () => playerClick(boton.id));
	})
}

window.onload = () => {
	printSong();
	gestionReproductor();
}
