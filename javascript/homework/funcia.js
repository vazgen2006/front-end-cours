function sayHi() {
    alert("Привет");
}

function sayHi() {
    alert("Привет");
}

alert(sayHi); // выведет код функции



function sayHi() { // (1) создаём
    alert("Привет");
}

let func = sayHi; // (2) копируем

func(); // Привет    // (3) вызываем копию (работает)!
sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)

function