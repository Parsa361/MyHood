<template>
    <div>
        <article v-for="article in articles"
            class="flex flex-col md:flex-row mb-5 min-h-[10em] md:bg-white rounded-tl-xl rounded-bl-xl">
            <NuxtLink :to="`/articles/${article.id}`">
                <img :src="require(`~/assets/images/${article.img}.png`)" :alt="article.img"
                    class="w-[10em] h-[10em] mx-auto md:mx-0">
            </NuxtLink>

            <div class="flex flex-col py-5">
                <NuxtLink :to="`/articles/${article.id}`">
                    <h3 class="text-sm lg:text-xl mr-5 font-Lalezar font-light text-center md:text-start">
                        {{article.title}}
                    </h3>
                </NuxtLink>

                <p
                    class="md:max-w-sm lg:max-w-3xl mr-5 pl-11 font-VazirLight mt-4 text-xs lg:text-lg text-center md:text-start truncate">
                    {{article.description}}</p>
            </div>



        </article>



    </div>
</template>

<script>
export default {
    name: 'ArticleCom',
    props: [
        'articles',
    ]
}
</script>