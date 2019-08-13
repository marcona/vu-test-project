<template>
  <main-layout>
    <p>Bonjour Boris</p>
    <arno prefix="Coucou "/>
    <br/>
    <arno prefix="Bye "/>
  </main-layout>
</template>
<script>
import MainLayout from '../layouts/Main.vue'
import Arno from '../components/Arno.vue'

export default {
  components: {
    MainLayout,
    Arno
  }
}
</script>
