<template>
  <div class="container-fluid">
    <div class="row justify-content-start">
      <div class="col-2 h-100">
        <h1>Profile</h1>
        <!-- <button @click="makePost()" class="btn"><i class="mdi mdi-plus"></i></button> -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <i class="mdi mdi-plus"></i>
        </button>
        <div>
          <PostForm />
        </div>
        <!-- SECTION modal goes here -->
      </div>
      <div class="col-8 text-center">
        <h1>This is the Home Page</h1>
        <div class="row justify-content-center mt-5">
          <div v-for="post in posts" :key="post.id" class="col-9 d-flex postCard m-2 px-0">
            <PostCardComponent :postProp="post" />
          </div>
        </div>
      </div>

      <div class="col-2 h-100 justify-content-end d-flex flex-column myNav">
        <p class="fs-3 text-center">A word from Our Sponsors</p>
        <div v-for="ad in ads" :key="ad.title" class="advertisement mb-2 p-2">
          <img class="image-fluid w-100 h-100" :src="ad.tall" :alt="ad.title">
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
        // debugger
        await addService.getAdds()
      } catch (error) {
        logger.error(error)
      }
    }
    // async function makeAPost() {
    //   try {
    //     logger.log('button clicked')
    //   } catch (error) {
    //     // Pop.error(error)
    //     logger.error(error)
    //   }
    // }
    onMounted(() => {
      getPosts();
      getAdds();
    });
    return {
      posts: computed(() => AppState.posts),
      ads: computed(() => AppState.ads),
      // makePost() {
      //   makeAPost()
      // }
    };
  },
  components: { PostCardComponent, PostForm }
}
</script>


<style scoped lang="scss">
.postCard {
  box-shadow: 5px 5px 15px black;
  background-color: white;
}

.advertisement {
  height: 40vh;
}

.myNav {
  background-color: rgb(48, 3, 39);
  color: whitesmoke;

}

.navText {
  color: whitesmoke;
  font-family: 'Merienda', cursive;
}
</style>
