// You are given an object representing a book with properties title (string), author (string), 
// and publishedYear (number). Use type alias for declaring the object. 
// Write a TypeScript function called isRecentBook that takes this book object as input and 
// determines if the book was published in the last 5 years.

// Hints: Use getFullYear() method to extract the year to check the given year with current year.

type Book={
    title: string;
    author: string;
    publishedYear:number;
}

function isRecentBook(book:Book):boolean{
    const currentYear =new Date().getFullYear();

    return currentYear -book.publishedYear<=5;
}

const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2012
};

console.log(isRecentBook(book1))
