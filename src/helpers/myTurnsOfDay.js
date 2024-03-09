const myTurnsOfDay = (time, emailUser) => {
    let array = [];
    let ultimate = false;
  
    time.forEach((element, index) => {
      if (ultimate === false) {
        if (element === emailUser) {
          array.push({ ini: index });
          ultimate = true;
        }
      }
      
      if (ultimate === true) {
        if (element !== emailUser) {
          // Asignar el elemento actual al último elemento del array
          const lastIndex = array.length - 1;
          array[lastIndex].fin = index - 1
          ultimate = false;
        }
      }
    });
  
    return array;
  };
  
  module.exports = myTurnsOfDay;
  