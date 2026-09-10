import { getAllAuthors, getAuthorById } from '../models/authors.js';

const getAuthorsHandler = async (req, res) => {
  try {
    const authors = await getAllAuthors();

    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve authors',
      error: error.message
    });
  }
};

const getAuthorByIdHandler = async (req, res) => {
  try {
    const author = await getAuthorById(req.params.id);

    if (!author) {
      return res.status(404).json({
        message: 'Author not found'
      });
    }

    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve author',
      error: error.message
    });
  }
};

export { getAuthorsHandler, getAuthorByIdHandler };