const bear = document.getElementById('bear');
const flowersContainer = document.getElementById('flowers');
const scoreValue = document.getElementById('score-value');
const modal = document.getElementById('modal');
const modalClose = document.getElementsByClassName('close')[0];

let score = 0;
let gameStopped = false;

function createFlower() {
    if (!gameStopped) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        const randomX = Math.floor(Math.random() * 450);
        const randomY = Math.floor(Math.random() * 270);
        flower.style.left = `${randomX}px`;
        flower.style.top = `${randomY}px`;
        flowersContainer.appendChild(flower);
        flower.addEventListener('click', () => collectFlower(flower));
    }
}

function collectFlower(flower) {
    flowersContainer.removeChild(flower);
    score++;
    scoreValue.textContent = score;
    if (score === 5) {
        showMessage('¡Te quiero!');
    } else if (score === 10) {
        showMessage('¡Te amo!');
    } else if (score === 15) {
        stopGame();
        showModal();
    }
}

function stopGame() {
    gameStopped = true;
}

function showMessage(message) {
    alert(message);
}

function showModal() {
    modal.style.display = "block";
}

modalClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

setInterval(createFlower, 2000);
