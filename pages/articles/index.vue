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
                    id: 0,
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    img: "clean-hood",
                    description: 'هود های قوی',
                    title: "آموزش مقدماتی تعمیر ایرادات جزعی هود های مخفی"
                },
                {
                    id: 1,
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    img: "fix-hood",
                    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
                    title: "تمام راه های تمیز کردن هود های جزیره ای و هود های مورب"
                },
                {
                    id: 2,
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    img: "diversity-hood",
                    description: 'هود های سریع و خشن 10',
                    title: "این هود ها کیفیتش انصافا عالیه بخرید پشیمون نمیشید"
                },
            ]
        };
    },
    components: { ArticleCom },

}
</script>