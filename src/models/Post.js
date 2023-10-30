export class Post {
    constructor(data) {
        this.body = data.body
        this.createdAt = new Date(data.createdAt) || new Date
        this.creator = data.creator
        // this.creator.image = data.creator.
        this.creatorId = data.creatorId
        this.id = data.id
        this.image = data.imgUrl || null
        this.likeId = data.likeId
        this.likes = data.likes
        this.updatedAt = new Date(data.updatedAt) || new Date
    }
}