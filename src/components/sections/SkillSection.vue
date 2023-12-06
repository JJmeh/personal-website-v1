<script setup>
import { ref } from 'vue'
import skillList from '../skillList.vue'

const skills = ref([
  {type: 'LANGUAGES', content: ['Python', 'Dart', 'SQL', 'PHP', 'JavaScript', 'HTML', 'CSS/Sass', 'Java']},
  {type: 'FRAMEWORKS', content: ['React', 'Vue', 'Flutter', 'Flask', 'Wordpress', 'Laravel']},
  {type: 'TOOLS', content: ['Bash', 'Git & Github', 'Chrome Devtools', 'Postman', 'MongoDB', 'Postgres', 'VS code']}
])

function sortA(a, b){
    return (a.length - b.length) * -1 || a.localeCompare(b)
}

for (let skill in skills.value){
    skills.value[skill].content.sort(sortA)
}
</script>

<template>
  <section class="flex flex-col 2xl:flex-row max-w-7xl sm:w-full mx-auto min-h-[400px] mt-28 lg:justify-center">
    <div id="heading" class="text-accent 2xl:w-48 shrink-0 lg:mr-12 text-center lg:text-center w-full">
      <h1 class="lg:text-4xl text-3xl font-semibold">MY SKILLS</h1>
      <hr class="bg-accent w-12 2xl:w-28 lg:h-1 h-0.5 border-0 rounded mt-2 2xl:ml-8 mx-auto" />
    </div>
    <div id="content" class="flex flex-col flex-wrap sm:flex-row lg:px-5 text-text2 text-xl font-normal leading-8 mt-12 2xl:mt-0 lg:gap-0 gap-2 sm:max-lg:items-start lg:items-start max-w-5xl sm:w-full sm:max-lg:justify-center lg:justify-evenly lg:mx-auto">
      <skillList v-for="skill in skills"
                :skill="skill"
                :key="skill.type"
      > </skillList>
    </div>
  </section>
</template>

<style scoped>
span {
  color: var(--text1);
  font-weight: 600;
}
</style>
