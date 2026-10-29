# Questions 2–10: commands to capture real evidence

Run these from a terminal while your course Express server is running at http://localhost:5000. Save the actual terminal output for each question.

## Q2 — All books
```bash
curl -s http://localhost:5000/
```

## Q3 — Book by ISBN
```bash
curl -s http://localhost:5000/isbn/1
```

## Q4 — Books by author
```bash
curl -s 'http://localhost:5000/author/Chinua%20Achebe'
```

## Q5 — Books by title
```bash
curl -s 'http://localhost:5000/title/Things%20Fall%20Apart'
```

## Q6 — Review for ISBN 1
```bash
curl -s http://localhost:5000/review/1
```

## Q7 — Register
```bash
curl -s -X POST http://localhost:5000/register -H 'Content-Type: application/json' -d '{"username":"testuser2026","password":"choose-a-password-for-your-test"}'
```

## Q8 — Login and save session cookie
```bash
curl -i -c cookies.txt -X POST http://localhost:5000/customer/login -H 'Content-Type: application/json' -d '{"username":"testuser2026","password":"YOUR_REGISTERED_PASSWORD"}'
```

## Q9 — Add a review
```bash
curl -i -b cookies.txt -X PUT 'http://localhost:5000/customer/auth/review/1?review=Excellent%20book'
```

## Q10 — Delete the review
```bash
curl -i -b cookies.txt -X DELETE http://localhost:5000/customer/auth/review/1
```

Notes:
- Register the user first and use the exact same password for login.
- If the course server requires a different route or cookie/session setup, follow the route definitions in your course starter project.
- Do not submit the command alone: include the real output returned by your running server.
- Never submit a guessed response as evidence.