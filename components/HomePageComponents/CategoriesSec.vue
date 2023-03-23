<template>
  <div>
    <!-- Categories text with 2 yellow Svg -->
    <CategoryTitle>دسته بندی محصولات</CategoryTitle>



    <!-- Container -->
    <div class="container mx-auto my-[3.5rem] flex flex-col mb-[0.5rem]" v-for="(cat, index) in category" :key="index"
      :class="index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'">

      <!-- Image-->
      <div class="mx-auto max-w-sm md:w-1/2 md:mx-0 md:max-w-none mb-1 md:mb-0">
        <img :src="require(`~/static/images/${cat.catImg}.png`)" alt="hidden hood"
          class="object-cover object-center h-full" />
      </div>
      <!-- Text-->
      <div class="flex flex-col relative md:w-1/2 py-2 bg-white rounded-lg"
        :class="index % 2 === 0 ? 'md:mr-5 md:pr-2' : 'md:ml-5 md:pr-2'">
        <p class="text-center md:text-start font-Lalezar text-[0.75rem] xl:mb-[1rem] md:text-[1.5rem] truncate">
          {{ cat.catTitle }}</p>
        <p
          class="lg:flex text-center md:text-start font-VazirLight line-clamp-2 md:line-clamp-4 lg:line-clamp-6 xl:line-clamp-8 text-[0.75rem] md:text-[1rem] xl:mb-[1rem]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
          نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
          کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
          جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
          طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
          فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
          موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
          نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
          دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <div class="md:text-left text-center ml-5">
          <ButtonUI>جزئیات بیشتر</ButtonUI>
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