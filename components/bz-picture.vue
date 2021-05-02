<template>
    <nuxt-picture class="bz-img" v-bind="$attrs" loading="lazy"></nuxt-picture>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    inheritAttrs: false,
})
</script>

<style>
</style>
