// This harmlesRansomNote will get the noteText and the text of a magazineText and will match and tell whether or not a harmlessRansomNote can be created the magazine text must fulfill all the words in the noteText
function harmlessRansomNote (noteText, magazineText){
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};
  
  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]){
      magazineObj[word]--;
      if(magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  });
  
  return noteIsPossible;
  
}
// Linear time complexity in this O(m + n)
harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret water fall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas bit it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');