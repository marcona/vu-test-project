<template>
  <main-layout>
    <p>Apex Charts</p>
    <apex-charts/>
    <apex-charts-donut/>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import ApexCharts from '../components/ApexCharts.vue'
import ApexChartsDonut from '../components/ApexChartsDonut.vue'

export default {
  components: {
    ApexCharts,
    ApexChartsDonut,
    MainLayout
  }
}
</script>
