//In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
//La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
//marca
//anno
//colore
//porte
//carburante
//Successivamente:
//Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
//Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
//Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()
//BONUS
//In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile". La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili.
//Successivamente:
//Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
//Stampiamo il numero di porte e il tipo di carburante.

class Vehicle {
    brand;
    year;
    color;
    doors;
    fuel;

    constructor(brand,year,color,doors,fuel){
        this.brand = brand
        this.year = year
        this.color = color
        this.doors = doors
        this.fuel = fuel
    }

    getInfo(){
        return `${this.brand} ${this.year} ${this.color}`
    }

    getYear(){
        const currentYear = new Date().getFullYear()
        let age = currentYear - this.year
        return `This ${this.brand} has ${age} year`
    }

}

const fiat = new Vehicle ('Fiat', 2009, 'blue','3 doors','diesel')
console.log(fiat);
console.log(fiat.getInfo());
console.log(fiat.getYear());


const cars = [
    new Vehicle ('Fiat', 2009, 'blue','3 doors','diesel'),
    new Vehicle ('Opel', 2020, 'black', '4 doors','petrol')
]

const carsEl= document.querySelector('.cars')

cars.forEach(car=>{
console.log(car.doors, car.fuel);
const markup = `
<div class="car">
            <h3>${car.brand}</h3>
            <p>${car.doors}</p>
            <p>${car.fuel}</p>
        </div>
        `
        carsEl.innerHTML += markup
})





//add filter and find method

/* cars.filter(car =>{
    if(car.color === 'black'){
        console.log(car);
        
    }
})

cars.find(car =>{
    if(car.fuel === 'diesel'){
        console.log(car);
        
    }
}) */