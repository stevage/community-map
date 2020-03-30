<template lang="pug">
#Legend.relative.h-100
    .bg-white.b--gray.ba.shadow-1.pa2.ma2.bottom.absolute.bottom-2
        h3 Legend
            
</template>

<script>
export default {
  name: "Legend",
  data: () => ({}),
  created() {
    window.Legend = this;
  }
};
</script>

<style scoped>
</style>