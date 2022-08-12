/********** Extends **********/
interface FirstPerson {
    id : number;
    name : string;
}

interface FirstEmployee extends FirstPerson{
    dept : string;
}

interface Customer extends FirstPerson{
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