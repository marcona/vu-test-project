<template>
  <div class="container">
    <ul>
      <li>
        <v-link href="/">Google Charts</v-link>
      </li>
      <li>
        <v-link href="/apex">Apex Charts</v-link>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<script>
import VLink from '../components/VLink.vue'

export default {
  components: {
    VLink
  }
}
</script>

<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>
