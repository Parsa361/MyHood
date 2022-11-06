<template>
    <div class="container mx-auto my-[8rem]">

        <form class="font-Lalezar bg-white p-[2rem] rounded-tr-xl rounded-bl-xl" @submit.prevent="onSubmit">

            <div class="relative z-0 mb-[1.75rem] w-full group">
                <input v-model="information.username" type="phone" name="floating_phone" id="floating_phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellowHood focus:outline-none focus:ring-0 focus:border-yellowHood peer"
                    placeholder=" " required="">
                <label for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-yellowHood peer-focus:dark:text-yellowHood peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">شماره
                    تماس</label>
            </div>
            <div class="relative z-0 mb-[1.75rem] w-full group">
                <input v-model="password1" type="password" name="floating_password" id="floating_password"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellowHood focus:outline-none focus:ring-0 focus:border-yellowHood peer"
                    placeholder=" " required="">
                <label for="floating_password"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  top-1 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-yellowHood peer-focus:dark:text-yellowHood peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">رمز
                    عبور</label>
            </div>
            <div class="relative z-0 mb-[1.75rem] w-full group">
                <input v-model="password2" type="password" name="repeat_password" id="floating_repeat_password"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellowHood focus:outline-none focus:ring-0 focus:border-yellowHood peer"
                    placeholder=" " required="">
                <label for="floating_repeat_password"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  top-1 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-yellowHood peer-focus:dark:text-yellowHood peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">تکرار
                    رمز عبور</label>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 mb-[1.75rem] w-full group">
                    <input v-model="information.firstname" type="text" name="floating_first_name"
                        id="floating_first_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellowHood focus:outline-none focus:ring-0 focus:border-yellowHood peer"
                        placeholder=" " required="">
                    <label for="floating_first_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  top-1 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-yellowHood peer-focus:dark:text-yellowHood peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام</label>
                </div>
                <div class="relative z-0 mb-[1.75rem] w-full group">
                    <input v-model="information.lastname" type="text" name="floating_last_name" id="floating_last_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellowHood focus:outline-none focus:ring-0 focus:border-yellowHood peer"
                        placeholder=" " required="">
                    <label for="floating_last_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  top-1 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-yellowHood peer-focus:dark:text-yellowHood peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام
                        خانوادگی</label>
                </div>
            </div>

            <button type="submit"
                class="text-white bg-yellowHood hover:bg-yellowHood focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm w-full sm:w-auto px-[2rem] py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:focus:ring-yellowHood">ثبت
                نام</button>
        </form>

    </div>
</template>

<script>

export default {
    data() {
        return {
            information: {},
            password1: '',
            password2: '',
        }
    },
    methods: {
        async onSubmit() {
            if (this.password1 == this.password2) {
                this.information.password = this.password1
            }
            await this.$axios
                .$post('/api/v1/users/', this.information)
                .then(r => {
                    console.log(r.data);
                })

        }
    }

}

</script>

