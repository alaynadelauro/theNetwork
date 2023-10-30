<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2">
                <UserProfCardComponent :userProp="user" />
            </div>
            <div class="col-8 bg-white">

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
import { AppState } from '../AppState.js';
import { computed, reactive, onMounted } from 'vue';
import AdCard from '../components/AdCard.vue';
import { addService } from '../services/AddService.js';
import { logger } from '../utils/Logger';
import UserProfCardComponent from '../components/UserProfCardComponent.vue';
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
            ads: computed(() => AppState.ads),
            user: computed(() => AppState.account)
        };
    },
    components: { AdCard, UserProfCardComponent }
};
</script>


<style lang="scss" scoped>
.navText {
    color: whitesmoke;
    font-family: 'Merienda', cursive;
}

.myNav {
    background-color: rgb(48, 3, 39);
    color: whitesmoke;
    height: 89.3vh;
}

.advertisement {
    height: 39vh;
}
</style>