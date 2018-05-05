// This is a function of a fizzBuzz algorithm, this function will print Fizz if the number is divisable by 3 and Buzz if the number is divisable by 5.
// In addition, this function will print FizzBuzz if it is divisable by 3 or 5, or in other numbers divisable by 15 which is both divisable by 3 and 5
function fizzBuzz(num){
  for(var i = 1; i <= num; i++){
    if (i % 3 === 0 && i % 5 === 0 || i % 15 === 0) console.log('FizzBuzz');
    else if(i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

fizzBuzz(20);