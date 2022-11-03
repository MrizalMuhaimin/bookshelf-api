const books = require('../db/books');

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

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {getDetailBook};