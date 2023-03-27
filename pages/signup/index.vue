<template>
    <div>
        <CategoryTitle>ثبت نام</CategoryTitle>

        <div class="max-w-lg shadow-xl my-10 text-center mx-auto">
            <form class="font-Lalezar gap-y-5 p-10" action='#' @submit.prevent="onSubmit">
                <div class="mb-[2rem]">

                    <!-- email -->
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">ایمیل</label>
                    <input v-model="email" type="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 outline-none"
                        placeholder="مثال = myhood@gmail.com" required="">
                </div>

                <div class="mb-[2rem]">
                    <!-- password 1 -->
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">رمز
                        عبور</label>
                    <input v-model="password1" type="password" id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 outline-none"
                        placeholder="********" required="true">
                </div>

                <div class="mb-[2rem]">
                    <!-- password 2 -->
                    <label for="password2" class="block mb-2 text-sm font-medium text-gray-900">تکرار رمز
                        عبور</label>
                    <input v-model="password2" type="password" id="password2"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 outline-none"
                        placeholder="********" required="true">
                </div>

                <!-- Remember section -->
                <div class="flex items-start mb-[2rem]">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value=""
                            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-yellowHood">
                    </div>
                    <label for="remember" class="mr-2 text-sm font-medium text-gray-900">مرا به خاطر
                        بسپار</label>
                </div>

                <div class="text-center">
                    <ButtonUI type="submit">تایید</ButtonUI>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import ButtonUI from '~/components/ButtonUI.vue';
import CategoryTitle from '~/components/CategoryTitle.vue';

export default {
    data() {
        return {
            email: '',
            password: '',
            password1: "",
            password2: "",
        };
    },
    methods: {
        onSubmit() {
            if (this.password1 === this.password2) {
                this.password = this.password1;
            }
            this.$store.dispatch('authenticateUser', {
                email: this.email,
                password: this.password
            }).then(() => { this.$router.push('/about') })


        }
    },
    components: { ButtonUI, CategoryTitle }
}

</script>

