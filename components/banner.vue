<template>
  <div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-72 overflow-hidden rounded-lg md:h-[500px]">
      <!-- Item 1 -->
      <nuxt-link to="#" class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://justfields.com/storage/projects/7M5rV059/carterssss.webp"
          class="absolute block object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 md:h-[500px]">
      </nuxt-link>
      <!-- Item 2 -->
      <nuxt-link to="#" class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://justfields.com/storage/projects/7M5rV059/salsssss.webp"
          class="absolute block object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 md:h-[500px]">
      </nuxt-link>
      <!-- Item 3 -->
      <nuxt-link to="#" class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://justfields.com/storage/projects/7M5rV059/express-deals.webp"
          class="absolute block object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 md:h-[500px]">
      </nuxt-link>
      <!-- Item 4 -->
      <nuxt-link to="#" class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://justfields.com/storage/projects/7M5rV059/guess.webp"
          class="absolute block object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 md:h-[500px]">
      </nuxt-link>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
      <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
        data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
        data-carousel-slide-to="1"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
        data-carousel-slide-to="2"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
        data-carousel-slide-to="3"></button>
    </div>
    <!-- Slider controls -->
    <button type="button"
      class="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer start-0 group focus:outline-none"
      data-carousel-prev>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <i class="text-white fa-solid fa-chevron-left dark:text-gray-800 rtl:rotate-180"></i>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button type="button"
      class="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer end-0 group focus:outline-none"
      data-carousel-next>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <i class="text-white fa-solid fa-chevron-right dark:text-gray-800 rtl:rotate-180"></i>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { initCarousels } from 'flowbite'

onMounted(() => {
  initCarousels();
})
</script>