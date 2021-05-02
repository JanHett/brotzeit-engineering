<template>
    <div class="bz-hamburger">
        <div class="mobile-navigation-container" v-if="open">
            <ul class="navigation p-4">
                <li v-for="ln of links" :key="ln.target"><h3><nuxt-link :to="ln.target" @click.native="open = false">{{ln.label}}</nuxt-link></h3></li>
            </ul>
        </div>
        <button aria-label="Open Menu" class="hamburger-button" @click="open = !open" :class="{open}">
            <div class="hamburger-dash"></div>
            <div class="hamburger-dash"></div>
            <div class="hamburger-dash"></div>
        </button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import icon from '~/components/icon.vue'

export default Vue.extend({
    components: {
        icon
    },
    props: {
        links: {
            type: Array,
            default() { return []; },
        }
    },
    data() {
        return {
            open: false,
        }
    },
})
</script>

<style scoped>
.bz-hamburger {
    position: relative;
}

.hamburger-button {
    position: absolute;
    background-color: var(--foreground);
    border: solid var(--line-width) var(--background);
    @apply p-1;
    padding-top: calc(0.25 * var(--spacing-xl));
    padding-bottom: calc(0.25 * var(--spacing-xl));
    height: var(--spacing-xl);
    width: var(--spacing-xl);
    right: 0px;
    bottom: 0px;
}

.hamburger-button.open {
    background-color: var(--background);
    border-color: var(--foreground);
}

.hamburger-dash {
    background-color: var(--background);
    width: 100%;
    height: calc(2 * var(--line-width));
    margin-bottom: calc(25% - var(--line-width));
}

.hamburger-button.open .hamburger-dash {
    background-color: var(--foreground);
}

.mobile-navigation-container {
  position: relative;

  text-align: right;
}

.mobile-navigation-container .navigation {
  background-color: var(--background);
  border: solid var(--line-width) var(--foreground);

  @apply pb-12;
}


</style>
