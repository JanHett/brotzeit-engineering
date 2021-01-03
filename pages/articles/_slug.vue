<template>
    <div>
        <article class="prose mx-auto">
            <h1>{{ page.title }}</h1>
            <nuxt-content :document="page" />
        </article>
        <hr>
        <div id="license-info">
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                <img
                    alt="Creative Commons Licence"
                    style="border-width:0"
                    src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
                >
            </a>
            <p>
                This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import formatSiteMetadata from '../../utils/format-site-metadata';

export default {
    head() {
        return {
            title: (this as any).page.title,
            meta: [
                ...(this as any).meta,
                {
                    property: "article:published_time",
                    content: (this as any).page.createdAt,
                },
                {
                    property: "article:modified_time",
                    content: (this as any).page.updatedAt,
                },
                {
                    property: "article:tag",
                    content: (this as any).page.tags
                        ? (this as any).page.tags.join(", ")
                        : "",
                },
                { name: "twitter:label1", content: "Written by" },
                { name: "twitter:data1", content: (this as any).page.author },
                { name: "twitter:label2", content: "Filed under" },
                {
                    name: "twitter:data2",
                    content: (this as any).page.tags
                        ? (this as any).page.tags.join(", ")
                        : "Uncategorised",
                },
            ],
            link: [
                {
                    hid: "canonical",
                    rel: "canonical",
                    href: `https://brotzeit.engineering/articles/${(this as any).$route.params.slug}`,
                },
            ],
        }
    },
    computed: {
        meta() {
            const meta = formatSiteMetadata({
                description: (this as any).page.description,
                image: (this as any).page.image || "",
                type: "article",
                url: "..." + (this as any).page.path,
                title: `${(this as any).page.title} | Brotzeit.engineering`,
            });

            return meta;
        }
    },
    async asyncData ({ $content, params }: Context & { $content: any }) {
        const page = await $content(params.slug).fetch();

        return {
            page,
        }
    }
}
</script>

<style scoped>
article {
    @apply mb-8;
}

#license-info {
    @apply my-8;
}

#license-info p {
    @apply opacity-75;
    @apply mt-2;
}

</style>
