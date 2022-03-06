function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last.toUpperCase() < b.name.last.toUpperCase()? -1:1);
}

function getTotalNumberOfBorrows(account, books) {
  let gTotal = 0;
  const gTotalOfBorrowedBooks = books.reduce((borrower, book) => {
    return book.borrows.filter(reader => reader.id === account.id).length + borrower;
  }, gTotal);
  return gTotalOfBorrowedBooks;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksOut = books.filter(book => {
    return book.borrows.some(borrow => borrow.id === account.id && !borrow.returned);
  });
  
  booksOut.forEach(book => {
    let theAuthor = authors.find(author => author.id === book.authorId);
    book.author = theAuthor;
  });

   return booksOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
