<template>
    <div>
        <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <section class="relative flex flex-wrap lg:h-screen lg:items-center">
                <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img class="w-auto h-16 mx-auto" src="/shopping-bags-svgrepo-com.svg" />
                        <h2 class="mt-5 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">{{
                            $t('auth.create_free_account') }}</h2>
                    </div>

                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div class="grid my-6 space-y-4">
                            <button @click="signUpWithGoogleAccount"
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

                        <div class="relative my-6">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-2 text-gray-500 bg-white">{{ $t('auth.or') }} {{
                            $t('auth.continue_with') }}</span>
                            </div>
                        </div>

                        <FormKit type="form" id="my-form" class="space-y-6" :actions="false" :incomplete-message='false'
                            @submit="signUp">
                            <div>
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('auth.email_address') }} <span class="text-red-600">*</span>
                                </label>
                                <FormKit name="email" type="email" validation="required|email" v-model="email"
                                    :validation-messages="{ required: $t('validation.email_address_is_required') }"
                                    :placeholder="$t('placeholder.your_email')" validation-visibility="dirty"
                                    message-class="text-red-600" outer-class="mb-5"
                                    inner-class="max-w-md mb-1 overflow-hidden rounded-lg"
                                    input-class="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" />
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="given-name" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('auth.username') }}
                                        <span class="text-red-600">*</span>
                                    </label>
                                </div>
                                <div class="mt-2">
                                    <FormKit name="username" type="text" validation="required|username|contains_alpha"
                                        v-model="username"
                                        :validation-messages="{ required: $t('validation.username_is_required') }"
                                        :placeholder="$t('placeholder.your_name')" validation-visibility="dirty"
                                        message-class="text-red-600" outer-class="mb-5"
                                        inner-class="max-w-md mb-1 overflow-hidden rounded-lg"
                                        input-class="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('auth.password') }}
                                        <span class="text-red-600">*</span>
                                    </label>
                                </div>
                                <div class="mt-2">
                                    <FormKit name="password" type="password" validation="required|password|length:6,10"
                                        v-model="password"
                                        :validation-messages="{ required: $t('validation.password_is_required') }"
                                        validation-visibility="dirty" :placeholder="$t('placeholder.your_password')"
                                        message-class="text-red-600" outer-class="mb-5"
                                        inner-class="max-w-md mb-1 overflow-hidden rounded-lg"
                                        input-class="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button type="submit"
                                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                            $t('btn.sign_up') }}</button>
                            </div>
                        </FormKit>

                        <div class="mt-5 text-center">
                            <p>{{ $t('auth.or') }} <nuxt-link to="/sign-up" class="text-blue-600">{{
                                    $t('auth.already_have_an_account') }}</nuxt-link>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="relative w-full h-64 sm:h-96 lg:h-full lg:w-1/2">
                    <img src="https://justfields.com/storage/projects/7M5rV059/slider01.jpg"
                        class="absolute inset-0 object-cover w-full h-full" />
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const store = useAuthStore()
const email = ref('')
const password = ref('')
const username = ref('')

const signUp = () => {
    store.userSignUp({
        email: email.value,
        password: password.value,
        username: username.value
    });
    email.value = ''
    password.value = ''
    username.value = ''
};

const signUpWithGoogleAccount = () => {
    store.signUpWithGoogle({
        email: email.value,
        username: username.value
    });
};

// onUpdated(() => {
//     setTimeout(() => {
//         location.reload();
//     }, 1000);
// })

useHead({
    title: t('head.sign_up_new_account')
})
</script>