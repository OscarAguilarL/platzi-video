/**
 * Tipos de datos
 */

// booleans
let muted: boolean = true;
muted = false;

// numbers
let numerador: number = 42;
let denominador: number = 6;
let resultado: number = numerador / denominador;

// string
let nombre: string = 'Richard';
let saludo: string = `Me llamo ${nombre}`;

// arrays
let people: string[] = [];
people.push('Oscar');
people.push('Caroly');

// Array de diferentes tipos
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Oscar');
peopleAndNumbers.push(12321);

// Enum

enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any (cualquier tipo)
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

let someObject: object = { type: 'Wildcard' };
