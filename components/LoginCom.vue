<template>
    <div>
        <button @click="toggleModal"
            class="bg-yellowHood/60 rounded-md px-4 py-2 text-gray-600 text-[0.75rem] md:text-[1rem] lg:text-[1.25rem] hover:text-white hover:bg-yellowHood active:scale-[0.8]">
            ورود | ثبت نام
        </button>

        <BaseModal :modalActive="modalActive" @close-modal="toggleModal" class="z-50">
            <h1>ورود</h1>
            <hr class="border-yellowHood mb-5">
            <!-- Login form -->
            <div>
                <form class="font-Lalezar gap-y-5" action='#' @submit.prevent="onSubmit">
                    <div class="mb-[2rem]">
                        <!-- email -->
                        <label for="email" class="inline-block mb-2 text-sm font-medium text-gray-900">ایمیل</label>
                        <span class="inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="10" height="10">
                                <path
                                    d="M13.03125 1.15625C12.957031 1.160156 12.882813 1.167969 12.8125 1.1875C12.496094 1.25 12.230469 1.457031 12.09375 1.75L8.84375 8.375L1.46875 9.46875C1.105469 9.535156 0.804688 9.796875 0.695313 10.152344C0.582031 10.507813 0.675781 10.894531 0.9375 11.15625L6.21875 16.34375L5 23.65625C4.9375 24.027344 5.085938 24.40625 5.390625 24.632813C5.695313 24.855469 6.101563 24.890625 6.4375 24.71875L13 21.25L19.5625 24.71875C19.898438 24.890625 20.304688 24.855469 20.609375 24.632813C20.914063 24.40625 21.0625 24.027344 21 23.65625L19.78125 16.34375L25.0625 11.15625C25.324219 10.894531 25.417969 10.507813 25.304688 10.152344C25.195313 9.796875 24.894531 9.535156 24.53125 9.46875L17.15625 8.375L13.90625 1.75C13.75 1.402344 13.414063 1.171875 13.03125 1.15625 Z M 13 4.46875L15.625 9.75C15.773438 10.039063 16.054688 10.238281 16.375 10.28125L22.21875 11.15625L18 15.28125C17.757813 15.503906 17.640625 15.832031 17.6875 16.15625L18.6875 22L13.46875 19.25C13.175781 19.09375 12.824219 19.09375 12.53125 19.25L7.3125 22L8.3125 16.15625C8.359375 15.832031 8.242188 15.503906 8 15.28125L3.78125 11.15625L9.625 10.28125C9.945313 10.238281 10.226563 10.039063 10.375 9.75Z"
                                    fill="#EF4444" />
                            </svg>
                        </span>
                        <input v-model.trim="email" type="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 outline-none"
                            placeholder="مثال = myhood@gmail.com" required>
                        <div v-show="!email" class="text-red-500 text-sm mt-1">ایمیل را وارد کنید</div>
                        <div v-show="email && !isValidEmail" class="text-red-500 text-sm mt-1">ایمیل معتبر وارد کنید</div>
                    </div>

                    <div class="mb-[2rem]">
                        <!-- password -->
                        <label for="password" class="inline-block mb-2 text-sm font-medium text-gray-900">رمز
                            عبور</label>
                        <span class="inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="10" height="10">
                                <path
                                    d="M13.03125 1.15625C12.957031 1.160156 12.882813 1.167969 12.8125 1.1875C12.496094 1.25 12.230469 1.457031 12.09375 1.75L8.84375 8.375L1.46875 9.46875C1.105469 9.535156 0.804688 9.796875 0.695313 10.152344C0.582031 10.507813 0.675781 10.894531 0.9375 11.15625L6.21875 16.34375L5 23.65625C4.9375 24.027344 5.085938 24.40625 5.390625 24.632813C5.695313 24.855469 6.101563 24.890625 6.4375 24.71875L13 21.25L19.5625 24.71875C19.898438 24.890625 20.304688 24.855469 20.609375 24.632813C20.914063 24.40625 21.0625 24.027344 21 23.65625L19.78125 16.34375L25.0625 11.15625C25.324219 10.894531 25.417969 10.507813 25.304688 10.152344C25.195313 9.796875 24.894531 9.535156 24.53125 9.46875L17.15625 8.375L13.90625 1.75C13.75 1.402344 13.414063 1.171875 13.03125 1.15625 Z M 13 4.46875L15.625 9.75C15.773438 10.039063 16.054688 10.238281 16.375 10.28125L22.21875 11.15625L18 15.28125C17.757813 15.503906 17.640625 15.832031 17.6875 16.15625L18.6875 22L13.46875 19.25C13.175781 19.09375 12.824219 19.09375 12.53125 19.25L7.3125 22L8.3125 16.15625C8.359375 15.832031 8.242188 15.503906 8 15.28125L3.78125 11.15625L9.625 10.28125C9.945313 10.238281 10.226563 10.039063 10.375 9.75Z"
                                    fill="#EF4444" />
                            </svg>
                        </span>
                        <input v-model.trim="password" type="password" id="password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 outline-none"
                            placeholder="********" required>
                        <div v-show="!password" class="text-red-500 text-sm mt-1">رمز عبور را وارد کنید</div>
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

                    <div class="flex flex-col md:flex-row">
                        <!-- Submit button and empty field message -->
                        <button type="submit"
                            class="text-white bg-yellowHood hover:bg-yellowHood focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                            :disabled="!email || !password">تایید</button>
                        <p class="md:mr-5 text-center mt-2">حساب کاربری ندارید ؟</p>
                        <a href="/signup" class="text-center mt-2 mr-2 text-yellowHood">حساب کاربری ایجاد کنید
                        </a>
                    </div>
                </form>
            </div>
        </BaseModal>

    </div>
</template>

<script>
import BaseModal from './BaseModal.vue';

export default {
    data() {
        return {
            email: '',
            password: '',
            isLogin: null,
            modalActive: false
        }
    },
    computed: {
        isValidEmail() {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return pattern.test(this.email)
        }
    },
    methods: {
        toggleModal() {
            this.modalActive = !this.modalActive
            this.email = '';
            this.password = '';
        },
        onSubmit() {
            if (!this.$store.getters.isAuthenticated) {
                console.log('agha nabayad in chap she age dorost kar kone');
                this.$store.dispatch('authenticateUser', {
                    email: this.email,
                    password: this.password,
                    isLogin: true
                })
                    .then(() => {
                        this.modalActive = false
                        this.$router.push('/profile')
                    })
            }
        }
    },
    components: { BaseModal }
}
</script>
