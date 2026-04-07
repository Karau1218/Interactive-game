let score = 0;
let pointsPerClick = 1;

function updateDisplay() {
  document.getElementById('score-display').textContent = 'Score: ' + score;
  document.getElementById('rate-display').textContent = 'Points per click: ' + pointsPerClick;
}

document.getElementById('click-btn').addEventListener('click', function() {
  score += pointsPerClick;
  updateDisplay();
});