<template>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
            :tags="post.tags"
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
    }
})
</script>

<style scoped>
</style>
