<template>
  <div>
    <div class="max-w-5xl py-6 mx-auto sm:px-6 lg:px-8">
      <section class="max-w-full m-10 mx-auto sm:px-6 lg:px-8">
        <h2 class="mb-6 text">{{ $t('home.shop_by_brand') }}</h2>
        <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500" :autoplay="3000">
          <Slide v-for="(card, index) in store.shopByBrand" :key="index">
            <div class="carousel__item">
              <div class="carousel__item">
                <div
                  class="relative flex justify-center flex-shrink-0 h-56 mx-2 overflow-hidden border border-white w-44 rounded-xl">
                  <div class="relative overflow-hidden bg-no-repeat bg-cover transit">
                    <img class="rounded-t-lg" :src="getImageUrl(card.img)" />
                  </div>
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

    <div class="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-full lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="card in cards" :key="card" class="relative group">
          <nuxt-link :to="card.route"
            class="block max-w-full lg:max-w-96 xs:min-w-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="p-6 text-center">
              <p class="mb-2">{{ card.title }}</p>
              <p class="text-base truncate text-neutral-600 dark:text-neutral-200">
                {{ card.subtitle }}
              </p>
            </div>
            <div class="relative overflow-hidden bg-no-repeat bg-cover">
              <img class="transit" :src="card.img" />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <section class="max-w-full py-6 mx-auto mt-8 sm:px-6 lg:px-8">
      <img src="https://justfields.com/storage/projects/7M5rV059/expressss.webp"
        class="w-full h-60 xs:h-56 sm:h-72 md:h-96">
    </section>
  </div>
</template>

<script setup>
import { useShopByBrandStore } from '@/stores/shopByBrandStore'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
// import { useI18n } from 'vue-i18n'

const store = useShopByBrandStore()
const { t } = useI18n()

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

const cards = reactive([
  { title: t('home.activewear_for_your_coolness'), subtitle: t('home.large_collections_of_activewear_explore_the_outside'), img: 'https://justfields.com/storage/projects/7M5rV059/activewear.jpg', route: '' },
  { title: t('home.too_cool_hipster_kids_clothes'), subtitle: t('home.every_kid_needs_this_place_it_is_fun_inside_check_out_the_coolest_kids'), img: 'https://justfields.com/storage/projects/7M5rV059/4-Kids.jpg', route: '' },
  { title: t('home.a_never_ending_sunglasses_season'), subtitle: t('home.on_any_and_all_occasions_the_right_pair_of_shades_will_elevate_your_days_out'), img: 'https://justfields.com/storage/projects/7M5rV059/6-sunglasses.jpg', route: '' },
  { title: t('home.accessories_and_bags'), subtitle: t('home.sharpening_up_your_fashion_look_with_these_statement'), img: 'https://justfields.com/storage/projects/7M5rV059/bagssss.jpg', route: '' },
])
</script>