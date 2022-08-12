/********** Class **********/

class SecondPerson {
    // Attributes
    protected country : string = 'Argentina';
    // Methods
    constructor(){}
    greet() : void {
        this.country
        console.log('Que tengas un lindo dia! ;)');
    }
}
// Extends
class SecondEmployee extends SecondPerson {
    // Attributes
    // Methods
    constructor(private readonly id : number, private readonly name : string, private readonly dept : string){
        super();
        this.showInfo();
    }
    private showInfo() : void {
        console.log(`Hola ${this.name}, sabemos que vives en ${this.dept} !`); // Hola <name>, sabemos que vives en <dept> !
    }
}

// Instance
const firstEmp = new SecondEmployee(1, 'Josue', 'San Lorenzo');
const secondEmp = new SecondEmployee(2, 'Chaina', 'San Lorenzo');

firstEmp.greet(); // Hello
