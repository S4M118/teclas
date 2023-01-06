// var teclas = {
//     UP: 38,
//     DOWN: 40,
//     LEFT: 37,
//     RIGHT: 39
// };

// console.log(teclas)

// document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var lienzo = cuadrito.getContext("2d")
let x, y, dibujando  = false, color = "blue";
var estado;
let xinicial, yinicial;

var mouseClick = (e) => {
    xinicial = e.layerX;
    yinicial = e.layerY;
    dibujarLinea(xinicial, yinicial)
}

 cuadrito.addEventListener("mousedown", (e) => {
     x = e.layerX;
     y = e.layerY;
     dibujarLinea()
     dibujando = true;

     console.log()
 })

 cuadrito.addEventListener("mousemove", (e) => {
         if(dibujando === true) {
             dibujarLinea(x, y, e.layerX, e.layerY, lienzo)
             x = e.layerX;
             y = e.layerY;
         }
     })

 cuadrito.addEventListener("mouseup", (e) => {
     if (dibujando) {
         dibujarLinea(x, y, e.layerX, e.layerY, lienzo)
         x = 0;
         y = 0;
         dibujando = false
     }
     cuadrito.removeEventListener("mousemove", (e) => {
        console.log()
     })
 })

 

//  dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(cursorX, cursorY) {
    lienzo.beginPath();
    lienzo.strokeStyle = "blue";
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(cursorX, cursorY);
    lienzo.stroke();
    lienzo.closePath();

    xinicial = cursorX;
    yinicial = cursorY;
}

var colorcito = "blue";
var movimiento = 1;

// function dibujarTeclado(evento) { 
//      switch(evento.keyCode) {
//          case teclas.UP:
//             dibujarLinea(colorcito, x, y, x, y - movimiento, lienzo);
//              y = y - movimiento;
//             break;
//          case teclas.DOWN:
//              dibujarLinea(colorcito, x, y, x, y + movimiento, lienzo);
//              y = y + movimiento;
//              break;
//          case teclas.LEFT:
//              dibujarLinea(colorcito, x, y, x - movimiento, y, lienzo);
//              x = x - movimiento;
//              break;
//         case teclas.RIGHT:
//              dibujarLinea(colorcito, x, y, x + movimiento, y, lienzo);
//              x = x + movimiento;
//              break;
//      }
 
// }

// cuadrito.addEventListener("mousedown", pulsarMouse);
// cuadrito.addEventListener("mousemove", moverMouse);
// cuadrito.addEventListener("mouseup", levantarMouse);

// function pulsarMouse(evento)
// {
//     estado = 1;
//     x = evento.layerX;
//     y = evento.layerY;
// }

// function moverMouse(evento)
// {
//     if (estado == 1)
//     {
//         dibujarLinea(color.value, x , y , evento.layerX, evento.layerY);
//     }else{
//         x = evento.layerX;
//         y = evento.layerY;
//     }
// }

// function levantarMouse(evento)
// {
//     estado = 0;
// }
