<template>
    <div class="bg-bgBg text-textGray">
        <div class="md:block container mx-auto md:h-[2.3125rem] md:border border-yellowHood rounded-b-xl md:pt-[0.25rem]"
            :class="{ 'hidden': showMobileMenu }">
            <ul
                class="flex flex-col justify-center text-center text-sm items-center w-full pt-[0.25rem] pb-[0.25rem] md:flex-row md:text-[1rem] md:gap-12 lg:gap-20 md:justify-center md:items-center">
                <li v-for="(item, index) in menuItems" :key="index"
                    class="w-screen hover:text-white hover:bg-yellowHood sm:hover:none md:w-fit md:rounded-full md:px-2">
                    <NuxtLink :to="item.link" class="block">{{ item.title }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showMobileMenu: {
            required: true,
            type: Boolean
        }
    },
    data() {
        return {
            menuItems: [
                { title: 'دسته بندی ها', link: '/' },
                { title: 'مقالات', link: '/articles' },
                { title: 'خدمات ما', link: '/services' },
                { title: 'ارتباط با ما', link: '/contact' },
                { title: 'درباره ما', link: '/about' },
                { title: 'پست های اینستاگرام', link: '/' },

            ]

        }
    }
}
</script>

