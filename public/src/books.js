function findAuthorById(authors, id) {
  for(let i=0;i<authors.length;i++){
    if(authors[i].id === id){
      return authors[i];
    }
  }
}

function findBookById(books, id) {
  for(let i=0;i<books.length;i++){
    const {id: bookID} = books[i];
    if (bookID === id) {
      return books[i]
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter(book => book.borrows[0].returned == false);
  let returnedBooks = books.filter(book => {
    return book.borrows[0].returned == true;
})
return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.forEach(account => {
    book.borrows.forEach(transaction => {
      if(transaction.id === account.id) {
        let accountObj = {...account};
        accountObj.returned  = transaction.returned;
        borrowers.push(accountObj);
      }
    })
  })
  return borrowers.slice(0, 10);
}
    
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
