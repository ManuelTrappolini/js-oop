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
    door;
    fuel;

    constructor(brand, year,color,door,fuel){
        this.brand = brand
        this.year = year
        this.color = color
        this.door = door
        this.fuel = fuel
    }

}

const fiat = new Vehicle ('Fiat', 2009, 'blue')
console.log(fiat);
