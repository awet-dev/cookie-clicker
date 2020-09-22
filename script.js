const clickButton = document.querySelector('.button');
let counterLabel = document.querySelector('.counter');
let scoreCard = 0;


clickButton.onclick = () => {
    scoreCard++;
    counterLabel.innerHTML = `${scoreCard}`;
}