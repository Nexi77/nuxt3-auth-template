<script setup lang="ts">
const slots = useSlots();
</script>

<template>
    <div class="card">
        <div v-if="!!slots.header" class="card-header">
            <slot name="header" />
        </div>
        <div v-if="!!slots.default" class="content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    padding: 3.125rem .9375rem;
    border-radius: calc(var(--base-radius) * 2);
    background-color: var(--clr-white-400);
    max-width: 95vw;
    margin: 0 auto;
    box-shadow: 0 0 12px -7px rgb(0 0 0 / 100%);
}
</style>
