import express from 'express';
import { challenges, allChallengesTestCases } from './challenges.js';
import { validateHtmlCssJs } from './utils.js';

const app = express();
app.use(express.json());

app.get('/api/getAllChallenges', (req, res) => {
  return res.status(200).json({ data: challenges });
})

app.get('/api/getChallengeById/:challengeId', (req, res) => {
  const challengeId = req.params.challengeId;
  const challenge = challenges.find(challenge => challenge.id === challengeId);

  return res.status(200).json({ data: challenge });
});

app.get('/api/:challengeId/testCases', (req, res) => {
  const challengeId = req.params.challengeId;
  const challenge = allChallengesTestCases.find(challenge => challenge.challengeId === challengeId);

  return res.status(200).json({ data: challenge.testCases });
});

app.post('/api/validate-html-css-js/:challengeId', (req, res) => {
  const { htmlCode, cssCode, jsCode } = req.body;
  const challengeId = req.params.challengeId;

  const challenge = allChallengesTestCases.find(challenge => challenge.challengeId === challengeId);

  const results = validateHtmlCssJs(htmlCode, cssCode, jsCode, challenge.testCases);

  return results ? res.status(200).json({ data: results }) : res.status(400).json({ errors: results });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
