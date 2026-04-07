let score = 0
let pointsPerClick = 1

function updateDisplay() {
 document.getElementById('score-display').textContent = 'Score: ' + score
 document.getElementById('rate-display').textContent = 'Points per click: ' + pointsPerClick
}

document.getElementById('click-btn').addEventListener('click', function () {
 score += pointsPerClick
 updateDisplay()
})

const upgrades = [

 { id: 1, name: "Game 1", cost: 1, bonus: 4 },
 { id: 2, name: "Game 2", cost: 5, bonus: 6 },
 { id: 3, name: "Game 3", cost: 5, bonus: 8 },
]