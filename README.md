# more-than-run-the-tests

## About:

**more-than-run-the-tests** is a web assignment submission based project. It primarily implements the "run the tests" feature, which takes the user-written code in the backend and tests the user's HTML, CSS, and JavaScript code against predefined test cases, providing proper feedback on which test cases passed or failed.

- **Live URL:** [https://more-than-run-the-tests.vercel.app/](https://more-than-run-the-tests.vercel.app/)
- **GitHub URL:** [https://github.com/Tapesh-1308/more-than-run-the-tests/](https://github.com/Tapesh-1308/more-than-run-the-tests/)
- **Demo Video:** [Uploading soon]()
## Installation:

To get started, clone the repository:

```bash
git clone https://github.com/Tapesh-1308/more-than-run-the-tests.git
```

To install the frontend:

```bash
cd more-than-run-the-tests/frontend
npm install
npm run dev
```

To install the backend:

```bash
cd more-than-run-the-tests/backend
npm install
npm start
```

Make sure to use the frontend localhost URL in the index.js file for CORS configuration and the backend localhost URL in the frontend .env file to run properly.

## Project Structure:

- backend
- frontend
- readme.md

## Tech Stack:

**Backend:**
- Node.js
- JavaScript
- JSDOM
- Express
- CORS
- dotenv

**Frontend:**
- Vite
- Tailwind CSS
- Monaco Editor
- React Split
- React Router DOM

## How the Project Works:

1. **Home Page:**
   - Displays all challenges and a "solve" button with shimmer UI loading.
   - Fetches data from the backend API (constant data, no database used).
   - ![image](https://github.com/Tapesh-1308/more-than-run-the-tests/assets/71540051/604cdf56-36a7-4b82-9665-22f86c65c804)


2. **Challenge Solving:**
   - User picks a challenge to solve.
   - Three sections are visible to the user: challenge info, code editor, preview. All three are resizable.
   - Challenge info contains challenge name, description, and test cases.
   - Code editor contains three files: index.html, styles.css, script.js.
   - User writes code, and its output shows on the preview section.
   - ![image](https://github.com/Tapesh-1308/more-than-run-the-tests/assets/71540051/8b8a48b3-aad9-4364-9d0a-f698c31b98f6)



3. **Running the Test:**
   - User clicks the "run the test" button to validate their code.
   - User-written code is sent to the backend for validation.
   - Backend uses JSDOM to validate HTML and CSS.
   - Test cases are checked using document.querySelector to ensure the required elements exist.
   - Feedback array is returned as output.
   - ![image](https://github.com/Tapesh-1308/more-than-run-the-tests/assets/71540051/b916ad33-6274-426c-8a89-6c1323ad8e22)


## Personal Note:

Dear Team Members,

I hope you are having great week. I am writing to express my enthusiasm for the opportunity to join your team as an SDE intern.

As a frontend developer in my first year of BCA, I initially lacked backend skills. However, I endeavored to learn some backend basics to develop this project. In this project, there are areas for improvement in the frontend as well, but I'm committed to enhancing them. I believe this project effectively showcases my frontend skills and my dedication to learning and growth.

Thank you for considering my application. I look forward to the possibility of contributing to your team and learning from the talented individuals at GeeksForGeeks 💚.

Warm regards,
Tapesh
