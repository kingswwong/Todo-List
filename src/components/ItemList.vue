<template>
  <div>
    <div v-for="(item, index ) in itemList">
      <Item :is-finish="item.isFinish" :contentMsg="item.contentMsg" :index="index + 1" @updateMsg="updateMsg"
            v-if="type === -1 || type == item.isFinish" @updateStatus="updateStatus"></Item>
    </div>
    <button @click="type = -1">All</button>
    <button @click="type = 0">Active</button>
    <button @click="type = 1">Complete</button>
  </div>
</template>

<script>

  import Item from "@/components/Item";

  export default {
    name: "ItemList",
    components: {Item},
    data() {
      return {
        itemList: [],
        type: -1
      }
    },
    methods: {
      addMsg(message) {
        let item = {
          isFinish: 0,
          contentMsg: message
        }
        this.itemList.push(item);
      },
      finish(index) {
        this.itemList.splice(index, 1)
      },
      updateMsg(message, index) {
        this.itemList[index - 1].contentMsg = message
      },
      updateStatus(status, index) {
        this.itemList[index - 1].isFinish = status
        console.log(this.itemList)
      }
    }
  }
</script>

<style scoped>

</style>
