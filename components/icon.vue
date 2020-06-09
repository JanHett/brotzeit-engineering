<template>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <span class="icon" v-html="iconSVG" />
</template>

<script lang="ts">
import Vue from 'vue'
import feather from 'feather-icons'

export default Vue.extend({
    props: {
        icon: String
    },
    computed: {
        iconSVG () {
            return feather.icons[this.icon].toSvg({
                stroke: 'var(--foreground)',
                width: '100%',
                height: '100%'
            })
        }
    }
})
</script>

<style scoped>
/* .icon {
    display: inline flex;
    vertical-align: middle;
} */
</style>
