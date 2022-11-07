const books = require('../db/books');
const { generalResponse } = require('../response');

const updateBook = (request, h)=>{
  const { bookId } = request.params;
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

  const index  = books.findIndex((b) => b.id === bookId);

  if (index !== -1 && readPage <= pageCount && name !== undefined ) {
    const updatedAt = new Date().toISOString();

    books[index] = {
      ...books[index],
      name, 
      year, 
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt
    };

    const response = h.response(generalResponse(
      'success',
      'Buku berhasil diperbarui'
      
    ));
    response.code(200);
    return response;

  }else if (index === -1){
    const response = h.response(generalResponse(
      'fail',
      'Gagal memperbarui buku. Id tidak ditemukan',
    ));
    response.code(404);
    return response;

  }else if(name === undefined){
    const response = h.response(generalResponse(
      'fail',
      'Gagal memperbarui buku. Mohon isi nama buku',
    ));
    response.code(400);
    return response;

  }else if(readPage > pageCount){
    const response = h.response(generalResponse(
      'fail',
      'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    ));
    response.code(400);
    return response;
  }
};

module.exports = {updateBook};