<template>
    <div>
      <div id="brand">
        <h1><div id="brand-brotzeit">Brotzeit</div><div id="brand-engineering">.engineering</div></h1>
      </div>
      <div id="index-content">
        <div id="filter-container">
          <div id="filters" class="">
            <h3>Filter content</h3>
            <search-widget
              v-model="filters"
              placeholder="Search for text or tags like #code"
            />
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
import Tag from '~/components/tag.vue'
import TagList from '~/components/tag-list.vue'
import SearchWidget, { FilterObject } from '~/components/search-widget.vue'

function queryFromFilters(filters: FilterObject) {
  const q: any = {};
  if (filters.tags.length) {
    q.tags = { $elemMatch: { $in: filters.tags } };
  }
  if (filters.search) {
    const titleMatch = { $text: { $search: filters.search }};
    const authorMatch = { $text: { $search: filters.search }};
    const descriptionMatch = { $text: { $search: filters.search }};

    q.$or = [ titleMatch, authorMatch, descriptionMatch ];
  }
}

const filters = {
  tags: []
};

export default Vue.extend({
    components: {
        PostGrid,
        Tag,
        TagList,
        SearchWidget,
    },
    data() {
      return {
        filters,
      }
    },
    async asyncData ({ $content, params }: Context & { $content: any }) {
        const posts = (await $content('/')
            .only([
                'path',
                'title',
                'author',
                'updatedAt',
                'description',
                'tags',
                'image',
            ])
            // .where(queryFromFilters(filters)) // TODO: update filtering whenever user types
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
  background-color: var(--background);
  border: solid var(--line-width) var(--foreground);
}

#filter-container #search-field {
  width: 100%;
}

.tag-list {
  @apply mb-4;
}
</style>
