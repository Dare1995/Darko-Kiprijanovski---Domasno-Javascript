const books = [
    { title: "Book 1", author: "Author A", year: 2000 },
    { title: "Book 2", author: "Author B", year: 2010 },
    { title: "Book 3", author: "Author C", year: 2020 },
  ]
  
    console.log("Title and Author of each book:")
    books.forEach((book) => {
        console.log(`${book.title} by ${book.author}`)
})

const firstBookAfter2000 = books.find((book) => book.year > 2000)
console.log("First book published after 2000:")
console.log(`${firstBookAfter2000.title} by ${firstBookAfter2000.author}`)
    