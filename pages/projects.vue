<template>
    <div>
        <div id="content">
            <h1 class="font-serif-headline">
                Projects
            </h1>

            <div>
                <div class="project-frame prose">
                    <h2>spice-lib</h2>
                    <h3>Image processing toolkit</h3>
                    <a href="https://spice-lib.brotzeit.engineering/">
                        Homepage and documentation
                    </a>
                    <p>
                        Born out of a desire to understand image processing from
                        the ground up, this library was conceived as a toolkit
                        for creative applications. It is the foundation I build
                        on to experiment with new approaches and test how they
                        work within the context of a larger project.

                        However, spice-lib is not only a test-bed for
                        experiments: I aspire to maintain the library as close
                        to "production-ready" as I can and continuously strive
                        to improve its stability and maintainability.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    head: {
        link: [
            {
                hid: "canonical",
                rel: "canonical",
                // TODO: reference something that is resolvable at build time
                href: process.env.BASE_URL + "/projects",
            },
        ]
    },
    components: {
    },
})
</script>

<style scoped lang="postcss">
/** BRANDING */


/** CONTENT */

</style>
