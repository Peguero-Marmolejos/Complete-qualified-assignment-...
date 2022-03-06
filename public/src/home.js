function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  const currentlyBorrowedAmount = books.reduce((total, book) => {
    const borrows = book.borrows;
    for(let obj in borrows){
      if(borrows[obj].returned === false){
        total++;
      }
    }
    return total;
  },total);
  return currentlyBorrowedAmount;
}

function getMostCommonGenres(books){
  const allGenres = books.map(book => book.genre);
  let result =[];
  allGenres.forEach(genre => {
    let answer = result.find(res => res.name === genre);
      if(answer != null){
        answer.count++;
      }
      result.push({name:genre, count:1});
  });
  
  return result.sort((a,b) => b.count-a.count).slice(0,5);
}

function getMostPopularBooks(books) {
  const bookItems = books.map(book =>  {
    return {name: book.title, count: book.borrows.length}
  });
  bookItems.sort((a,b) => b.count-a.count);
  return bookItems.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let result =[];
  let total=0;
  let authorIds = authors.map(author => author.id);
 
  authorIds.forEach(authorId =>{
    let fullName = (authors.find(author => author.id === authorId)).name.first + " " + (authors.find(author => author.id === authorId)).name.last;
    let booksForAuthor = books.filter(book => book.authorId === authorId);
    let numOfBorrows = booksForAuthor.reduce((total, book) => {
      return total+book.borrows.length;
    }, total);
    result.push({name:fullName, count: numOfBorrows});
  });
  
  result.sort((a,b) => b.count - a.count);
  return result.slice(0,5);

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
