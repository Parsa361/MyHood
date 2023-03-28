<template>
    <div class="md:my-[1rem] md:mt-[4rem] mx-auto flex flex-row items-center justify-center gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="111" height="3" 
            viewBox="0 0 111 3">
            <line id="Line_2" data-name="Line 2" x2="108" transform="translate(1.5 1.5)" fill="none" stroke="#fcb900"
                stroke-linecap="round" stroke-width="3" />
        </svg>

        <span class="font-Lalezar text-responsive-100">
            <slot />
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="111" height="3" 
            viewBox="0 0 111 3">
            <line id="Line_2" data-name="Line 2" x2="108" transform="translate(1.5 1.5)" fill="none" stroke="#fcb900"
                stroke-linecap="round" stroke-width="3" />
        </svg>
    </div>
</template>

<script>
export default {

}
</script>

