"use strict";
/********** Class **********/
class SecondPerson {
    // Methods
    constructor() {
        // Attributes
        this.country = 'Argentina';
    }
    greet() {
        this.country;
        console.log('Que tengas un lindo dia! ;)');
    }
}
// Extends
class SecondEmployee extends SecondPerson {
    // Attributes
    // Methods
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    showInfo() {
        console.log(`Hola ${this.name}, sabemos que vives en ${this.dept} !`); // Hola <name>, sabemos que vives en <dept> !
    }
}
// Instance
const firstEmp = new SecondEmployee(1, 'Josue', 'San Lorenzo');
const secondEmp = new SecondEmployee(2, 'Chaina', 'San Lorenzo');
firstEmp.greet(); // Hello
