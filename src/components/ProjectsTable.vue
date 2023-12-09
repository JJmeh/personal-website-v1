<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  table_data: Object
})

console.log('table')
console.log(props.table_data)

</script>

<template>
  <table class="table-auto w-full text-left text-xl mt-32">
    <thead class="text-text2 font-bold mb-4">
      <tr>
        <th class="sm:py-2 py-1 sm:px-4 px-2 sm:w-24 w-[4.5rem]">Year</th>
        <th class="sm:py-2 py-1 sm:px-4 px-2 ">Title</th>
        <th class="sm:py-2 py-1 sm:px-4 px-2  w-56 hidden md:table-cell">Built With</th>
        <th class="sm:py-2 py-1 sm:px-4 px-2  sm:w-32 w-24">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr class="my-2" v-for="data in table_data" :key="data.id">
        <td class="sm:p-4 p-2 text-accent font-bold sm:text-2xl text-md">{{ data.Year }}</td>
        <td class="sm:p-4 p-2 sm:text-2xl text-md">{{ data.project_name }}</td>
        <td class="sm:p-4 p-2 text-text2 font-normal text-lg hidden md:table-cell">
            <span class="inline-block bg-foreground rounded-full px-3 py-1 text-sm font-semibold text-accent mr-2 mb-2" v-for="(tag, index) in data.tags" :key="index">{{ tag }}</span> 
        </td>
        <td class="sm:p-4 p-2">
          <div class="flex items-center h-min max-w-md" id="external-link">
            <a :href="data.link_github" v-if="data.link_github" class="w-6 h-full mr-4">
              <img src="@/assets/deco-fixed/github-mark-white.svg" alt="" />
            </a>
            <a :href="data.link_external" v-if="data.link_external" class="mr-4">
              <i class="fa fa-external-link text-2xl text-text2 align-[-webkit-baseline-middle]" aria-hidden="true"></i>
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<style scoped lang="scss">
#external-link{
        a:first-child{
            img{
                filter: invert(45%) sepia(13%) saturate(360%) hue-rotate(167deg) brightness(92%) contrast(90%);
            }
        }
        a{
            transition: all 100ms ease-in;
            &:hover{
                transform: translateY(-3px);
                img{
                    filter: brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(535%) hue-rotate(181deg) brightness(91%) contrast(102%)
                    contrast(102%);
                }
                i{
                    color: var(--accent);
                }
            }
        }
    }
</style>