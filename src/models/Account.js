export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.github = data.github || null
    this.graduated = data.graduated
    this.linkedin = data.linkedin || null
    this.resume = data.resume || null
    this.bio = data.bio || null
    this.class = data.class || null
    this.coverImg = data.coverImg || null
    // TODO add additional properties if needed
  }
}
