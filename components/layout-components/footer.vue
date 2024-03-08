<template>
    <footer
        class="mt-12 text-center bg-neutral-100 text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div
            class="flex items-center justify-center p-6 border-b-2 border-neutral-200 dark:border-neutral-500 lg:justify-between">
            <div class="hidden mr-12 lg:block">
                <span>Get connected with us on social networks:</span>
            </div>
            <!-- Social network icons container -->
            <div class="flex justify-center">
                <a href="" class="mr-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="w-4 h-4 fa-brands fa-facebook-f"></i>
                </a>
                <a href="" class="mr-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="w-4 h-4 fa-brands fa-instagram"></i>
                </a>
                <a href="" class="mr-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="w-4 h-4 fa-brands fa-twitter"></i>
                </a>
                <a href="" class="mr-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="w-4 h-4 fa-brands fa-whatsapp"></i>
                </a>
                <a href="" class="mr-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="w-4 h-4 fa-brands fa-github"></i>
                </a>
                <a href="" class="text-neutral-600 dark:text-neutral-200 transit">
                    <i class="w-4 h-4 fa-brands fa-linkedin-in"></i>
                </a>
            </div>
        </div>

        <div class="py-10 mx-6 text-center md:text-left">
            <div class="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-3 lg:space-x-36">
                <div class="">
                    <h6 class="flex items-center justify-center mb-4 font-semibold md:justify-start">
                        <img class="w-auto h-6 mr-1" src="/shopping-bags-svgrepo-com.svg" />
                        <span class="text-2xl">Ship-IT</span>
                    </h6>
                    <p class="text-lg">
                        Online to make your journey even more memorable access or meet
                    </p>
                </div>

                <!-- Useful links section -->
                <div class="">
                    <h6 class="flex justify-center mb-4 font-semibold md:justify-start">
                        Categories
                    </h6>
                    <p class="mb-4">
                        <nuxt-link to="" class="text-neutral-600 dark:text-neutral-200">Women</nuxt-link>
                    </p>
                    <p class="mb-4">
                        <nuxt-link to="" class="text-neutral-600 dark:text-neutral-200">Men</nuxt-link>
                    </p>
                    <p class="mb-4">
                        <nuxt-link to="" class="text-neutral-600 dark:text-neutral-200">Juniors &
                            Kids</nuxt-link>
                    </p>
                    <p class="mb-4">
                        <nuxt-link to=""
                            class="text-neutral-600 dark:text-neutral-200">Electronics</nuxt-link>
                    </p>
                    <p>
                        <nuxt-link to="" class="text-neutral-600 dark:text-neutral-200">Beauty</nuxt-link>
                    </p>
                </div>
                <!-- Contact section -->
                <div>
                    <h6 class="flex justify-center mb-4 font-semibold md:justify-start">
                        Contact
                    </h6>
                    <p class="flex items-center justify-center mb-4 md:justify-start">
                        <i class="w-5 h-5 mr-3 fa-solid fa-house"></i>
                        Maadi, Cairo, Egypt
                    </p>
                    <p class="flex items-center justify-center mb-4 md:justify-start">
                        <i class="w-5 h-5 mr-3 fa-solid fa-envelope"></i>
                        amrmounir2@gmail.com
                    </p>
                    <p class="flex items-center justify-center mb-4 md:justify-start">
                        <i class="w-5 h-5 mr-3 fa-solid fa-phone"></i>
                        +201022655742
                    </p>
                </div>
            </div>
        </div>

        <!--Copyright section-->
        <div class="p-6 text-center bg-neutral-200 dark:bg-neutral-700">
            <span class="mr-1">© 2024 Copyright:</span>
            <a class="font-semibold text-neutral-600 dark:text-neutral-400"
                href="https://tailwind-elements.com/">Ship-IT</a>
        </div>
    </footer>
</template>

<script setup>

</script>