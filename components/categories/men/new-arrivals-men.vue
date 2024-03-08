<template>
    <div class="max-w-full py-6 mx-auto sm:px-6 lg:px-8">
        <section class="container max-w-full m-10 mx-auto sm:px-6 lg:px-8">
            <h2 class="mb-10 text-3xl font-semibold text-center">New Arrivals</h2>
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500" :autoplay="3000">
                <Slide v-for="(card, index) in store.newArrivals" :key="index">
                    <div class="carousel__item">
                        <div
                            class="relative m-10 w-[300px] max-w-[16rem] xs:max-w-lg overflow-hidden rounded-lg bg-white shadow-md">
                            <div>
                                <img class="object-cover w-full rounded-t-lg h-60 transit" :src="getImageUrl(card.img)" />
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
</template>

<script setup>
import { useNewArrivalsMenStore } from '@/stores/categories/newArrivalsMenStore'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const store = useNewArrivalsMenStore()

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