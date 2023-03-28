<template>
    <div class="font-Lalezar">

        <!-- First nav -->
        <div class="border-b border-yellowHood text-textGray">
            <div
                class="container mx-auto h-[5rem] pt-[0.75rem] flex flex-row-reverse md:flex-row justify-between items-center px-1">
                <!-- Logo -->
                <div class="hidden md:flex sm:mx-0">
                    <Logo />
                </div>
                <!-- Search -->
                <div class="hidden md:flex">
                    <form class="flex items-center w-[15rem]">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-textGray dark:text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text"
                                class="bg-gray-50 border border-textGray text-textGray opacity-30 text-[0.75rem] rounded-full focus:ring-yellowHood focus:border-yellowHood focus:text-black block w-full pl-10 text-right p-2.5"
                                placeholder="جست و جو کنید" required="">
                        </div>
                    </form>
                </div>

                <div>
                    <!-- Login Button -->
                    <LoginCom v-if="!$store.getters.isAuthenticated" />
                    <!-- Profile -->
                    <NuxtLink v-else to="/profile">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40" height="40">
                            <path
                                d="M25 2.0078125C12.309296 2.0078125 2.0000002 12.317108 2 25.007812C2 37.112262 11.38131 47.043195 23.259766 47.935547C23.283185 47.93745 23.306613 47.939576 23.330078 47.941406C23.882405 47.981205 24.437631 48.007812 25 48.007812C25.562369 48.007812 26.117595 47.981205 26.669922 47.941406C26.693387 47.939576 26.716815 47.93745 26.740234 47.935547C38.61869 47.043195 48 37.112262 48 25.007812C48 12.317108 37.690704 2.0078125 25 2.0078125 z M 25 4.0078125C36.609824 4.0078125 46 13.397988 46 25.007812C46 30.739515 43.704813 35.924072 39.990234 39.710938C38.401074 38.55372 36.437194 37.863387 34.677734 37.246094C32.593734 36.516094 30.622172 35.824094 30.076172 34.621094C29.990172 33.594094 29.997859 32.792094 30.005859 31.871094L30.007812 31.480469C30.895813 30.635469 32.012531 28.852078 32.394531 27.205078C33.054531 26.853078 33.861516 26.009281 34.103516 23.988281C34.224516 22.985281 33.939062 22.2085 33.539062 21.6875C34.079062 19.8325 35.153484 15.136469 33.271484 12.105469C32.475484 10.824469 31.274313 10.016266 29.695312 9.6972656C28.808312 8.5992656 27.134484 8 24.896484 8C21.495484 8.063 19.002234 9.1047031 17.490234 11.095703C15.707234 13.445703 15.370328 16.996297 16.486328 21.654297C16.073328 22.175297 15.775438 22.963328 15.898438 23.986328C16.141438 26.007328 16.945469 26.851125 17.605469 27.203125C17.987469 28.852125 19.103188 30.635469 19.992188 31.480469L19.994141 31.861328C20.002141 32.786328 20.009828 33.590094 19.923828 34.621094C19.375828 35.827094 17.394781 36.526625 15.300781 37.265625C13.551886 37.88319 11.599631 38.574586 10.013672 39.716797C6.2962191 35.929504 4 30.742023 4 25.007812C4.0000002 13.397989 13.390176 4.0078125 25 4.0078125 z"
                                fill="#625B5B" />
                        </svg>
                    </NuxtLink>
                </div>

                <!-- Menu button -->
                <div class="flex md:hidden items-center hover:shadow-lg shadow-black">
                    <button @click="toggleMobileMenu" class="py-4 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25" height="25">
                            <path
                                d="M5 8 A 2.0002 2.0002 0 1 0 5 12L45 12 A 2.0002 2.0002 0 1 0 45 8L5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27L45 27 A 2.0002 2.0002 0 1 0 45 23L5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42L45 42 A 2.0002 2.0002 0 1 0 45 38L5 38 z"
                                fill="#625B5B" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>

        <!-- Second nav -->
        <ResponsiveNav :showMobileMenu="showMobileMenu" />
    </div>
</template>

<script>
import LoginCom from "./LoginCom.vue"
import Logo from "./Logo.vue"
import ResponsiveNav from "./ResponsiveNav.vue"

export default {
    name: "NavBar",
    components: { Logo, ResponsiveNav, LoginCom },
    data() {
        return {
            showMobileMenu: true,
        }
    },
    methods: {
        toggleMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu
        },
    }
}

</script>