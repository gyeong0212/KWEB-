const successprobability = [100,60,36,22,13,8,5,3,2,1];

let level = 0;
let attempts = 0;
const maxlevel = 10;

function getRandomBinaryResult(successprobability) {
    const randomPercentage = Math.random() * 100;
    return randomPercentage < successprobability;
  }

function tryLevelUp(){

    const currentlevel = document.getElementById('current-level');
    const attempt = document.getElementById('attempts');
    const gaugebar = document.getElementById('gauge-bar');

    const intervalId = setInterval(() => {
        attempts++;
        const success = getRandomBinaryResult(successprobability[level]);

        if (success){
            level++;
            currentlevel.innerText = level;
            gaugebar.style.width = level * 100 + '%';
        }
        attempt.innerText =  attempts;

        if(level >= maxlevel){
            clearInterval(intervalId);
        }
    }, 50);
}
