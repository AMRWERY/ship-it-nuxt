<template>
    <div>
        <section
            class="relative z-10 max-w-7xl mx-auto overflow-hidden bg-white dark:bg-dark py-20 px-14 lg:py-[80px] my-10 rounded-xl">
            <div class="container mx-auto">
                <div class="flex flex-wrap -mx-4 lg:justify-between">
                    <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
                        <div class="mb-12 max-w-[570px] lg:mb-0">
                            <span class="block text-lg font-semibold text-primary">{{ $t('contact_us.contact_us')
                                }}</span>
                            <h2
                                class="text-dark mb-6 text-[32px] font-bold sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                {{ $t('contact_us.get_in_touch_with_us') }}
                            </h2>
                            <p class="text-base leading-relaxed text-body-color dark:text-dark-6 mb-9">
                                {{
                                $t('contact_us.lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit_sed_do_eiusmod_tempor_incididunt_ut_labore_et_dolore')
                            }}
                            </p>
                            <div class="mb-8 flex w-full max-w-[370px]">
                                <div
                                    class="bg-primary/5 text-primary me-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                                    <i class="text-gray-700 fa-solid fa-house fa-3x"></i>
                                </div>
                                <div class="w-full">
                                    <h4 class="mb-1 text-xl font-bold text-gray-800 dark:text-white">{{
                                    $t('contact_us.our_location') }}</h4>
                                    <p class="text-base text-gray-800 dark:text-dark-6">
                                        {{ $t('contact_us.maadi_cairo_egypt') }}
                                    </p>
                                </div>
                            </div>
                            <div class="mb-8 flex w-full max-w-[370px]">
                                <div
                                    class="bg-primary/5 text-primary me-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                                    <i class="text-gray-700 fa-solid fa-phone fa-3x"></i>
                                </div>
                                <div class="w-full">
                                    <h4 class="mb-1 text-xl font-bold text-gray-800 dark:text-white">{{
                                $t('contact_us.phone_number') }}</h4>
                                    <p class="text-base text-gray-800 dark:text-dark-6">(+20)10 226 557 42</p>
                                </div>
                            </div>
                            <div class="mb-8 flex w-full max-w-[370px]">
                                <div
                                    class="bg-primary/5 text-primary me-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                                    <i class="text-gray-700 fa-regular fa-envelope fa-3x"></i>
                                </div>
                                <div class="w-full">
                                    <h4 class="mb-1 text-xl font-bold text-gray-800 dark:text-white">{{
                                $t('contact_us.email_address') }}</h4>
                                    <p class="text-base text-gray-800 dark:text-dark-6">amrmounir2@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div class="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
                            <form>
                                <div class="mb-6">
                                    <input type="text" :placeholder="$t('placeholder.your_name')"
                                        class="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none" />
                                </div>
                                <div class="mb-6">
                                    <input type="email" :placeholder="$t('placeholder.your_email')"
                                        class="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none" />
                                </div>
                                <div class="mb-6">
                                    <input type="text" :placeholder="$t('placeholder.your_phone')"
                                        class="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none" />
                                </div>
                                <div class="mb-6">
                                    <textarea rows="6" :placeholder="$t('placeholder.your_message')"
                                        class="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"></textarea>
                                </div>
                                <div>
                                    <button type="submit"
                                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                        {{ $t('btn.send_message') }}
                                    </button>
                                </div>
                            </form>
                            <div>
                                <span class="absolute -top-10 -end-9 z-[-1]">
                                    <img src="/contact-1.svg" />
                                </span>
                                <span class="absolute -end-10 top-[90px] z-[-1]">
                                    <img src="/contact-2.svg" />
                                </span>
                                <span class="absolute -start-7 -bottom-7 z-[-1]">
                                    <img src="/contact-3.svg" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
    title: t('head.contact_us')
})
</script>