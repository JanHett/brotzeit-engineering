<template>
    <div class="post-preview-container">
        <nuxt-link id="post-link" :to="href || '#'"><div class="post-info-container">
            <div class="post-info prose">
                <h1>{{ title }}</h1>
                <p v-if="author" class="author font-serif">
                    by <span class="font-bold">{{ author }}</span>
                </p>
                <p v-if="formattedCreatedDate || formattedUpdatedDate" class="date font-serif">
                    <span v-if="formattedCreatedDate">published <span class="font-bold">{{ formattedCreatedDate }}</span><br></span>
                    <span v-if="formattedUpdatedDate && createdDate.getTime() !== updatedDate.getTime()">last updated <span class="font-bold">{{ formattedUpdatedDate }}</span></span>
                </p>
                <div class="post-info-tags" v-if="tags">
                    <tag v-for="tag of tags" :key="tag">{{tag}}</tag>
                </div>
                <p v-if="description" class="description font-serif">
                    {{ description }}
                </p>
            </div>
            <div class="shade" />
        </div>
        <img
            v-if="image"
            class="post-preview-image"
            :src="image"
        ></nuxt-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import tag from './tag.vue'

export default Vue.extend({
  components: { tag },
    props: {
        title: String,
        author: String,
        createdAt: [String, Date],
        updatedAt: [String, Date],
        description: String,
        image: String,
        href: String,
        tags: Array,
    },
    computed: {
        createdDate() {
            return typeof this.createdAt === 'string'
                ? new Date(this.createdAt)
                : this.createdAt as Date;
        },
        updatedDate() {
            return typeof this.updatedAt === 'string'
                ? new Date(this.updatedAt)
                : this.updatedAt as Date;
        },
        formattedCreatedDate () {
            return (this as any).createdDate?.toLocaleDateString('en-GB', {})
        },
        formattedUpdatedDate () {
            return (this as any).updatedDate?.toLocaleDateString('en-GB', {})
        }
    }
})
</script>

<style scoped>

.post-preview-container {
    position: relative;

    overflow: hidden;

    width: 100%;
    height: 100%;
}

.post-preview-container #post-link {
    display: block;
    height: 100%;
}

.post-info-container {
    position: relative;
    z-index: 999;
    height: 100%;

    opacity: 1;
    transition: opacity 0.5s;
}

@media (hover: hover) {
    .post-info-container:hover {
        opacity: 0;
        transition: opacity 0.5s;
    }
}

.post-info {
    position: relative;
    z-index: 999;

    padding: var(--spacing);
}

.post-preview-container .post-preview-image,
.post-preview-container .shade {
    position: absolute;
    top: 0px;
    left: 0px;
}

.post-preview-container .post-preview-image {
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
}

.post-preview-container .shade {
    width: 100%;
    height: 100%;
    background-color: var(--background);
    opacity: 0.75;
}

.author,
.date {
    text-align: right;
}

</style>
