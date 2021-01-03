<template>
    <span class="tag">
        <span class="tag-content">
            <slot />
        </span><icon
            icon="x"
            class="icon-x remove"
            role="button"
            aria-label="remove tag"
            @click.native.passive="emitRemove"
        />
    </span>
</template>
<script lang="ts">
import Vue from 'vue'
import icon from '~/components/icon.vue'

export default Vue.extend({
    components: {
        icon
    },
    methods: {
        emitRemove() {
            this.$emit("remove");
        }
    }
})
</script>
<style scoped>
.tag {
  @apply p-2;

  position: relative;
  display: inline-block;

  border: solid var(--line-width) var(--foreground);
}

.tag .icon-x {
  @apply h-4;
  @apply w-4;
  @apply ml-1;
  display: inline-block;
  vertical-align: sub;
}

.tag:not(:last-of-type) {
  @apply mr-2;
}
</style>
