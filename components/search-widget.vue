<template>
    <div class="search-widget">
        <tag-list class="tag-list" :tags="filters.tags" />
        <input
            id="search-field"
            type="text"
            ref="searchBox"
            :placeholder="placeholder"
            v-model="searchText"
        >
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TagList from '~/components/tag-list.vue'

export interface FilterObject {
    tags: Array<string>,
    search?: string,
}

/**
 * Style-less component representing a serach box with tag support
 */
export default Vue.extend({
    components: {
        TagList
    },
    props: {
        filters: {
            type: Object,
            default: () => ({
                tags: []
            }),
        },
        placeholder: {
            type: String,
            default: "Search for text or tags like #tag"
        }
    },
    model: {
        prop: "filters",
        event: "change",
    },
    data() {
        return {
            searchText: "",
        }
    },
    watch: {
        searchText(val, previous) {
            // simplest case: we are not handling a tag
            if (!this.searchText.startsWith("#")) {
                this.filters.search = this.searchText;
                this.$emit("change", this.filters);
                return;
            }

            // more complicated case: we are handling a tag
            if (this.searchText.length > 2 &&
                this.searchText[this.searchText.length - 1] === " ")
            {
                // push tag without "#" and only the first space-free part
                this.filters.tags.push(this.searchText.slice(1).split(" ")[0]);
                // notify listeners
                this.$emit("change", this.filters);
                // reset text field
                this.searchText = "";
            }
        }
    },
})
</script>

<style scoped>

</style>
