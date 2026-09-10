import { getAllAuthors } from '../models/authors.js';

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

export { getAuthorsHandler };