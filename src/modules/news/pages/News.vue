<template>
    <div class="news-wrapper page">
        <div class="posts-container">
            <Indicator v-if="!loaded" width="70" height="70" />
            <Post
                    v-else
                    v-for="(post, index) in news"
                    :key="index"
                    :title="post.title"
                    :img="post.img"
                    :tag="post.tag"
                    :content="post.content"
                    :date="post.date"
            />
        </div>
    </div>
</template>

<script>

    import Indicator from '../../../core/ui/Indicator';
    import Post from '../components/Post';
    import { newsService } from "../../../core/services";

    export default {
        name: "News",
        components: {
            Indicator,
            Post
        },

        data() {
            return {
                loaded: false,
                newsService: newsService,
                news: [],
            }
        },

        created() {
            this.fetchNews();
        },

        methods: {
           fetchNews() {
                this.newsService.getNews().then(res => {
                    this.news = res.data;
                    this.loaded = true;
                });
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../../assets/styles/common';

    .news-wrapper {
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
