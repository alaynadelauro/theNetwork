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
        </div>
        <div class="row">
          <div class="col-5 mx-5 nameCard">
            <p class="fs-4 text-start">My Contact Information:</p>
            <div class="text-start">
              <p><i class="mdi mdi-mail pe-3"></i>Email: {{ account.email }}</p>
              <p v-if="account.github"><i class="mdi mdi-github pe-3"></i>Github: {{ account.github }}</p>
              <p v-if="account.linkedin"><i class="mdi mdi-linkedin pe-3"></i>Linkedin: {{ account.linkedin }}</p>
            </div>
          </div>
          <div class="col-5 mx-5 text-start nameCard">
            <p class="fs-4">About Me:</p>
            <p>{{ account.bio }}</p>
            <p>Graduation Status:
              <i v-if="account.graduated" class="mdi mdi-school"></i>
              <i v-if="!account.graduated" class="mdi mdi-book"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="formOpen" class="row justify-content-center">
      <AccountEditForm />

    </div>

  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { logger } from '../utils/Logger';
import AccountEditForm from '../components/AccountEditForm.vue';
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      coverImgBg: computed(() => `url(${AppState.account.coverImg})`),
      formOpen: computed(() => AppState.accountEdit),
      callForm() {
        if (AppState.accountEdit == false) {
          AppState.accountEdit = true;
          logger.log(AppState.accountEdit, 'form');
        }
        else if (AppState.accountEdit == true) {
          AppState.accountEdit = false;
          logger.log(AppState.accountEdit, 'form');
        }
      }
    };
  },
  components: { AccountEditForm }
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
  min-height: 92vh;
}

.background {
  background-image:url(`${account.coverImg}`)
}
</style>
