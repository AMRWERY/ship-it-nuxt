<template>
    <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav class="flex">
                <ol role="list" class="flex items-center">
                    <li class="text-left">
                        <div class="-m-1">
                            <a href="#"
                                class="p-1 text-sm font-medium text-gray-600 rounded-md focus:text-gray-900 focus:shadow hover:text-gray-800">
                                Home
                            </a>
                        </div>
                    </li>

                    <li class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <a href="#"
                                    class="p-1 text-sm font-medium text-gray-600 rounded-md focus:text-gray-900 focus:shadow hover:text-gray-800">
                                    Products
                                </a>
                            </div>
                        </div>
                    </li>

                    <li class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <a href="#"
                                    class="p-1 text-sm font-medium text-gray-600 rounded-md focus:text-gray-900 focus:shadow hover:text-gray-800"
                                    aria-current="page">
                                    Coffee
                                </a>
                            </div>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>

        <div class="flex flex-wrap mx-auto lg:w-4/5">
            <img class="max-w-xl overflow-hidden rounded-lg h-[650px] xs:w-[400px] lg:w-[550px]" :src="selectedImg" />
            <div class="w-full mt-4 lg:order-1 lg:w-96 lg:flex-shrink-0">
                <div class="flex items-start">
                    <button type="button" @click="selectCard('imgFront')" v-if="productDetails?.imgFront != null"
                        class="w-20 h-20 mb-3 overflow-hidden text-center border-2 border-gray-900 rounded-lg flex-0 aspect-square max-w-24 me-3 transit">
                        <img class="object-cover w-full h-full" :src="productDetails?.productImg" />
                    </button>
                    <button type="button" @click="selectCard('imgBack')" v-if="productDetails?.imgBack != null"
                        class="w-20 h-20 mb-3 overflow-hidden text-center border-2 border-gray-900 rounded-lg flex-0 aspect-square max-w-24 ms-2 transit">
                        <img class="object-cover w-full h-full" :src="productDetails?.imgBack" />
                    </button>
                </div>
            </div>
            <div class="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                <div class="flex">
                    <h2 class="font-medium tracking-widest text-blue-500 text-md title-font">
                        {{ productDetails?.brand }}
                    </h2>
                    <span class="p-1 ml-auto text-sm font-semibold text-green-600 bg-green-100 rounded-lg"
                        v-if="productDetails?.discount">{{ productDetails?.discount }}% off</span>
                </div>
                <h1 class="mb-1 text-3xl font-medium text-gray-900 title-font">
                    {{ productDetails?.title }}
                </h1>
                <div class="flex mb-4">
                    <span class="flex items-center">

                        <rating :rating="productDetails?.rating" :reviews="productDetails?.reviews" />

                    </span>
                    <span class="flex py-2 pl-3 ml-3 border-l-2 border-gray-200">
                        <a class="text-gray-500">
                            <i class="w-5 h-5 fa-brands fa-facebook-f"></i>
                        </a>
                        <a class="ml-2 text-gray-500">
                            <i class="w-5 h-5 fa-brands fa-x-twitter"></i>
                        </a>
                        <a class="ml-2 text-gray-500">
                            <i class="w-5 h-5 fa-brands fa-whatsapp"></i>
                        </a>
                    </span>
                </div>
                <div class="my-3">
                    <p>SKU: <strong>{{ productDetails?.sku }}</strong></p>
                </div>
                <div class="mb-4">
                    <p>Availability: <strong>{{ productDetails?.availability }}</strong></p>
                </div>
                <div class="overflow-x-hidden overflow-y-auto max-h-14 desc">
                    <p class="leading-relaxed">
                        {{ productDetails?.description }}
                    </p>
                </div>
                <div class="flex items-center pb-5 mt-6 mb-5 border-gray-100">
                    <div class="flex">
                        <div class="items-center" v-if="productDetails?.color != null">
                            <p class="flex items-center mr-3">Color: <strong
                                    class="relative flex items-center justify-center px-4 py-3 ml-3 text-sm font-medium border rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none sm:flex-1">{{
                                        productDetails?.color }}</strong></p>
                        </div>
                        <div class="items-center" v-if="productDetails?.colors != null">
                            <p class="flex items-center mr-3">Color: <strong v-for="color in store.selectedProduct?.colors"
                                    :key="color"
                                    class="relative flex items-center justify-center px-4 py-3 ml-3 text-sm font-medium border rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none sm:flex-1">{{
                                        color }}</strong></p>
                        </div>
                    </div>
                    <div class="flex items-center ml-16" v-if="productDetails?.size != null">
                        <span class="mr-3">Size</span>
                        <div class="ml-auto">
                            <div class="relative">
                                <select
                                    class="py-2 pl-3 pr-10 text-base border border-gray-400 rounded appearance-none focus:outline-none focus:border-red-500">
                                    <option>--Select--</option>
                                    <option v-for="size in store.selectedProduct?.size" :key="size">{{ size }}</option>
                                </select>
                                <span
                                    class="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                                    <i class="w-4 h-4 fa-solid fa-angle-down"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="items-center ml-16" v-if="productDetails?.oneSize != null">
                        <p class="flex items-center mr-3">Size: <strong
                                class="relative flex items-center justify-center px-4 py-3 ml-3 text-sm font-medium border rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none sm:flex-1">{{
                                    productDetails?.oneSize }}</strong></p>
                    </div>
                    <div class="flex items-center ml-16" v-if="productDetails?.styles != null">
                        <span class="mr-3">Style</span>
                        <div class="ml-auto">
                            <div class="relative">
                                <select
                                    class="py-2 pl-3 pr-10 text-base border border-gray-400 rounded appearance-none focus:outline-none focus:border-red-500">
                                    <option>--Select--</option>
                                    <option v-for="style in store.selectedProduct?.styles" :key="style">{{ style }}</option>
                                </select>
                                <span
                                    class="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                                    <i class="w-4 h-4 fa-solid fa-angle-down"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-3" v-if="productDetails?.type != null">
                    <p>Type: <strong>{{ productDetails?.type }}</strong></p>
                </div>
                <div class="my-3">
                    <p>Category: <strong>{{ productDetails?.category }}</strong></p>
                </div>

                <div class="flex items-center">
                    <label for="quantity"
                        class="mt-5 mr-4 text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                    <div class="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
                        <button
                            class="h-full text-white bg-red-500 rounded-l outline-none cursor-pointer w-7 dark:hover:bg-red-700 hover:text-white hover:bg-red-600">
                            <span class="m-auto text-2xl font-thin">-</span>
                        </button>
                        <input type="number" class="h-10 text-center border-gray-200 rounded w-14 sm:text-sm"
                            placeholder="1" />
                        <button
                            class="h-full text-white bg-blue-500 rounded-r outline-none cursor-pointer w-7 dark:hover:bg-blue-700 hover:text-white hover:bg-blue-700">
                            <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div>

                <hr class="mt-4">
                <div class="flex mt-6">
                    <span class="text-2xl font-medium text-gray-900 title-font">EGP{{ productDetails?.price }}</span>
                    <span class="mt-1 ml-1 font-medium text-gray-500 line-through text-md"
                        v-if="productDetails?.originalPrice">EGP{{ productDetails?.originalPrice
                        }}</span>
                    <button type="button"
                        class="inline-flex items-center justify-center px-6 py-2 ml-auto text-white transition-all duration-200 ease-in-out bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600 focus:shadow">
                        <i class="w-5 h-5 mr-3 fa-solid fa-basket-shopping shrink-0"></i>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- related products -->
    <div class="max-w-full py-6 mx-auto sm:px-6 lg:px-8">
        <!-- <div class="lg:col-span-3">
            <div class="border-b border-gray-300">
                <nav class="flex gap-4">
                    <a href="#" title=""
                        class="py-4 text-sm font-medium text-gray-900 border-b-2 border-gray-900 hover:border-gray-400 hover:text-gray-800">
                        Description
                    </a>

                    <a href="#" title=""
                        class="inline-flex items-center py-4 text-sm font-medium text-gray-600 border-b-2 border-transparent">
                        Reviews
                        <span class="block px-2 py-px ml-2 text-xs font-bold text-gray-100 bg-gray-500 rounded-full">
                            1,209
                        </span>
                    </a>
                </nav>
            </div>

            <div class="flow-root mt-8 sm:mt-12">
                <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
                <p class="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                    accusantium nesciunt fuga.
                </p>
                <h1 class="mt-8 text-3xl font-bold">
                    From the Fine Farms of Brazil
                </h1>
                <p class="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                    numquam enim facere.
                </p>
                <p class="mt-4">
                    Amet consectetur adipisicing elit. Optio numquam enim facere.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                    rerum nostrum eius facere, ad neque.
                </p>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useBeautyProductsStore } from '@/stores/products/beautyProductsStore'

const store = useBeautyProductsStore()
const router = useRouter()
const productDetails = ref(null);
const productId = ref('');
const selectedImg = ref(null);

onMounted(() => {
    productId.value = router.currentRoute.value.params.id;
    store.getProductById(productId.value);
});

watch(() => store.selectedProduct, (newProduct) => {
    if (newProduct) {
        productDetails.value = newProduct;
    }
    selectedImg.value = productDetails.value['productImg'];
});

const selectCard = (imgProperty) => {
    selectedImg.value = productDetails.value[imgProperty];
};
</script>