<template>
    <div v-if="postProp.image" class="d-flex w-50">
        <img class="image-fluid postImage" :src="postProp.image" :alt="postProp.creator.name">
    </div>
    <div class="w-50 h-100">
        <img class="rounded-circle creatorImage mt-3" :src="postProp.creator.picture" :alt="postProp.creator.name">
        <router-link :to="{ name: 'Profile', params: { postId: postProp.id } }">
            <p class="fs-3 fw-bold">{{ postProp.creator.name }}</p>
        </router-link>
        <p class="text-start ps-3 fs-5">{{ postProp.body }}</p>
        <p class="text-start ps-3 mt-3">This post was created at:<br>{{ postProp.createdAt }}</p>
        <div class="d-flex align-items-center justify-content-end">
            <div v-if="postProp.creatorId == accountProp.id">
                <button class="btn btn-danger m-2"><i class="mdi mdi-delete" title="Delete Post"></i></button>
            </div>
            <p class="text-end fs-3 pb-0 mb-0"><i class="mdi mdi-heart"></i>{{ postProp.likes }}</p>
        </div>
    </div>
</template>


<script>
import { computed, onMounted, popScopeId } from 'vue';
import { Post } from '../models/Post';
import { postService } from '../services/PostService';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
import { AppState } from '../AppState';
import { Account } from '../models/Account';

export default {
    props: {
        postProp: { type: Post },
        accountProp: { type: Account }
    },
    startup() {
        // async function destroyPost(postId) {
        //     try {
        //         logger.log(postId)
        //         const yes = await Pop.confirm('Are you sure you want to delete your post?')
        //         if (!yes) { return }

        //         await postService.destroyPost(postId)
        //     } catch (error) {
        //         Pop.error(error)
        //         logger.error(error)
        //     }

        // }
        // function confirmUser() {
        //     if (AppState.account.id == AppState.posts.creatorId) {
        //         AppState.userConfirmed = true
        //     } else { AppState.userConfirmed = false }
        // }
        // onMounted(() => {
        // confirmUser()
        // })
        return {
            // account: computed(() => AppState.account)
        }
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
    box-shadow: 5px 5px 15px black;
}

.postCard {
    box-shadow: 5px 5px 15px black;
    background-color: white;
}
</style>