// Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
// al posto dei multipli di 3, deve stampare "Fizz"
// al posto dei multipli di 5, deve stampare "Buzz"
// al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"

var fizz;
var buzz;
var fizzBuzz;
// Creo un array vuoto da riempir di numeri da 1 a 100
var array = [];


// al posto dei multipli di 3, deve stampare "Fizz"
for (var i = 1; i <= 100; i++) {


    if (i % 3 === 0) {
        i = 'Fizz';
    } else if (i % 5 === 0) {
        i = 'Buzz'
    } else if ((i % 3 === 0) && (i % 5 === 0))  {

        i = 'FizzBuzz'
    }

        console.log(i);
}
