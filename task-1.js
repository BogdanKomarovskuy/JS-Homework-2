

const logItems = function (array) {
    for (let i = 0; i < array.length; i += 1){
        let index = i+1;

        console.log(`${index} : ${array[i]}`);
        index +=1;
    }
  };
  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);