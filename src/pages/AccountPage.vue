<template>
  <div class="container-fluid about text-center theView">
    <div class="row background px-0">
      <div class="col-12 d-flex px-0">
        <img class="rounded profimg" :src="account.picture" :alt="account.name" />
        <div class="w-100">
          <h1 class="nameCard text-start">Welcome {{ account.name }}</h1>
          <img class="coverImage w-100" :src="account.coverImg" />
        </div>
      </div>
      <div class="col-12">
        <div class="d-flex align-items-center justify-content-center p-3">
          <div>
            <p class="fs-2"> Account Details</p>
          </div>
          <div class="text-end">
            <button @click="callForm()" class="btn">
              <i class="mdi fs-3 mdi-pen"></i>
            </button>
          </div>
          <div>
            <button @click="getPostsByCreatorId()" class="btn btn-primary text-dark">View Your Posts!</button>
          </div>
        </div>
        <div class="row">
          <div class="col-5 mx-4 nameCard">
            <p class="fs-4 text-start">My Contact Information:</p>
            <div class="text-start">
              <p><i class="mdi mdi-mail pe-3"></i>Email: {{ account.email }}</p>
              <p v-if="account.github"><i class="mdi mdi-github pe-3"></i>Github: {{ account.github }}</p>
              <p v-if="account.linkedin"><i class="mdi mdi-linkedin pe-3"></i>Linkedin: {{ account.linkedin }}</p>
            </div>
          </div>
          <div class="col-5 mx-4 text-start nameCard">
            <p class="fs-4">About Me:</p>
            <p>{{ account.bio }}</p>
            <p>Graduation Status:
              <i v-if="account.graduated" class="mdi mdi-school"></i>
              <i v-if="!account.graduated" class="mdi mdi-book"></i>
            </p>
            <p v-if="account.class">{{ account.class }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="formOpen" class="row justify-content-center">
      <AccountEditForm />

    </div>
    <div class="row">
      <div class="col-6 d-flex flex-row mt-3 justify-content-around">
        <div v-for="ad in ads" :key="ad.title" class="d-flex flex-row">
          <img :src="ad.square" class="d-flex flex-row ads">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="row justify-content-center">
        <div v-for="post in posts" :key="post.id" class="col-9 d-flex postCard m-2 px-0">
          <PostCardComponent :postProp="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import { logger } from '../utils/Logger';
import AccountEditForm from '../components/AccountEditForm.vue';
import { postService } from '../services/PostService';
import Pop from '../utils/Pop';
import PostCardComponent from '../components/PostCardComponent.vue';
import { addService } from '../services/AddService';
export default {
  setup() {
    async function getAdds() {
      try {
        await addService.getAdds()
      } catch (error) {
        logger.error(error)
      }
    }
    onMounted(() => {
      getAdds()
    })
    return {
      account: computed(() => AppState.account),
      coverImgBg: computed(() => `url(${AppState.account.coverImg})`),
      formOpen: computed(() => AppState.accountEdit),
      ads: computed(() => AppState.ads),
      callForm() {
        if (AppState.accountEdit == false) {
          AppState.accountEdit = true;
          logger.log(AppState.accountEdit, 'form');
        }
        else if (AppState.accountEdit == true) {
          AppState.accountEdit = false;
          logger.log(AppState.accountEdit, 'form');
        }
      },
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
  components: { AccountEditForm, PostCardComponent }
}
</script>

<style scoped>
.profimg {
  max-width: 40vh;
}

.nameCard {
  box-shadow: 5px 5px 15px black;
}

* {
  background-color: white;
}

.coverImage {
  height: 21vh;
  object-fit: cover;
  object-position: center;
}

.theView {
  min-height: 89.75vh;
}

.background {
  background-image:url(`${account.coverImg}`)
}

.ads {
  height: 20vh;
}
</style>
