const books = require('../db/books');
const { generalResponse } = require('../response');


const delateBook = (request, h) =>{
  const {bookId} = request.params;
  const index = books.findIndex((b)=> b.id === bookId);

  if(index !== -1){
    books.splice(index, 1);
    const response = h.response(generalResponse(
      'success',
      'Buku berhasil dihapus'

    ));

    response.code(200);
    return response;
  }

  const response = h.response(generalResponse(
    'fail',
    'Buku gagal dihapus. Id tidak ditemukan'
  ));
  response.code(404);
  return response;
};

module.exports = {delateBook};