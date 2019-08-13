<template>
  <div class="container">
    <ul>
      <li>
        <monLink href="/">Google Charts</monLink>
      </li>
      <li>
        <monLink href="/apex">Apex Charts</monLink>
      </li>
      <li>
        <monLink href="/dell">Demo</monLink>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<script>
import VLink from '../components/VLink.vue'

export default {
  components: {
    monLink: VLink
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
