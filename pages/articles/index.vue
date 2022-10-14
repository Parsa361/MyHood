<template>
    <div class="container mx-auto">
        <div class="flex flex-row justify-center items-center text-center gap-2 mt-8 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="111" height="3"
                class="sm:flex w-[4rem] md:w-[5rem] lg:w-[6rem]" viewBox="0 0 111 3">
                <line id="Line_2" data-name="Line 2" x2="108" transform="translate(1.5 1.5)" fill="none"
                    stroke="#fcb900" stroke-linecap="round" stroke-width="3" />
            </svg>
            <span class="font-Lalezar text-sm md:text-[1.5rem] lg:text-[2rem]">مقالات</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="111" height="3"
                class="sm:flex w-[4rem] md:w-[5rem] lg:w-[6rem]" viewBox="0 0 111 3">
                <line id="Line_2" data-name="Line 2" x2="108" transform="translate(1.5 1.5)" fill="none"
                    stroke="#fcb900" stroke-linecap="round" stroke-width="3" />
            </svg>
        </div>
        <ArticleCom :articles="articles" />
    </div>
</template>

<script>
import ArticleCom from '~/components/Article.vue';
import axios from 'axios'
export default {
    name: "Articles",
    data() {
        return {
            articles: []
        };
    },
    components: { ArticleCom },
    mounted() {
            this.getArticles()
        },
        methods: {
            async getArticles() {
                try {
                    const res = await this.$axios.$get('/api/v1/articles');
                    this.articles= res
                } catch (err) {
                    console.log(err)
                }
            }
        }
}
</script>