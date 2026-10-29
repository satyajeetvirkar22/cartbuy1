# Express Book Reviews — Axios Assignment

This project contains Axios client functions for the IBM Express Book Reviews assignment.

## Functions in general.js

- `getAllBooks()` — GET `/`
- `getBookByISBN(isbn)` — GET `/isbn/:isbn`
- `getBooksByAuthor(author)` — GET `/author/:author`
- `getBooksByTitle(title)` — GET `/title/:title`

All four functions use Axios and async/await.

## Run locally

1. Start the course-provided Express Book Reviews server at `http://localhost:5000`.
2. Run `npm install` in this project.
3. Run `node general.js` to print the API responses.

Capture real cURL outputs from your running server for the course evidence. This project does not fabricate command output.

**Note:** This repository is not itself a fork of `ibm-developer-skills-network/expressBookReviews`. For the course's fork-verification question, submit the URL of your actual fork of that starter repository.