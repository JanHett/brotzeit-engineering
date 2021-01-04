<template>
    <div class="dark">
      <div id="layout-content" class="container mx-auto flex flex-row">
        <div id="left-column" class="flex-none hidden 2xl:block w-64"></div>
        <div id="content" class="flex-1 mx-auto px-4 pb-4">
          <nuxt />
        </div>
        <div id="desktop-navigation-container" class="flex-none hidden xl:block w-64">
          <ul id="navigation" class="user-nav p-4">
            <li v-for="ln of links" :key="ln.target"><h3><nuxt-link :to="ln.target">{{ln.label}}</nuxt-link></h3></li>
          </ul>
        </div>
      </div>
      <hamburger-menu id="hamburger" :links="links" class="block xl:hidden"></hamburger-menu>
      <!-- <div id="mobile-navigation-container" class="block xl:hidden p-4">
        <ul id="navigation" class="p-4">
          <li v-for="ln of links" :key="ln.target"><h3><nuxt-link :to="ln.target">{{ln.label}}</nuxt-link></h3></li>
        </ul>
      </div> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HamburgerMenu from '~/components/hamburger-menu.vue'

export default Vue.extend({
  components: {
    HamburgerMenu,
  },
  data() {
    return {
      links: [
        { label: "Home", target: "/"},
        { label: "What is Brotzeit?", target: "/about"},
      ]
    }
  }
})
</script>

<style scoped>

/** CONTENT */

#content {
  /** Keep the size sane on small screens */
  max-width: 100%;
}

/** NAVIGATION */

.user-nav {
  position: fixed;
  bottom: 0px;
}

#hamburger {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 99999;
}

/* #mobile-navigation-container {
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 9999;

  text-align: right;
}

#mobile-navigation-container #navigation {
  background-color: var(--background);
  border: solid var(--line-width) var(--foreground);
} */

</style>
