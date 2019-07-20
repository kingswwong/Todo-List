<template>
  <div id="container">
    <h1>Todo List</h1>
    <div id="msgInput">
      <input type="text" v-model="todoMsg" @focus="buttonShow = true"
             @blur="todoMsg === '' ? buttonShow = false : buttonShow = true"><span><button @click="addTodoMsg"
                                                                                           v-if="buttonShow">Add</button></span>
    </div>
    <ItemList ref='itemList'></ItemList>
  </div>
</template>

<script>
  import ItemList from "@/components/ItemList";

  export default {
    name: "Container",
    components: {ItemList},
    data() {
      return {
        todoMsg: "",
        buttonShow: false
      }
    },
    methods: {
      addTodoMsg() {
        this.$refs.itemList.addMsg(this.todoMsg)
        this.todoMsg = ""
        this.buttonShow = false
      }
    }
  }
</script>

<style scoped>

</style>
