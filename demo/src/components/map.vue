<template>
  <div id="map" style="height: 100%;width: 100%;">
    地图
  </div>
</template>

<script>
export default {
  mounted() {
    var map = new AMap.Map("map");
  }
};
</script>

<style scoped>
</style>