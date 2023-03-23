<template>
    <div>
        <!-- Categories text with 2 yellow Svg -->
        <CategoryTitle>مقالات پربازدید</CategoryTitle>


        <div class="flex flex-col sm:flex-row flex-wrap gap-[2rem] md:gap-[3.5rem] lg:gap-[5rem] items-center justify-center my-[3.5rem]">

            <div v-for="(article, index) in articles" :key="index"
                class="relative max-w-[14rem] md:max-w-[17rem] lg:max-w-[20rem] bg-white h-[25rem] md:h-[31rem] lg:h-[36rem] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                <NuxtLink :to="`/articles/${article.id}`">
                    <img class="rounded-t-lg w-full h-[10rem] md:h-[15rem]"
                        :src="require(`~/static/images/${article.img}.png`)" :alt="article.img">
                </NuxtLink>
                <div class="p-5">

                    <h5
                        class="mb-2 font-Lalezar text-[1rem] md:text-[1.25rem] tracking-tight text-gray-900 dark:text-white line-clamp-2">
                        {{ article.title }}
                    </h5>

                    <p
                        class="mb-3 font-VazirLight text-[1rem] md:text-[1.25rem] text-gray-700 dark:text-gray-400 line-clamp-3 lg:line-clamp-5">
                        {{
                            article.description
                        }}
                    </p>

                    <NuxtLink :to="`/articles/${article.id}`"
                        class="inline-flex absolute left-4 bottom-4 items-end py-2 px-3 text-[1rem] lg:text-[1.25rem] font-medium text-center text-white bg-yellowHood rounded-tl-lg rounded-br-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:ring-yellow-400 transform active:scale-[0.8]">
                        بخوانید
                        <svg aria-hidden="true" class="mr-5 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </NuxtLink>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import CategoryTitle from '../CategoryTitle.vue';

export default {
    name: "ArticleSec",
    data() {
        return {
            articles: [
                {
                    id: 0,
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    img: "clean-hood",
                    description: "هود های قوی",
                    title: "آموزش مقدماتی تعمیر ایرادات جزعی هود های مخفی"
                },
                {
                    id: 1,
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    img: "fix-hood",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
                    title: "تمام راه های تمیز کردن هود های جزیره ای و هود های مورب"
                },
                {
                    id: 2,
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    img: "diversity-hood",
                    description: "هود های سریع و خشن 10",
                    title: "این هود ها کیفیتش انصافا عالیه بخرید پشیمون نمیشید"
                },
            ]
        };
    },
    components: { CategoryTitle }
}
</script>
