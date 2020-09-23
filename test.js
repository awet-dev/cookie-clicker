let scoreCard = 0;
let pointsPerClick = 1;


const clickButton = document.querySelector('.button');
let counterLabel = document.querySelector('.counter');

const multiplierBtn = document.querySelector("#multiplier");
let multiplier = 0;
let multiplePrice = 20;



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
        multiplePrice += Math.floor(0.25*multiplePrice);
        update()
    } else {
        alert('NOT ENOUGH COOKIES!')
    }
}


let update = () => {
    counterLabel.innerHTML = `${scoreCard}`
}
