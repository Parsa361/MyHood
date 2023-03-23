<template>
    <div class="container mx-auto my-10 p-[10em] shadow-lg rounded-xl">
        <hr class="border-black">
        <p v-if="error.statusCode === 404" class="text-center font-bold text-black text-[2rem]">صفحه یافت نشد!!</p>
        <p class="text-center font-bold text-black" v-else>پوزش, احتمالا خطایی رخ داده است!</p>
        <hr class="border-black">
    </div>
</template>
  
<script>
export default {
    props: ['error'],
    layout: 'error'
}
</script>