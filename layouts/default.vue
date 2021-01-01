<template>
    <div class="dark">
      <div id="layout-content" class="flex flex-row">
        <div id="left-column" class="container lg:max-w-sm"></div>
        <div id="content" class="container mx-auto pb-4 pt-4">
          <nuxt />
        </div>
        <div id="navigation-container" class="container lg:max-w-sm">
          <ul id="navigation" class="user-nav p-4">
            <li><h3><nuxt-link to="/">Home</nuxt-link></h3></li>
            <li><h3><nuxt-link to="/about">What is Brotzeit?</nuxt-link></h3></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<style scoped>

/** NAVIGATION */

.user-nav {
  position: fixed;
  bottom: 0px;
}

</style>
