export class Creator {
    constructor(data) {
        this.bio = data.bio
        this.class = data.class
        this.coverImg = data.coverImg || null
        this.email = data.email
        this.github = data.github
        this.graduated = data.graduated
        this.linkedin = data.linkedin
        this.name = data.name
        this.picture = data.picture
        this.resume = data.resume
        this.id = data.id
    }
}