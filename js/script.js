document.addEventListener('DOMContentLoaded', () => {
  const pamy = document.querySelector('.pamy');
  const divida = document.querySelector('.divida');
  const play = document.querySelector('.play');
  const startButton = document.getElementById('start-button');
  const startScreen = document.querySelector('.start-screen');
  const gameBoard = document.querySelector('.game-board');

  let score = 0;
  let eventListenerActive = true;
  let colision = false;
  let gameLoop;

    divida.style.animation = 'none';
    divida.offsetHeight; 
    divida.style.animation = null;
    const pamyPosition = +window.getComputedStyle(pamy).bottom.replace('px', '');
  

  const jump = () => {
      pamy.classList.add('jump');

      setTimeout(() => {
          pamy.classList.remove('jump');
          const scoreElement = document.getElementById('score');
          const dividaPosition = divida.offsetLeft;
          if (dividaPosition < pamyPosition) {
            console.log("divida",dividaPosition);
            console.log("pamy",pamyPosition);
              score++;
              scoreElement.textContent = score;
              diminuirDuracao();
          }
      }, 500);
  };

  const startGame = () => {
      startScreen.style.display = 'none';
      gameBoard.style.display = 'block';

      gameLoop = setInterval(() => {
          const dividaPosition = divida.offsetLeft;
          const pamyPosition = +window.getComputedStyle(pamy).bottom.replace('px', '');

          if (dividaPosition < 121 && pamyPosition < 80 && dividaPosition > 10) {
              divida.style.animation = 'none';
              divida.style.left = `${dividaPosition}px`;
              pamy.style.animation = 'none';
              pamy.style.left = `${pamyPosition}px`;
              pamy.src = 'assets/endividada.jpeg';
              play.style.display = 'table';
              clearInterval(gameLoop);
              eventListenerActive = false;
              colision = true;
          }
      }, 10);
  };

  function diminuirDuracao() {
    const dividaElement = document.querySelector('.divida');
    const currentDuration = parseFloat(getComputedStyle(dividaElement).animationDuration);
    const currentTimingFunction = getComputedStyle(dividaElement).animationTimingFunction;
  
    const newDuration = Math.max(currentDuration - 0.5, 1);
    const newTimingFunction = 'linear'; 
  
    dividaElement.style.animationDuration = newDuration + 's';
    dividaElement.style.animationTimingFunction = newTimingFunction;
  }

  startButton.addEventListener('click', startGame);

  if (eventListenerActive = true) {
    document.addEventListener('keydown', jump);
  }
  
});

function atualizarPagina() {
  location.reload(true);
}