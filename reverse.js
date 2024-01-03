function reverseString(text){
     let reversed = ""
     for (let i = text.length -1 ; i >= 0; i--){
          let element = text[i];
          reversed = reversed + element;
          console.log(element);
     }
     return reversed;
}

let string ="i am a good boy";
let revers = reverseString(string);
console.log(revers);