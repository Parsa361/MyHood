<template>
  <HomeSlider />
</template>

<script>
import HomeSlider from '~/components/HomeSlider.vue';

export default {
  name: "IndexPage",
  components: { HomeSlider },

  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  }
}

</script>
