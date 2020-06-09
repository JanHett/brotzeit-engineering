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
        <h2>Font Style: {{ fontStyle }}</h2>

        <hr>

        <h2>UI Elements</h2>

        <h3>Tag</h3>
        <tag>#code</tag>
        <tag>#photography</tag>
        <tag>#food</tag>

        <h3>Post preview grid</h3>
        <post-grid :posts="posts" />

        <h3>Icon</h3>
        <div
          v-for="icn of ['x', 'chevron-right', 'activity']"
          :key="icn"
          style="width: 20px;"
        >
          <icon :icon="icn" />
        </div>

        <h2>Typography</h2>

        <h1>Headline 1</h1>
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <h4>Headline 4</h4>
        <h5>Headline 5</h5>
        <h6>Headline 6</h6>
        <p>Lorem <a href="#">ipsum dolor</a> sit amet, consectetur adipiscing elit. Praesent hendrerit eleifend viverra. Quisque mollis nisi cursus purus rhoncus commodo. Nam vitae augue mollis, consequat massa non, scelerisque nibh. Vivamus commodo placerat est a ornare. Suspendisse potenti. Quisque sit amet ultrices tellus, sit amet aliquet diam. Ut posuere est ipsum, quis tincidunt est scelerisque a. Donec varius interdum sapien, a aliquam ipsum fringilla vitae. Ut lobortis ligula odio. Cras nec suscipit justo.</p>
        <p>Mauris eget metus a sem imperdiet ultrices vel at lacus. In mollis sit amet massa in sodales. Vestibulum commodo est non tortor sagittis, nec posuere metus feugiat. Aliquam quis lacinia sem, vitae vulputate ligula. Duis aliquet laoreet nulla, eget feugiat justo malesuada id. Phasellus at tempor lectus. Curabitur congue sit amet sapien eu lacinia.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tag from '~/components/tag.vue'
import PostGrid from '~/components/post-grid.vue'
import Icon from '~/components/icon.vue'

export default Vue.extend({
    components: {
        Tag,
        PostGrid,
        Icon
    },
    data () {
        return {
            posts: [
                {
                    title: 'Hello World!',
                    author: 'Jan Hettenkofer',
                    date: Date(),
                    excerpt: 'Mauris eget metus a sem imperdiet ultrices vel at lacus. In mollis sit amet massa in sodales. Vestibulum commodo est non tortor sagittis, nec posuere metus feugiat. Aliquam quis lacinia sem, vitae vulputate ligula. Duis aliquet laoreet nulla, eget feugiat justo malesuada id. Phasellus at tempor lectus. Curabitur congue sit amet sapien eu lacinia.',
                    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/49404996530185.5eb08b57592de.jpg'
                }, {
                    title: 'Hello Universe!',
                    author: 'Jan Hettenkofer',
                    date: Date(),
                    excerpt: 'Mauris eget metus a sem imperdiet ultrices vel at lacus. In mollis sit amet massa in sodales. Vestibulum commodo est non tortor sagittis, nec posuere metus feugiat. Aliquam quis lacinia sem, vitae vulputate ligula. Duis aliquet laoreet nulla, eget feugiat justo malesuada id. Phasellus at tempor lectus. Curabitur congue sit amet sapien eu lacinia.',
                    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e75ee895896765.5ea1e250ef63b.jpg'
                }
            ]
        }
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
