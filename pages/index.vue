<template>
  <div>
    <HomepageSlider @next="onNext" @prev="onPrev">
      <Slides :direction="direction" :visibleSlide="visibleSlide" v-for="(slide, index) in slides" :key="index"
        :index="index">
        <div class="h-full relative">
          <img :src="slide.image" :alt='slide.title' class="w-full h-full">
          <span :class="index % 2 === 0 ? 'left-5 md:left-20 lg:left-36' : 'right-5 md:right-20 lg:right-36 text-white'"
            class="absolute top-1/3 line-clamp-2 md:line-clamp-none max-w-[150px] sm:max-w-[200px] md:max-w-xs lg:max-w-md tracking-wider leading-8 font-VazirMedium text-[0.5rem] sm:text-[0.75rem] md:text-[1rem] lg:text-[1.5rem]">{{
              slide.text }}</span>
        </div>
      </Slides>
    </HomepageSlider>


    <IconBar />
    <CategoriesSection />
    <ArticleSec />
    <AboutSec />
  </div>
</template>

<script>
import IconBar from "~/components/HomePageComponents/Icons.vue";
import CategoriesSection from "~/components/HomePageComponents/CategoriesSec.vue";
import ArticleSec from "~/components/HomePageComponents/ArticleSec.vue";
import AboutSec from "~/components/HomePageComponents/AboutSec.vue";
import HomepageSlider from "~/components/HomePageComponents/SliderSection/HomepageSlider.vue";
import Slides from "~/components/HomePageComponents/SliderSection/Slides.vue";

export default {
  name: "IndexPage",
  data() {
    return {
      slides: [
        { image: require('@/static/images/slide4.png'), text: 'مشاوره برای انتخاب هود مورد نیاز شما نسبت به آشپزخانه', title: 'انواع هود جزیره ای زیبا' },
        { image: require('@/static/images/slide3.png'), text: 'هود های زیر کابینتی و مخفی و نصب توسط کارکنان خبره', title: 'هود مخفی توکار | زیر کابینتی' },
        { image: require('@/static/images/slide2-2.png'), text: 'رنگ بندی متنوع و بهترین برند های هود آشپزخانه', title: 'هود جزیره ای دیواری' },
        { image: require('@/static/images/Untitled-2.png'), text: 'انواع هود های مقرون به صرفه جزیره ای برای زیباتر کردن آشپزخانه شما', title: 'مدل های مختلف انواع هود' }
      ],
      visibleSlide: 0,
      direction: 'left'
    }
  },
  computed: {
    slidesLen() {
      return this.slides.length
    }
  },
  methods: {
    onNext() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0
      } else this.visibleSlide++
      this.direction = 'left'

    },
    onPrev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1
      } else this.visibleSlide--
      this.direction = 'right'

    },
    startTimer() {
      setInterval(() => {
        this.onNext()
      }, 4000)
    }
  },
  mounted() {
    this.startTimer()
  },
  components: { IconBar, CategoriesSection, ArticleSec, AboutSec, HomepageSlider, Slides },
  head() {
    return {
      title: "صفحه اصلی MyHood.ir",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "محصولات زیبا و مقرون به صرفه, کسب اطلاعات درباره انواع هود و خرید و نصب هود های آشپزخانه",
        },
      ],
    };
  },
};
</script>
