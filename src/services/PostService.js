import { AppState } from "../AppState.js"
import { Creator } from "../models/Creator.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService.js"

class PostService {
    async GetPosts() {
        try {
            const res = await api.get('api/posts')
            logger.log(res.data.posts)
            AppState.posts = res.data.posts.map(pojo => new Post(pojo))
        } catch (error) {
            Pop.error(error)
        }
    }
    async getPostById(postId) {
        try {
            const res = await api.get(`api/posts/${postId}`)
            logger.log(res.data.creator)
            const creator = res.data.creator
            AppState.creator = new Creator(creator)

        } catch (error) {
            Pop.error(error)
            logger.error(error)
        }
    }
    async getPostsByCreatorId(creatorId) {
        try {
            const res = await api.get(`api/posts?post.creatorId=${creatorId}`)
            // logger.log('this is what it found', res.data)
            // logger.log(res.data)
            AppState.posts.map(newPost => new Post(newPost))

        } catch (error) {
            logger.error(error)
            Pop.error(error)
        }
    }
    async createPost(editable) {
        try {
            const res = await api.post('api/posts', editable)
            AppState.posts.unshift(new Post(res.data))
        } catch (error) {
            Pop.error(error)
            logger.error(error)
        }
    }
}

export const postService = new PostService