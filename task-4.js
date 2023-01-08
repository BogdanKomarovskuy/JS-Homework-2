const formatString = function (string) {
    console.log(string.length)
    if(string.length >= 40 ){
        
        let newString = string.substring(0, 39) + "...";
        console.log(newString)
       
    } else{
        console.log(`Без змін: ${string}`)
    }
  };
  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // повернеться оригінальний рядок
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // повернеться форматований рядок
  
  console.log(formatString('Curabitur ligula sapien.'));
  // повернеться оригінальний рядок
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // повернеться форматований рядок