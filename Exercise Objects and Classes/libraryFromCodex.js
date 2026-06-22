function library(input) {
    
    let booksList = [];

    input.forEach(line => {

        if (line.includes('addBook ')) {
            let title = line.split('addBook ')[1];
            booksList.push({ title });
        }

        if (line.includes(' author ')) {
            let [title, author] = line.split(' author ');

            for (const book of booksList) {
                if (book.title === title) {
                    book.author = author;
                }
            }
        }

        if (line.includes(' year ')) {
            let [title,  year] = line.split(' year ');
        
            for (const book of booksList) {
                if (book.title === title) {
                    book.year = year;
                }
            }
        }
    });

    booksList.sort((a, b) => a.title.localeCompare(b.title));

    for (const book of booksList) {
        if (book.title && book.author && book.year) {
            console.log(JSON.stringify(book));

        }
    }
}
library([
    'addBook Harry Potter',
    'addBook Dune',
    'Harry Potter author J.K. Rowling',
    'Dune year 1965',
    'Harry Potter year 1997',
    'Dune author Frank Herbert',
    'Unknown author Nobody'
]);

// title
// author
// year