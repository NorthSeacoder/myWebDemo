<template>
  <div id="map" style="height: 100%;width: 100%;">
    地图
  </div>
</template>

<script>
import echarts from "echarts";
import config from "./config.js";
export default {
  mounted() {
    var myChart = echarts.init(document.getElementById("map"));
    let option = config.mapConfig();
    myChart.setOption(option);
  }
};
</script>

<style scoped>
</style>