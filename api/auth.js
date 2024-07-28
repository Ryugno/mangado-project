const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const app = express();
app.use(express.json());

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  await user.save();
  res.status(201).send('ユーザー登録が完了しました');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(400).send('メールアドレスまたはパスワードが無効です');
  }
  const token = jwt.sign({ userId: user._id }, 'SECRET_KEY');
  res.send({ token });
});

module.exports = app;
