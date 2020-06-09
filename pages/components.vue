<template>
  <div class="container grid grid-cols-2">
    <div
      v-for="style of ['dark', 'light']"
      :key="style"
      :class="style"
      class="style-container"
    >
      <div
        v-for="fontStyle of ['font-sans', 'font-serif']"
        :key="fontStyle"
        :class="fontStyle"
      >
        <h1>Font Style: {{ fontStyle }}</h1>

        <h2>Typography</h2>

        <h1>Headline 1</h1>
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <h4>Headline 4</h4>
        <h5>Headline 5</h5>
        <h6>Headline 6</h6>
        <p>Lorem <a href="#">ipsum dolor</a> sit amet, consectetur adipiscing elit. Praesent hendrerit eleifend viverra. Quisque mollis nisi cursus purus rhoncus commodo. Nam vitae augue mollis, consequat massa non, scelerisque nibh. Vivamus commodo placerat est a ornare. Suspendisse potenti. Quisque sit amet ultrices tellus, sit amet aliquet diam. Ut posuere est ipsum, quis tincidunt est scelerisque a. Donec varius interdum sapien, a aliquam ipsum fringilla vitae. Ut lobortis ligula odio. Cras nec suscipit justo.</p>
        <p>Mauris eget metus a sem imperdiet ultrices vel at lacus. In mollis sit amet massa in sodales. Vestibulum commodo est non tortor sagittis, nec posuere metus feugiat. Aliquam quis lacinia sem, vitae vulputate ligula. Duis aliquet laoreet nulla, eget feugiat justo malesuada id. Phasellus at tempor lectus. Curabitur congue sit amet sapien eu lacinia. </p>

        <h2>UI Elements</h2>

        <h3>Tag</h3>
        <tag>#code</tag>
        <tag>#photography</tag>
        <tag>#food</tag>

        <h3>Icon</h3>
        <icon icon="x" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import tag from '~/components/tag.vue'
import icon from '~/components/icon.vue'

export default Vue.extend({
    components: {
        tag,
        icon
    }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.style-container {
  @apply p-8
}
</style>
