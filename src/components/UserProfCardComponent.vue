<template>
    <div v-if="userProp.id" class="d-flex flex-column align-items-center text-light">
        <img class="image-fluid rounded-circle profileImg" :src="userProp.picture">
        <h1 class="shadow navText pt-4">{{ userProp.name }}</h1>
        <p v-if="userProp.email"><i class="mdi mdi-mail pe-3"></i>{{ userProp.email }}</p>
        <p v-if="userProp.github"><i class="mdi mdi-github pe-3"></i>{{ userProp.github }}</p>
        <p v-if="userProp.linkedin"><i class="mdi mdi-linkedin pe-3"></i>{{ userProp.linkedin }}</p>
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i class="mdi mdi-pencil"></i>
            </button>
        </div>
    </div>
    <div v-else-if="!userProp.id" class="text-center text-light">
        <h1 class="navText">Welcome to The Network!</H1>
        <p class="mt-3">Please log in to proceed</p>
    </div>
    <div>
        <PostForm />
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Account } from '../models/Account';
import PostForm from './PostForm.vue';
export default {
    props: {
        userProp: { type: Account }
    },
    setup() {
        return {};
    },
    components: { PostForm }
};
</script>


<style lang="scss" scoped>
.profileImg {
    height: 20vh;
    width: 19vh;
    object-fit: cover;
    object-position: center;
    box-shadow: 5px 5px 15px black;
}

.navText {
    color: whitesmoke;
    font-family: 'Merienda', cursive;
}

.shadow {
    text-shadow: 5px 5px 15px black;
    // box-shadow: 5px 5px 15px black;
    ;
}
</style>