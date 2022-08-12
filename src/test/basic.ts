/********** Hello world :D **********/
let message: string = "Hello world :D";
console.log(message); // Hello world :D

/********** Basic types **********/
const userName:string = "Josue"
const age:number = 19;
const male:boolean = true;

/********** Array **********/
let firstArray : number[] = [1, 2, 3 , 4, 5];
// let firstArray : Array<number> = [1, 2, 3 , 4, 5];
let secondArray : any[] = [1, ":)", true];
// let secondArray : Array<any> = [1, ":)", true];

/********** Tuple **********/
let tuplePlayer : [string, string, boolean, number] = ["Hola", "mundo", true, 2];

/********** Tuple + Array **********/
let latinPlayers : [number, string][];
latinPlayers = [
    [1, "Messi"],    
    [2, "Vinicius Jr"],
    [3, "Fede Valverde"],    
]

/********** Type of inference **********/
let firstVariable;
let secondVariable: string;
let thirdVariable = "Hola mundo :)";

/********** Type composition **********/
// Unions
let unionVariable : string | number | null;
//Generics (Search exercises !!!)
