<template>
  <div id="itemList">
    <transition-group name="slide-fade">
      <div v-for="(item, index ) in itemList" :key="index">

        <Item :is-finish="item.isFinish" :contentMsg="item.contentMsg" :index="item.index" :show-index="index + 1"></Item>
      </div>
    </transition-group>
    <button @click="changeShow(-1)" :class="{unActiveButton: status !== -1}">All</button>
    <button @click="changeShow(0)" :class="{unActiveButton: status !== 0}">Active</button>
    <button @click="changeShow(1)" :class="{unActiveButton: status !== 1}">Complete</button>
  </div>
</template>

<script>

  import Item from "@/components/Item";

  export default {
    name: "ItemList",
    components: {Item},

    computed:{
      status(){
        return this.$store.state.status
      },
      itemList:{
        get(){
          return this.$store.getters.getShowList(this.status)
        }
      }
    },
    methods: {
      changeShow(showIndex){
        this.$store.commit('showListChange',showIndex)
      }
    }
  }
</script>

<style scoped>

</style>
