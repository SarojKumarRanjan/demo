import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.get('/about', (req, res) => {   
    res.json({ message: 'This is a demo application.' });
    });


app.post('/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received', data });
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});