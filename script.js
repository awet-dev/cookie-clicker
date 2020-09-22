const clickButton = document.querySelector('.button');
let counterLabel = document.querySelector('.counter');
let scoreCard = 0;
let multiplier = 1;
const multiplierBtn = document.querySelector("#multiplier");
multiplierBtn.onclick = () => {
    scoreCard *= multiplier
}
clickButton.onclick = () => {
    scoreCard++;
    counterLabel.innerHTML = `${scoreCard}`;
}