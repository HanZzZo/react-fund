import axios from "axios"
export default class PostService {
static async getAll(limit = 10, page = 1) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _limit: limit,
            _page: page
        }
    })
    return response// нужно будет обращаться к хедерам и вытаскивать нужное количество постов
 }

static async getById(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    return response
}

static async getCommentsByPostId(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return response
}
}