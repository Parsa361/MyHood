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
export default {
    name: "Articles",
    data() {
        return {
            articles: [
                {
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    image: "fix-hood",
                    description: 'هود های قوی',
                    title: "آموزش مقدماتی تعمیر ایرادات جزعی هود های مخفی"
                },
                {
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    image: "clean-hood",
                    description: 'هود های زیبا',
                    title: "روش تمیز کردن انواع هودها"
                },
                {
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    image: "hood-diversity",
                    description: 'هود های خوشگل بابا',
                    title: "هر آنچه درباره هود مناسب آشپزخانه خود باید بدانید"
                },
            ]
        };
    },
    components: { ArticleCom }
}
</script>