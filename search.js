// const lyrics = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia cupiditate et, ad officiis tenetu';
// const doesExist= lyrics.includes('ipsum');
// const doesExist= lyrics.includes('add');
// const doesExist= lyrics.includes('Quia');
// console.log(doesExist);




const lyrics = 'LoRem ipsum, dolor sit amet consectetur adipisicing elit. Quia cupiditate et, ad officiis tenetu';

const searchExist ="loreM"

const doesExist = lyrics.toLowerCase().includes(searchExist.toLowerCase());
// console.log(doesExist);


// console.log(lyrics.startsWith('LoRem'));


const fileName = "img1516.png";
const pdfName = "sumon.pdf";

console.log(fileName.endsWith(".png"));

console.log(pdfName.endsWith('.pdf'));