const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const methodOverride = require('method-override')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI)

app.set('view engine', 'ejs')
app.use('/public', express.static('public'));

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(port, () => {
    console.info(`Running Aplication On: http://localhost:${port}`)
})

