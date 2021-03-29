// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {

  let foundAccount = accounts.find((account) => account.id === id)
  return foundAccount
  }
  
  //=================================================================
  
  function sortAccountsByLastName(accounts) {

  let result = accounts.sort((lastNameA, lastNameB) => (lastNameA.name.last.toLowerCase() >  lastNameB.name.last.toLowerCase()? 1 : -1));
  return result;
  }
  
  //====================================================================
  
  function getTotalNumberOfBorrows(account, books){

  
    let userId = account.id;
      let borrowedCount = 0;

    for(let book of books){
      for(let borrow of book.borrows){
        if(userId == borrow.id){
          borrowedCount = borrowedCount + 1;
        }
      }
    }
    return borrowedCount;
  }
  
  
  function getBooksPossessedByAccount(account, books, authors) {
  
  // should return all of the books taken out by an account with the author embeded.
  
  let result = [];

  for(let book of books){
    for(let borrow of book.borrows){
      if(borrow.id == account.id){
        if(!borrow.returned){
          
          for(let author of authors){
            if(author.id == book.authorId){
              book.author = author;
            }
          }
          result.push(book)
        }
      }
    }
  }
 return result;
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
