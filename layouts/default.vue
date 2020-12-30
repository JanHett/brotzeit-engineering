<template>
    <div class="dark">
      <div id="content" class="flex flex-row">
        <div id="filter-container" class="container lg:max-w-sm">
          <div id="filters" class="user-nav p-4">
            <h3>Filter content</h3>
            <input id="search-field" type="text" placeholder="Search for text or tags like #code">
          </div>
        </div>
        <div id="content" class="container mx-auto pb-4 pt-4">
          <nuxt />
        </div>
        <div id="navigation-container" class="container lg:max-w-sm">
          <ul id="navigation" class="user-nav p-4">
            <li><h3><a href="/">Home</a></h3></li>
            <li><h3><a href="gallery">Gallery</a></h3></li>
            <li><h3><a href="about">What is Brotzeit?</a></h3></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<style>

/** NAVIGATION */

.user-nav {
  position: fixed;
  bottom: 0px;
}

</style>
