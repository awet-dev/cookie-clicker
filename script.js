const clickButton = document.querySelector('.button');
let counterLabel = document.querySelector('.counter');
let scoreCard = 0;
let multiplier = 1;
let multiplePrice = 10;
const multiplierBtn = document.querySelector("#multiplier");

let pointsPerClick = 0;
multiplierBtn.onclick = () => {
    if (scoreCard >= multiplePrice) {
        pointsPerClick = 1;
        pointsPerClick *= multiplier;
        multiplier += 2;
        scoreCard -= multiplePrice;
        multiplePrice += (0.2*multiplePrice)
    } else {
        alert("The score is not enough!")
    }
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