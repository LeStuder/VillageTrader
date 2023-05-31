let modalInventory = document.getElementById("modal-inventory")
let modalTrade = document.getElementById("modal-trade")
let modalBank = document.getElementById("modal-bank")

let buttonInventory = document.getElementById("btn-inventory")
let buttonTrade = document.getElementById("btn-trade")
let buttonBank = document.getElementById("btn-bank")
let buttonNextDay = document.getElementById("btn-next-day")

const resourcesObj = {
    Wheat: { unit: "kg", medianGold: "0.1" },
    Oats: { unit: "kg", medianGold: "0.08" },
    Wine: { unit: "liter", medianGold: "0.5" },
    Beer: { unit: "liter", medianGold: "0.3" },
    Salt: { unit: "kg", medianGold: "0.2" },
    Honey: { unit: "kg", medianGold: "0.3" },
    Cheese: { unit: "kg", medianGold: "0.4" },
    Butter: { unit: "kg", medianGold: "0.3" },
    Wool: { unit: "kg", medianGold: "0.6" },
    Linen: { unit: "meter", medianGold: "0.4" },
    Silk: { unit: "meter", medianGold: "7.5" },
    Fur: { unit: "pelt", medianGold: "3" },
    Timber: { unit: "cubic meter", medianGold: "0.3" },
    Iron: { unit: "kg", medianGold: "0.4" },
    Coal: { unit: "kg", medianGold: "0.2" },
    Tin: { unit: "kg", medianGold: "0.5" },
    Copper: { unit: "kg", medianGold: "0.6" },
    Leather: { unit: "square meter", medianGold: "3" },
    Beeswax: { unit: "kg", medianGold: "1.5" },
}

buttonInventory.addEventListener("click", () => {
    modalInventory.showModal()
})
buttonTrade.addEventListener("click", () => {
    modalTrade.showModal()
})
buttonBank.addEventListener("click", () => {
    modalBank.showModal()
})
