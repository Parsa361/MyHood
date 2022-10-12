<template>
    <div>
        <h1>Here is our articles</h1>
        <article v-for="article in articles">
            <img :src="require(`~/assets/images/${article.image}.png`)" :alt="article.image">
            <h3>
                {{article.title}}
            </h3>
            <p>
                {{article.content}}
            </p>

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