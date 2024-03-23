<template>
    <footer v-if="!hideFooter"
        class="mt-12 text-center bg-neutral-100 text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div
            class="flex items-center justify-center p-6 border-b-2 border-neutral-200 dark:border-neutral-500 lg:justify-between">
            <div class="hidden me-12 lg:block">
                <span>{{ $t('footer.get_connected_with_us_on_social_networks') }}</span>
            </div>
            <!-- Social network icons container -->
            <div class="flex justify-center">
                <a href="" class="me-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="w-4 h-4 fa-brands fa-facebook-f"></i>
                </a>
                <a href="" class="me-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="w-4 h-4 fa-brands fa-instagram"></i>
                </a>
                <a href="" class="me-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="w-4 h-4 fa-brands fa-twitter"></i>
                </a>
                <a href="" class="me-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="w-4 h-4 fa-brands fa-whatsapp"></i>
                </a>
                <a href="" class="me-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="w-4 h-4 fa-brands fa-github"></i>
                </a>
                <a href="" class="text-neutral-600 dark:text-neutral-200 transit">
                    <i class="w-4 h-4 fa-brands fa-linkedin-in"></i>
                </a>
            </div>
        </div>

        <div class="py-10 mx-6 text-center md:text-left">
            <div class="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-3 lg:space-s-36">
                <div class="">
                    <h6 class="flex items-center justify-center mb-4 font-semibold md:justify-start">
                        <img class="w-auto h-6 me-1" src="/shopping-bags-svgrepo-com.svg" />
                        <span class="text-2xl">Ship-IT</span>
                    </h6>
                    <p class="text-lg text-start">
                        {{ $t('footer.online_to_make_your_journey_even_more_memorable_access_or_meet') }}
                    </p>
                </div>

                <!-- Categories links section -->
                <div class="">
                    <h6 class="flex justify-center mb-4 font-semibold md:justify-start">
                        Categories
                    </h6>
                    <p class="mb-4">
                        <nuxt-link to="/categories/women"
                            class="flex justify-center text-neutral-600 dark:text-neutral-200 md:justify-start">{{
        $t('categories.women') }}</nuxt-link>
                    </p>
                    <p class="mb-4">
                        <nuxt-link to="/categories/men"
                            class="flex justify-center text-neutral-600 dark:text-neutral-200 md:justify-start">{{
        $t('categories.men') }}</nuxt-link>
                    </p>
                    <p class="mb-4">
                        <nuxt-link to="/categories/juniors-kids"
                            class="flex justify-center text-neutral-600 dark:text-neutral-200 md:justify-start">{{
        $t('categories.juniors_and_kids') }}</nuxt-link>
                    </p>
                    <p class="mb-4">
                        <nuxt-link to="/categories/electronics"
                            class="flex justify-center text-neutral-600 dark:text-neutral-200 md:justify-start">{{
        $t('categories.electronics') }}</nuxt-link>
                    </p>
                    <p>
                        <nuxt-link to="/categories/beauty"
                            class="flex justify-center text-neutral-600 dark:text-neutral-200 md:justify-start">{{
        $t('categories.beauty') }}</nuxt-link>
                    </p>
                </div>

                <!-- Contact section -->
                <div>
                    <h6 class="flex justify-center mb-4 font-semibold md:justify-start">
                        {{ $t('footer.contact') }}
                    </h6>
                    <p class="flex items-center justify-center mb-4 md:justify-start">
                        <i class="w-5 h-5 me-3 fa-solid fa-house"></i>
                        {{ $t('contact_us.maadi_cairo_egypt') }}
                    </p>
                    <p class="flex items-center justify-center mb-4 md:justify-start">
                        <i class="w-5 h-5 me-3 fa-solid fa-envelope"></i>
                        amrmounir2@gmail.com
                    </p>
                    <p class="flex items-center justify-center mb-4 md:justify-start">
                        <i class="w-5 h-5 me-3 fa-solid fa-phone"></i>
                        (+20)10 226 557 42
                    </p>
                </div>
            </div>
        </div>

        <!--Copyright section-->
        <div class="p-6 text-center bg-neutral-200 dark:bg-neutral-700">
            <span class="me-1">{{ $t('footer.©_2024_copyright') }}</span>
            <a class="font-semibold text-neutral-600 dark:text-neutral-400"
                href="https://tailwind-elements.com/">Ship-IT</a>
        </div>
    </footer>
</template>

<script setup>
const route = useRoute()

const hideFooter = computed(() => {
    return route.path === '/sign-up'
})
</script>