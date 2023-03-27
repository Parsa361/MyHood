<template>
    <div class="container mx-auto">
        <!-- Article title -->
        <CategoryTitle>مقالات</CategoryTitle>
        <!-- Article Component -->
        <ArticleCom :articles="articles" />
    </div>
</template>

<script>
import ArticleCom from '~/components/ArticlePage/ArticleCom.vue';
import CategoryTitle from '~/components/CategoryTitle.vue';
export default {
    name: "Articles",
    data() {
        return {
            articles: [
                {
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    img: "clean-hood",
                    description: 'هود های قوی',
                    title: "آموزش مقدماتی تعمیر ایرادات جزعی هود های مخفی"
                },
                {
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    img: "fix-hood",
                    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
                    title: "تمام راه های تمیز کردن هود های جزیره ای و هود های مورب"
                },
                {
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id blanditiis, porro eius sequi iure corrupti.Vel quis id expedita nesciunt dicta, deleniti cupiditate cum, fuga repellendus rerum, similique totam!",
                    img: "diversity-hood",
                    description: 'هود های سریع و خشن 10',
                    title: "این هود ها کیفیتش انصافا عالیه بخرید پشیمون نمیشید"
                },
            ]
        };

        //todo : I have to add a method here and access $store in that and dispatch an action to request
        //to an backend api in there and use computed property here to access those data
    },
    components: { ArticleCom, CategoryTitle },

}
</script>