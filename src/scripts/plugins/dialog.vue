<template>
  <div>
    <div v-if="isShow">
      <div class="yo-dialog yo-dialog-a">
        <header class="hd">
          <h2 class="title" yo-dialog-b>更新提示</h2>
        </header>
        <div class="bd">
          <p>下载包包含所有游戏资料,内容总计10.60M,是否确认下载?</p>
        </div>
        <footer class="ft">
          <button class="yo-btn yo-btn-dialog yo-btn-l" @click="hide">取消</button>
          <button class="yo-btn yo-btn-dialog yo-btn-l" @click="hide">确定</button>
        </footer>
      </div>
      <div class="yo-mask"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShow: true
      }
    },
    methods: {
      hide(){
        this.isShow = false;
      }
    },
    ready(){
      
    }
  }
</script>
