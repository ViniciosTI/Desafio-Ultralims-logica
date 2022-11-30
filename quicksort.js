function quicksort(array) {
    if (array.length <= 1) return array;

    const pivot = array[0]

    const head = array.filter(n => n < pivot)
    const equal = array.filter(n => n === pivot)
    const tail = array.filter(n => n > pivot)

    return quicksort(head).concat(equal).concat(quicksort(tail));
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];

for (let i = 0; i < 100; i++) {
    array.push(getRandom(-100, 100));
}

console.log(array);

var resultado = quicksort(array);

console.log(resultado)