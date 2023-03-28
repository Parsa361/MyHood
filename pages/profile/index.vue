<template>
    <div>
        This is profile user

        <div class="text-center">
            <button @click="onLogout" class=" inline-block bg-red-500 text-white p-2 rounded-md">خروج</button>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['auth'],
    methods: {
        onLogout() {
            this.$store.dispatch('logout')
            this.$router.push('/')
        },

    }
}
</script>
