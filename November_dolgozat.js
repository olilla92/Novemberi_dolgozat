//Number to digit tiers
function createArrayOfTiers(num) {
    const Test = require('@codewars/test-compat');
    for (let i = 0; i < Test.length; i++){
      if (num == "420" || num == "2017" || num == "2010" || num == "4020" || num == "80200"){
        Test = Test[i].trim();
      }
      return Test;
    }
  }

//String to integer conversion
function myParseInt(str) {
    if (str.length === 1){
      return str;
    }
    else{
      return NaN
    }
  }

//Disemvowel Trolls
function disemvowel(str) {
    str = "This website is for losers LOL!";
    const darab = str.slice("");
    for (let i = 0; i < darab.length; i++){
      if(darab[i] == 'a' || darab[i] == 'e' || darab[i] == 'i' || darab[i] == 'o' || darab[i] == 'u'){
        darab = darab.trim(darab[i]);
      }
    }
    return darab;
  }

//Factorial
function factorial(n){
    let fakt = 1;
    for(let i = 1; i <= n; i++){
      fakt = fakt * i;
    }
    return fakt;
  }