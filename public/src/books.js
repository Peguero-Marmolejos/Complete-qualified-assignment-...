function findAuthorById(authors, id) {
  return authors.find(author => id === author.id);
}

function findBookById(books, id) {
  return books.find(book => id === book.id);
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  const currentlyCheckedOut = books.filter(book => !book.borrows[0].returned);
  const haveBeenReturned = books.filter(book => book.borrows[0].returned);
  result.push(currentlyCheckedOut);
  result.push(haveBeenReturned);
  return result;
}

function getBorrowersForBook(book, accounts) {
 const borrowed = book.borrows;
 const result = borrowed.map(borrow => {
  let accObject = accounts.find(account => account.id === borrow.id);
  accObject.returned = borrow.returned;
  return accObject;
 });
 return result.slice(0,10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
