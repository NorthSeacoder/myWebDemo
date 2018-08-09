<template>

  <el-container style="height:100%;">
    <el-aside width="200px">

      <el-menu default-active="entry" background-color="#d3dce6" @select="select" :router='true'>
        <el-menu-item index="entry">
          <!-- <i class="el-icon-menu"></i> -->
          ent
        </el-menu-item>
        <el-menu-item index="map">
          <!-- <i class="el-icon-menu"></i> -->
          map
        </el-menu-item>
        <el-menu-item index="ele">
          <!-- <i class="el-icon-menu"></i> -->
          ele
        </el-menu-item>

      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
export default {
  name: "App",
  methods: {
    select(i) {
      console.log(i);
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
  width: 100%;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
