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
    <div v-if="formOpen" class="row">
      <form class="p-2 pb-3">
        <div>
          <label for="image" class="form-label">Image</label>
          <input maxlength="500" type="url" class="form-control" placeholder="Would you like to include an image?">
        </div>
        <div>
          <label for="body" class="form-label">Body</label>
          <textarea rows="5" required maxlength="5000" class="form-control" placeholder="Please include a body in your post"></textarea>
        </div>
        <div>
          <button type="submit" class="btn submitButton">Submit</button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { logger } from '../utils/Logger';
export default {
  setup() {

    return {
      account: computed(() => AppState.account),
      formOpen: computed(() => AppState.accountEdit),
      callForm() {
        if (AppState.accountEdit == false) {
          AppState.accountEdit = true
          logger.log(AppState.accountEdit, 'form')
        } else if (AppState.accountEdit == true) {
          AppState.accountEdit = false
          logger.log(AppState.accountEdit, 'form')
        }
      }
    }
  }
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
  height: 92.2vh;
}

.background {
  background-image:url(`${account.coverImg}`)
}
</style>
