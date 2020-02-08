<template>
    <div class="course-wrapper page" :style="{ 'overflow-y': opened ? 'hidden' : 'auto' }">
        <div class="posts-container">
            <Indicator v-if="!loaded" width="70" height="70"></Indicator>
            <Post
                    v-else
                    v-for="(item, index) in workshops"
                    :key="index"
                    :content="item.content"
                    :workshopId="item.workshopId"
                    :id="item.id"
                    :date="item.date"
            ></Post>
        </div>
        <Modal></Modal>
    </div>
</template>

<script>

    import Indicator from '../../../core/ui/Indicator';
    import Post from '../components/Post';
    import { workshopsService } from "../../../core/services";
    import Modal from '../components/Modal';
    import { bus } from "../../../main";

    export default {
        name: "WorkShops",
        components: {
            Indicator,
            Post,
            Modal
        },

        data() {
            return {
                loaded: false,
                workshopsService: workshopsService,
                workshops: [],
                opened: false
            }
        },

        created() {
            this.fetchCourses();
            bus.$on('openModal', () => {
                this.opened = true;
            });
            bus.$on('closeModal', () => {
                this.opened = false;
            });
        },

        methods: {
            fetchCourses() {
                this.workshopsService.getWorkshops().then(res => {
                    this.workshops = res.data;
                    this.loaded = true;
                });
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../../assets/styles/common';

    .course-wrapper {
        height: 100%;
        overflow-y: auto;

        @include scrollStyle($color-white);

        .posts-container {
            width: 100%;
            min-height: 100%;
            @include flex-column-center;
            position: relative;
        }
    }
</style>
