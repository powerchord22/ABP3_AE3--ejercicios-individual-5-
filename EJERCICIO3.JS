// // 1. Cree  una  función  que  dado  un  número  n  cree  un  arreglo  de  largo  n,  
// donde  en  cada posición del arreglo este el doble del anterior nota, el primer elemento del
// arreglo es 1 
 
function createArray(n) {
    let arr = [];
    let currentNum = 1;
    for (let i = 0; i < n; i++) {
      arr.push(currentNum);
      currentNum *= 2;
    }
    return arr;
  }

  console.log("createArray"(4))



/* 2 .-Cree una función que dado un arreglo de números de largo 10 permita obtener - el elemento mayor de un arreglo-
número contenido en el arreglo : */

const arreglo = [4 , 6, 2, 56, 32, 300, 89, 32, 98, 203, 500];
let mayor = 0;
 
for(i = 0; i < arreglo.length; i++){
    if (arreglo[i] > mayor)
    {
        mayor = arreglo[i];
    }
}
console.log(mayor);



/* 3. Dado  un  arreglo  de  strings  que  contiene  los  días  de  la semana, cree una función que le 
permita obtener un día en particular si se recibe su número correspondiente. 
Ej: 1  = Lunes , 7 = Domingo. 
 */

let dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'domingo'];

function devolverDiaSemana( dias, numero) {
     return dias[numero -1]; 
       }

console.log(devolverDiaSemana(dias,1))


/* 4. Cree una función que le permita buscar un elemento contenido en el arreglo. 
Nota: el arreglo solo contendrá números, y tendrá un largo máximo de 100. 
 */

function searchArray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }

  console.log(searchArray(arr,target))

// 5.- Cree un programa que dado  un  arreglo  de  números  desordenados  los  ordene 
// ascendentemente.


const numeros = [3, 23, 12,5,14,56,67,88,4,55,67,89];

numeros.sort(function(a, b){return a - b})


console.log(numeros)