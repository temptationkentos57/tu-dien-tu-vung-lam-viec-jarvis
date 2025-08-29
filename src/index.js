import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Chào mừng bạn đến với Từ Điển Từ Vựng Làm Việc Jarvis!');
});

app.listen(PORT, () => {
  console.log(`Server running trên cổng ${PORT}`);
});