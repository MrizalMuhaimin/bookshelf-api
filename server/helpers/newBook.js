const newBook = (
  id,
  name,
  year,
  author,
  summary,
  publisher,
  pageCount,
  readPage,
  finished,
  reading,
  insertedAt = new Date().toISOString(),
  updatedAt = new Date().toISOString(),

) => {
  const book = {
    id: id,
    name: name,
    year: year,
    author: author,
    summary: summary,
    publisher: publisher,
    pageCount: pageCount,
    readPage: readPage,
    finished: finished,
    reading: reading,
    insertedAt: insertedAt,
    updatedAt: updatedAt,
  };

  return book;
};

module.exports = {newBook};