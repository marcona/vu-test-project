<template>
  <main-layout>
    <p>Apex Charts</p>
    <div class="graph-container">
    <div>
      <apex-charts/>
    </div>
    <div>
      <apex-charts-donut/>
    </div>
  </div>
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

<style scoped>
.graph-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.left {
    display: flex;
    flex-direction: column;
}
.right {
  display: flex;
  flex-direction: column;
}
</style>
