<template>
    <div>
        <section class="px-4">
            <div class="max-w-3xl mx-auto text-center">
                <h3 class="mb-6 text">{{ $t('blogs.testimonials') }}</h3>
                <p class="pb-2 mb-6 text-neutral-500 dark:text-neutral-300 md:mb-12">
                    {{
                    $t('blogs.lorem_ipsum_dolor_sit_amet_consectetur_adipisicing_elit_fugit_error_amet_numquam_iure_provident_voluptate_esse_quasi_veritatis_totam_voluptas_nostrum_quisquam_eum_porro_a_pariatur_veniam')
                }}
                </p>
            </div>

            <div class="grid gap-12 text-center md:grid-cols-2">
                <!--First Testimonial-->
                <div class="mb-6 md:mb-0">
                    <div class="flex justify-center mb-6 transit">
                        <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg"
                            class="w-24 rounded-full shadow-lg dark:shadow-black/30" />
                    </div>
                    <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
                        "{{
                        $t('blogs.lorem_ipsum_dolor_sit_amet_eos_adipisci_consectetur_adipisicing_elit_sed_ut_perspiciatis_unde_omnis')
                    }}"
                    </p>
                    <p class="italic">- {{ $t('blogs.anna_morian') }}</p>
                </div>

                <!--Second Testimonial-->
                <div class="mb-0">
                    <div class="flex justify-center mb-6 transit">
                        <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(19).jpg"
                            class="w-24 rounded-full shadow-lg dark:shadow-black/30" />
                    </div>
                    <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
                        "{{
                    $t('blogs.lorem_ipsum_dolor_sit_amet_eos_adipisci_consectetur_adipisicing_elit_sed_ut_perspiciatis_unde_omnis')
                }}"
                    </p>
                    <p class="italic">- {{ $t('blogs.lisa_cudrow') }}</p>
                </div>

                <!--third Testimonial-->
                <div class="mb-0">
                    <div class="flex justify-center mb-6 transit">
                        <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                            class="w-24 rounded-full shadow-lg dark:shadow-black/30" />
                    </div>
                    <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
                        "{{
                    $t('blogs.lorem_ipsum_dolor_sit_amet_eos_adipisci_consectetur_adipisicing_elit_sed_ut_perspiciatis_unde_omnis')
                }}"
                    </p>
                    <p class="italic">- {{ $t('blogs.teresa_may') }}</p>
                </div>

                <!--fourth Testimonial-->
                <div class="mb-0">
                    <div class="flex justify-center mb-6 transit">
                        <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                            class="w-24 rounded-full shadow-lg dark:shadow-black/30" />
                    </div>
                    <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
                        "{{
                        $t('blogs.lorem_ipsum_dolor_sit_amet_eos_adipisci_consectetur_adipisicing_elit_sed_ut_perspiciatis_unde_omnis')
                        }}"
                    </p>
                    <p class="italic">- {{ $t('blogs.john_smith') }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>