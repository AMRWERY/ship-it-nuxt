<template>
    <div class="max-w-full pb-6 mx-auto sm:px-6 lg:px-8">
        <section class="container max-w-full m-10 mx-auto sm:px-6 lg:px-8">
            <h2 class="mb-6 text">{{ $t('categories.express_deals') }}</h2>
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500"
                :autoplay="3000">
                <Slide v-for="(card, index) in storeTwo.expressDeals" :key="index">
                    <div class="carousel__item">
                        <div
                            class="relative m-10 w-[300px] max-w-[16rem] xs:max-w-lg overflow-hidden rounded-lg bg-white shadow-md">
                            <div>
                                <img class="object-cover w-full rounded-t-lg h-60 transit"
                                    :src="getImageUrlExpress(card.img)" />
                            </div>
                            <span
                                class="absolute top-0 left-0 text-sm text-center text-white -rotate-45 -translate-x-6 translate-y-4 bg-black w-28"
                                v-if="card.discount">{{ card.discount }}% off</span>
                            <div class="px-5 pb-5 mt-4">
                                <a href="#">
                                    <h5 class="font-semibold tracking-tight truncate text-md text-slate-900">
                                        {{ card.title }}
                                    </h5>
                                </a>
                                <div class="flex items-center justify-between">
                                    <p class="mt-2 ">
                                        <span class="mr-1 text-lg font-bold text-slate-900">{{ card.price }} EGP</span>
                                        <span class="text-sm line-through text-slate-900" v-if="card.originalPrice">{{
                card.originalPrice }} EGP</span>
                                    </p>
                                </div>
                                <p class="mt-2 text-start">Get it by {{ card.getBy }}</p>
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

    <div class="max-w-full pb-6 mx-auto sm:px-6 lg:px-8">
        <section class="container max-w-full m-10 mx-auto sm:px-6 lg:px-8">
            <h2 class="mb-6 text">{{ $t('categories.global_deals') }}</h2>
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500"
                :autoplay="3000">
                <Slide v-for="(card, index) in store.globalDeals" :key="index">
                    <div class="carousel__item">
                        <div
                            class="relative m-10 w-[300px] max-w-[16rem] xs:max-w-lg overflow-hidden rounded-lg bg-white shadow-md">
                            <div>
                                <img class="object-cover w-full rounded-t-lg h-60 transit"
                                    :src="getImageUrl(card.img)" />
                            </div>
                            <span
                                class="absolute top-0 left-0 text-sm text-center text-white -rotate-45 -translate-x-6 translate-y-4 bg-black w-28"
                                v-if="card.discount">{{ card.discount }}% off</span>
                            <div class="px-5 pb-5 mt-4">
                                <a href="#">
                                    <h5 class="font-semibold tracking-tight truncate text-md text-slate-900">
                                        {{ card.title }}
                                    </h5>
                                </a>
                                <div class="flex items-center justify-between">
                                    <p class="mt-2 ">
                                        <span class="mr-1 text-lg font-bold text-slate-900">{{ card.price }} EGP</span>
                                        <span class="text-sm line-through text-slate-900" v-if="card.originalPrice">{{
                card.originalPrice }} EGP</span>
                                    </p>
                                </div>
                                <p class="mt-2 text-start">Get it by {{ card.getBy }}</p>
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

    <section class="container max-w-full pb-6 mx-auto mt-8 sm:px-6 lg:px-8">
        <img src="https://justfields.com/storage/projects/7M5rV059/sec-4-kids-banner.gif">
    </section>

    <div class="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-full lg:px-8 mb-7">
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
            <div v-for="card in cards" :key="card" class="relative group">
                <div
                    class="block max-w-full xs:min-w-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="p-6 text-center">
                        <p class="mb-2 text-lg font-medium truncate">{{ card.title }}</p>
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
</template>

<script setup>
import { useKidsGlobalDealsStore } from '@/stores/categories/kidsGlobalDealsStore'
import { useKidsExpressDealsStore } from '@/stores/categories/kidsExpressDealsStore'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const store = useKidsGlobalDealsStore()
const storeTwo = useKidsExpressDealsStore()

const fetchAllImages = () => {
    store.fetchAllImages();
};

onMounted(() => {
    fetchAllImages();
});

const fetchAllExpressImages = () => {
    storeTwo.fetchAllExpressImages();
};

onMounted(() => {
    fetchAllExpressImages();
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

onMounted(() => {
    for (let i = 0; i < store.files.length; i++) {
        const file = store.files[i];
        store.fetchImgExpress(file.name);
    }
});

const getImageUrlExpress = (imgPath) => {
    const image = storeTwo.images.find((image) => image.name === imgPath);
    return image ? image.url : '';
};

const { t } = useI18n()

const cards = ref([
    { title: t('categories.shop_for_charming_baby_boy_apparel'), img: 'https://justfields.com/storage/projects/7M5rV059/baby-boy-collection.webp' },
    { title: t('categories.shop_for_charming_baby_girl_apparel'), img: 'https://justfields.com/storage/projects/7M5rV059/baby-girl-collection.webp' }
])

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