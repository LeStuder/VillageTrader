let modalInventory = document.getElementById("modal-inventory")
let modalTrade = document.getElementById("modal-trade")
let modalBank = document.getElementById("modal-bank")

let inventoryContainer = document.getElementById("inventory-container")

let buttonInventory = document.getElementById("btn-inventory")
let buttonTrade = document.getElementById("btn-trade")
let buttonBank = document.getElementById("btn-bank")
let buttonNextDay = document.getElementById("btn-next-day")

const resourcesArr = [
    { name: "Wheat", unit: "kg", medianGold: 0.1, inInventory: 5 },
    { name: "Oats", unit: "kg", medianGold: 0.08, inInventory: 0 },
    { name: "Wine", unit: "liter", medianGold: 0.5, inInventory: 0 },
    { name: "Beer", unit: "liter", medianGold: 0.3, inInventory: 2 },
    { name: "Salt", unit: "kg", medianGold: 0.2, inInventory: 0 },
    { name: "Honey", unit: "kg", medianGold: 0.3, inInventory: 0 },
    { name: "Cheese", unit: "kg", medianGold: 0.4, inInventory: 0 },
    { name: "Butter", unit: "kg", medianGold: 0.3, inInventory: 2345 },
    { name: "Wool", unit: "kg", medianGold: 0.6, inInventory: 0 },
    { name: "Linen", unit: "meter", medianGold: 0.4, inInventory: 0 },
    { name: "Silk", unit: "meter", medianGold: 7.5, inInventory: 0 },
    { name: "Fur", unit: "pelt", medianGold: 3, inInventory: 0 },
    { name: "Timber", unit: "cu. meter", medianGold: 0.3, inInventory: 0 },
    { name: "Iron", unit: "kg", medianGold: 0.4, inInventory: 0 },
    { name: "Coal", unit: "kg", medianGold: 0.2, inInventory: 0 },
    { name: "Tin", unit: "kg", medianGold: 0.5, inInventory: 0 },
    { name: "Copper", unit: "kg", medianGold: 0.6, inInventory: 0 },
    { name: "Leather", unit: "sq. meter", medianGold: 3, inInventory: 0 },
    { name: "Beeswax", unit: "kg", medianGold: 1.5, inInventory: 0 },
]

buttonInventory.addEventListener("click", () => {
    modalInventory.showModal()
})
buttonTrade.addEventListener("click", () => {
    modalTrade.showModal()
})
buttonBank.addEventListener("click", () => {
    modalBank.showModal()
})

for (let i in resourcesArr) {
    if (resourcesArr[i].inInventory !== 0) {
        const resourceElem = document.createElement("div")
        resourceElem.setAttribute("id", "inventoryObj" + resourcesArr[i].name)
        resourceElem.classList.add("inventoryObj")

        const resourceInInventory = document.createElement("p")
        resourceInInventory.setAttribute("id", "inventoryInInventory" + resourcesArr[i].name)
        resourceInInventory.classList.add("inventoryInInventory")
        resourceInInventory.textContent = resourcesArr[i].inInventory
        resourceElem.appendChild(resourceInInventory)

        const resourceUnit = document.createElement("p")
        resourceUnit.classList.add("inventoryUnit")
        resourceUnit.textContent = resourcesArr[i].unit
        resourceElem.appendChild(resourceUnit)

        const resourceName = document.createElement("p")
        resourceName.classList.add("inventoryName")
        resourceName.textContent = resourcesArr[i].name
        resourceElem.appendChild(resourceName)

        inventoryContainer.appendChild(resourceElem)
    }
}
