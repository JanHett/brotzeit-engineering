<template>
    <div>
      <div id="brand">
        <h1><div id="brand-brotzeit">Brotzeit</div><div id="brand-engineering">.engineering</div></h1>
      </div>
      <div id="content" class="flex flex-row">
        <div id="filter-column" class="container max-w-sm p-4">
          <div id="filters" class="user-nav">
            <h2>Filter content</h2>
            <input type="text" placeholder="Search for text or tags like #code">
          </div>
        </div>
        <div id="content" class="container mx-auto">
          <post-grid class="post-grid" :posts="posts" />
        </div>
        <div id="navigation-column" class="container max-w-sm p-4">
          <ul id="navigation" class="user-nav">
            <li>Gallery</li>
            <li>What is Brotzeit?</li>
          </ul>
        </div>
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

#content {
  z-index: 999;
}

.post-grid {
  margin-top: 50vh;
}

/** NAVIGATION */

.user-nav {
  position: fixed;
  bottom: var(--spacing);
}

</style>
