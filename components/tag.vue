<template>
  <div class="tag">
    <span class="tag-content">
      <slot />
    </span>
    <span>
      <icon class="remove" icon="x" />
    </span>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import icon from '~/components/icon.vue'

export default Vue.extend({
    components: {
        icon
    }
})
</script>
<style scoped>
    .tag {
        display: inline flex;
        border: var(--line-width) solid var(--foreground);

        padding: var(--spacing-s);
    }

    .tag-content {
        margin-right: var(--spacing-xs);
    }

    .remove {
        display: block;
        /* display: inline flex; */
        position: relative;
        width: 16px;
        top: 50%;
        transform: translateY(-50%);
        /* vertical-align: text-bottom; */
        cursor: pointer;
    }
</style>
