//CONSTANTS AND VARIABLES

let scoreCard = 0;
let pointsPerClick = 1;


const clickButton = document.querySelector('.button');
let counterLabel = document.querySelector('.counter');

const multiplierBtn = document.querySelector("#multiplier");
let upgradePrice = document.querySelector('.upgradePrice');
let multiplier = 0;
let multiplePrice = 20;

const autoClick = document.querySelector('.auto-click');
let autoClickPrice = document.querySelector('.auto-click-price');
//let autoAmount = 0;
let autoPrice = 200;

const bonusClick = document.querySelector('#bonusBtn');
let bonusClickPrice = document.querySelector('#bonusPrice');
let bonusPrice = 5;
let timeLeft = 10;
let bonus = true;

//FUNCTIONS

//STARTBUTTON
clickButton.onclick = () => {
    if (multiplier == 0) {
        scoreCard += pointsPerClick;
        update()
    } else {
        scoreCard += (pointsPerClick * multiplier)
        update()
    }
}
//MULTIPLIER

multiplierBtn.onclick = () => {
    if (scoreCard >= multiplePrice) {
        scoreCard -= multiplePrice;
        multiplier = multiplier + 2;
//BUTTON INNERHTML WILL ONLY CHANGE WHEN CALLED UPON
        multiplierBtn.innerHTML = `x${multiplier}`;
        multiplePrice += Math.floor(0.7 * multiplePrice);

        update()
    } else {
        alert('NOT ENOUGH COOKIES!')
    }
}

//AUTOCLICKER

autoClick.onclick = () => {
    if (scoreCard >= autoPrice) {
        scoreCard -= autoPrice;
        autoPrice += Math.floor(0.7 * autoPrice);
        update();

    } else {
        alert('NOT ENOUGH COOKIES!');
    }
    setInterval(() => {
        scoreCard++;
        update()
    }, 1000)

}
//BONUS BUTTON
/*bonusClick.onclick = () => {
    if (scoreCard >= bonusPrice) {
        scoreCard -= bonusPrice;
        bonusPrice += Math.floor(5 * bonusPrice);
        update()
        let bonusInterval = setInterval(() => {

        }, 1000)

    } else {
        alert('NOT ENOUGH COOKIES!');
    }
}

 */


//UPDATE

let update = () => {
    counterLabel.innerHTML = `${scoreCard}`;
    upgradePrice.innerHTML = `a multiplier costs ${multiplePrice} thingymabobs.`;
    autoClickPrice.innerHTML = `an autoclicker costs ${autoPrice} thingymabobs.`;
    bonusClickPrice.innerHTML = `a bonus clicker costs ${bonusPrice} thingymabobs.`;
}