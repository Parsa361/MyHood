<template>
  <div>
    <HomepageSlider @next="onNext" @prev="onPrev">
      <Slides :direction="direction" :visibleSlide="visibleSlide" v-for="(slide, index) in slides" :key="slide"
        :index="index">
        <img :src="slide" alt='image' class="w-full h-full">
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
import Slides from "~/components/HomePageComponents/Slides.vue";

export default {
  name: "IndexPage",
  data() {
    return {
      slides: [
        require('@/static/images/slide4.png'),
        require('@/static/images/slide3.png'),
        require('@/static/images/slide2-2.png'),
        require('@/static/images/Untitled-2.png')
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
      title: "صفحه اصلی MyHood",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "صفحه اصلی سایت هود من, محصولات زیبا و مقرون به صرفه",
        },
      ],
    };
  },
};
</script>
