<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2">
                <UserProfCardComponent :userProp="user" />
            </div>
            <div class="col-8 bg-white">
                <img class="w-100 coverImage" :src="creator.coverImg" :alt="creator.name">
                <div class="d-flex w-100">
                    <img class="rounded profImg me-5" :src="creator.picture" :alt="creator.name">
                    <div>
                        <h1 class="text-center mt-3">{{ creator.name }}</h1>
                        <div>
                            <button @click="getPostsByCreatorId()" class="btn btn-primary">View Posts By {{ creator.name }}</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-5 mx-4 nameCard">
                        <p class="fs-4 text-start">{{ creator.name }}'s Contact Information:</p>
                        <div class="text-start">
                            <p><i class="mdi mdi-mail pe-3"></i>Email: {{ creator.email }}</p>
                            <p v-if="creator.github"><i class="mdi mdi-github pe-3"></i>Github: {{ creator.github }}</p>
                            <p v-if="creator.linkedin"><i class="mdi mdi-linkedin pe-3"></i>Linkedin: {{ creator.linkedin }}</p>
                        </div>
                    </div>
                    <div class="col-5 mx-4 text-start nameCard">
                        <p class="fs-4">About {{ creator.name }}:</p>
                        <p>{{ creator.bio }}</p>
                        <p>Graduation Status:
                            <i v-if="creator.graduated" class="mdi mdi-school"></i>
                            <i v-if="!creator.graduated" class="mdi mdi-book"></i>
                        </p>
                        <P v-if="creator.class">{{ creator.class }}</P>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div v-for="post in posts" :key="post.id" class="col-9 d-flex postCard m-2 px-0">
                        <PostCardComponent :postProp="post" />
                    </div>
                </div>
            </div>
            <div class="col-2 navText justify-content-end align-items-center d-flex flex-column myNav ">
                <p class="fs-5 text-center mb-0">A word from Our Sponsors</p>
                <div v-for="ad in ads" :key="ad.title" class="advertisement mb-2 p-2">
                    <AdCard :adProp="ad" />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState.js';
import { computed, onMounted } from 'vue';
import AdCard from '../components/AdCard.vue';
import { addService } from '../services/AddService.js';
import { logger } from '../utils/Logger';
import UserProfCardComponent from '../components/UserProfCardComponent.vue';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
import { postService } from '../services/PostService';
import PostCardComponent from '../components/PostCardComponent.vue';
export default {
    setup() {
        const route = useRoute()
        async function getAdds() {
            try {
                await addService.getAdds()
            } catch (error) {
                logger.error(error)
            }
        }
        async function getCreatorById() {
            try {
                const postId = route.params.postId
                await postService.getPostById(postId)
            } catch (error) {
                Pop.error(error)
                logger.error(error)
            }
        }
        onMounted(() => {
            getAdds()
            getCreatorById()
        })
        return {
            ads: computed(() => AppState.ads),
            user: computed(() => AppState.account),
            creator: computed(() => AppState.creator),
            posts: computed(() => AppState.posts),
            async getPostsByCreatorId() {
                try {
                    // debugger
                    AppState.posts = []
                    logger.log('creator ID', AppState.creator.id)
                    const creatorId = AppState.creator.id
                    await postService.getPostsByCreatorId(creatorId)
                    // logger.log('came back from the service!')
                } catch (error) {
                    Pop.error(error)
                    logger.error(error)
                }
            }
        };
    },
    components: { AdCard, UserProfCardComponent, PostCardComponent }
};
</script>


<style lang="scss" scoped>
.navText {
    color: whitesmoke;
    font-family: 'Merienda', cursive;
}

.myNav {
    background-color: rgb(48, 3, 39);
    color: whitesmoke;
    height: 89.3vh;
}

.advertisement {
    height: 39vh;
}

.coverImage {
    height: 20vh;
    object-fit: cover;
    object-position: center;
}

.profImg {
    height: 30vh;
    width: 30vh;
    object-fit: cover;
    object-position: center;
}

.nameCard {
    box-shadow: 5px 5px 15px black;
}

.postCard {
    box-shadow: 5px 5px 15px black;
    background-color: white;
}
</style>