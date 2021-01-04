<template>
    <div>
        <div id="article-header">
            <h1 id="header-title" ref="title">{{ page.title }}</h1>
            <img
                id="header-image"
                v-if="page.image"
                :src="page.image"
                :alt="page.description || 'Title image'"
            >
        </div>
        <article class="prose mx-auto">
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
import { Context } from '@nuxt/types';
import formatSiteMetadata from '../../utils/format-site-metadata';
import { easing } from '../../utils/animation';

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
    },
    mounted() {
        //
        // Smooth scrolling to headline
        //

        // reset scroll - TODO: this seems a bit rubbish to me. Fix it.
        window.scrollTo(0, 0);

        const duration = 1600;
        const elementY = ((this as any).$refs.title as Element)
            .getBoundingClientRect().top;
        const startingY = window.pageYOffset;
        const diff = elementY - startingY;
        let start: number;

        // Bootstrap our animation - it will get called right before next frame shall be rendered.
        window.requestAnimationFrame(function step(timestamp: number) {
            if (!start) start = timestamp;
            // Elapsed milliseconds since start of scrolling.
            const time = timestamp - start;
            // Get percent of completion in range [0, 1].
            const percent = easing(Math.min(time / duration, 1));

            window.scrollTo(0, startingY + diff * percent);

            // Proceed with animation as long as we wanted it to.
            if (time < duration) {
                window.requestAnimationFrame(step);
            }
        })
    }
}
</script>

<style scoped>
#article-header {
    position: relative;
    @apply mb-16;
}

#header-title {
    position: absolute;
    bottom: 0px;
    @apply px-8;
    width: 100%;
}

/* maybe this should be 768px */
@media screen and (max-width: 640px) {
    #article-header {
        @apply prose;
    }

    #article-header img {
        @apply mt-0;
    }
}

#header-image {
    width: 100%;
}

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
