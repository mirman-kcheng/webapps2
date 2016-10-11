$(document).ready(function(){
let numbers = [];

function custom(t,n,m) {
  if (t%(n*m) == 0) {
    return("FizzBuzz! <br />");
  } else if (t%n == 0) {
   return("Fizz! <br />");
  } else if (t%m == 0) {
    return("Buzz! <br />");
  } else {
    return(t + " <br />");
  }
}

function fizzBuzz(n,m) {
  for(var t = 1; t < 100; t++){
  $("#fizz-buzz").append(custom(t,n,m));
  }
}

class NumberDiv {
  constructor(number) {
    this.number = number;
  }
}

class Number {
  constructor(number_1,number_2) {
    this.number_1 = number_1;
    this.number_2 = number_2;
  }
}


function addNumber(number) {
  numbers.push(number);
}

$("#new-number").submit( (e) => {
  e.preventDefault();
  const number_1 = $("#number_1").val();
  const number_2 = $("#number_2").val();
  const newNumber = new
  Number(number_1,number_2);
  addNumber(newNumber);
  fizzBuzz(number_1,number_2);
});
});
