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

function renderUpgrades() {
 const container = document.getElementById('upgrades')
 container.innerHTML = ''

 upgrades.forEach(upgrade => {
  const div = document.createElement('div')
  div.innerHTML = `
      <strong>${upgrade.name}</strong>
      Cost: ${upgrade.cost} | +${upgrade.bonus} per click
      <button onclick="buyUpgrade(${upgrade.id})">Buy</button>
    `
  container.appendChild(div)
 })
}

renderUpgrades()

function buyUpgrade(id) {

 const upgrade = upgrades.find(e => e.id === id)
 if (score >= upgrades.cost) {
  score -= upgrade.cost
  pointsPerClick += upgrade.bonus
  updateDisplay()
  renderUpgrades()
 }

}