<template>
    <div id="bottom-right-modal" data-modal-placement="bottom-right" tabindex="-1"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-4xl max-h-full">

            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <div class="justify-between p-4 text-center border-b rounded-t md:p-5 dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                        {{ $t('blogs.best_brands_for_fashion') }}
                    </h3>
                </div>

                <div class="grid grid-cols-12 gap-2">
                    <div class="col-span-5">
                        <div class="p-4 space-y-4 md:p-2">
                            <div class="w-full overflow-hidden bg-white rounded-lg shadow-md h-96">
                                <div class="w-full h-1/2 transit">
                                    <img class="object-cover w-full h-96" :src="card?.img">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-7">
                        <div class="p-4 space-y-4 md:p-2">
                            <p class="mb-4 text-2xl font-semibold text-blue-600">{{ card?.title }}</p>
                            <p>{{
                            $t('blogs.lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit_sed_do_eiusmod_tempor_incididunt_ut_labore_et_dolore')
                        }}
                                {{
                                $t('blogs.magna_aliqua_ut_enim_ad_minim_veniam_quis_nostrud_exercitation_ullamco_laboris_nisi_ut_aliquip_ex_ea_commodo_consequat_duis_aute_irure_dolor_in_reprehenderit_in_voluptate_velit_esse_cillum_dolore_eu_fugiat')
                            }}
                                {{
                                $t('blogs.nulla_pariatur_excepteur_sint_occaecat_cupidatat_non_proident_sunt_in_culpa_qui_officia_deserunt_mollit_anim_id_est_laborum')
                                }}</p>
                            <ul class="my-4 ml-8 list-disc">
                                <li>{{ $t('blogs.lorem_ipsum_dolor_sit_amet_consectetuer_adipiscing_elit') }}</li>
                                <li>{{ $t('blogs.aliquam_tincidunt_mauris_eu_risus') }}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    class="flex items-center justify-between p-4 border-t border-gray-200 rounded-b md:p-5 rtl:space-x-reverse dark:border-gray-600">
                    <div></div>
                    <button data-modal-hide="bottom-right-modal" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{
                        $t('btn.close') }}</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { initModals } from 'flowbite'

const props = defineProps(["card"]);
// console.log(props.card)

onMounted(() => {
    initModals();
})
</script>