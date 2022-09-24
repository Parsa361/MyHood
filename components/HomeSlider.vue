<template>

    <div>
        <div id="animation-carousel"
            class="relative container mx-auto my-[0.25rem] sm:my-[1.5rem] md:my-0 lg:my-[1.5rem]"
            data-carousel="static">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

                <!-- Item 1 -->
                <div class="hidden duration-500 ease-in-out absolute inset-0 transition-all transform"
                    data-carousel-item="">
                    <img src="~/assets/images/slide3.png"
                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="Image slider 1">
                    <!-- Text -->
                    <div
                        class="hidden lg:flex absolute lg:right-[10rem] xl:right-[8rem] 2xl:right-[13rem] top-[8rem] text-center text-white font-Lalezar lg:text-[1rem] xl:text-[1.5rem] md:leading-[2.5rem] z-10">
                        <p>بهترین هود های دنیا با ما<br>
                            شرکت هود من ارائه دهنده بهترین خدمات تجهیز آشپزخانه ی شما</p>
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-500 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
                    data-carousel-item="active">
                    <img src="~/assets/images/slide2-2.png"
                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="Image slider 2">
                    <!-- Text -->
                    <div
                        class="hidden lg:flex absolute lg:right-[25rem] xl:right-[35rem] 2xl:right-[45rem] top-[8rem] text-center font-Lalezar md:text-[1.5rem] md:leading-[2.5rem] z-10">
                        <p>لذت خرید هود های زیبا با قیمت اقتصادی را با ما تجربه کنید<br>
                            شرکت هود من ارائه دهنده بهترین خدمات تجهیز آشپزخانه ی شما</p>
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="hidden duration-500 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                    data-carousel-item="">
                    <img src="~/assets/images/Untitled-2.jpg"
                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="Image slider 3">
                    <!-- Text -->
                    <div
                        class="hidden lg:flex absolute lg:right-[10rem] xl:right-[8rem] 2xl:right-[13rem] top-[8rem] text-center text-white font-Lalezar lg:text-[1rem] xl:text-[1.5rem] md:leading-[2.5rem] z-10">
                        <p>بهترین هود های دنیا با ما<br>
                            شرکت هود من ارائه دهنده بهترین خدمات تجهیز آشپزخانه ی شما</p>
                    </div>
                </div>
                <!-- Item 4 -->
                <div class="duration-500 ease-linear absolute inset-0 transition-all transform translate-x-full z-10"
                    data-carousel-item="">
                    <img src="~/assets/images/slide4.png"
                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    <!-- Text -->
                    <div
                        class="hidden lg:flex absolute lg:right-[25rem] xl:right-[35rem] 2xl:right-[45rem] top-[8rem] text-center font-Lalezar md:text-[1.5rem] md:leading-[2.5rem] z-10">
                        <p>لذت خرید هود های زیبا با قیمت اقتصادی را با ما تجربه کنید<br>
                            شرکت هود من ارائه دهنده بهترین خدمات تجهیز آشپزخانه ی شما</p>
                    </div>
                </div>
            </div>

            <!-- Slider controls -->
            <button type="button"
                class="absolute top-[6.5rem] md:top-40 left-0 z-30 flex items-center justify-center h-fit mx-4 cursor-pointer group focus:outline-none"
                data-carousel-prev="">
                <span
                    class="inline-flex items-center justify-center w-5 h-5 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-3 h-3 text-yellowHood sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                        </path>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button"
                class="absolute top-[6.5rem] md:top-40 right-0 z-30 flex items-center justify-center h-fit mx-4 cursor-pointer group focus:outline-none"
                data-carousel-next="">
                <span
                    class="inline-flex items-center justify-center w-5 h-5 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-3 h-3 text-yellowHood sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
    </div>

</template>

<script>
export default {
    name: "HomeSlider"
}
</script>