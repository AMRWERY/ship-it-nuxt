<template>
    <div class="max-w-full pb-6 mx-auto sm:px-6 lg:px-8">
        <section class="container max-w-full m-10 mx-auto sm:px-6 lg:px-8">
            <h2 class="mb-6 text">{{ $t('categories.shop_by_category') }}</h2>
            <div class="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
                <div v-for="category in categories" :key="category" class="relative group transit">
                    <div
                        class="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img :src="category.img" class="object-cover object-center w-full h-full lg:h-full lg:w-full" />
                    </div>
                    <div class="flex justify-between mt-4">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-700">
                                <a href="">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    {{ category.title }}
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="my-12">
            <img src="https://justfields.com/storage/projects/7M5rV059/sec-5-banner-option1-final.gif">
        </div>

        <div class="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-full lg:px-8 mb-7">
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
                <div v-for="card in cards" :key="card" class="relative group">
                    <div
                        class="block max-w-full xs:min-w-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="p-6 text-center">
                            <p class="mb-2 truncate">{{ card.title }}</p>
                            <p class="text-base text-neutral-600 dark:text-neutral-200">
                                {{ card.subtitle }}
                            </p>
                        </div>
                        <div class="relative overflow-hidden bg-no-repeat bg-cover">
                            <img class="w-full transit" :src="card.img" />
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
    { title: t('categories.clothing'), img: 'https://justfields.com/storage/projects/7M5rV059/cat_clothing.webp' },
    { title: t('categories.shoes'), img: 'https://justfields.com/storage/projects/7M5rV059/cat_shoes.webp' },
    { title: t('categories.watches_and_jewelry'), img: 'https://justfields.com/storage/projects/7M5rV059/cat_Watches.webp' },
    { title: t('categories.handbags_and_bags'), img: 'https://justfields.com/storage/projects/7M5rV059/cat_bags.webp' },
    { title: t('categories.accessories'), img: 'https://justfields.com/storage/projects/7M5rV059/cat_accessories.webp' },
])

const cards = ref([
    { title: t('categories.make_a_statement_everyday_and_glam_up'), img: 'https://justfields.com/storage/projects/7M5rV059/women-dress-2.webp' },
    { title: t('categories.make_your_outdoor_adventures_even_cooler'), img: 'https://justfields.com/storage/projects/7M5rV059/women-sports-outfit.webp' }
])
</script>