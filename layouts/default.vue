<template>
    <div>
        <NavBar />
        <Nuxt />
    </div>
</template>

<style>
body {
    direction: rtl;
}
</style>

<script>
import NavBar from '~/components/NavBar.vue';
export default {
    components: {
        NavBar,
    }
}
</script>