<template>
    <div>
        <HeadlessDisclosure as="nav" class="bg-gray-800" v-slot="{ open }" v-if="!hideNavbar">
            <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <!-- Mobile menu button -->
                        <HeadlessDisclosureButton
                            class="relative inline-flex items-center justify-center px-2 py-4 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white">
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Open main menu</span>
                            <i class="fa-solid fa-bars fa-xl"></i>
                        </HeadlessDisclosureButton>
                    </div>
                    <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-s-4">
                                <nuxt-link v-for="item in navigation" :key="item.name" :to="item.route" :class="[
            $route.path === item.route
                ? 'bg-gray-700 text-white dark:text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white dark:text-white',
            'rounded-md px-3 py-2 text-sm font-medium',
        ]" :aria-current="$route.path === item.route ? 'page' : undefined" exact>
                                    {{ item.name }}
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute inset-y-0 right-0 flex items-center pr-2 space-s-3 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        <cart-dialog />

                        <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button"
                            class="relative p-1 text-gray-300 rounded-full hover:text-gray-400" @click="switchLanguage">
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

                        <!-- Profile dropdown -->
                        <HeadlessMenu as="div" class="relative ml-3">
                            <div>
                                <HeadlessMenuButton class="relative flex text-sm bg-gray-800 rounded-full">
                                    <span class="absolute -inset-1.5" />
                                    <span class="sr-only">Open user menu</span>
                                    <img class="w-8 h-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="" />
                                </HeadlessMenuButton>
                            </div>
                            <transition enter-active-class="transition duration-100 ease-out"
                                enter-from-class="transform scale-95 opacity-0"
                                enter-to-class="transform scale-100 opacity-100"
                                leave-active-class="transition duration-75 ease-in"
                                leave-from-class="transform scale-100 opacity-100"
                                leave-to-class="transform scale-95 opacity-0">
                                <HeadlessMenuItems
                                    class="absolute right-0 z-50 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <HeadlessMenuItem v-slot="{ active }">
                                        <nuxt-link to="#"
                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                                            <i class="fa-solid fa-user me-3"></i>
                                            {{ $t('menu.your_profile') }}
                                        </nuxt-link>
                                    </HeadlessMenuItem>
                                    <HeadlessMenuItem v-slot="{ active }">
                                        <nuxt-link to="#"
                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                                            <i class="fa-solid fa-chart-simple me-3"></i>
                                            {{ $t('menu.dashboard') }}
                                        </nuxt-link>
                                    </HeadlessMenuItem>
                                    <HeadlessMenuItem v-slot="{ active }">
                                        <nuxt-link to="#"
                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                                            <i class="fa-solid fa-right-from-bracket me-3"></i>
                                            {{ $t('menu.sign_out') }}
                                        </nuxt-link>
                                    </HeadlessMenuItem>
                                </HeadlessMenuItems>
                            </transition>
                        </HeadlessMenu>

                        <login-dialog />

                    </div>
                </div>
            </div>

            <HeadlessDisclosurePanel class="sm:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <HeadlessDisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.route"
                        :class="[
            $route.path === item.route
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-sm font-medium',
        ]" :aria-current="$route.path === item.route ? 'page' : undefined" exact>{{ item.name }}
                    </HeadlessDisclosureButton>
                </div>
            </HeadlessDisclosurePanel>
        </HeadlessDisclosure>
    </div>
</template>

<script setup>
import { initTooltips } from 'flowbite'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

const navigation = ref([
    { name: t('layout.home'), route: '/', current: true },
    { name: t('layout.categories'), route: '/categories', current: false },
    { name: t('layout.blogs'), route: '/blogs', current: false },
    { name: t('layout.contact_us'), route: '/contact-us', current: false },
])

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

const hideNavbar = computed(() => {
    return route.path === '/sign-up'
})

onMounted(() => {
    initTooltips();
})
</script>