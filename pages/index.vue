<template>
  <div>
    <HomeSlider />
    <IconBar />
  </div>
</template>

<script>
import HomeSlider from '~/components/HomeSlider.vue';
import IconBar from '~/components/Icons.vue';

export default {
  name: "IndexPage",
  components: { HomeSlider, IconBar, },

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
