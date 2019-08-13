<template>
  <span class="coucou">{{prefix}}Arno</span>
</template>
<script>
export default {
  props: {
    prefix: String
  }
}
</script>
<style>
.coucou{
  font-size: xx-large;
  font-weight: bold
}
</style>
