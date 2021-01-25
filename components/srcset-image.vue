<template>
    <img :src="src" :srcset="srcset" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        src: String,
        sizes: {
            default: () => [
                "512w",
                "768w",
                "1024w",
                "2048w",
                // "4096w",
            ],
            type: Array,
        }
    },
    computed: {
        srcset() {
            const parts = this.src.split(".");
            const extension = parts.pop();
            const name = parts.join(".");

            const sizeSources = this.sizes.map(
                s => `${name}_${s}.${extension} ${s}`);

            return sizeSources.join(", ");
        }
    }
})
</script>

<style scoped>
</style>
