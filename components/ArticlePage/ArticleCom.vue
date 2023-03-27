<template>
    <div>
        <article v-for="(article, index) in articles" :key="index"
            class="flex flex-col md:flex-row mb-5 min-h-[10em] md:bg-white rounded-tl-xl rounded-bl-xl">
            <!-- Img -->
            <NuxtLink :to="`/articles/${index}`" class="mx-auto md:mx-0">
                <img :src="require(`~/static/images/${article.img}.png`)" :alt="article.img" class="h-[10em]">
            </NuxtLink>
            <!-- Text -->
            <div class="flex flex-col py-5 mt-2 bg-white md:bg-none rounded-lg">
                <!-- Title -->
                <NuxtLink :to="`/articles/${index}`"
                    class="text-center md:text-end md:mr-5 text-sm lg:text-xl font-Lalezar font-light truncate">
                    {{ article.title }}
                </NuxtLink>
                <!-- Description -->
                <p
                    class="md:max-w-sm lg:max-w-3xl xl:max-w-5xl md:mr-5 font-VazirLight mt-4 text-xs lg:text-lg text-center md:text-end line-clamp-2">
                    {{ article.description }}</p>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'ArticleCom',
    props: {
        articles: {
            required: true,
            type: Array
        }
    }
}
</script>