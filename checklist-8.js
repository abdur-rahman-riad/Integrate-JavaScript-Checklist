// Checklist-8
const javascriptBooks = ['JavaScript: The Good Parts',
    'Learn JavaScript VISUALLY',
    'JavaScript: The Definitive Guide',
    'High-Performance Browser Networking',
    'Beginning JavaScript',
    'You Dont Know JS ',];
newBook = [];
const searching = 'JavaScript'
for (const book of javascriptBooks) {
    if (book.toLowerCase().includes(searching.toLowerCase())) {
        newBook = book.toLowerCase();
        console.log(newBook);
    }
}
