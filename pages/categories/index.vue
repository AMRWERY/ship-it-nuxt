<template>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl py-8 mx-auto sm:py-24 lg:max-w-none">
            <h2 class="text-4xl font-bold text-gray-900">{{ $t('categories.categories') }}</h2>
            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 lg:gap-y-12">
                <div v-for="category in categories" :key="category" class="relative group">
                    <div
                        class="relative w-full overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                        <img :src="category.poster" class="object-cover object-center w-full h-full" />
                        <div class="absolute inset-0 flex flex-col justify-end p-4">
                            <nuxt-link :to="category.route">
                                <span class="absolute inset-0"></span>
                                <h3 class="text-2xl font-semibold text-black">{{ category.title }}</h3>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const categories = ref([
    { title: t('categories.women'), poster: 'https://justfields.com/storage/projects/7M5rV059/women.webp', route: '/categories/women' },
    { title: t('categories.men'), poster: 'https://justfields.com/storage/projects/7M5rV059/men.jpg', route: '/categories/men' },
    { title: t('categories.electronics'), poster: 'https://justfields.com/storage/projects/7M5rV059/electronics.jpg', route: '/categories/electronics' },
    { title: t('categories.beauty'), poster: 'https://justfields.com/storage/projects/7M5rV059/beauty.jpg', route: '/categories/beauty' },
    { title: t('categories.juniors_and_kids'), poster: 'https://justfields.com/storage/projects/7M5rV059/kids.jpg', route: '/categories/juniors-kids' },
]);
</script>