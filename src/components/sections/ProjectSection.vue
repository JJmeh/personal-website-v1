<script setup>
import ProjectCard from '../ProjectCard.vue'
import axios from 'axios'
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const numOfProjects = ref();
const loaded = ref(3)
const data = ref('')
const loading = ref(true)
const error = ref(false)
const empty = ref(false)
function showMore() {
    loaded.value += 3
}
function showLess() {
    loaded.value = 3
}

function getReq() {
    axios
        .get(
            'https://script.google.com/macros/s/AKfycbwxHk1Wwuj1CC5W49bP3lb8qzrqC817YUqFqw6gVfPjkGHrTiVQODT7rjEb-gTq46o/exec?type=1'
        )
        .then((response) => {
            data.value = response.data
            if (data.value.length == 0){
                empty.value = true
            }
            loading.value = false
            numOfProjects.value = data.value.length
        })
        .catch((error) => {
            loading.value = false
            error.value = false
            console.log(error)
        })
}

onMounted(() => {
    getReq()
})
</script>

<template>
    <section class="flex flex-col min-h-max lg:mt-24 mt-12 sm:mt-36 max-w-5xl mx-auto mb-48 items-center">
        <div id="header-area" class="text-center">
            <h1 class="text-accent lg:text-5xl text-4xl font-semibold mb-4">Noteworthy Projects</h1>
            <RouterLink class="text-text1 font-normal lg:text-xl text-lg" to="/projects">view my archive <i class="fa fa-external-link"
                    aria-hidden="true"></i></RouterLink>
        </div>
        <div v-if="loading" id="loader" class="lg:mt-24 mt-14"></div>
        <!-- <ProjectCard :show_more_card="true" v-if="empty"></ProjectCard> -->
        <ProjectCard :show_more_card="true" v-if="error || empty">
            <template v-slot:header v-if="error">Error</template>
            <template v-slot:content v-if="error">Error when retrieving data.</template>
        </ProjectCard>
        <transition name="slide-fade">
            <div v-if="!loading && !empty && !error" id="content" class="mt-10 flex flex-col items-center">
                <div id="projects-cards-container" class="flex flex-wrap gap-4 justify-center">
                        <TransitionGroup name="slide-fade">
                            <ProjectCard v-for="project in data.slice(0, loaded)" :key="project.id" :data="project"></ProjectCard>
                        </TransitionGroup>
                    </div>
                <div v-if="numOfProjects > 3">
                    <button v-if="loaded < numOfProjects" @click="showMore"
                        class="bg-transparent hover:bg-accent text-accent font-semibold hover:text-text1 py-3 px-4 border border-accent hover:border-transparent rounded-md lg:mt-20 w-40 mt-8">
                        Show More
                    </button>
                    <button v-else @click="showLess"
                        class="bg-transparent hover:bg-accent text-accent font-semibold hover:text-text1 py-3 px-4 border border-accent hover:border-transparent rounded-md lg:mt-20 w-40 mt-8">
                        Show Less
                    </button>
                </div>
            </div>
        </transition>
    </section>
</template>

<style scoped lang="scss">

button{
    transition: all 80ms ease-in;
}
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    // position: absolute;
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

#header-area {
    a {
        transition: all 100ms ease-out;
        &:hover {
            color: var(--accent);
        }
    }
}

#loader {
    //   position: fixed;
    //   left: 50%;
    //   top: 50%;
    width: 60px;
    height: 60px;
    //   margin: -76px 0 0 -76px;
    border: 8px solid var(--text2);
    border-radius: 50%;
    border-top: 8px solid var(--accent);
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
