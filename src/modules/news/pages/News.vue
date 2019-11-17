<template>
    <div class="news-wrapper">
        <div class="posts-container">
            <Indicator v-if="!loaded" width="70" height="70"></Indicator>
            <Post
                    v-else
                    v-for="(post, index) in news"
                    :key="index"
                    :title="post.title"
                    :img="post.imgUri"
                    :tag="post.tag"
                    :content="post.content"
                    :date="post.date"
            ></Post>
            <img v-for="(post, index) in news" :src="post.imgUri" alt="" @load="imgLoading(post)" style="display: none;">
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
                loadedList: []
            }
        },

        created() {
            this.fetchNews();
        },

        methods: {
           async fetchNews() {
                await this.newsService.getNews().then(res => {
                    this.news = res.data;
                });
                await this.fetchImgUrl();
            },
            fetchImgUrl() {
                this.news.forEach(news => {
                    this.newsService.getImgUrl(news.img).then(res => {
                        news.imgUri = res.data.hits[0].webformatURL;
                       this.news = [...this.news];
                    });
                })
            },
            imgLoading(post) {
               this.loadedList.push(post);
                this.loaded = this.loadedList.length === this.news.length;
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../../assets/styles/common';

    .news-wrapper {
        width: 100%;
        height: 100%;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 5px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            border-radius: 10px;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background-color: rgba($color-white, 0.6);
            border-radius: 10px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: $color-white;
        }

        .posts-container {
            width: 100%;
            min-height: 100%;
            @include flex-column-center;
            position: relative;
        }
    }
</style>
