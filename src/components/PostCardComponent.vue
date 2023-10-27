<template>
    <div class="d-flex w-50">
        <img class="image-fluid postImage" :src="postProp.image" :alt="postProp.creator.name">
    </div>
    <div class="w-50 h-100">
        <img class="rounded-circle creatorImage" :src="postProp.creator.picture" :alt="postProp.creator.name">
        <p class="fs-3 fw-bold">{{ postProp.creator.name }}</p>
        <p class="text-start ps-3 fs-5">{{ postProp.body }}</p>
    </div>
</template>


<script>
import { Post } from '../models/Post';

export default {
    props: {
        postProp: { type: Post }
    },
    startup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
.postImage {
    width: 100%;
    max-height: 60vh;
    min-height: 20vh;
    object-position: center;
    object-fit: cover;
}

.creatorImage {
    height: 10vh;
    width: 10vh;
}

.postCard {
    box-shadow: 5px 5px 15px black;
    background-color: white;
}
</style>