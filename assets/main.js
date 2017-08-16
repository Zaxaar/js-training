$('document').ready(function(){
  console.log('JS successfully loaded!')

  // Flat counter --- //

  var showAdresses = function(ulica, ostatniNumer) {
    console.log(`Pokazuję adresy na ulicy: ${ulica}.` );
    for (var i = 1; i <= ostatniNumer; i++) {
      if(i === 1 || i%2 !== 0) {
        var numerBloku = i;
        for (var j = 1; j <= 12; j++) {
          var numerMieszkania = j;
          console.log(`Ul. ${ulica} ${numerBloku} / mieszkanie ${numerMieszkania}` );
        }
      }
    }
  }
  // showAdresses('Przykładowa', 10 );
});

// Check palindromes

var checkPalindrome = function(x) {
  var word = x;

  typeof word !== 'string' ? word = word.toString() : word;

  word = word.split('').filter((item)=> item !== " ");

  var input = word.join('');
  var output = word.reverse().join('');

  console.log(input,output);
  return input === output ? true : false
}

// checkPalindrome('kurka');


//------- String utils ---------

var StringUtils = {
  letterSpacing: function(str) {
    return str.split('').join(' ');
  },
  reverse: function(str) {
    return str.split('').reverse().join('');
  },
  getAlphabet: function() {
      let alphabet = '';
      for(let i = 97; i < 123; i++) {
        alphabet += String.fromCharCode(i);
      }
      return alphabet;
  },
  getFirstLetter: function(str) {
    return str.charAt(0);
  }
}
