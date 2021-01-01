<template>
    <div class="post-preview-container">
        <nuxt-link id="post-link" :to="href || '#'"><div class="post-info-container">
            <div class="post-info">
                <h1>{{ title }}</h1>
                <p v-if="author" class="author">
                    by {{ author }}
                </p>
                <p v-if="formattedDate" class="date">
                    {{ formattedDate }}
                </p>
                <p v-if="description" class="description">
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

export default Vue.extend({
    props: {
        title: String,
        author: String,
        updatedAt: [String, Date],
        description: String,
        image: String,
        href: String,
    },
    computed: {
        formattedDate () {
            const _date = typeof this.updatedAt === 'string'
                ? new Date(this.updatedAt)
                : this.updatedAt as Date
            return _date?.toLocaleDateString('en-GB', {})
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

.post-info-container:hover {
    opacity: 0;
    transition: opacity 0.5s;
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
    opacity: 0.5;
}

.author,
.date {
    text-align: right;
}

</style>
