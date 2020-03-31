"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }
    sub(obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    mod() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        console.log('real: ', this.real, 'img: ', this.imaginary);
    }
}
let a = new Complex(3, 2);
let b = new Complex(5, 4);
let c = a.add(b);
let d = c.sub(a);
let e = d.mod();
console.log('Wynik dodawania dwóch obiektów: ');
c.toString();
console.log('Wynik odejmowania dwóch obiektów: ');
d.toString();
console.log('Moduł z otrzymanego wczęsniej wyniku: ', e);
