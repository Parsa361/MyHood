<template>
  <div>
    <!-- Categories text with 2 yellow Svg -->
    <CategoryTitle>دسته بندی ها</CategoryTitle>



    <!-- Container -->
    <div class="my-16 md:mb-32 md:mt-16 flex flex-col" v-for="(cat, index) in category" :key="index"
      :class="index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'">

      <!-- Image-->
      <div class="mx-auto max-w-xs lg:w-1/2 md:mx-0 lg:max-w-none mb-1 md:mb-0">
        <img :src="require(`~/static/images/${cat.catImg}.png`)" :alt="cat.catTitle" class="object-cover object-center" />
      </div>

      <!-- Text-->
      <div class="flex flex-col md:max-w-sm lg:max-w-none lg:w-1/2 py-2 bg-white rounded-lg px-2"
        :class="index % 2 === 0 ? 'md:mr-auto lg:mr-5' : 'md:ml-auto lg:ml-5'">
        <p class="text-center md:text-end font-Lalezar text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] truncate">
          {{ cat.catTitle }}</p>
        <p
          class="lg:flex text-center md:text-end font-VazirLight line-clamp-5 lg:line-clamp-6 xl:line-clamp-8 text-[1rem] md:text-[1.25rem] my-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
          متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
          سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
          طراحی اساسا مورد استفاده قرار گیرد.</p>
        <!-- Button -->
        <div class="md:text-left text-center ml-5 my-2 font-VazirMedium">
          <NuxtLink to="#">
            <ButtonUI>جزئیات بیشتر</ButtonUI>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonUI from '../ButtonUI.vue';
import CategoryTitle from '../CategoryTitle.vue'

export default {
  name: "CategoriesSection",
  data() {
    return {
      category: [
        {
          catTitle: "هود مخفی",
          catImg: "hidden"
        },
        {
          catTitle: "هود مورب",
          catImg: "movarab"
        },
        {
          catTitle: "هود جزیره ای",
          catImg: "island"
        },
      ]
    };
  },
  components: { ButtonUI, CategoryTitle }
};
</script>