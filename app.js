const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const applications = [];

app.get('/admission', (req, res) => {
  res.render('admission');
});

app.post('/admission', (req, res) => {
  const { fullName, email, phone, course } = req.body;
  const application = { fullName, email, phone, course };
  applications.push(application);

  res.render('confirmation', { name: fullName, course });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
