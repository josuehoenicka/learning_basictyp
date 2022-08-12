/********** Type assetion **********/
let channel : unknown = "12";
let channelStr = <string>channel;
// let channelStr = channel as string;

const myCanvas = <HTMLCanvasElement>document.getElementById('main');
// const myCanvas = document.getElementById('main') as HTMLCanvasElement;
