/**
 * Interfaces
 */

interface Rectangulo {
  ancho: number;
  alto: number;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
};

function area(rect: Rectangulo) {
  return rect.alto * rect.ancho;
}

const areaRect = area(rect);
console.log(areaRect);
