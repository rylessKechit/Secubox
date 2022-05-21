
//require('./db/db')

const express = require ('express')

const db = require('./db/db')
const routes = require('./routes/routes')
require('./middlewares/auth')

const app = express()

db()
app.use(express.json())
app.use(routes)
app.listen(8080, () => console.log('Je tourne sur le port 8080'))
