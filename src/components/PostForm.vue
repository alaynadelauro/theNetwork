<template>
    <div class="modal fade modal-xl" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">What would you like to say?</h1>
                    <button type="button" class="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- SECTION Form starts here -->
                    <form class="p-2 pb-3">
                        <div>
                            <label for="image" class="form-label">Image</label>
                            <input maxlength="500" type="url" class="form-control" placeholder="Would you like to include an image?">
                        </div>
                        <div>
                            <label for="body" class="form-label">Body</label>
                            <textarea rows="5" required maxlength="5000" class="form-control" placeholder="Please include a body in your post"></textarea>
                        </div>
                        <div class="d-flex text-end mt-4 mb-0 me-3 justify-content-end">
                            <div>
                                <button type="submit" class="btn submitButton">Submit</button>
                            </div>
                            <div>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>

                    </form>
                    <!-- SECTION form ends here -->
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
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


<style lang="scss" scoped></style>