<template>
    <div class="col-7">
        <form @submit.prevent="editAccount()" class="p-2 pb-3 text-start">
            <div>
                <label for="name" class="form-label">Name</label>
                <input v-model="editable.name" maxlength="30" type="text" class="form-control" placeholder="Name">
            </div>
            <div>
                <label for="github" class="form-label">Github</label>
                <input v-model="editable.github" maxlength="500" type="url" class="form-control" placeholder="Github">
            </div>
            <div>
                <label for="linkedin" class="form-label">Linkedin</label>
                <input v-model="editable.linkedin" maxlength="500" type="url" class="form-control" placeholder="Linkedin">
            </div>
            <div>
                <label for="picture" class="form-label">Picture</label>
                <input v-model="editable.picture" maxlength="500" type="url" class="form-control" placeholder="Profile Image Here">
            </div>
            <div>
                <label for="bio" class="form-label">Bio</label>
                <textarea v-model="editable.bio" rows="5" maxlength="5000" class="form-control" placeholder="Say a few words about yourself!"></textarea>
            </div>
            <div class="d-flex justify-content-center">
                <label for="graduated" class="form-label pe-3">Graduated</label>
                <input v-model="editable.graduated" type="checkbox">
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="text-center btn submitButton">Submit</button>
            </div>
        </form>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { accountService } from '../services/AccountService';
export default {
    setup() {
        const editable = ref({})
        return {
            formOpen: computed(() => AppState.accountEdit),
            editable,
            async editAccount() {
                try {
                    await accountService.editAccount(editable.value)
                    editable.value = {}
                    AppState.accountEdit = false
                } catch (error) {
                    Pop.error(error)
                    logger.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.submitButton {
    background-color: mediumspringgreen;
    color: black;
}
</style>