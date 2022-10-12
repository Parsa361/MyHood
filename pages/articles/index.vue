<template>
    <div class="container mx-auto">
        <ArticleCom :articles="articles" />
    </div>
</template>

<script>
import ArticleCom from '~/components/Article.vue';
export default {
    name: "Articles",
    data() {
        return {
            articles: [
                {
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    image: "fix-hood",
                    title: "آموزش مقدماتی تعمیر ایرادات جزعی هود های مخفی"
                },
                {
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    image: "clean-hood",
                    title: "روش تمیز کردن انواع هودها"
                },
                {
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    image: "hood-diversity",
                    title: "هر آنچه درباره هود مناسب آشپزخانه خود باید بدانید"
                },
            ]
        };
    },
    components: { ArticleCom }
}
</script>