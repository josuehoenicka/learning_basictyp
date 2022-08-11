"use strict";
const firstBook = {
    id: 1,
    title: 'Bible',
    author: 'God',
};
const secondBook = {
    whatever: 1
};
const thirdBook = [];
function getBook() {
    return { id: 2,
        title: 'La politica de Aristoteles',
        author: 'Diego Abad' };
}
const myBook = getBook();
console.log(myBook.title + ' es un libro de ' + myBook.author); // La politica de Aristoteles es un libro de Diego Abad
function createBook(book) {
    return book;
}
const newBook = {
    id: 3,
    title: 'Momento de morir',
    author: 'Abel Posse',
    coAuthor: 'Hector Murena'
};
createBook(newBook);
