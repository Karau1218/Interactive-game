let score = 0
let pointsPerClick = 1
let winScore = 12
let multiplier = 1
let hasWon = false

function updateDisplay() {
 document.getElementById('score-display').textContent = 'Score: ' + score
 document.getElementById('rate-display').textContent = 'Points per click: ' + pointsPerClick + ' | Multiplier: x' + multiplier

 // check win condition
 if (score >= winScore && !hasWon) {
  hasWon = true
  showWinScreen()
 }
}

document.getElementById('click-btn').addEventListener('click', function () {
 score += pointsPerClick * multiplier
 updateDisplay()
})

// upgrades
const upgrades = [
 { id: 1, name: "Game 1", cost: 1, bonus: 4, purchased: 0 },
 { id: 2, name: "Game 2", cost: 5, bonus: 6, purchased: 0 },
 { id: 3, name: "Game 3", cost: 5, bonus: 8, purchased: 0 },
]

// render upgrades
function renderUpgrades() {
 const container = document.getElementById('upgrades')
 container.innerHTML = ''

 upgrades.forEach(upgrade => {
  const div = document.createElement('div')
  div.innerHTML = `
      <strong>${upgrade.name}</strong>
      Cost: ${upgrade.cost} | +${upgrade.bonus} per click
      Bought: ${upgrade.purchased}
      <button onclick="buyUpgrade(${upgrade.id})">Buy</button>
    `
  container.appendChild(div)
 })
}

renderUpgrades()

// buy an upgrade
function buyUpgrade(id) {
 const upgrade = upgrades.find(e => e.id === id)
 if (!upgrade) return

 if (score >= upgrade.cost) {
  score -= upgrade.cost
  pointsPerClick += upgrade.bonus
  upgrade.purchased += 1
  upgrade.cost += 2
  updateDisplay()
  renderUpgrades()
 }
}

// win screen
function showWinScreen() {
 const container = document.body

 const winDiv = document.createElement('div')
 winDiv.id = 'win-screen'
 winDiv.innerHTML = `
   <h2>🎉 You Win!</h2>
   <p>You reached ${winScore} points!</p>
   <button id="prestige-btn">Prestige (Reset & x2 earnings)</button>
 `
 container.appendChild(winDiv)

 document.getElementById('prestige-btn').onclick = prestige
}

// prestige
function prestige() {
 // reset core stats
 score = 0
 pointsPerClick = 1
 multiplier *= 2

 // reset upgrades
 upgrades.forEach(upgrade => {
  upgrade.purchased = 0
 })

 hasWon = false

 // remove win screen
 const winScreen = document.getElementById('win-screen')
 if (winScreen) winScreen.remove()

 updateDisplay()
 renderUpgrades()
 alert("Prestige activated! Multiplier is now x" + multiplier)
}