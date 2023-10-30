<template>
    <img class="image-fluid w-100 h-100" :src="adProp.tall" :alt="adProp.title">
    <!-- <a class="mb-0">{{ adProp.link }}</a> -->
</template>


<script>
// import { AppState } from '../AppState';
// import { computed, reactive, onMounted } from 'vue';
import { Ad } from '../models/Ad';
export default {
    props: {
        adProp: { type: Ad }
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped></style>