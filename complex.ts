class Complex {
private real: number;
private imaginary: number;

    constructor(real: number, imaginary: number){
        this.real = real;
        this.imaginary = imaginary;
    }
    add(obj: Complex): Complex {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }
    sub(obj: Complex): Complex {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    mod(): number {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        console.log('real: ', this.real, 'img: ', this.imaginary);
    }
}

let a = new Complex(3,2);
let b = new Complex(5,4);
let c = a.add(b);
let d = c.sub(a);
let e = d.mod();
console.log('Wynik dodawania dwóch obiektów: ');
c.toString()
console.log('Wynik odejmowania dwóch obiektów: ');
d.toString();
console.log('Moduł z otrzymanego wczęsniej wyniku: ', e);



