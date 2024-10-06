document.getElementById('startGame').addEventListener('click', startGame);
document.getElementById('saveScore').addEventListener('click', saveScore);
document.getElementById('restartGame').addEventListener('click', startGame);

let cards = [];
let flippedCards = [];
let matches = 0;
let moves = 0;
let isPlayerTurn = true;  // Para alternar entre o jogador e o computador
let gameMode = 'playerVsPlayer';  // Modo inicial padrão
let difficulty = 'easy';

const easyLevel = 6;  // 3 pares
const hardLevel = 12; // 6 pares
const emojis = ['🍎', '🍌', '🍇', '🍉', '🍒', '🍓', '🍍', '🍑', '🥭', '🥝', '🥑', '🍆'];

function startGame() {
    gameMode = document.getElementById('mode').value;
    difficulty = document.getElementById('level').value;
    cards = generateCards(difficulty);
    renderBoard();
    document.getElementById('gameOver').classList.add('hidden');
    matches = 0;
    moves = 0;
    isPlayerTurn = true;  // Jogador começa
}

function generateCards(difficulty) {
    const numPairs = difficulty === 'easy' ? easyLevel : hardLevel;
    const tempCards = [];
    for (let i = 0; i < numPairs; i++) {
        tempCards.push(emojis[i], emojis[i]);
    }
    return shuffleArray(tempCards);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    const gridColumns = difficulty === 'easy' ? 3 : 4;
    gameBoard.style.gridTemplateColumns = `repeat(${gridColumns}, 100px)`;
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.value = card;
        cardElement.dataset.index = index;
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard(e) {
    if (!isPlayerTurn && gameMode === 'playerVsComputer') return;  // Bloqueia jogadas do jogador na vez do computador

    const clickedCard = e.target;
    const cardValue = clickedCard.dataset.value;

    if (flippedCards.length < 2 && !clickedCard.classList.contains('flipped')) {
        clickedCard.textContent = cardValue;
        clickedCard.classList.add('flipped');
        flippedCards.push(clickedCard);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    moves++;
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
        matches++;
        flippedCards = [];
        if (matches === cards.length / 2) {
            endGame();
        } else if (gameMode === 'playerVsComputer') {
            switchTurn();
        }
    } else {
        setTimeout(() => {
            card1.textContent = '';
            card1.classList.remove('flipped');
            card2.textContent = '';
            card2.classList.remove('flipped');
            flippedCards = [];
            if (gameMode === 'playerVsComputer') {
                switchTurn();
            }
        }, 1000);
    }
}

function switchTurn() {
    isPlayerTurn = !isPlayerTurn;
    if (!isPlayerTurn && gameMode === 'playerVsComputer') {
        setTimeout(computerPlay, 1000);  // O computador joga após 1 segundo
    }
}

function computerPlay() {
    const unflippedCards = Array.from(document.querySelectorAll('.card:not(.flipped)'));
    const randomIndex = Math.floor(Math.random() * unflippedCards.length);
    const firstCard = unflippedCards[randomIndex];
    firstCard.textContent = firstCard.dataset.value;
    firstCard.classList.add('flipped');
    flippedCards.push(firstCard);

    setTimeout(() => {
        const remainingUnflipped = Array.from(document.querySelectorAll('.card:not(.flipped)'));
        const secondRandomIndex = Math.floor(Math.random() * remainingUnflipped.length);
        const secondCard = remainingUnflipped[secondRandomIndex];
        secondCard.textContent = secondCard.dataset.value;
        secondCard.classList.add('flipped');
        flippedCards.push(secondCard);

        checkMatch();
    }, 1000);  // Segunda jogada do computador após 1 segundo
}

function endGame() {
    document.getElementById('gameOver').classList.remove('hidden');
}

function saveScore() {
    const playerName = document.getElementById('playerName').value;
    if (playerName) {
        const score = {
            name: playerName,
            moves: moves
        };
        saveToLocalStorage(score);
        updateRanking();
    }
}

function saveToLocalStorage(score) {
    let ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    ranking.push(score);
    ranking.sort((a, b) => a.moves - b.moves);
    localStorage.setItem('ranking', JSON.stringify(ranking));
}

function updateRanking() {
    const rankingList = document.getElementById('rankingList');
    rankingList.innerHTML = '';
    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    ranking.forEach((player, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${player.name} - ${player.moves} jogadas`;
        rankingList.appendChild(listItem);
    });
}
