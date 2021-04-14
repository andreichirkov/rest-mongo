import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";

const PORT = 5000

const app = express()
//регистрируем парсинг json и роутер (и роутер будет отрабатывать по юрл api) можно подряд указать несколько роутеров
app.use(express.json())
app.use('/api', router)


async function startApp() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => console.log('Сервер запущен'))
  } catch (e) {
    console.log(e)
  }
}
startApp()


