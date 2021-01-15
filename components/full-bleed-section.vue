<template>
    <div class="full-bleed-section"
    >
        <div class="full-bleed-inner" ref="inner">
            <slot />
        </div>
        <!-- "ghost" that allows us to position the content absolutely but still
        have the parent inherit the height of the content -->
        <div class="ghost-container">
            <div class="full-bleed-inner-ghost" ref="inner">
                <slot />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
<style scoped>
.full-bleed-inner {
    width: 100vw;
    left: 0px;
    position: absolute;
}

.ghost-container {
    overflow: hidden;
    max-width: 100%;
}

.full-bleed-inner-ghost {
    position: relative;
    visibility: hidden;
    width: 100vw;
    left: 0px;
    top: 0px;
}
</style>
