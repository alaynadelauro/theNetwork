<template>
  <div class="container-fluid whiteBg">
    <div class="row justify-content-start">
      <div class="col-2 advertisement myNav pt-4">
        <UserProfCardComponent :userProp="user" />
        <!-- <div v-if="user.id" class="d-flex flex-column align-items-center">
          <img class="image-fluid rounded-circle profileImg" :src="user.picture">
          <h1 class="shadow navText pt-4">{{ user.name }}</h1>
          <p v-if="user.email"><i class="mdi mdi-mail pe-3"></i>{{ user.email }}</p>
          <p v-if="user.github"><i class="mdi mdi-github pe-3"></i>{{ user.github }}</p>
          <p v-if="user.linkedin"><i class="mdi mdi-linkedin pe-3"></i>{{ user.linkedin }}</p>
          <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <i class="mdi mdi-pencil"></i>
            </button>
          </div>
        </div>
        <div v-else-if="!user.id" class="text-center">
          <h1 class="navText">Welcome to The Network!</H1>
          <p class="mt-3">Please log in to proceed</p>
        </div>
        <div>
          <PostForm />
        </div> -->
        <!-- SECTION modal goes here -->
      </div>
      <div class="col-8 text-center">
        <div class="row justify-content-center posts mt-4">
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
import { logger } from '../utils/Logger';
// import Pop from '../utils/Pop.js';
import { postService } from '../services/PostService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js'
import PostCardComponent from '../components/PostCardComponent.vue';
import PostForm from '../components/PostForm.vue'
import { addService } from '../services/AddService.js'
import AdCard from '../components/AdCard.vue';
import UserProfCardComponent from '../components/UserProfCardComponent.vue';

export default {
  setup() {
    async function getPosts() {
      try {
        await postService.GetPosts();
      }
      catch (error) {
        // Pop.error(error);
        logger.error(error);
      }
    }
    async function getAdds() {
      try {
        await addService.getAdds()
      } catch (error) {
        logger.error(error)
      }
    }

    onMounted(() => {
      getPosts();
      getAdds();
    });
    return {
      posts: computed(() => AppState.posts),
      ads: computed(() => AppState.ads),
      user: computed(() => AppState.account),
    };
  },
  components: { PostCardComponent, AdCard, UserProfCardComponent }
}
</script>


<style scoped lang="scss">
template {
  max-height: 100vh;
}

.postCard {
  box-shadow: 5px 5px 15px black;
  background-color: white;
}

.posts {
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 86vh;
}

.advertisement {
  height: 39vh;
}

.myNav {
  background-color: rgb(48, 3, 39);
  color: whitesmoke;
  height: 89.3vh;
}

.whiteBg {
  background-color: white;
}

.navText {
  color: whitesmoke;
  font-family: 'Merienda', cursive;
}
</style>
