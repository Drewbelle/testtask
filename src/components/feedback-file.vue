<template>
    <div class="feedBackFile">
        <headerFile/>
        <div class="feedBackFile_content">
            <div class="feedBackFile_content_form">
                <form @submit.prevent="submit">
                    <v-text-field
                    v-model="name.value.value"
                    :counter="10"
                    :error-messages="name.errorMessage.value"
                    label="Имя"
                    ></v-text-field>

                    <v-text-field
                    v-model="phone.value.value"
                    :counter="7"
                    :error-messages="phone.errorMessage.value"
                    label="Моб. телефон"
                    ></v-text-field>

                    <v-text-field
                    v-model="email.value.value"
                    :error-messages="email.errorMessage.value"
                    label="E-mail"
                    ></v-text-field>

                    <v-btn
                    class="me-4"
                    type="submit"
                    >
                    Отправить
                    </v-btn>

                    <v-btn @click="handleReset">
                    Очистить
                    </v-btn>
                </form>
            </div>
        </div>
        <footerFile/>
    </div>
</template>

<script>
    import { useField, useForm } from 'vee-validate'
    import headerFile from './header-file.vue';
    import footerFile from './footer-file.vue'
    export default {
        setup () {
            const { handleSubmit, handleReset } = useForm({
                validationSchema: {
                name (value) {
                    if (value?.length >= 2) return true

                    return 'Name needs to be at least 2 characters.'
                },
                phone (value) {
                    if (value?.length > 9 && /[0-9-]+/.test(value)) return true

                    return 'Phone number needs to be at least 9 digits.'
                },
                email (value) {
                    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

                    return 'Must be a valid e-mail.'
                },
                select (value) {
                    if (value) return true

                    return 'Select an item.'
                },
                checkbox (value) {
                    if (value === '1') return true

                    return 'Must be checked.'
                },
                },
            })
            const name = useField('name')
            const phone = useField('phone')
            const email = useField('email')

            const submit = handleSubmit(values => {
                alert(JSON.stringify(values, null, 2))
            })

            return { name, phone, email, submit, handleReset }
        },
        name: 'feedBackFile',
        components: {
            headerFile,
            footerFile,
        },
    }
</script>