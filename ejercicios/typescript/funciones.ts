/**
 * Funciones
 */

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(2, 3);

function createAdder(a: number): (b: number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(4);

// recibir undefined o algo
function fullName(first: string, last: string = 'Smith'): string {
  return `${first} ${last}`;
}

const oscar = fullName('Oscar');
console.log(oscar);
