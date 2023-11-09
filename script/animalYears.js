


var humanYearsCatYearsDogYears = function(humanYears) {
  
    function catYears(humanYears) {  
      if(humanYears === 1) return 15
      else if(humanYears === 2) return 15 + 9
      else return 15 + 9 + ((humanYears - 2) * 4)
    }

    function dogYears(humanYears) {  
        if(humanYears === 1) return 15
        else if(humanYears === 2) return 15 + 9
        else return 15 + 9 + ((humanYears - 2) * 5)
      }

    return[humanYears,catYears(humanYears),dogYears(humanYears)]
  }

//   console.log(humanYearsCatYearsDogYears(10));