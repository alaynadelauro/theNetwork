<template>
  <div class="container-fluid">
    <div class="row justify-content-start">
      <div class="col-2 h-100">
        <h1>Prof</h1>
        <!-- <button @click="makePost()" class="btn"><i class="mdi mdi-plus"></i></button> -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <i class="mdi mdi-plus"></i>
        </button>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">What would you like to say?</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <!-- SECTION Form starts here -->
                <form @submit.prevent="createBlog()" class="p-4 pb-3">
                  <div class="d-flex">
                    <div class="d-block w-25">
                      <div class="">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" required class="form-control" placeholder="Title..">
                      </div>
                      <div class="mt-3">
                        <label for="imgUrl" class="form-label">Blog Image</label>
                        <input maxlength="500" type="url" required class="form-control" placeholder="Article picture..">
                      </div>
                    </div>
                    <div class="mx-3 w-75">
                      <label for="body" class="form-label">Body</label>
                      <textarea rows="5" required class="form-control" placeholder="Blog content..."></textarea>
                    </div>
                  </div>
                  <div class="text-end mt-4 mb-0 me-3">
                    <button type="submit" class="btn submitButton">Submit</button>
                  </div>
                </form>
                <!-- SECTION form ends here -->
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 text-center">
        <h1>This is the Home Page</h1>
        <div class="row justify-content-center mt-5">
          <div v-for="post in posts" :key="post.id" class="col-9 d-flex postCard m-2 px-0">
            <PostCardComponent :postProp="post" />

          </div>
        </div>
      </div>
      <div class="col-2 h-100 justify-content-end">
        <h1>Add</h1>
      </div>
    </div>

  </div>
</template>

<script>
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop.js';
import { postService } from '../services/PostService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js'
import PostCardComponent from '../components/PostCardComponent.vue';

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
    async function makeAPost() {
      try {
        logger.log('button clicked')
      } catch (error) {
        // Pop.error(error)
        logger.error(error)
      }
    }
    onMounted(() => {
      getPosts();
    });
    return {
      posts: computed(() => AppState.posts),
      makePost() {
        makeAPost()
      }
    };
  },
  components: { PostCardComponent }
}
</script>


<style scoped lang="scss">
.postCard {
  box-shadow: 5px 5px 15px black;
  background-color: white;
}
</style>
