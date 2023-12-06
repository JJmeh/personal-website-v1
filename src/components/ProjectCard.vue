<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
    defineProps({
        show_more_card: {
            type: Boolean,
            default: false
        },
        data: {
            type: Object
        }
    })
</script>

<template>
    <div id="card" v-if="!show_more_card" class="lg:max-w-lg max-w-xs rounded overflow-hidden shadow-2xl bg-foreground lg:w-[20rem] w-[15rem] lg:h-[26rem] h-min flex flex-col items-center grow justify-between">
        <div id="header-content" class="w-full">
            <div id="header" class="flex justify-between w-full p-6 py-7">
                <RouterLink to="/" class="w-16">
                    <img src="@/assets/folder-icon.svg" alt="" >
                </RouterLink>
                <div id="external-link" class="flex w-fit mt-3">
                    <a :href=data.link_github class="w-8" v-if="data.link_github">
                        <img src="@/assets/deco-fixed/github-mark-white.svg" alt="" />
                    </a>
                    <a :href=data.link_external v-if="data.link_external" class="ml-6">
                        <i class="fa fa-external-link text-3xl text-text2" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div id="content" class="px-6 mt-3">
                <h2 class="text-text1 font-bold text-2xl">{{ data.project_name }}</h2>
                <p class="leading-8 text-text2 mt-2">{{ data.project_desc }}</p>
            </div>
        </div>
        <div id="footer" class="px-6 mb-3 w-full mt-10">
            <span class="inline-block bg-accent rounded-full px-3 py-1 text-lg font-semibold text-text1 mr-2 mb-2" v-for="tag in data.tags" :key="tag">{{ tag }}</span>
        </div>
    </div>

    <div id="card" v-else class="max-w-lg rounded overflow-hidden shadow-2xl bg-foreground w-[20rem] h-96 flex flex-col items-center mt-20 p-3 text-center">
        <img src="@/assets/folder-icon.svg" alt="" class="w-24 mt-16">
        <h2 class="text-text1 text-3xl font-semibold mt-8">
            <slot name="header">No Project yet</slot>
        </h2>
        <p class="text-text2 text-xl mt-3">
            <slot name="content">No project created at the moment</slot>
        </p>
        <!-- <RouterLink class="bg-transparent hover:bg-accent text-accent font-semibold hover:text-text1 py-3 px-4 border border-accent hover:border-transparent rounded-md mt-8" to="/projects">Check Archive</RouterLink> -->
    </div>
</template>

<style scoped lang="scss">
    #card{
        a{
            transition: all 100ms ease-in;
        }
    }
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