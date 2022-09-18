<template>
    <div>
        <NavBar />

        <div>
            <Nuxt />
        </div>

        <FooterCom />
    </div>
</template>

<style>
body {
    direction: rtl;
}
</style>

<script>
import NavBar from '~/components/NavBar.vue';
import FooterCom from '~/components/FooterCom.vue';
export default {
    components: {
        NavBar,
        FooterCom
    }
}
</script>