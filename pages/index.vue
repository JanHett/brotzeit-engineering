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
            <post-grid class="post-grid" :posts="filteredPosts" />
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

const filters: FilterObject = {
    tags: [],
    search: ""
};

/**
 * Tests if a post `p` matches a set of tags. Always returns true if tags are
 * empty.
 */
function matchesTags(p: any, tags: any) {
    if (!tags.length) return true;

    return tags.length && p.tags &&
        tags.findIndex(
            (tag: string) => !p.tags.includes(tag)
        ) === -1;
}


/**
 * Tests if a post `p` matches a search string. Always returns true if search is
 * undefined.
 */
function matchesSearch(p: any, search: string | undefined) {
    if (!search) return true;

    return search && (
        p.description?.indexOf(search) > -1
        || p.title?.toLowerCase().indexOf(search.toLowerCase()) > -1
        || p.author?.toLowerCase().indexOf(search.toLowerCase()) > -1
    )
}

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
                'createdAt',
                'updatedAt',
                'description',
                'tags',
                'image',
            ])
            // .where(queryFromFilters(filters)) // TODO: update filtering whenever user types
            .sortBy('updatedAt', 'desc')
            // .limit(42) // TODO
            .fetch())
            .map((post: any) => ({
                ...post,
                // TODO: remove this hardcoded piece of path
                href: "/articles" + post.path
            }));

        return {
            posts,
        }
    },
    computed: {
        /**
         * Filter the posts on-client
         * 
         * @todo this is an ugly performance bottleneck waiting to happen!
         * Figure out a way to use the nuxt generate mechanism or nuxt/content
         * or something like that to filter
         */
        filteredPosts() {
            return (this as any).posts.filter((p: any) => {
                return matchesTags(p, this.filters.tags)
                    && matchesSearch(p, this.filters.search);
            });
        }
    },
    watch: {
        filteredPosts() {
            // save search to URL parameters
            const filterValue = this.filters;
            const params = new URLSearchParams(window.location.search);
            if (filterValue.search) {
                params.set("search", filterValue.search);
            } else params.delete("search");
            if (filterValue.tags.length) {
                params.set("tags",
                    encodeURIComponent(filterValue.tags.join(" ")));
            } else params.delete("tags");

            history.replaceState(null, "",
                window.location.pathname + "?" + params.toString());
        }
    },
    mounted() {
        // reconstruct search from URL parameters
        const params = new URLSearchParams(window.location.search);
        if (params.has("search") && typeof params.get("search") === "string")
        {
            this.filters.search = params.get("search") as string;
        }
        if (params.has("tags") && typeof params.get("tags") === "string")
        {
            const parsedTags = decodeURIComponent(params.get("tags") as string)
                .split(" ");
            this.filters.tags = parsedTags;
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
  @apply mb-2;
}
</style>
