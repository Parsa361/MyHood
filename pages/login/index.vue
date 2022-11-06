<template>
    <div class="container mx-auto my-[8rem] bg-white rounded-tr-xl rounded-bl-xl p-[2rem]">
        <form class="font-Lalezar gap-y-5" action='#' :click="onSubmit">
            <div class="mb-[2rem]">
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">شماره
                    تماس</label>
                <input v-model="information.username" type="phone" id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                    placeholder="مثال = 09358924414" required="">
            </div>
            <div class="mb-[2rem]">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">رمز
                    عبور</label>
                <input v-model="information.password" type="password" id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                    placeholder="********" required="">
            </div>
            <div class="flex items-start mb-[2rem]">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-400 dark:ring-offset-gray-800">
                </div>
                <label for="remember" class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">مرا به خاطر
                    بسپار</label>
            </div>

            <div class="flex flex-col md:flex-row">
                <button type="submit"
                    class="text-white bg-yellowHood hover:bg-yellowHood focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-800">تایید</button>
                <p class="md:mr-5 text-center mt-2">حساب کاربری ندارید ؟</p>
                <a href="/signup" class="text-center mt-2 mr-2 text-yellowHood">حساب کاربری ایجاد کنید</a>
            </div>
        </form>
    </div>
</template>

<script >
export default {
    data() {
        return {
            information: {}
        }
    },
    methods: {
        async onSubmit() {
            await this.$axios
                .$post('/api/v1/token/login/', this.information)
                .then(r => {
                    console.log(r.data);
                })
                .catch((e) => {
                    console.log(e);
                })
        },

    }
}
</script>
