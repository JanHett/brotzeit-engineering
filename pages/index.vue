<template>
    <div>
      <div id="brand">
        <h1><div id="brand-brotzeit">Brotzeit</div><div id="brand-engineering">.engineering</div></h1>
      </div>
      <div id="index-content">
        <div id="filter-container">
          <div id="filters" class="">
            <h3>Filter content</h3>
            <input id="search-field" type="text" placeholder="Search for text or tags like #code">
          </div>
        </div>
        <post-grid class="post-grid" :posts="posts" />
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import PostGrid from '~/components/post-grid.vue'

export default Vue.extend({
    components: {
        PostGrid
    },
    async asyncData ({ $content, params }: Context & { $content: any }) {
        const posts = (await $content('/')
            .only([
                'path',
                'title',
                'author',
                'updatedAt',
                'description',
                'image'
            ])
        // .where(/* filter for tags */) // TODO
            .sortBy('updatedAt', 'desc')
        // .limit(42) // TODO
            .fetch())
            .map((post: any) => ({ ...post, href: post.path }))

        return {
            posts
        }
    }
})
</script>

<style lang="postcss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

/** BRANDING */

#brand {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
}

#brand-brotzeit {
  /* TODO: this constant factor is an ugly hack and should be fixed */
  font-size: calc(0.24 * 100vw);
  line-height: 0.85em;
}

#brand-engineering {
  /* TODO: this constant factor is an ugly hack and should be fixed */
  font-size: calc(0.08 * 100vw);
}

/** CONTENT */

#index-content {
  position: relative;
  z-index: 999;
  margin-top: 25vh;
}

#filter-container {
  @apply mb-8;
  @apply p-4;
  background-color: var(--foreground);
  color: var(--background);
}

#filter-container #search-field {
  border-color: var(--background);
  width: 100%;
}

.post-grid {
}
</style>
