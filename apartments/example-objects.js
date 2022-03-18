const laptop = {
    price: 1000,
    brand: "",
    memory: "2GB",
    color: "green"
}

const car = {
    engine: "V8",
    doors: 2,
    model: "BMW",
    price: 200000,
    make: "M4"
}

const company = {
    name: "Vittles",
    ceo: "Michael Law",
    isTheBest: true,
    publiclyTraded: false
}

const room = {
    windows: 0,
    dimensions: '200x200',
    closet: false,
    isLegal: false,
    pets: false
}

const item ={
    name: 'Excalibur',
    attackPower: 130,
}

const ally = {
    name: 'Geralt',
    power: { name: 'Kamenahama', attackPower: 9000}
}

const character = {
    hairColor: "blue",
    height: "6'7",
    gender: null,
    race: "Elf",
    strength: 0,
    dlc: false,
    class: "Mage",
    cohort: "031422",
    item: item,
    ally: ally
}



console.log(character)
console.log(character.ally.power.attackPower)