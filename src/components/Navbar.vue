<template>
  <div class="container-fluid myNav sticky-top">
    <div class="row justify-content-between align-items-center">
      <div class="col-4">
        <router-link class="d-flex" :to="{ name: 'Home' }">
          <div class="d-flex align-items-center py-2">
            <h1 class="navText"><i class="mdi mdi-brain pe-3"></i>The Network</h1>
          </div>
        </router-link>
      </div>
      <div class="col-2 d-flex justify-content-end">
        <div>
          <Login />
        </div>
      </div>
    </div>
  </div>
</template>


<!-- NOTE This is my example router link -->
<!-- <router-link :to="{ name: 'About' }" class="btn selectable text-uppercase">
            About
          </router-link> -->
<script>
import Login from './Login.vue';
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
.myNav {
  background-color: rgb(48, 3, 39);
  color: whitesmoke;
  border-bottom: 4px solid rgb(6, 0, 5);
  box-shadow: 5px 5px 15px black;
}

.navText {
  color: whitesmoke;
  font-family: 'Merienda', cursive;
}
</style>
