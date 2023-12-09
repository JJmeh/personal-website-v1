<script setup>
  import ProjectsTable from '../components/ProjectsTable.vue';
  import ProjectCard from '../components/ProjectCard.vue';
  import axios from 'axios'
  import {ref, onMounted} from 'vue';

  const data = ref('')
  const loading = ref(true)
  const error = ref(false)
  const empty = ref(false)

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
  <section class="pt-48 max-w-4xl flex flex-col justify-center mx-auto text-text1 mb-36">
    <div id="header" class="">
      <h1 class="text-6xl font-semibold">Archive</h1>
      <p class="text-accent mt-4 text-xl">A list of all things I have created</p>
    </div>
    <div id="content">
      <div v-if="loading" id="loader" class="lg:mx-[25vw] md:mx-[16vw] mx-[35vw] mt-48"></div>
      <transition name="slide-fade">
        <ProjectCard :show_more_card="true" v-if="error || empty" class="mx-auto">
              <template v-slot:header v-if="error">Error</template>
              <template v-slot:content v-if="error">Error when retrieving data.</template>
          </ProjectCard>
      </transition>
      <transition name="slide-fade">
        <ProjectsTable v-if="!loading" :table_data="data"></ProjectsTable>
      </transition>
    </div>
  </section>
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
    transform: translateY(20px);
    opacity: 0;
}



  #loader {
    //   position: fixed;
    //   left: 50%;
    //   top: 50%;
    width: 4rem;
    height: 4rem;
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
