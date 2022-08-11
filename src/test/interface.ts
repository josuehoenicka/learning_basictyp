/********** Interface **********/
interface Book {
    id : number;
    title : string;
    author : string;
    coAuthor? : string;
    // isLoad?: (id : number) => void
}

const firstBook : Book = {
    id : 1,
    title: 'Bible',
    author: 'God',
}
const secondBook = {
    whatever : 1
}
const thirdBook : Book[] = [];

function getBook() : Book {
    return {id : 2, 
        title : 'La politica de Aristoteles', 
        author : 'Diego Abad'};
}
const myBook = getBook();
console.log(myBook.title + ' es un libro de ' + myBook.author); // La politica de Aristoteles es un libro de Diego Abad

function createBook(book : Book) : Book {
    return book;
}
const newBook : Book = {
    id : 3, 
    title : 'Momento de morir', 
    author : 'Abel Posse',
    coAuthor : 'Hector Murena'
}
createBook(newBook);