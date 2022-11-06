/*
create a CLI app to check whether user was born in a leap year.
Ask user her name
Ask her Date of Birth (give her a format prompt)
Calculate and show her whether it’s a leap year or not.
If yes, ask her to share this on social media
use
Chalk to make it beautiful
Bonus (Optional) : check the input type and show an error if user entered “potato” instead of a date format
more
In upcoming lessons we’ll learn how to make GUI apps, first using vanillaJS, then using ReactJS. You can make this app as a practice in both ways once more. This way, you’ll appreciate how easy React makes your life.
*/

var read = require('readline-sync');

var userName = read.question('Enter your name ');
console.log(userName);
var dob = read.question('Enter your date of birth in format\n DD-MM-YYYY : ');
console.log(dob);