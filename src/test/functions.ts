/********** Functions **********/
function greet(name : string) : void {
    console.log(`Hello, ${name.toUpperCase()} !`)
}
greet('Josue'); // Hello, JOSUE !

function getNumber() : number {
    return Math.floor(Math.random() * 100); 
}
console.log(getNumber());

function printPosition(position : {lat : number, long : number | string}) {
    console.log(`LAT is ${position.lat}. LONG is ${position.long}`);
}
printPosition({lat: 3, long: '55 or 60'});