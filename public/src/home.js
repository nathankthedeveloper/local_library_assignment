// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
  }
  
  //=======================================
  
  function getTotalAccountsCount(accounts) {
  return accounts.length;
  }
  
  //=========================================
  
  
  function getBooksBorrowedCount(books) { 
    return books.reduce((acc, book) => (acc + (!book.borrows[0].returned)), 0);
  }

  //=======================================
   
  function getMostCommonGenres(books) {
    
       let resultArr = [];
      let result = {};
    

    books.filter((book)=>{
      if(result[book.genre]){
        result[book.genre]= result[book.genre] + 1;
      }else{
        result[book.genre]= 1
      }
    })
     
    
    for(let prop in result){
      if(result.hasOwnProperty(prop)){
        resultArr.push({name: prop, count: result[prop]})
      }
                            
    }
    
    function topFive(){
      let topFiveResult = resultArr.sort((a,b)=> a.count > b.count ? -1 : 1).slice(0,5);
    return topFiveResult;
    }
    return topFive();
  }
  
  //=====================================
  
  function getMostPopularBooks(books) {
  
    
    return books.map((book) => {
      return {name: book.title, count: book.borrows.length}
     }).sort((bookOne, bookTwo) => (bookOne.count < bookTwo.count ? 1 : -1)).slice(0, 5)
   }
  
  //=========================================
  
  
  // Need to fix the result;
  function getMostPopularAuthors(books, authors) {
  
    let result = [];

    books.sort((bookOne, bookTwo) => bookOne.borrows.length > bookTwo.borrows.length ? -1 : 1 )
    
  result = books.slice(0,5);
  
  let popularAuthors = [];
  let finalResult = [];
  
  for(let book of result){
    for(let author of authors){
  
     const authorName = author.name.first + " " + author.name.last
  
      if(book.authorId == author.id){
        book.author = author;
  
        popularAuthors.push({name: `${authorName}`, count: book.borrows.length})
  
         }
      }
        result = popularAuthors;
        finalResult = result; 
    }
   
  return finalResult;
  
  }


//=============================================

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
