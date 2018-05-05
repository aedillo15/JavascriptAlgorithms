// This function isPalindrome is taking in a string and is determing whether or not it is the same backwards as it is forwards.
function isPalindrome(string){
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacter = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  var lettersArr = [];
  charactersArr.foreach(char => {
    if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  
  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

console.log(isPalindrome("Madam I'm Adam"));

/*
console.log(isPalindrome("race car"));
console.log(isPalindrome("Coding Javascript"));
*/