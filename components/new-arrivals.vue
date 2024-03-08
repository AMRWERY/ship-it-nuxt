<template>
    <div>
        <div class="max-w-full py-6 mx-auto space-y-6 sm:px-6 lg:px-8">
            <section class="max-w-full m-10 mx-auto sm:px-6 lg:px-8">
                <h2 class="mb-6 text-3xl font-semibold text-center text-gray-700">{{ $t('home.new_arrivals') }}</h2>
                <Carousel :wrapAround="true" v-bind="settings" :breakpoints="breakpoints">
                    <Slide v-for="card in arrivalOne" :key="card">
                        <div class="carousel__item">
                            <div
                                class="relative m-10 flex w-[300px] max-w-[16rem] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                <div class="relative flex mx-3 mt-3 overflow-hidden h-60 rounded-xl" href="#">
                                    <img class="object-cover w-full transit" :src="card.img" />
                                    <span
                                        class="absolute top-0 left-0 px-2 m-2 text-sm font-medium text-center text-white bg-black rounded-full"
                                        v-if="card.discount">{{ card.discount }}%
                                        {{ $t('home.off') }}</span>
                                </div>
                                <div class="px-5 pb-5 mt-4">
                                    <a href="#">
                                        <h5 class="font-semibold tracking-tight truncate text-md text-slate-900">
                                            {{ card.title }}
                                        </h5>
                                    </a>

                                    <div class="flex items-center mt-2">
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <span
                                            class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                    </div>

                                    <div class="flex items-center mt-2 mb-5">
                                        <p>
                                            <span class="mr-1 text-lg font-bold text-slate-900">EGP{{ card.price
                                                }}</span>
                                            <span class="text-sm line-through text-slate-900"
                                                v-if="card.originalPrice">EGP{{
                    card.originalPrice }}</span>
                                        </p>
                                    </div>
                                    <p class="mt-2 text-start">{{ $t('home.get_it_by') }} {{ card.getBy }}</p>
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

        <section class="max-w-full py-6 mx-auto mt-8 sm:px-6 lg:px-8">
            <img src="https://justfields.com/storage/projects/7M5rV059/tommy.webp"
                class="w-full h-60 xs:h-56 sm:h-72 md:h-96">
        </section>

        <div class="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-full lg:px-8">
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
                <div v-for="card in cardsOne" :key="card" class="relative group">
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

        <section class="max-w-full py-6 mx-auto mt-8 sm:px-6 lg:px-8">
            <img src="https://justfields.com/storage/projects/7M5rV059/six-shop.jpg"
                class="w-full h-60 xs:h-56 sm:h-72 md:h-96">
        </section>

        <div class="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-full lg:px-8 mb-7">
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
                <div v-for="card in cardsTwo" :key="card" class="relative group">
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
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const arrivalOne = ref([
    { img: 'https://justfields.com/storage/projects/7M5rV059/025.webp', title: 'Feel Good Loved Up Feel Good Eau de Toilette', price: '599.00', originalPrice: '270.00', discount: '55', getBy: 'Nov 08 - Nov 10' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/026.webp', title: "Shein Men Flap Pocket Buckle Cargo Pants", price: '1.809.00', originalPrice: '2.419.00', discount: '25', getBy: 'Nov 28 - Dec 05' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/027.webp', title: "Adidas Performance Trunks 3-Pack", price: '1.929.00', originalPrice: '2.419.00', discount: '20', getBy: 'Nov 28 - Dec 05' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/028.webp', title: "Plain Rib No Show Thong", price: '299.00', originalPrice: '409.00', discount: '27', getBy: 'Nov 28 - Dec 05' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/029.webp', title: "Men's Analog Wrist Watch", price: '750.00', originalPrice: '950.00', discount: '21', getBy: 'Nov 08 - Nov 10' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/030.webp', title: "Emery Rose Floral Print Open Front Jacket", price: '1.389.00', originalPrice: '1.920.00', discount: '28', getBy: 'Nov 28 - Dec 05' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/031.webp', title: "Men Slogan Graphic Buckle Detail Flap Pocket Drawstring Waist Cargo Pants", price: '1.979.00', originalPrice: '2.609.00', discount: '24', getBy: 'Nov 28 - Dec 05' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/032.webp', title: "Shein Men Letter and Tropical Print Polo Shirt", price: '969.00', originalPrice: '1.309.00', discount: '26', getBy: 'Nov 28 - Dec 05' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/033.webp', title: "Shein Men Camo Print Flap Pocket Cargo Jeans", price: '950.00', originalPrice: '1.500.00', discount: '37', getBy: 'Nov 08 - Nov 10' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/034.webp', title: "Women White Lace-Up Front Running Shoes", price: '1.979.00', originalPrice: '2.679.00', discount: '26', getBy: 'Nov 28 - Dec 05' },
])

const cardsOne = ref([
    { title: t('home.browse_this_extraordinary_women’s_dresses_assortment'), subtitle: t('home.from_this_exceptional_assortment_choose_your_ideal_dress_and_be_whatever_you_desire'), img: 'https://justfields.com/storage/projects/7M5rV059/035.jpg' },
    { title: t('home.shop_stylish_winter_wear_with_no_wallet_worries'), subtitle: t('home.find_great_winter_season_looks_without_worrying_about_your_wallet_all_within_your_budget'), img: 'https://justfields.com/storage/projects/7M5rV059/036.jpg' },
])

const cardsTwo = ref([
    { title: t('home.unleash_the_fashionista_side_of_you_with_shein_products'), subtitle: t('home.explore_an_incredible_collection_of_trendy_clothing_at_amazing_prices'), img: 'https://justfields.com/storage/projects/7M5rV059/01201.jpg' },
    { title: t('home.find_the_best_womens_winter_boots_around'), subtitle: t('home.make_a_statement_with_our_stunning_selection_of_womens_boots_they_are_the_best'), img: 'https://justfields.com/storage/projects/7M5rV059/045454.jpg' },
])

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
});

const breakpoints = ref({
    default: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 5,
        snapAlign: 'start',
    },
});
</script>