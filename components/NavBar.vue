<template>
    <div class="font-Lalezar">
        <!-- First nav -->
        <div class="bg-white text-textGray">
            <div class="container mx-auto h-[4.625rem] pt-[0.75rem] flex flex-row justify-between items-center px-1">
                <!-- Logo -->
                <div>
                    <p class="text-[1.5rem]">MyHood</p>
                </div>
                <!-- Search -->
                <div class="hidden md:flex">

                    <form class="flex items-center w-[15rem]">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="simple-search"
                                class="bg-gray-50 border border-textGray text-textGray opacity-30 text-[0.75rem] rounded-full focus:ring-yellowHood focus:border-yellowHood block w-full pl-10 text-right p-2.5"
                                placeholder="جست و جو کنید" required="">
                        </div>
                    </form>


                </div>
                <!-- Login Button -->
                <div>
                    <button class="hover:border-b-4 hover:text-black border-textGray text-[1.5rem] ">
                        <p>ورود | ثبت نام</p>
                    </button>
                </div>
            </div>
        </div>
        <!-- Second nav -->
        <div class="bg-bgBg text-textGray">
            <div class="container mx-auto md:border border-yellowHood rounded-b-lg">
                <ul
                    class="flex flex-col justify-center space-x-20 text-center items-center space-y-1 pt-[0.25rem] text-[1rem] md:h-[2.3125rem] md:flex-row">

                    <li><a href="#">مقالات</a></li>
                    <li><a href="#">مزیت های ما</a></li>
                    <li><a href="#">ارتباط با ما</a></li>
                    <li><a href="#">درباره ما</a></li>
                    <li><a href="#">پست های اینستاگرام</a></li>

                    <!-- inaro bayad ba ina bezanam badan -->
                    <!-- <li>
                        <nuxt-link></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link></nuxt-link>
                    </li> -->
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>