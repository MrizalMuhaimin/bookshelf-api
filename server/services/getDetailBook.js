const books = require('../db/books');
const { generalResponse } = require('../response');

const getDetailBook = (request, h)=>{
  const { bookId } = request.params;
  let book = books;

  const data = book.filter((b) => b.id === bookId)[0];

  if (data !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        book:data
      },
    });
    response.code(200);
    return response;

  }

  const response = h.response(generalResponse(
    'fail',
    'Buku tidak ditemukan',
  ));
  response.code(404);
  return response;
};

module.exports = {getDetailBook};