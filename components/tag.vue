<template>
    <span class="tag">
        <span class="tag-content">
            <slot />
        </span><icon
            icon="x"
            class="icon-x remove"
            role="button"
            aria-label="remove tag"
            v-if="removable"
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
    props: {
        removable: {
            type: Boolean,
            default: false,
        }
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
  @apply mb-2;

  position: relative;
  display: inline-block;

  border: solid var(--line-width) var(--foreground);
}

.tag:not(:last-of-type) {
  @apply mr-2;
}

.tag .icon-x {
  @apply h-4;
  @apply w-4;
  @apply ml-1;
  display: inline-block;
  vertical-align: sub;
}
</style>
