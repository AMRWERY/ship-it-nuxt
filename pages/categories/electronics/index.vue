<template>
    <div class="bg-white">
        <div>
            <!-- Mobile filter dialog -->
            <HeadlessTransitionRoot as="template" :show="mobileFiltersOpen">
                <HeadlessDialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
                    <HeadlessTransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                        enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                        leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-black bg-opacity-25" />
                    </HeadlessTransitionChild>

                    <div class="fixed inset-0 z-40 flex">
                        <HeadlessTransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                            leave-to="translate-x-full">
                            <HeadlessDialogPanel
                                class="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl">
                                <div class="flex items-center justify-between px-4">
                                    <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                                    <button type="button"
                                        class="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md"
                                        @click="mobileFiltersOpen = false">
                                        <i class="w-6 h-6 fa-solid fa-xmark" aria-hidden="true"></i>
                                    </button>
                                </div>

                                <!-- Filters -->
                                <form class="mt-4 border-t border-gray-200">
                                    <HeadlessDisclosure as="div" class="px-4 py-6 border-t border-gray-200"
                                        v-slot="{ open }">
                                        <h3 class="flow-root -my-3">
                                            <HeadlessDisclosureButton
                                                class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                                                <span class="font-medium text-gray-900">Price (USD)</span>
                                                <span class="flex items-center ml-6">
                                                    <i class="w-5 h-5 fa-solid fa-plus" aria-hidden="true" v-if="!open"></i>
                                                    <i class="w-5 h-5 fa-solid fa-minus" aria-hidden="true" v-else></i>
                                                </span>
                                            </HeadlessDisclosureButton>
                                        </h3>
                                        <HeadlessDisclosurePanel class="pt-6">
                                            <div class="space-y-4">
                                                <form class="relative flex items-center space-x-1">
                                                    <div>
                                                        <div class="relative mt-1 rounded-md shadow-sm"><input id="minPrice"
                                                                name="minPrice"
                                                                class="flex-1 block w-full px-2 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 h-9"
                                                                type="number" step="100" placeholder="min">
                                                        </div>
                                                    </div>
                                                    <span class="text-gray-600">To</span>
                                                    <div>
                                                        <div class="relative mt-1 rounded-md shadow-sm"><input id="maxPrice"
                                                                name="maxPrice"
                                                                class="flex-1 block w-full px-2 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 h-9"
                                                                step="100" type="number" placeholder="max">
                                                        </div>
                                                    </div>
                                                    <button
                                                        class="inline-flex items-center justify-center px-2 py-1 mt-1 font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-indigo-200 focus:ring-indigo-500"
                                                        type="submit">Go</button>
                                                </form>
                                            </div>
                                        </HeadlessDisclosurePanel>
                                    </HeadlessDisclosure>

                                    <HeadlessDisclosure as="div" v-for="section in filters" :key="section.id"
                                        class="px-4 py-6 border-t border-gray-200" v-slot="{ open }">
                                        <h3 class="flow-root -mx-2 -my-3">
                                            <HeadlessDisclosureButton
                                                class="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500">
                                                <span class="font-medium text-gray-900">{{ section.name }}</span>
                                                <span class="flex items-center ml-6">
                                                    <i class="w-5 h-5 fa-solid fa-plus" aria-hidden="true" v-if="!open"></i>
                                                    <i class="w-5 h-5 fa-solid fa-minus" aria-hidden="true" v-else></i>
                                                </span>
                                            </HeadlessDisclosureButton>
                                        </h3>
                                        <HeadlessDisclosurePanel class="pt-6">
                                            <div class="space-y-6">
                                                <div v-for="(option, optionIdx) in section.options" :key="option.value"
                                                    class="flex items-center">
                                                    <input :id="`filter-mobile-${section.id}-${optionIdx}`"
                                                        :name="`${section.id}[]`" :value="option.value" type="checkbox"
                                                        :checked="option.checked"
                                                        class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                    <label :for="`filter-mobile-${section.id}-${optionIdx}`"
                                                        class="flex-1 min-w-0 ml-3 text-gray-500">{{ option.label }}</label>
                                                </div>
                                            </div>
                                        </HeadlessDisclosurePanel>
                                    </HeadlessDisclosure>
                                </form>
                            </HeadlessDialogPanel>
                        </HeadlessTransitionChild>
                    </div>
                </HeadlessDialog>
            </HeadlessTransitionRoot>

            <main class="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
                <div class="flex items-baseline justify-between pt-12 pb-6 border-b border-gray-200">
                    <p>1 - 2 pages over 43 items for <span
                            class="font-semibold tracking-tight text-blue-700 underline">Beauty</span>
                    </p>
                    <div class="flex items-center">
                        <button type="button" class="p-2 ml-5 -m-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                            <span class="sr-only">View grid</span>
                            <i class="w-5 h-5 fa-solid fa-square" aria-hidden="true"></i>
                        </button>
                        <button type="button" class="p-2 ml-4 -m-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            @click="mobileFiltersOpen = true">
                            <span class="sr-only">Filters</span>
                            <i class="w-5 h-5 fa-solid fa-filter" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <section aria-labelledby="products-heading" class="pt-6 pb-24">
                    <h2 id="products-heading" class="sr-only">Products</h2>

                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                        <!-- Filters -->
                        <form class="hidden lg:block">
                            <HeadlessDisclosure as="div" class="py-6 border-b border-gray-200" v-slot="{ open }">
                                <h3 class="flow-root -my-3">
                                    <HeadlessDisclosureButton
                                        class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                                        <span class="font-medium text-gray-900">Price (USD)</span>
                                        <span class="flex items-center ml-6">
                                            <i class="w-5 h-5 fa-solid fa-plus" aria-hidden="true" v-if="!open"></i>
                                            <i class="w-5 h-5 fa-solid fa-minus" aria-hidden="true" v-else></i>
                                        </span>
                                    </HeadlessDisclosureButton>
                                </h3>
                                <HeadlessDisclosurePanel class="pt-6">
                                    <div class="space-y-4">
                                        <form class="relative flex items-center space-x-1">
                                            <div>
                                                <div class="relative mt-1 rounded-md shadow-sm"><input id="minPrice"
                                                        name="minPrice"
                                                        class="flex-1 block w-full px-2 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 h-9"
                                                        type="number" step="100" placeholder="min">
                                                </div>
                                            </div>
                                            <span class="text-gray-600">To</span>
                                            <div>
                                                <div class="relative mt-1 rounded-md shadow-sm"><input id="maxPrice"
                                                        name="maxPrice"
                                                        class="flex-1 block w-full px-2 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 h-9"
                                                        step="100" type="number" placeholder="max">
                                                </div>
                                            </div>
                                            <button
                                                class="inline-flex items-center justify-center px-2 py-1 mt-1 font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-indigo-200 focus:ring-indigo-500"
                                                type="submit">Go</button>
                                        </form>
                                    </div>
                                </HeadlessDisclosurePanel>
                            </HeadlessDisclosure>

                            <HeadlessDisclosure as="div" v-for="section in filters" :key="section.id"
                                class="py-6 border-b border-gray-200" v-slot="{ open }">
                                <h3 class="flow-root -my-3">
                                    <HeadlessDisclosureButton
                                        class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                                        <span class="font-medium text-gray-900">{{ section.name }}</span>
                                        <span class="flex items-center ml-6">
                                            <i class="w-5 h-5 fa-solid fa-plus" aria-hidden="true" v-if="!open"></i>
                                            <i class="w-5 h-5 fa-solid fa-minus" aria-hidden="true" v-else></i>
                                        </span>
                                    </HeadlessDisclosureButton>
                                </h3>
                                <HeadlessDisclosurePanel class="pt-6">
                                    <div class="space-y-4">
                                        <div v-for="(option, optionIdx) in section.options" :key="option.value"
                                            class="flex items-center">
                                            <input :id="`filter-${section.id}-${optionIdx}`" :name="`${section.id}[]`"
                                                :value="option.value" type="checkbox" :checked="option.checked"
                                                class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                            <label :for="`filter-${section.id}-${optionIdx}`"
                                                class="ml-3 text-sm text-gray-600">{{ option.label }}</label>
                                        </div>
                                    </div>
                                </HeadlessDisclosurePanel>
                            </HeadlessDisclosure>
                        </form>

                        <!-- Product grid -->
                        <div class="lg:col-span-4">

                            <electronics-products />

                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>
  
