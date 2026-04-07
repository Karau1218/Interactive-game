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
      Bought : ${upgrade.purchased}
      <button onclick="buyUpgrade(${upgrade.id})">Buy</button>
    `
  container.appendChild(div)
 })
}

renderUpgrades()

//  buy an upgrade
function buyUpgrade(id) {

 const upgrade = upgrades.find(e => e.id === id)
 if (!upgrade) {
  return
 }
 if (score >= upgrade.cost) {
  score -= upgrade.cost
  pointsPerClick += upgrade.bonus
  upgrade.purchased += 1
  upgrade.cost += 2
  updateDisplay()
  renderUpgrades()
 }
}

//disabled buttons you cant afford
upgrades.forEach(upgrade => {
 const div = document.createElement('div')

 const button = document.createElement('button')
 button.textContent = 'Buy'
 button.onclick = () => buyUpgrade(upgrade.id)
 button.disabled = score < upgrade.cost

 div.innerHTML = `
    <strong>${upgrade.name}</strong>
    Cost: ${upgrade.cost} | +${upgrade.bonus} per click
  `
 div.appendChild(button)
 container.appendChild(div)
});

