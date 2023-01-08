const findLongestWord = function (string) {
    let array = string.split([" "]);
    console.log(array);
    let max = 0;
    let longestWorld = 0;
    for(let i = 0; i < array.length; i += 1){
        console.log(array[i].length)
        if(array[i].length > max){
            max = array[i].length;
            
             longestWorld = array[i];
            
        }}

        console.log(`Long world: ${longestWorld}`)     
  };
  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'