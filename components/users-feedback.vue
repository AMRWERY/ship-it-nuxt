<template>
    <div>
        <div class="max-w-full py-6 mx-auto sm:px-6 lg:px-8">
            <section class="body-font">
                <h2 class="mb-6 text-3xl font-semibold text-center text-gray-700">
                    {{ $t('home.users_feedback') }}
                </h2>
                <div class="px-5 py-12 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3" v-for="card in cards" :key="card">
                            <div class="h-full overflow-hidden border-2 border-gray-800 rounded-lg">
                                <img class="object-cover object-center w-full lg:h-48 md:h-36 transit" :src="card.img">
                                <div class="p-6">
                                    <h2
                                        class="mb-1 text-2xl font-medium tracking-widest text-center text-gray-500 title-font dark:text-zinc-200">
                                        {{ card.title }}</h2>
                                    <br>
                                    <p class="mb-3 leading-relaxed text-gray-500 dark:text-white">{{ card.subtitle }}
                                    </p>
                                    <div class="flex flex-wrap items-center ">
                                        <a
                                            class="inline-flex items-center text-indigo-700 dark:text-zinc-400 md:mb-2 lg:mb-0">
                                            {{ $t('btn.learn_more') }}
                                        </a>
                                        <span
                                            class="inline-flex items-center py-1 text-sm leading-none text-gray-500 border-gray-800 dark:text-white me-3 lg:ms-auto md:ms-0 ms-auto pe-3 border-e-2 dark:border-gray-400">
                                            <i class="fa-regular fa-eye"></i>
                                            <p class="ms-1">1.2K</p>
                                        </span>
                                        <span
                                            class="inline-flex items-center text-sm leading-none text-gray-500 dark:text-white">
                                            <i class="fa-regular fa-comment"></i>
                                            <p class="ms-1">8</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const cards = ref([
    { subtitle: t('home.here_are_some_of_best_online_shopping_sites_for_you_in_the_world'), title: t('home.billy_wade'), img: 'https://justfields.com/storage/projects/7M5rV059/post-1.jpg' },
    { subtitle: t('home.get_awesome_offers_on_new_collection_is_available_at_all_stores'), title: t('home.demean_phil'), img: 'https://justfields.com/storage/projects/7M5rV059/post-2.jpg' },
    { subtitle: t('home.festival_sale_has_lots_of_amazing_offer_for_men_and_women'), title: t('home.luke_hobbs'), img: 'https://justfields.com/storage/projects/7M5rV059/post-3.jpg' },
]);
</script>