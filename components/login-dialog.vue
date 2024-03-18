<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" data-modal-target="bottom-left-modal" data-modal-toggle="bottom-left-modal"
            class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            {{ $t('btn.login') }}
        </button>

        <!-- Bottom Left Modal -->
        <div id="bottom-left-modal" data-modal-placement="bottom-left" tabindex="-1"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-[500px] max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal body -->
                    <div class="p-4 space-y-4 md:p-5">
                        <div
                            class="pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current outline-none dark:bg-neutral-600">
                            <div class="relative p-4 overflow-y-auto">
                                <div class="mt-2 space-y-4 text-center">
                                    <div class="space-y-4">
                                        <div class="flex items-center justify-center">
                                            <img src="/shopping-bags-svgrepo-com.svg" class="w-12" />
                                        </div>
                                        <p class="text-2xl font-semibold">{{ $t('auth.sign_in_to_your_account') }}</p>
                                    </div>

                                    <div class="grid mt-6 space-y-4">
                                        <button @click="signInWithGoogleAccount"
                                            class="h-12 px-6 transition duration-300 border-2 border-gray-300 rounded-full group hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                            <div class="relative flex items-center justify-center space-x-4">
                                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                                                    class="absolute left-0 w-5" />
                                                <span
                                                    class="block text-sm font-semibold tracking-wide text-gray-700 transition duration-300 w-max group-hover:text-blue-600 sm:text-base">{{
                $t('btn.continue_with_google') }}</span>
                                            </div>
                                        </button>
                                    </div>

                                    <div class="mt-5">
                                        <p>{{ $t('auth.or') }} <nuxt-link to="/sign-up" class="text-blue-600"
                                                @click="closeModal">{{ $t('auth.create_free_account') }}</nuxt-link>
                                        </p>
                                    </div>

                                    <div class="relative mt-6">
                                        <div class="absolute inset-0 flex items-center">
                                            <div class="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div class="relative flex justify-center text-sm">
                                            <span class="px-2 text-gray-500 bg-white">{{ $t('auth.or') }} {{
                $t('auth.continue_with') }}</span>
                                        </div>
                                    </div>

                                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                                        <FormKit type="form" id="my-form" class="space-y-6" :actions="false"
                                            @submit="signIn()">
                                            <div>
                                                <div class="flex items-center justify-between">
                                                    <label for="email"
                                                        class="block text-sm font-medium leading-6 text-gray-900">{{
                $t('auth.email_address') }} <span
                                                            class="text-red-600">*</span></label>
                                                </div>
                                                <div class="mt-2">
                                                    <FormKit name="email" type="email" validation="required|email"
                                                        v-model="email" :placeholder="$t('placeholder.your_email')"
                                                        validation-visibility="dirty" message-class="text-red-600"
                                                        outer-class="mb-5"
                                                        inner-class="max-w-md mb-1 overflow-hidden rounded-lg"
                                                        input-class="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>

                                            <div>
                                                <div class="flex items-center justify-between">
                                                    <label for="password"
                                                        class="block text-sm font-medium leading-6 text-gray-900">{{
                                                        $t('auth.password') }}
                                                        <span class="text-red-600">*</span></label>
                                                </div>
                                                <div class="mt-2">
                                                    <FormKit name="password" type="password"
                                                        validation="required|password|length:6,10" v-model="password"
                                                        validation-visibility="dirty"
                                                        :placeholder="$t('placeholder.your_password')"
                                                        message-class="text-red-600" outer-class="mb-5"
                                                        inner-class="max-w-md mb-1 overflow-hidden rounded-lg"
                                                        input-class="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>

                                            <div>
                                                <button type="submit" data-te-modal-dismiss data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                                                    $t('btn.sign_in') }}</button>
                                            </div>
                                        </FormKit>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
import { initModals } from 'flowbite'

const store = useAuthStore()
const email = ref('')
const password = ref('')

const closeModal = () => {
    document.querySelector('#bottom-left-modal').classList.add('hidden')
}

const signIn = () => {
    store.userSignIn({
        email: email.value,
        password: password.value,
    });
    email.value = ''
    password.value = ''
    closeModal()
};

const signInWithGoogleAccount = () => {
    store.signInWithGoogle({
        email: email.value,
    });
};

onMounted(() => {
    initModals();
})
</script>