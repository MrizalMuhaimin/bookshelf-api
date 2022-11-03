const {
  addBook, 
  getBooks, 
  getDetailBook, 
  updateBook, 
  delateBook} = require('./services/index');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler:getBooks

  },
  {
    method: 'GET',
    path: '/books/{bookId}', 
    handler:getDetailBook
  },
  {
    method: 'PUT',
    path: '/books/{bookId}', 
    handler:updateBook
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler:delateBook
  }
  
];
   
module.exports = routes;