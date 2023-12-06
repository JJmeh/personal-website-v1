<script setup>
    import { ref, onMounted } from 'vue';
    defineProps({
        skill: Object
    })
    const active = ref(false)

    function toggle(){
        active.value = !active.value
    }

    const windowWidth = ref(window.innerWidth)

    onMounted(() => {
        if(windowWidth.value > 640){
            active.value = true
        }
    })

</script>

<template>
    <div class="flex flex-col lg:w-[14rem] w-full sm:w-min sm:p-4 text-left mb-6 mx-auto sm:mx-0 lg:mx-0 lg:pt-0">
        <!-- <h1 class="text-text1 lg:text-3xl text-xl font-semibold lg:mb-3 text-left mb-1">{{ skill.type }}</h1> -->
        <button class="text-text1 lg:text-3xl text-xl font-semibold lg:mb-1  text-left flex w-full items-center lg:text-left" @click="toggle">{{ skill.type }} <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="ml-0.5 h-5 w-5 fill-text1 text-text1 sm:hidden"
            >
              <path
                d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
              ></path>
            </svg></button>
        <hr class="sm:hidden bg-text1 w-14 lg:w-32 lg:h-1 h-0.5 border-0 rounded mt-0.5 lg:mt-0 lg:mx-auto mb-1 sm:mb-3" />
        <TransitionGroup name="slide-fade">
            <p v-for="a in skill.content" :key="a" class="text-text1 sm:text-text2 text-lg lg:text-2xl mb-1" v-show="active">{{ a }}</p>
        </TransitionGroup>
    </div>
</template>

<style scoped lang="scss">
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    // position: absolute;
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>