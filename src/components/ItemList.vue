<template>
  <div>
    <div v-for="(item, index ) in itemList">
      {{index + 1}} <input type="checkbox" v-model="item.isFinish"> {{item.content}}
    </div>
  </div>
</template>

<script>

  export default {
    name: "ItemList",
    data() {
      return {
        itemList: []
      }
    },
    methods: {
      addMsg(message) {
        let item = {
          isFinish: false,
          content: message
        }
        this.itemList.push(item);
      }
    }
  }
</script>

<style scoped>

</style>
