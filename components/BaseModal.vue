<template>
    <!-- This is our custom modal to show info texts -->
    <Transition name="modal-outer">
        <div v-show="modalActive" @click="closeModal"
            class="fixed w-full bg-black bg-opacity-70 h-screen top-0 left-0 flex justify-center px-8">
            <Transition name="modal-inner">
                <div v-if="modalActive" @click.stop="" class="p-10 bg-white self-start mt-32 max-w-screen-md">
                    <slot />
                </div>
            </Transition>
        </div>
    </Transition>
</template>
<script>
export default {
    props: {
        modalActive: {
            type: Boolean,
            required: true
        },
    },
    methods: {
        closeModal() {
            this.$emit('close-modal')
        }
    }

}
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
    opacity: 0;
}

.modal-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.modal-inner-leave-to {
    transform: scale(0.8);
}
</style>