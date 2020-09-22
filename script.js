const clickButton = document.querySelector('.button');
let counterLabel = document.querySelector('.counter');
let scoreCard = 0;
let multiplier = 1;
const multiplierBtn = document.querySelector("#multiplier");

let pointsPerClick = 0;


multiplierBtn.onclick = () => {
    pointsPerClick = 1;
    pointsPerClick *= multiplier;
    multiplier += 2;

}


clickButton.onclick = () => {
    scoreCard++;
   scoreCard += pointsPerClick;
    counterLabel.innerHTML = `${scoreCard}`;
}

/*

points per click = 1

button multiplier (starts at 2)

click button = > points per click 2

 */