<template>
  <div>
    <div v-for="(item, index ) in showList">
      <Item :is-finish="item.isFinish" :contentMsg="item.contentMsg" :index="item.index" :show-index="index + 1" :status="status"
            @updateMsg="updateMsg"
            @updateStatus="updateStatus" ref="item"></Item>
    </div>
    <button @click="updateShowList(-1)">All</button>
    <button @click="updateShowList(0)">Active</button>
    <button @click="updateShowList(1)">Complete</button>
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
        showList: [],
        status: -1
      }
    },
    methods: {
     addMsg(message) {
        let item = {
          isFinish: false,
          contentMsg: message,
          index: this.itemList.length
        }
        this.itemList.push(item);
        this.updateShowList(this.status)
      },
      updateMsg(message, index) {
        this.itemList[index].contentMsg = message
      },
      updateStatus(status, index) {
        this.itemList[index].isFinish = status
        this.updateShowList(this.status)
      },
       async updateShowList(status) {
        this.status = status
        if (this.status === -1) {
          this.showList = this.itemList
        } else {
          this.showList = this.itemList.filter((item) => {
            return item.isFinish === Boolean(status)
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
