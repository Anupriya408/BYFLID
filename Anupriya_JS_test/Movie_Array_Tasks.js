// **Implementation Questions**

// 1. Create a list of books in the following format:
    
//     ```jsx
//     [
//       {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         rating: 4.9,
//         details: [
//           { chapter: "Introduction", pages: 20 },
//           { chapter: "Chapter 1", pages: 15 }
//         ]
//       },
//       ...
//     ]
    
//     ```
    
//     - Write a function to return the book title and the chapter with the maximum pages.
//     - Return a list of unique authors.



const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.9,
      details: [
        { chapter: "Introduction", pages: 20 },
        { chapter: "Chapter 1", pages: 15 }
      ]
    },
    {
      title: "1984",
      author: "George Orwell",
      rating: 4.8,
      details: [
        { chapter: "Introduction", pages: 12 },
        { chapter: "Chapter 1", pages: 30 }
      ]
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      rating: 4.7,
      details: [
        { chapter: "Introduction", pages: 22 },
        { chapter: "Chapter 1", pages: 25 }
      ]
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      rating: 4.9,
      details: [
        { chapter: "Introduction", pages: 18 },
        { chapter: "Chapter 1", pages: 16 }
      ]
    }
  ];
  

  function getBookWithMaxPages(book) {
    let maxChapter = book.details[0];
  
    for (let chapter of book.details) {
      if (chapter.pages > maxChapter.pages) {
        maxChapter = chapter;
      }
    }
  
    return {
      title: book.title,
      maxChapter
    };
  }

  books.forEach(book => {
    const result = getBookWithMaxPages(book);
    console.log(`Book: ${result.title}, Chapter with max pages: ${result.maxChapter.chapter} (${result.maxChapter.pages} pages)`);
  });
  
  // Function to return a list of unique authors
  function getUniqueAuthors(books) {
    const authorsSet = new Set();
    
    books.forEach(book => {
      authorsSet.add(book.author);
    });
  
    return Array.from(authorsSet);
  }
  
  // Testing the function
  const uniqueAuthors = getUniqueAuthors(books);
  console.log('Unique Authors:', uniqueAuthors);

  


//   OUTPUT///////////////////////////

// Book: To Kill a Mockingbird, Chapter with max pages: Introduction (20 pages)
// Book: 1984, Chapter with max pages: Chapter 1 (30 pages)
// Book: Moby Dick, Chapter with max pages: Chapter 1 (25 pages)
// Book: Pride and Prejudice, Chapter with max pages: Introduction (18 pages)
// Unique Authors: [ 'Harper Lee', 'George Orwell', 'Herman Melville', 'Jane Austen' ]