<script setup>
const filters = [
    {
        id: 'fulfillment',
        name: 'Fulfillment',
        options: [
            { value: 'express deals', label: 'Express Deals', checked: false },
            { value: 'global deals', label: 'Global Deals', checked: false },
        ],
    },
    {
        id: 'categories',
        name: 'Categories',
        options: [
            { value: 'women', label: 'Women', checked: false },
            { value: 'men', label: 'Men', checked: false },
            { value: 'kids', label: 'Juniors & Kids', checked: true },
            { value: 'electronics', label: 'Electronics', checked: false },
            { value: 'beauty', label: 'Beauty', checked: false },
        ],
    },
    {
        id: 'colors',
        name: 'Colors',
        options: [
            { value: 'yellow', label: 'Yellow', checked: false },
            { value: 'white', label: 'White', checked: false },
            { value: 'turquoise', label: 'Turquoise', checked: false },
            { value: 'silver', label: 'Silver', checked: false },
            { value: 'red', label: 'Red', checked: false },
            { value: 'purple', label: 'Purple', checked: true },
            { value: 'pink', label: 'Pink', checked: false },
            { value: 'orange', label: 'Orange', checked: false },
            { value: 'off-white', label: 'Off-White', checked: false },
            { value: 'grey', label: 'Grey', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'gold', label: 'Gold', checked: false },
            { value: 'blue', label: 'Blue', checked: false },
            { value: 'black', label: 'Black', checked: false },
        ],
    },
    {
        id: 'brands',
        name: 'Brands',
        options: [
            { value: 'zulu', label: 'Zulu', checked: false },
            { value: 'zara', label: 'Zara', checked: false },
            { value: 'yellow box', label: 'Yellow Box', checked: true },
            { value: 'timberland', label: 'Timberland', checked: false },
            { value: 'sugar', label: 'Sugar', checked: false },
            { value: 'sega', label: 'Sega', checked: false },
            { value: 'razer', label: 'Razer', checked: false },
            { value: 'puma', label: 'Puma', checked: false },
            { value: 'paris', label: 'PARIS', checked: false },
            { value: 'nixon', label: 'Nixon', checked: false },
            { value: 'nike', label: 'Nike', checked: false },
            { value: 'lacoste', label: 'Lacoste', checked: false },
        ],
    },
]

const mobileFiltersOpen = ref(false)
</script>