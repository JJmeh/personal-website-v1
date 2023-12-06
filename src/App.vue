<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  var prevScrollpos = window.scrollY
  var headerDiv = document.querySelector('header')
  window.onscroll = function () {
      var currentScrollPos = window.scrollY

      /* if scrolling down, let it scroll out of view as normal */
      if(currentScrollPos >= 50){
        if (prevScrollpos <= currentScrollPos) {
          headerDiv.classList.remove('fixedToTop')
          headerDiv.style.top = '-7.2rem'
        } else {
        /* otherwise if we're scrolling up, fix the nav to the top */
          headerDiv.classList.add('fixedToTop')
          headerDiv.style.top = '0'
          headerDiv.style.borderBottom = 'var(--foreground) solid 1px'
          headerDiv.style.backgroundColor = 'var(--background)'
        }
      }
      if (currentScrollPos <= 30){
        headerDiv.style.borderBottom = 'unset'
        headerDiv.style.backgroundColor = 'transparent'
      }
      prevScrollpos = currentScrollPos;
    }
})


</script>

<template>
  <header class="sm:p-5 p-3 sm:h-24 h-20 w-full flex justify-between items-center fixed">
    <router-link to="/" class="text-accent font-bold text-4xl sm:text-5xl pl-3"> JJ. </router-link>
    <nav class="text-text1 flex justify-between items-center">
      <RouterLink class="sm:text-2xl text-1xl sm:mx-5 mx-2 font-bold" to="/">Home</RouterLink>
      <RouterLink class="sm:text-2xl text-1xl sm:mx-5 mx-2 font-bold" to="/projects">My Projects</RouterLink>
    </nav>
  </header>
  <main ref="mainRef" class="flex flex-col items-center w-full max-w-screen-3xl mx-auto min-h-screen sm:px-32 lg:px-36 px-10 overflow-hidden z-0">
    <div id="left-right-decoration" class="hidden sm:block">
      <div class="fixed left-10 bottom-0 w-10">
        <ul class="flex flex-col justify-center items-center" id="left-decoration">
          <li class="mb-6 w-8">
            <a href="#">
              <img src="@/assets/deco-fixed/github-mark-white.svg" alt="" />
            </a>
          </li>
          <li class="mb-8">
            <a href="#">
              <img src="@/assets/deco-fixed/linkedin.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div class="fixed right-10 bottom-0 w-10 flex flex-col items-center" id="right-decoration">
        <a class="text-text1 text-xl my-auto mb-8" href="mailto: jeremiah.kaliki@gmail.com" style="writing-mode: vertical-lr;">jeremiah.kaliki@gmail.com <p>{{ heightMain }}</p></a>
      </div>
    </div>
    <RouterView />
  </main>

  <footer class="flex flex-col lg:flex-row justify-between lg:px-24 py-8 items-center">
    <div id="made-by">
      <p class="text-text2 text-xl font-normal lg:text-left text-center">
        Design & built by<br>
        <span>Jeremiah Jason in 2023</span><br>
        with <span>vue.js</span>
      </p>
    </div>
    <div id="links" class="flex w-80 lg:w-[30rem] justify-evenly text-accent font-semibold lg:text-3xl text-xl lg:mt-0 mt-8">
      <a class="" href="mailto: jeremiah.kaliki@gmail.com">EMAIL</a>
      <a class="" href="#">LINKEDIN</a>
      <a class="" href="#">GITHUB</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
span{
    color: var(--text1);
    font-weight: 600;
}
header.fixedToTop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
header{
  top: 0;
  transition: all 200ms ease-in;
  background: var(--background);
}


nav {
  a {
    transition: all 150ms ease-out;
    &:hover {
      color: var(--accent);
      transform: translateY(-3px);
    }
  }
}
#left-decoration::after,  #right-decoration::after{
  content: '';
  display: block;
  width: 3px;
  height: 20vh;
  margin: auto;
  margin-top: 0px;
  background-color: var(--text1);
}
#left-decoration {
  li {
    &:last-child {
      a {
        img {
          filter: invert(1);
        }
      }
    }
  }
  li {
    a {
      img{
        transition: transform 300ms ease-out;
        &:hover {
          filter: brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(535%) hue-rotate(181deg) brightness(91%) contrast(102%)
          contrast(102%);
          transform: translateY(-3px);
        }
      }
    }
  }
}
#right-decoration{
  a{
    transition: transform 300ms ease-out;
    &:hover{
      color: var(--accent);
      transform: translateY(-3px);
    }
  }
}

#links{
  a {
    transition: all 300ms ease-out;
    &:hover {
      color: var(--text1);
      transform: translateY(-3px);
    }
  }
}
</style>
