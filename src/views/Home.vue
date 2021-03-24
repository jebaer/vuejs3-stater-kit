<template>
    <div class="flex flex-col justify-center w-full items-center">
        <h1 class="text-2xl text-white-base font-bold">
            VUEJS 3 STARTER KIT
        </h1>
        <h2 class="text-xl text-secondary-base">
            A PRECONFIGURED PACKAGE TO START IN A RIGHT WAY
        </h2>
        <Hello />
    </div>
</template>

<script>
import Hello from '../components/Hello.vue';

export default {
    name: 'Home',
    setup() {
        return {};
    },
    components: {
        Hello,
    },
};
</script>
