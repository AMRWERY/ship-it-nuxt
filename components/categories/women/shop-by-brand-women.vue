<template>
    <div class="max-w-5xl py-6 mx-auto sm:px-6 lg:px-8">
        <section class="container max-w-full m-10 mx-auto sm:px-6 lg:px-8">
            <h2 class="mb-6 text">Shop by Brand</h2>
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500" :autoplay="3000">
                <Slide v-for="(card, index) in store.shopByBrand" :key="index">
                    <div class="carousel__item">
                        <div
                            class="relative flex justify-center flex-shrink-0 h-56 mx-2 overflow-hidden border border-white w-44 rounded-xl">
                            <div class="relative overflow-hidden bg-no-repeat bg-cover transit">
                                <img class="rounded-full" :src="getImageUrl(card.img)" />
                            </div>
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </section>
    </div>

    <section class="container max-w-full py-6 mx-auto mt-8 sm:px-6 lg:px-8">
        <img src="https://justfields.com/storage/projects/7M5rV059/promo.webp">
    </section>

    <div class="grid justify-center grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-2">
        <div class="relative md:aspect-w-4 md:aspect-h-2 aspect-w-3 aspect-h-2">
            <img src="https://justfields.com/storage/projects/7M5rV059/global-deals.gif" class="rounded-lg shadow"
                loading="lazy">
        </div>
        <div class="relative md:aspect-w-4 md:aspect-h-2 aspect-w-3 aspect-h-2">
            <img src="https://justfields.com/storage/projects/7M5rV059/Express-deals.gif" class="rounded-lg shadow"
                loading="lazy">
        </div>
    </div>
</template>
  
 
<script setup>
import { useShopByBrandStore } from '@/stores/shopByBrandStore'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const store = useShopByBrandStore()

const fetchAllImages = () => {
    store.fetchAllImages();
};

onMounted(() => {
    fetchAllImages();
});

onMounted(() => {
    for (let i = 0; i < store.files.length; i++) {
        const file = store.files[i];
        store.fetchImg(file.name);
    }
});

const getImageUrl = (imgPath) => {
    const image = store.images.find((image) => image.name === imgPath);
    return image ? image.url : '';
};

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
});

const breakpoints = ref({
    700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 4,
        snapAlign: 'start',
    },
});
</script>