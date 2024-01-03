function maxInArray(Numbers) {
     let largest = Numbers[0];
     for (let i = 0; i < Numbers.length; i++){
          const index = i;
          let element =Numbers [index];
          if (element < largest){
               largest = element;
          }   
     }
     return largest;
}

const highit = [167, 190, 120,  165, 137];
const tallestNumber =maxInArray(highit);
console.log(tallestNumber);