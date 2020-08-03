<template>
    <div class="grid" :class="classList">
        <post-preview
            v-for="post of posts"
            :key="post.id"
            :title="post.title"
            :author="post.author"
            :date="post.date"
            :excerpt="post.excerpt"
            :image="post.image"
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
