<template>
    <div>
        <article v-for="article in articles" class="flex flex-row mb-5 h-[10em] bg-white rounded-tl-xl rounded-bl-xl">
                <img :src="require(`~/assets/images/${article.image}.png`)" :alt="article.image"
                    class="w-[10em] h-[10em]">
            <div class="flex flex-col">
                <h3 class="mr-5 font-Lalezar font-light mt-2">{{article.title}}</h3>
                <p class="mr-5 pl-11 font-VazirLight my-auto">{{article.content}}</p>
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