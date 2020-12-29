<template>
    <div class="dark">
      <div id="content" class="flex flex-row">
        <div id="filter-column" class="container max-w-sm p-4">
          <div id="filters" class="user-nav">
            <h3>Filter content</h3>
            <input type="text" placeholder="Search for text or tags like #code">
          </div>
        </div>
        <div id="content" class="container mx-auto">
          <nuxt />
        </div>
        <div id="navigation-column" class="container max-w-sm p-4">
          <ul id="navigation" class="user-nav">
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
  bottom: var(--spacing);
}

</style>
