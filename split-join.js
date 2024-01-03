const lyrics  = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const parts = lyrics.split(" ");
// console.log(parts);

const sentences = lyrics.split(".");
// console.log(sentences);


const chars = lyrics.split("");
// console.log(chars);



// console.log(lyrics.slice(5, 10));


const lines = [
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
     'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
     ''
   ]
   console.log(lines.join(", "))