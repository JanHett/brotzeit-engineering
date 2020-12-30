<template>
    <div>
        <article>
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

<script>
export default {
    async asyncData ({ $content, params }) {
        const page = await $content(params.slug).fetch()

        return {
            page
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
