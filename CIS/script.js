function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}

function toggleGame() {
  const game = document.getElementById('game-room');
  game.style.display = game.style.display === 'none' ? 'block' : 'none';
}
