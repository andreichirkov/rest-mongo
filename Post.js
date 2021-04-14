//описание модели данный
import mongoose from "mongoose";

//создаем схему
const Post = new mongoose.Schema({
  author: {type: String, required: true},
  title: {type: String, required: true},
  content: {type: String, required: true},
  picture: {type: String}
})

//экспортируем модель с названием Post, на основании схемы Post
export default mongoose.model('Post', Post)
