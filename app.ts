import { Stack } from "./Stack";
import { UKSize } from "./DataType";
import { Size } from "./DataType";

// clothes create new Object stack
const clothes= new Stack<Size | UKSize>();

//push()ing new elements to the top of the stack
clothes.pushClothes('pullover','grau', {uksize: '12'});
clothes.pushClothes('hose','blau', {size: 'XL'});
clothes.pushClothes('T-Shirt','weiß', {uksize: '20'});

//pop()ping clothes from top of the stack
let topClothing = clothes.popClothing();

//get topClothing`s properties
let type = topClothing.type;
let color = topClothing.color;

console.log('Ich habe gerade ' + color + ' ' + type + ' von dem Kleiderstapel auf meinem Stuhl genommen.');


clothes.pushClothes('Hemd','lila', {size: 'M'});
clothes.pushClothes('Socken','schwarze', {size: 'L'});

topClothing = clothes.popClothing();

type = topClothing.type;
color = topClothing.color;

console.log('Ich habe gerade ' + color + ' ' + type + ' von dem Kleiderstapel auf meinem Stuhl genommen.');
