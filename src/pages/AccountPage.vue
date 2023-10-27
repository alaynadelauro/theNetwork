<template>
  <div class="container-fluid about text-center theView">
    <div class="row background">
      <div class="col-12">
        <h1>Welcome {{ account.name }}</h1>
        <img class="rounded" :src="account.picture" :alt="account.name" />
        <p>{{ account.email }}</p>
        <div>
          <button @click="callForm()" class="btn">
            <i class="mdi fs-3 mdi-pen"></i>
          </button>
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
img {
  max-width: 100px;
}

* {
  background-color: white;
}

.theView {
  min-height: 92.2vh;
}

.background {
  background-image:url(`${account.coverImg}`)
}
</style>
