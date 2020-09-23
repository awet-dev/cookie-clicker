const clickButton = document.querySelector('.button');
let counterLabel = document.querySelector('.counter');
let scoreCard = 0;

let multiplier = 1;
let multiplePrice = 10;
const multiplierBtn = document.querySelector("#multiplier");

const upgradePrice = document.querySelector(".upgradePrice");
const autoClick = document.querySelector('#auto-clicker');
const bonusBtn = document.querySelector("#bonusBtn");
let autoPrice = 10;
let autoAmount = 0;
let bonusPrice = 10;
let remainingSec = 10;


let pointsPerClick = 1;
multiplierBtn.onclick = () => {
    if (scoreCard >= multiplePrice) {
        pointsPerClick *= multiplier;
        multiplier += 2;
        multiplierBtn.innerHTML = `X${multiplier -1}`;
        scoreCard -= multiplePrice;
        multiplePrice += Math.floor(0.2*multiplePrice);
        upgradePrice.innerHTML = multiplePrice;
    } else {
        alert("The score is not enough!")
    }
}

clickButton.onclick = () => {
    scoreCard++;
    scoreCard *= pointsPerClick;
    counterLabel.innerHTML = `${scoreCard}`;
}

bonusBtn.onclick = () => {
    if (scoreCard >= bonusPrice) {
        let interval = setInterval(()=> {
            document.querySelector(".button").onclick = () => {
                scoreCard++;
                scoreCard *= 2*pointsPerClick;
                counterLabel.innerHTML = `${scoreCard}`;
            }
            remainingSec--;
            bonusBtn.innerHTML = `${remainingSec}Sec`;
            if (remainingSec == 0) {
                clearInterval(interval);
            }
        }, 1000);
    } else {
        alert("The score is not enough to buy bonus!")
    }
}

autoClick.onclick = () => {
    if (scoreCard >= autoPrice){
        autoAmount++;
        counterLabel.innerHTML = `${scoreCard}`;
        scoreCard -= autoPrice;

    }else {
        alert('You do not have enough to cheat!');
    }
setInterval(() =>{
 scoreCard = scoreCard + autoAmount * pointsPerClick;
    counterLabel.innerHTML = `${scoreCard}`;
}, 1000)

}

/*

points per click = 1

button multiplier (starts at 2)

click button = > points per click 2

 */