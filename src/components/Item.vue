<template>
  <div>
    <div v-if="isShow">
      <span @click="isShow = false" id="contentMsg" :class=" {finish: info.isFinish}">{{info.contentMsg}}</span>
      <div style="float: right;padding-top: 20px;">
        <input type="checkbox" v-model="info.isFinish" @change="updateIsFinished" :id="index">
        <label :for="index"></label>
      </div>
    </div>
    <div v-if="!isShow" @keypress.enter="updateContentMsg"><input type="text" v-model="info.contentMsg"></div>

  </div>
</template>

<script>
  export default {
    name: "Item",
    props: {
      index: Number,
    },
    data() {
      return {
        isShow: true,
      }
    },
    computed: {
      info: {
        get(){
          return this.$store.state.itemList[this.index]
        }
      },
    },
    methods: {
      updateContentMsg() {
        this.isShow = true
        this.$store.commit('updateMsg',{contentMsg:this.info.contentMsg, index: this.index})
      },
      updateIsFinished() {
        this.$store.commit('updateStatus', {isFinish:this.info.isFinish, index: this.index})
      }
    }
  }
</script>

<style scoped>

</style>
