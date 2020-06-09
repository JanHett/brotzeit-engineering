<template>
  <div>
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
        posts: Array
    }
})
</script>

<style scoped>

</style>
