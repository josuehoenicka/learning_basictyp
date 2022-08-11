/********** Extends **********/
interface Person {
    id : number;
    name : string;
}

interface Employee extends Person{
    dept : string;
}

interface Customer extends Person{
    country : string;
}

/********** Implements **********/

interface Animal {
    name : string;
    getDogs? : () => void;
    getCats? : () => void;
}

class Monkey implements Animal {
    name = 'Jorge Monkey';
}