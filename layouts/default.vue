<template>
  <div>
    <NavBar />

    <div>
      <Nuxt class="container mx-auto"/>
    </div>

    <FooterCom />
  </div>
</template>

<style>


</style>

<script>
import NavBar from "~/components/NavBar.vue";
import FooterCom from "~/components/FooterCom.vue";
export default {
  components: {
    NavBar,
    FooterCom,
  },
  head: {
    title: "هود من",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "هود من زیباترین و ارزان قیمت ترین هود هارا برایتان به ارمغان میاورد",
      },
      { name: "format-detection", content: "telephone=no" },
    ],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  beforeCreate() {
    this.$store.commit("initializeStore");
  }
};
</script>