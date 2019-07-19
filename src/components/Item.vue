<template>
  <div>
    <div v-if="isShow">{{index}}<input type="checkbox" v-model="complete" @change="updateIsFinished"> <span
      @click="isShow = false">{{contentMsg}}</span></div>
    <div v-if="!isShow" @keypress.enter="updateContentMsg"><input type="text" v-model="content"></div>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: {
      isFinish: Number,
      contentMsg: String,
      index: Number
    },
    data() {
      return {
        isShow: true,
        content: this.contentMsg,
        complete: !!this.isFinish
      }
    },
    methods: {
      updateContentMsg() {
        this.isShow = true
        this.$emit('updateMsg', this.content, this.index)
      },
      updateIsFinished() {
        this.complete = !this.complete;
        this.$emit('updateStatus', this.complete ? 1 : 0, this.index)
      }
    }
  }
</script>

<style scoped>

</style>
