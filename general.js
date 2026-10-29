// Axios-based book retrieval functions for the Express Book Reviews assignment.
// Start the course-provided Express server at http://localhost:5000 first.

const axios = require('axios');
const BASE_URL = process.env.BOOKS_API_URL || 'http://localhost:5000';

async function getAllBooks() {
  const response = await axios.get(BASE_URL + '/');
  return response.data;
}

async function getBookByISBN(isbn) {
  const response = await axios.get(BASE_URL + '/isbn/' + encodeURIComponent(isbn));
  return response.data;
}

async function getBooksByAuthor(author) {
  const response = await axios.get(BASE_URL + '/author/' + encodeURIComponent(author));
  return response.data;
}

async function getBooksByTitle(title) {
  const response = await axios.get(BASE_URL + '/title/' + encodeURIComponent(title));
  return response.data;
}

module.exports = { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle };

if (require.main === module) {
  (async function main() {
    try {
      console.log('All books:');
      console.log(JSON.stringify(await getAllBooks(), null, 2));
      console.log('\nBook by ISBN 1:');
      console.log(JSON.stringify(await getBookByISBN('1'), null, 2));
      console.log('\nBooks by author Chinua Achebe:');
      console.log(JSON.stringify(await getBooksByAuthor('Chinua Achebe'), null, 2));
      console.log('\nBooks by title Things Fall Apart:');
      console.log(JSON.stringify(await getBooksByTitle('Things Fall Apart'), null, 2));
    } catch (error) {
      console.error('Request failed:', error.response ? error.response.data : error.message);
      process.exitCode = 1;
    }
  })();
}
