<template>
    <div class="course-wrapper page" :style="{ 'overflow-y': opened ? 'hidden' : 'auto' }">
        <div class="posts-container">
            <Indicator v-if="!loaded" width="70" height="70"></Indicator>
            <Post
                    v-else
                    v-for="(item, index) in courses"
                    :key="index"
                    :content="item.content"
                    :courseId="item.courseId"
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
    import Modal from '../components/Modal'
    import { coursesService } from "../../../core/services";
    import { bus } from "../../../main";

    export default {
        name: "Course",
        components: {
            Indicator,
            Post,
            Modal
        },

        data() {
            return {
                loaded: false,
                coursesService: coursesService,
                courses: [],
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
                this.coursesService.getCourses().then(res => {
                    this.courses = res.data;
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
