<template>
    <div>
        <div id="content">
            <h1 class="font-serif-headline">
                <span id="spelling">Brot·zeit</span>
                <span id="phonetic" class="font-normal">\ˈbroːt‿ˌtsaıt\</span>
            </h1>

            <div class="grid grid-cols-3 gap-12">
                <div class="col-span-2 xl:col-span-1">
                    <img src="img/self_portrait.jpg" alt="Self portrait">
                </div>
                <div class="col-span-3 xl:col-span-2 space-y-4">
                    <p id="word-type" class="italic">German noun, feminine :</p>
                    <div class="definition space-y-4">
                        <p>
                            <ol class="list-decimal list-inside space-y-4">
                                <li>Literally "bread time"; a meal consisting of sourdough bread, cold cuts, cheese, sausage and raw vegetables</li>
                                <li><strong>~.engineering :</strong> a meta project about code, photography and food by Jan Hettenkofer</li>
                            </ol>
                        </p>
                        <p class="text-center">...</p>
                        <p>
                            More than just a meal, Brotzeit is often a community event. Be it as a family dinner, a snack during a long hike or the well deserved break from concentrated work, Brotzeit brings people together to share in the celebration of "simple" ingredients.
                        </p><p>
                            It is this appreciation of the minute details found in the seemingly mundane that inspires this publication. As a software engineer, photographer and home cook I love to identify first principles by ways of creative exploration. Through this I aspire to understand the world from the ground up.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    components: {
    },
})
</script>

<style scoped lang="postcss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

/** BRANDING */

#spelling {

}

#phonetic {

}

/** CONTENT */

#content {
  z-index: 999;
}

.definition li, .definition p {
    text-indent: var(--spacing-xl);
}

.definition ::marker {
    font-weight: bold;
}
</style>
