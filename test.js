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
let autoAmount = 0;
let autoPrice = 200;

clickButton.onclick = () =>{
   if (multiplier == 0) {
       scoreCard += pointsPerClick;
       update()
   }else{
       scoreCard += (pointsPerClick * multiplier)
       update()
   }
}

multiplierBtn.onclick = () => {
    if (scoreCard >= multiplePrice){
        scoreCard -= multiplePrice;
        multiplier = multiplier +2;

        multiplierBtn.innerHTML = `x${multiplier}`;
        multiplePrice += Math.floor(0.7*multiplePrice);

        update()
    } else {
        alert('NOT ENOUGH COOKIES!')
    }
}


autoClick.onclick = () => {
    if (scoreCard >= autoPrice){
        scoreCard -= autoPrice;
        autoPrice += Math.floor(0.7*autoPrice);
        update();

    }else {
        alert('You do not have enough to cheat!');
    }
    setInterval(() =>{
        scoreCard++;
        update()
    }, 1000)

}

let update = () => {
    counterLabel.innerHTML = `${scoreCard}`;
    upgradePrice.innerHTML = `a multiplier costs ${multiplePrice} thingymabobs.`;
    autoClickPrice.innerHTML = `an autoclicker costs ${autoPrice} thingymabobs.`
}