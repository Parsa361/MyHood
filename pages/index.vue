<template>
  <div>
    <HomeSlider />
    <IconBar />
    <CategoriesSection />
  </div>
</template>

<script>
import HomeSlider from "~/components/HomeSlider.vue";
import IconBar from "~/components/Icons.vue";
import CategoriesSection from "~/components/CategoriesSec.vue";

export default {
  name: "IndexPage",
  components: { HomeSlider, IconBar, CategoriesSection },
  head() {
    return {
      title: "صفحه اصلی MyHood",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "مشاهده محصولات و دسته بندی ها و ارتباط با ما",
        },
      ],
    };
  },
};
</script>
