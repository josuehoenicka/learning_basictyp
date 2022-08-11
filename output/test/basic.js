"use strict";
/********** Hello world :D **********/
let message = "Hello world :D";
console.log(message); // Hello world :D
/********** Basic types **********/
const userName = "Josue";
const age = 19;
const male = true;
/********** Array **********/
let firstArray = [1, 2, 3, 4, 5];
// let firstArray : Array<number> = [1, 2, 3 , 4, 5];
let secondArray = [1, ":)", true];
// let secondArray : Array<any> = [1, ":)", true];
/********** Tuple **********/
let tuplePlayer = ["Hola", "mundo", true, 2];
/********** Tuple + Array **********/
let latinPlayers;
latinPlayers = [
    [1, "Messi"],
    [2, "Vinicius Jr"],
    [3, "Fede Valverde"],
];
/********** Type of inference **********/
let firstVariable;
let secondVariable;
let thirdVariable = "Hola mundo :)";
/********** Type composition **********/
// Unions
let unionVariable;
//Generics (Search exercises !!!)
