<template>
  <div>
    <NavBar class="mb-5"/>
    <!-- Loading -->
    <div v-if="isLoading" class="flex items-center justify-center h-screen">
      <svg class="animate-spin h-12 w-12 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 01-8-8H0c0 6.627 5.373 12 12 12v-4zm4-7.291A7.962 7.962 0 0120 12h4c0 3.042-1.135 5.824-3 7.938l-3-2.647z">
        </path>
      </svg>
    </div>
    
    <div>
      <Nuxt class="container mx-auto px-1" />
    </div>

    <FooterCom />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import FooterCom from "~/components/FooterCom.vue";
export default {
  data() {
    return {
      isLoading: false
    }
  },
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
  },
  created() {
    this.$axios.onRequest(() => {
      this.isLoading = true
    })
    this.$axios.onResponse(() => {
      this.isLoading = false
    })
    this.$axios.onError(() => {
      this.isLoading = false
    })
  },
};
</script>