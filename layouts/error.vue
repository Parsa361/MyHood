<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="p-10 shadow-lg rounded-xl">
        <div class="text-center">
          <img src="https://picsum.photos/200" class="w-64 h-64 mx-auto mb-5 rounded-md">
          <h1 class="text-4xl font-VazirBold text-black mb-3" v-if="error.statusCode === 404">صفحه یافت نشد!!</h1>
          <h1 class="text-4xl font-VazirMedium text-black mb-3" v-else>پوزش, احتمالا خطایی رخ داده است!</h1>
          <p class="text-lg text-gray-600 mb-5 font-VazirLight">متاسفانه خطایی رخ داده است و صفحه در دسترس نیست. لطفا بعدا دوباره امتحان کنید.</p>
          <NuxtLink to="/" class="bg-yellowHood hover:bg-yellowHood/70 text-gray-600 hover:text-white font-bold py-2 px-4 rounded font-VazirLight">بازگشت به صفحه اصلی</NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['error'],
    layout: 'error'
  }
  </script>
  
  <style scoped>

  </style>