const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')

const app = express()

const port = 3000

// Отслеживание URL-адресов при помощи Express
app.get('/', (req, res) => {
  res.send('Главная страница сайта')
})

app.get('/contact', (req, res) => {
	res.send('Страница контактов')
})

app.listen(port, () => {
  console.log(`Сервер был запущен по порту: ${port}`)
})