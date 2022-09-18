<template>
    <div class="font-Lalezar">

        <!-- First nav -->
        <div class="bg-white text-textGray">
            <div
                class="container mx-auto h-[4.625rem] pt-[0.75rem] flex flex-row-reverse md:flex-row justify-between items-center px-1">

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
                                <svg aria-hidden="true" class="w-5 h-5 text-textGray dark:text-gray-400"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="simple-search"
                                class="bg-gray-50 border border-textGray text-textGray opacity-30 text-[0.75rem] rounded-full focus:ring-yellowHood focus:border-yellowHood focus:text-black block w-full pl-10 text-right p-2.5"
                                placeholder="جست و جو کنید" required="">
                        </div>
                    </form>
                </div>


                <!-- Login Button -->
                <div>
                    <button class="hover:border-b-4 hover:text-black border-textGray text-md md:text-[1.125rem] lg:text-[1.5rem]">
                        <p>ورود | ثبت نام</p>
                    </button>
                </div>

                <!-- Menu button -->
                <div class="flex md:hidden items-center hover:shadow-lg shadow-black">
                    <button @click="showMobileMenu = !showMobileMenu" class="py-4 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-7 h-7 text-textGray">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>


        <!-- Second nav -->
        <div class="bg-bgBg text-textGray">
            <div class="md:block container mx-auto md:h-[2.3125rem] md:border border-yellowHood rounded-b-xl md:pt-[0.25rem]"
                id="navbar-default" :class="{hidden: showMobileMenu}">
                <ul
                    class="flex flex-col justify-center text-center text-sm items-center w-full pt-[0.25rem] pb-[0.25rem] md:flex-row md:text-[1rem] md:gap-12 lg:gap-20 md:justify-center md:items-center">

                    <li
                        class="w-screen hover:text-white hover:bg-yellowHood sm:hover:none md:w-fit md:rounded-full md:px-2">
                        <NuxtLink to="/" class="hidden md:block">دسته بندی ها</NuxtLink>
                    </li>

                    <li
                        class="w-screen hover:text-white hover:bg-yellowHood border-white sm:hover:none md:w-fit md:rounded-full md:px-2">
                        <NuxtLink to="/" class="block w-full">مقالات</NuxtLink>
                    </li>

                    <li
                        class="w-screen hover:text-white hover:bg-yellowHood border-white sm:hover:none md:w-fit md:rounded-full md:px-2">
                        <NuxtLink to="/service" class="block">خدمات ما</NuxtLink>
                    </li>

                    <li
                        class="w-screen hover:text-white hover:bg-yellowHood border-white sm:hover:none md:w-fit md:hover:rounded-full md:px-2">
                        <NuxtLink to="/contact" class="block">ارتباط با ما</NuxtLink>
                    </li>

                    <li
                        class="w-screen hover:text-white hover:bg-yellowHood border-white sm:hover:none md:w-fit md:hover:rounded-full md:px-2">
                        <NuxtLink to="/about" class="block">درباره ما</NuxtLink>
                    </li>

                    <li
                        class="w-screen hover:text-white hover:bg-yellowHood border-white sm:hover:none md:w-fit md:hover:rounded-full md:px-2">
                        <NuxtLink to="/" class="block">پست های اینستاگرام</NuxtLink>
                    </li>

                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import Logo from "./Logo.vue"

export default {
    name: "NavBar",
    components: { Logo }
}

</script>

<script setup>
import { ref } from "vue";

const showMobileMenu = ref(true)
</script>