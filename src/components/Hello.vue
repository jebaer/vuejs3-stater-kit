<template>
    <section class="m-12">
        <div v-if="!display" class="input-group">
            <input
                v-model="name"
                type="text"
                placeholder="What's your name?"
                class="bg-transparent text-white-base border-0 focus:border-0 border-b-2 border-white-base min-w-full"
                :class="{ 'border-secondary-base': isInvalid }"
                @keyup="validate"
            />
            <button
                class="bg-secondary-base hover:bg-secondary-dark text-lg min-w-full mt-3"
                @click="handleClick"
            >
                &#128640; SEND
            </button>
        </div>
        <p v-if="display" class="text-xl text-white-base font-bold">
            &#128075; Hello {{ capitalizedName }} ! &#128075;
        </p>
    </section>
</template>

<script>
import { computed, inject, ref } from 'vue';
import validation from '../hooks/validation';

export default {
    name: 'Hello',
    setup() {
        const store = inject('store');

        const name = ref(null);
        let display = ref(false);
        let isInvalid = ref(false);

        const capitalizedName = computed(
            () => store.getters.getCapitalizedName,
        );

        const { nameValidation } = validation();

        const handleClick = () => {
            if (name.value && nameValidation(name)) {
                display.value = true;
                store.dispatch('SET_NAME', { name: name.value });
            }
        };

        const validate = () => {
            isInvalid.value = !nameValidation(name);
        };

        return {
            name,
            display,
            isInvalid,
            handleClick,
            validate,
            capitalizedName,
        };
    },
};
</script>
