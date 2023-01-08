let input;
const numbers = [];
let total = 0;
while(input = Number(prompt("Введите число"))){
   numbers.push(input)
   console.log(numbers)
    
}
if(numbers.length > 0){
    for(let i = 0; i < numbers.length; i += 1){
        total = total + numbers[i];
        
    }
    console.log(total)
}