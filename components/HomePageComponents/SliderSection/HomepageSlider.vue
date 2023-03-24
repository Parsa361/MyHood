<template>
    <div class="relative overflow-hidden w-full h-[13rem] md:h-[22rem] lg:h-[30rem] mt-8 mb-12 rounded-md">
        <slot />

        <!-- Buttons -->
        <button @click="next" class="absolute top-1/2 right-4"><i class="hidden md:block fas fa-chevron-circle-right fa-2xl"
                style="color: #fcb900;"></i></button>
        <button @click="prev" class="absolute top-1/2 left-4"><i class="hidden md:block fas fa-chevron-circle-left fa-2xl"
                style="color: #fcb900;"></i></button>
    </div>
</template>

<script>
import Slides from '../Slides.vue';

export default {
    components: { Slides },
    methods: {
        next() {
            this.$emit('next')
        },
        prev() {
            this.$emit('prev')

        }
    }
}
</script>
