const { nanoid } = require('nanoid');
const { newBook } = require('../helpers/newBook');
const books = require('../db/books');
const { generalResponse } = require('../response');

const addBook = (request, h) => {
  const { 
    name, 
    year, 
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading

  } = request.payload;

  if(readPage <= pageCount && name !== undefined){
    let id = nanoid(16);

    while(books.filter((book) => book.id === id).length > 0){
      id = nanoid(16);
    }

    const book = newBook(
      id,
      name, 
      year, 
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      pageCount === readPage,
      reading
    );
  
    books.push(book);
  
    const isSuccess = books.filter((book) => book.id === id).length > 0;
    if(isSuccess) {
      const response = h.response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id
        }

      });

      response.code(201);
      return response;
    }

  }

  if(name === undefined){
    const response = h.response(generalResponse(
      'fail',
      'Gagal menambahkan buku. Mohon isi nama buku',
    ));
    response.code(400);
    return response;

  }else if(readPage > pageCount){
    const response = h.response(generalResponse(
      'fail',
      'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
    ));
    response.code(400);
    return response;
  }

  const response = h.response(generalResponse(
    'error',
    'Buku gagal ditambahkan',
  ));
  response.code(500);
  return response;
};

module.exports = {addBook};