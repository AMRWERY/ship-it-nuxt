<template>
    <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <nuxt-link to="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/shopping-bags-svgrepo-com.svg" style="height: 35px" loading="lazy" />
                </nuxt-link>
                <div class="flex space-x-3 md:order-2 md:space-x-3 rtl:space-x-reverse">

                    <cart-dialog />

                    <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button"
                        class="relative p-1 text-gray-600 rounded-full hover:text-gray-700" @click="switchLanguage">
                        <span class="absolute -inset-1.5" />
                        <span class="sr-only">Toggle Language</span>
                        <div id="tooltip-bottom" role="tooltip"
                            class="absolute z-40 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ $t('tooltip.change_language') }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <i class="fa-solid fa-language fa-xl"></i>
                    </button>

                    <!-- <button data-tooltip-target="tooltip-1-bottom" data-tooltip-placement="bottom" type="button"
                    class="relative p-1 text-gray-600 rounded-full hover:text-gray-700" @click="toggleTheme">
                    <span class="absolute -inset-1.5" />
                    <span class="sr-only">Toggle Theme</span>
                    <div id="tooltip-1-bottom" role="tooltip-1"
                        class="absolute z-40 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        {{ $t('tooltip.change_theme') }}
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <i :class="theme === 'dark' ? 'fa-solid fa-sun fa-xl' : 'fa-solid fa-moon fa-xl'"></i>
                </button> -->

                    <button type="button" class="flex text-sm rounded-full md:me-0" id="user-menu-button"
                        aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full" src="https://cdn.vuetifyjs.com/images/lists/2.jpg">
                    </button>
                    <!-- Dropdown menu -->
                    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="user-dropdown">
                        <div class="px-4 py-3">
                            <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span
                                class="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul class="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <nuxt-link to="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    <div class="inline-flex items-center">
                                        <i class="fa-solid fa-user me-3"></i>
                                        {{ $t('menu.profile') }}
                                    </div>
                                </nuxt-link>
                            <li>
                                <nuxt-link to="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    <div class="inline-flex items-center">
                                        <i class="fa-solid fa-chart-simple me-3"></i>
                                        {{ $t('menu.dashboard') }}
                                    </div>
                                </nuxt-link>
                            </li>
                            </li>
                            <li>
                                <nuxt-link to="#" type="button"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    <div class="inline-flex items-center">
                                        <i class="fa-solid fa-right-from-bracket me-3"></i>
                                        {{ $t('menu.logout') }}
                                    </div>
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <login-dialog />

                    <button data-collapse-toggle="navbar-cta" type="button"
                        class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <i class="fa-solid fa-bars fa-xl"></i>
                    </button>
                </div>

                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul
                        class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <nuxt-link to="/"
                                class="block px-3 py-2 text-white bg-blue-700 rounded md:p-0 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 rtl:pr-4 md:pl-4"
                                aria-current="page">{{ $t('layout.home') }}</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/categories"
                                class="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{
                            $t('layout.categories') }}</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/blogs"
                                class="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{
                            $t('layout.blogs') }}</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact-us"
                                class="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{
                            $t('layout.contact_us') }}</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { initCollapses, initDropdowns, initTooltips } from 'flowbite'
import { useI18n } from 'vue-i18n'

const switchLanguage = () => {
    const newLang = $i18n.locale.value === 'en' ? 'ar' : 'en';
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('currentLang', newLang);
    }
    $i18n.locale.value = newLang;
    updateLanguageClassInBody(newLang);
    setTimeout(() => {
        location.reload();
    }, 500);
};

const updateLanguageClassInBody = (lang) => {
    const body = document.querySelector("body");
    if (lang === "ar") {
        body.classList.remove("ltr");
        body.classList.add("rtl");
    } else {
        body.classList.remove("rtl");
        body.classList.add("ltr");
    }
};

const $i18n = useI18n()

const initialLang = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('currentLang') : null;
if (initialLang) {
    $i18n.locale.value = initialLang;
    updateLanguageClassInBody(initialLang);
}

const currentLang = computed(() => $i18n.locale.value);

const isRTL = computed(() => $i18n.locale.value === 'ar');

watch(currentLang, (newLang) => {
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem("currentLang", newLang);
    }
    updateLanguageClassInBody(newLang);
});

// const theme = ref('light');

// const toggleTheme = () => {
//     theme.value = theme.value === 'dark' ? 'light' : 'dark';
//     if (typeof sessionStorage !== 'undefined') {
//         sessionStorage.setItem('theme', theme.value);
//     }
//     updateThemeClasses(theme.value);
// };

// const updateThemeClasses = (newTheme) => {
//     const body = document.querySelector('body');
//     if (newTheme === 'dark') {
//         body.classList.add('dark');
//     } else {
//         body.classList.remove('dark');
//     }
// };

// if (typeof sessionStorage !== 'undefined') {
//     const initialTheme = sessionStorage.getItem('theme');
//     updateThemeClasses(initialTheme || 'light');
// }

onMounted(() => {
    initCollapses();
    initDropdowns();
    initTooltips();
})
</script>