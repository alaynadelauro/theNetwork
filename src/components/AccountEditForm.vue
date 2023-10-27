<template>
    <div class="col-7">
        <form class="p-2 pb-3 text-start">
            <div>
                <label for="name" class="form-label">Name</label>
                <input maxlength="30" type="text" class="form-control" placeholder="Name">
            </div>
            <div>
                <label for="email" class="form-label">Email</label>
                <input maxlength="500" type="url" class="form-control" placeholder="Email">
            </div>
            <div>
                <label for="github" class="form-label">Github</label>
                <input maxlength="500" type="url" class="form-control" placeholder="Github">
            </div>
            <div>
                <label for="linkedin" class="form-label">Linkedin</label>
                <input maxlength="500" type="url" class="form-control" placeholder="Linkedin">
            </div>
            <div>
                <label for="picture" class="form-label">Picture</label>
                <input maxlength="500" type="url" class="form-control" placeholder="Profile Image Here">
            </div>
            <div>
                <label for="body" class="form-label">Body</label>
                <textarea rows="5" required maxlength="5000" class="form-control" placeholder="Please include a body in your post"></textarea>
            </div>
            <div class="d-flex justify-content-center">
                <label for="graduated" class="form-label pe-3">Graduated</label>
                <input type="checkbox">
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="text-center btn submitButton">Submit</button>
            </div>
        </form>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.submitButton {
    background-color: mediumspringgreen;
    color: black;
}
</style>