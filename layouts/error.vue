<template>
    <div class="container mx-auto my-10 p-[10em] bg-black rounded-xl">
        <hr>
        <p v-if="error.statusCode === 404" class="text-center font-bold text-white">صفحه یافت نشد!!</p>
        <p class="text-center font-bold text-white" v-else>An error occurred</p>
        <hr>
    </div>
</template>
  
<script>
export default {
    props: ['error'],
    layout: 'error'
}
</script>