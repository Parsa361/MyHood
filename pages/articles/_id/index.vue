<template>
    <div>
        <article v-for="article in articles" :key="article.id" class="container mx-auto">
            <div v-if="article.id == $route.params.id">
                <img :src="require(`~/assets/images/${article.img}.png`)" :alt="article.img" class="mt-5 mx-auto max-w-xs md:max-w-sm lg:max-w-lg h-[15rem] md:h-[20rem] lg:h-[25rem]">
                <h1 class="text-center mt-5 font-Lalezar text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]">{{article.title}}</h1>

                <p class="mt-[2.5rem] font-VazirLight text-[0.75rem] md:text-[1rem] lg:text-[1.25rem]">{{article.description}}</p>
                <hr class="border border-black my-5">
                <p class="font-VazirLight text-[0.75rem] md:text-[1rem] lg:text-[1.25rem]">{{article.content}}</p>
            </div>
        </article>
    </div>
</template>

<script>
export default {
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
        }
    }
}
</script>
