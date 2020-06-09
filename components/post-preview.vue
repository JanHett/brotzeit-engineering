<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="author">
      by {{ author }}
    </p>
    <p v-if="date">
      {{ formattedDate }}
    </p>
    <p v-if="excerpt">
      {{ excerpt }}
    </p>
    <img v-if="image" :src="image">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        title: String,
        author: String,
        date: [String, Date],
        excerpt: String,
        image: String
    },
    computed: {
        formattedDate () {
            console.log(this.date)
            const _date = typeof this.date === 'string'
                ? new Date(this.date)
                : this.date as Date
            return _date.toLocaleDateString('en-GB', {})
        }
    }
})
</script>

<style scoped>

</style>
