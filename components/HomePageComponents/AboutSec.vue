
<template>
    <div>
        <!-- Categories text with 2 yellow Svg -->
        <CategoryTitle>پست های اینستاگرام</CategoryTitle>


        <section class="text-gray-600">
                <div class="flex px-5 pb-24 pt-10 items-center justify-center flex-col">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="MyHood instagram page"
                        src="~/static/images/Instagram.jpg">
                    <div class="text-center lg:w-2/3 w-full">
                        <div class="shadow-lg p-2 md:p-5">
                            <h1 class="title-font mb-4 font-Lalezar tracking-wider text-gray-900 text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]">
                                درباره ما</h1>
                            <p
                                class="mb-8 leading-relaxed font-VazirLight line-clamp-4 sm:line-clamp-5 text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]">
                                لورم ایپسوم متن ساختگی
                                با تولید سادگی نامفهوم از صنعت چاپ، و با
                                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد،</p>
                            <div class="flex justify-center items-center gap-5">
                                <ButtonUI>پیج اینستاگرام</ButtonUI>
                                <NuxtLink to="/about">
                                    <ButtonUI>درباره ما</ButtonUI>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    </div>
</template>

<script>
import ButtonUI from '../ButtonUI.vue';
import CategoryTitle from '../CategoryTitle.vue';

export default {
    name: "AboutSec",
    components: { CategoryTitle, ButtonUI }
}
</script>
