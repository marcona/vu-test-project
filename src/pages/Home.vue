<template>
  <main-layout>
    <p>Test Librairie Google Charts</p>
    <google-charts/>
  </main-layout>

</template>

<script>
import MainLayout from '../layouts/Main.vue'
import GoogleCharts from '../components/GoogleCharts.vue'

export default {
  components: {
    GoogleCharts,
    MainLayout
  }
}
</script>
