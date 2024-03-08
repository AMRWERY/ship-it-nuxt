<template>
    <!-- drawer init and toggle -->
    <button type="button"
        class="text-gray-600 transition duration-200 hover:ease-in-out disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right"
        aria-controls="drawer-right-example" title="Cart" data-tooltip-target="tooltip-2-bottom"
        data-tooltip-placement="bottom">
        <div id="tooltip-2-bottom" role="tooltip"
            class="absolute z-40 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            {{ $t('tooltip.cart') }}
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <span class="[&>svg]:w-5">
            <i class="fa-solid fa-cart-shopping fa-xl"></i>
        </span>
        <span
            class="absolute -mt-2 -ml-1 rounded-full bg-danger px-[0.65em] py-[0.45em] text-[0.6rem] font-bold leading-none text-white">{{
                cartStore.cart.length }}</span>
    </button>

    <!-- drawer component -->
    <div id="drawer-right-example"
        class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-[450px] dark:bg-gray-800"
        tabindex="-1" aria-labelledby="drawer-right-label">
        <h5 id="drawer-right-label"
            class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            {{ $t('cart.shopping_cart') }}</h5>
        <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
            <i class="fa-solid fa-xmark fa-lg"></i>
            <span class="sr-only">Close menu</span>
        </button>

        <div class="flex-grow p-4 overflow-y-auto offcanvas-body">
            <div class="flex items-center justify-center mt-8" v-if="cartStore.cart.length === 0">
                <p class="text-xl text-center text-gray-500">{{ $t('cart.your_cart_is_empty') }}</p>
            </div>
            <div class="mt-8" v-else>
                <div class="flow-root">
                    <ul role="list" class="-my-6 divide-y divide-gray-200">
                        <li v-for="product in cartStore.cart" :key="product" class="flex py-6">
                            <div class="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                <img :src="product.productImg" class="object-cover object-center w-full h-full" />
                            </div>

                            <div class="flex flex-col flex-1 ml-4">
                                <div>
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <nuxt-link to="">{{ product.title }}</nuxt-link>
                                        </h3>
                                        <p class="ml-4">EGP{{ product.price }}</p>
                                    </div>
                                    <p class="mt-1 text-sm text-gray-500">{{ $t('cart.quantity') }}: {{
                product.quantity }}
                                    </p>
                                </div>
                                <div class="flex items-end justify-between flex-1 text-sm">
                                    <div class="flex">
                                        <button type="button" @click="removeProduct(product.id)"
                                            class="font-medium text-indigo-600 hover:text-indigo-500">{{
                $t('btn.remove') }}</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="px-4 py-6 border-t border-gray-200 sm:px-6" v-if="cartStore.cart.length > 0">
                <div>
                    <form class="space-y-6">
                        <div>
                            <div class="relative flex mt-1 rounded-md shadow-sm"><input
                                    class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 shadow-sm appearance-none focus:outline-none sm:text-sm rounded-is-md focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Coupon Code" value="">
                                <span
                                    class="inline-flex items-center px-3 rounded-ie-md border border-is-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm !bg-transparent !p-0 !border-none !rounded-none">
                                    <button
                                        class="inline-flex items-center justify-center w-full h-full px-5 py-3 font-medium text-white bg-indigo-600 border border-transparent rounded-none shadow-sm rounded-ie-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-indigo-700 focus:ring-indigo-500"
                                        type="submit">{{ $t('btn.apply') }}</button>
                                </span>
                            </div>
                        </div>
                        <p class="text-sm text-gray-700"></p>
                    </form>
                </div>
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>{{ $t('cart.subtotal') }}</p>
                    <p>EGP{{ calculateSubtotal() }}</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">{{ $t('cart.shipping_and_taxes_calculated_at_checkout') }}
                </p>
                <div class="mt-6">
                    <nuxt-link to=""
                        class="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Checkout</nuxt-link>
                </div>
                <div class="flex justify-center mt-6 text-sm text-center text-gray-500">
                    <p>
                        {{ $t('auth.or') }}
                        <nuxt-link type="button" to="" class="font-medium text-indigo-600 hover:text-indigo-500">
                            {{ $t('cart.continue_shopping') }}
                            <span aria-hidden="true"> &rarr;</span>
                        </nuxt-link>
                    </p>
                </div>
            </div>
            <div class="flex justify-center mb-6 text-sm text-center text-gray-500" v-else>
                <nuxt-link to="#" type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                    {{ $t('cart.start_shopping') }}
                    <span aria-hidden="true"> &rarr;</span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'
import { initDrawers, initTooltips } from 'flowbite'

const cartStore = useCartStore()
// const open = ref(false)

onMounted(() => {
    cartStore.cart = cartStore.getCart();
});

const totalQuantity = computed(() => {
    return cartStore.cart.reduce((total, product) => total + product.quantity, 0)
})


const removeProduct = (productId) => {
    const updatedCart = cartStore.cart.filter(product => product.id !== productId);
    cartStore.cart = updatedCart;
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
};

const calculateSubtotal = () => {
    return cartStore.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0).toFixed(2);
}

onMounted(() => {
    initDrawers();
    initTooltips();
})
</script>