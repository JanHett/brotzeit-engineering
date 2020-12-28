<template>
    <div class="grid gap-4" :class="classList">
        <post-preview
            class="post-preview"
            v-for="post of posts"
            :key="post.id || post.path"
            :title="post.title"
            :author="post.author"
            :updatedAt="post.updatedAt"
            :description="post.description"
            :image="post.image"
            :href="post.href"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostPreview from './post-preview.vue'

export default Vue.extend({
    components: {
        PostPreview
    },
    props: {
        posts: Array,
        columns: {
            type: Number,
            default: 3
        }
    },
    computed: {
        classList () {
            const classList = [
                'grid-cols-' + this.columns
            ]

            return classList
        }
    }
})
</script>

<style scoped>
</style>
