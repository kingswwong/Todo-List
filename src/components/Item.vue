<template>
  <div>
    <div v-if="isShow">{{showIndex}}<input type="checkbox" v-model="isFinish" @change="updateIsFinished"> <span
      @click="isShow = false">{{contentMsg}}</span></div>
    <div v-if="!isShow" @keypress.enter="updateContentMsg"><input type="text" v-model="content"></div>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: {
      isFinish: Boolean,
      contentMsg: String,
      index: Number,
      showIndex: Number,
    },
    data() {
      return {
        isShow: true,
        content: this.contentMsg
      }
    },
    methods: {
      updateContentMsg() {
        this.isShow = true
        this.$emit('updateMsg', this.content, this.index)
      },
      updateIsFinished() {
        this.$emit('updateStatus', this.isFinish, this.index)
      }
    }
  }
</script>

<style scoped>

</style>
