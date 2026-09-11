import { getDb } from '../db/connect.js';

const getAllBooks = async () => {
  const db = getDb();
  const collection = db.collection('books');

  return await collection.find({}).toArray();
};

const getBookById = async (bookId) => {
  const db = getDb();
  const collection = db.collection('books');

  return await collection.findOne({ id: bookId });
};

const authorExists = async (authorId) => {
  const db = getDb();
  const collection = db.collection('authors');

  const author = await collection.findOne({ id: authorId });

  return !!author;
};

const createBook = async (book) => {
  const db = getDb();
  const collection = db.collection('books');

  await collection.insertOne(book);

  return book;
};

const updateBook = async (id, book) => {
  const db = getDb();
  const collection = db.collection('books');

  await collection.updateOne(
    { id },
    { $set: book }
  );

  return { id, ...book };
};

const deleteBook = async (id) => {
  const db = getDb();
  const collection = db.collection('books');

  return await collection.deleteOne({ id });
};

export {
  getAllBooks,
  getBookById,
  authorExists,
  createBook,
  updateBook,
  deleteBook
};