const books = require('../db/books');

const getBooks =(request, h) => {
  const { name, reading ,finished   } = request.query;
  let book = books;
  if(name !== undefined){
    book = book.filter((b) => b.name.toLowerCase().includes(name.toLowerCase()));
  }

  if(reading !== undefined){
    book = book.filter((b) => b.reading == reading);
  }
  if(finished !== undefined){
    book= book.filter((b) => b.finished == finished);
  }

  if(book.length>0){
    book = book.map((value) => ({id: value.id, name: value.name,publisher:value.publisher}));
  }
     
  const response = h.response({
    status: 'success',
    data: {
      books: book
    },
  });

  response.code(200);
  return response;
};

module.exports = {getBooks};