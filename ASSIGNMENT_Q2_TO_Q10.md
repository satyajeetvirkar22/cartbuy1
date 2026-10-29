# Corrected evidence guide — Questions 2–10

**Important:** run each command against your local course server on port 5000 and paste the real response under the command in the course submission. JSON below is the rubric's sample/expected shape, not a response captured from your machine.

## Q2 — getallbooks
```bash
curl -s http://localhost:5000/
```
Include the actual JSON object with all 10 books, including author, title, and reviews.

## Q3 — getbooksbyISBN
```bash
curl -s http://localhost:5000/isbn/1
```
Rubric sample: `{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}}`

## Q4 — getbooksbyauthor
```bash
curl -s 'http://localhost:5000/author/Chinua%20Achebe'
```
Include the actual JSON array returned by your server.

## Q5 — getbooksbytitle
```bash
curl -s 'http://localhost:5000/title/Things%20Fall%20Apart'
```
Include the actual JSON array returned by your server.

## Q6 — getbookreview
```bash
curl -s http://localhost:5000/review/1
```
Rubric sample when there is no review: `{"message":"No reviews found for this book."}`

## Q7 — register
Use a username not already registered, then keep the same credentials for Q8.
```bash
curl -s -X POST http://localhost:5000/register -H 'Content-Type: application/json' -d '{"username":"testuser2026","password":"YOUR_TEST_PASSWORD"}'
```
Rubric sample: `{"message":"User successfully registered. Now you can login"}`
If that username already exists, choose a different username and use it consistently.

## Q8 — login
The IBM starter mounts its authentication router at `/customer` and defines `POST /login`, so the full route is `/customer/login`.
```bash
curl -i -c cookies.txt -X POST http://localhost:5000/customer/login -H 'Content-Type: application/json' -d '{"username":"testuser2026","password":"YOUR_TEST_PASSWORD"}'
```
Use the exact credentials registered in Q7 and keep the actual response plus `cookies.txt`.
Rubric sample response body: `{"message":"Login successful!"}`

## Q9 — reviewadded
After a successful login, add a review using **PUT**:
```bash
curl -i -b cookies.txt -X PUT 'http://localhost:5000/customer/auth/review/1?review=Excellent%20book'
```
Rubric sample response shape: `{"message":"Review added/updated successfully","reviews":{"testuser2026":"Excellent book"}}`
Use the real response from your server.

## Q10 — deletereview
Delete the review added in Q9 using the same session cookie:
```bash
curl -i -b cookies.txt -X DELETE http://localhost:5000/customer/auth/review/1
```
Rubric sample: `{"message":"Review for ISBN 1 deleted"}`

## Main reasons the previous submission lost marks
- Commands were provided without their returned output.
- Q8 used a placeholder password instead of demonstrating a successful login.
- Q9 contained the login command instead of the PUT request to add a review.
- Q10 needs the actual successful deletion response.
- Q1 needs proof that the repository is truly forked from the IBM starter repository.
- Q11 feedback says the `general.js` link must be inside a repository named `expressBookReviews`; the `cartbuy1` URL may not meet that requirement.

Do not submit sample JSON as if it were captured output. Run the commands and include the real terminal responses.