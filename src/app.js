import express from 'express';
import { findWord } from './vocabulary.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/search/:word', (req, res) => {
  const { word } = req.params;
  const vocab = findWord(word);
  if (vocab) {
    res.json(vocab);
  } else {
    res.status(404).json({ message: 'Không tìm thấy từ vựng.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});