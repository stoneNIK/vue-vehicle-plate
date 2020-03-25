<template>
  <div id="app">
    <h1>车牌号输入</h1>
    <section class="form">
      <div>
        <input
          type="text"
          v-model="initPlateNumber"
          placeholder="车牌号输入框"
          readonly
          @click="showLayer = true"
        />
      </div>
    </section>
    <section class="desc">
      点击输入框弹出输入组件，可通过调试工具查看打印日志
    </section>
    <section class="plate-wrap" v-show="showLayer">
      <vue-vehicle-plate
        :init-value="initPlateNumber"
        @confirm="onConfirmPlate"
      ></vue-vehicle-plate>
      <div class="plate-backdrop" @click="showLayer = false"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      showLayer: false,
      initPlateNumber: "贵·"
    };
  },
  methods: {
    onConfirmPlate(e) {
      console.log(e);
      this.initPlateNumber = e.plateNumFor;
      this.showLayer = false;
    }
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
#app {
  padding: 20px;
  font-size: 12px;
}
h1 {
  margin: 20px auto;
}
.desc {
  font-size: 0.9em;
  color: #999;
}
.form {
  margin: 30px auto;
  input {
    display: block;
    margin: 5px 0;
    padding: 5px 15px;
    font-size: 1.5em;
    border: none;
    border-bottom: 1px solid #333;
    outline: none;
  }
}

.plate-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  .pop-container {
    position: absolute;
    bottom: 0;
    z-index: 2;
  }
  .plate-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
