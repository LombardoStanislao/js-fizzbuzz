// Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
// al posto dei multipli di 3, deve stampare "Fizz"
// al posto dei multipli di 5, deve stampare "Buzz"
// al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"

var array = [];

for (var i = 0; i < 100; i++) {
    array[i] = (i+1);
}

// al posto dei multipli di 3, deve stampare "Fizz"
for (var i = 0; i < array.length; i++) {


    if ((array[i] % 3 == 0) && (array[i] % 5 == 0))  {

        array[i] = 'FizzBuzz';
        console.log(array[i]);

    } else if (array[i] % 5 == 0) {

        array[i] = 'Buzz';
        console.log(array[i]);

    } else if (array[i] % 3 == 0) {

        array[i]= 'Fizz';
        console.log(array[i]);

    } else {

        console.log(array[i]);
    }

}
//
// console.log(array);
