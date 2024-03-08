<template>
    <div class="max-w-full py-6 mx-auto sm:px-6 lg:px-8">
        <section class="container max-w-full m-10 mx-auto sm:px-6 lg:px-8">
            <h2 class="mb-10 text-3xl font-semibold text-center">Shop by Category</h2>
            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <div v-for="category in categories" :key="category" class="relative group transit">
                    <div
                        class="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img :src="category.img" class="object-cover object-center w-full h-full lg:h-full lg:w-full" />
                    </div>
                    <div class="flex justify-between mt-4">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-700">
                                <a href="">
                                    <span aria-hidden="true" class="absolute inset-0" />
                                    {{ category.title }}
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="my-12">
            <img src="https://justfields.com/storage/projects/7M5rV059/sec-5-men-banner-final.gif">
        </div>

        <div class="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-full lg:px-8 mb-7">
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
                <div v-for="card in cards" :key="card" class="relative group">
                    <div
                        class="block max-w-96 xs:min-w-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="p-6 text-center">
                            <p class="mb-2 text-xl font-medium truncate">{{ card.title }}</p>
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
const categories = reactive([
    { title: 'Clothing', img: 'https://justfields.com/storage/projects/7M5rV059/men-clothing.webp' },
    { title: 'Watches & Accessories', img: 'https://justfields.com/storage/projects/7M5rV059/men_watches.webp' },
    { title: 'Shoes', img: 'https://justfields.com/storage/projects/7M5rV059/men_shoes.webp' },
])

const cards = reactive([
    { title: 'Elevate your outfit with the right pair of sunglasses', img: 'https://justfields.com/storage/projects/7M5rV059/men-sunglasses.webp' },
    { title: 'Make your wrists sparkle with the best watches around!', img: 'https://justfields.com/storage/projects/7M5rV059/men-watches-c.webp' }
])
</script>