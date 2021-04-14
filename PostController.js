//контроллер
import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body)
      res.json(post)
    } catch (e) {
      //без трай кетч сервер упадет с ошибкой
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      //если у find не указать параметры она вернет все посты
      const posts = await PostService.getAll()
      return res.json(posts)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getOne(req, res) {
    //нет посторонних действий: получили post и сразу вернули на клиент
    try {
      //router.get('/posts/:id' id берется отсюда) (пример params { id: '6077394a50a39e5772ce9f64' }, щас только id)
      const post = await PostService.getOne(req.params.id)
      return res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body)
      return res.json(updatedPost)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      await PostService.delete(req.params.id)
      res.json({message: `Пост с ${req.params.id} удален`})
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new PostController()
