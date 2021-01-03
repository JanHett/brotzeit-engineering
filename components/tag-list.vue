<template>
    <div class="tag-list">
        <tag
            v-for="(tag, index) of tags"
            :key="tag"
            :removable="editable"
            @remove="handleRemoveEvent(index)"
        >{{tag}}</tag>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import icon from '~/components/icon.vue'
import Tag from '~/components/tag.vue'

/**
 * Style-less component handling tags
 */
export default Vue.extend({
    components: {
        icon,
        Tag
    },
    props: {
        tags: {
            type: Array,
            default: () => [],
        },
        editable: {
            type: Boolean,
            default: true,
        }
    },
    methods: {
        handleRemoveEvent(index: number) {
            this.tags.splice(index, 1);
        }
    }
})
</script>
<style scoped>

</style>
