const startBtn = document.querySelector("#startBtn");
const counterLabel = document.querySelector("#counterLabel");
const multiplierBtn = document.querySelector("#multiplier");
const autoClicker = document.querySelector("#auto-clicker");
const bonusBtn = document.querySelector("#bonusBtn");

let multiplierCounter = 1;
let multiplierPrice = 50;
let autoClickerPrice = 150;
let bonusPrice = 100;
let stopper = "";
let inActiveBonus = "";
let score = 0;
let remainingSec = 30;

autoClicker.disabled = true;
multiplierBtn.disabled = true;
bonusBtn.disabled = true;

const bonusFun = ()=> {
    score += (2*multiplierCounter);
    counterLabel.innerHTML = `${score} Cookies`;
    if (score >= autoClickerPrice && stopper == "") {
        autoClicker.disabled = false;
    } else {
        autoClicker.disabled = true;
    }
    if (score >= multiplierPrice) {
        multiplierBtn.disabled = false;
    } else {
        multiplierBtn.disabled = true;
    }
}
bonusBtn.addEventListener("click", ()=> {
    if (score >= bonusPrice) {
        score -= bonusPrice;
        counterLabel.innerHTML = `${score} Cookies`;

        const interval = setInterval(()=> {
            remainingSec--;
            bonusBtn.innerHTML = `${remainingSec} Sec`;
            if (remainingSec == 0) {
                bonusBtn.innerHTML = "Bonus";
                clearInterval(interval);
            }
        }, 1000)
        bonusBtn.disabled = true;
        inActiveBonus = "stop"
    } else {
        bonusBtn.disabled = true;
    }
})

multiplierBtn.onclick = ()=> {
    if (score >= multiplierPrice) {
        multiplierCounter++;
        score -= multiplierPrice;
        counterLabel.innerHTML = `${score} Cookies`;
        multiplierPrice += 50;
        multiplierBtn.innerHTML = `X${multiplierCounter} Upgrade ${multiplierPrice}`;
    } else {
        multiplierBtn.disabled = true;
    }
}

autoClicker.addEventListener("click", ()=> {
    if (score >= autoClickerPrice) {
        score -= autoClickerPrice;
        counterLabel.innerHTML = `${score} Cookies`;
        setInterval(()=> {
            if (remainingSec == 30 || remainingSec == 0) {
                update();
            } else {
                bonusFun();
            }
            if (score >= multiplierPrice) {
                multiplierBtn.disabled = false;
            } else {
                multiplierBtn.disabled = true;
            }
        }, 1000);
        autoClicker.disabled = true;
        stopper = "stop"
    } else {
        autoClicker.disabled = true;
    }
});

const update = ()=> {
    score += multiplierCounter;
    counterLabel.innerHTML = `${score} Cookies`;
    if (score >= autoClickerPrice && stopper == "") {
        autoClicker.disabled = false;
    } else {
        autoClicker.disabled = true;
    }
    if (score >= multiplierPrice) {
        multiplierBtn.disabled = false;
    } else {
        multiplierBtn.disabled = true;
    }
    if (score >= bonusPrice && inActiveBonus == "") {
        bonusBtn.disabled = false;
    } else {
        bonusBtn.disabled = true;
    }
}

startBtn.addEventListener("click", ()=> {
    if (remainingSec == 30 || remainingSec == 0) {
        update();
    } else {
        bonusFun();
    }
});