

// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {

  const foundAuthor = authors.find((author)=> author.id === id);
  return foundAuthor;
  }
  
  function findBookById(books, id) {
  const foundBook = books.find((book)=> book.id === id);
  return foundBook;
  }
  
  function partitionBooksByBorrowedStatus(books) {
   
    let borrowed = [];
    let returned = [];

    for(let book of books){
      console.log(book.borrows);
      if(!book.borrows[0].returned){
        borrowed.push(book);      
      } else {
        returned.push(book);
      }
    }
    
    return [borrowed, returned];
  
  }
      
     
  
  function getBorrowersForBook(book, accounts) {
  // should return an array for a book of all borrowers with their information and return status;
  //should limit the list to ten borrowers
  
    let borrowHistory = book.borrows.map((borrow) => { 
      let accountInfo = findAuthorById(accounts, borrow.id)
      accountInfo.returned = borrow.returned
    return accountInfo
    }).slice(0, 10)
  return borrowHistory
  }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
