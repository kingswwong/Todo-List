<template>
    <div>
      <p>Jquery Todo List</p>
      <p>Simple Todo List with adding and filter by diff status</p>
      <input type="text" v-model="todoMsg"><span><button @click="addTodoMsg">Add</button></span>
      <ItemList ref='itemList'></ItemList>
    </div>
</template>

<script>
    import ItemList from "@/components/ItemList";
    export default {
        name: "Container",
      components: {ItemList},
      data(){
          return{
            todoMsg:""
          }
      },
      methods:{
          addTodoMsg(){
            this.$refs.itemList.addMsg(this.todoMsg)
            this.todoMsg = ""
          }
      }
    }
</script>

<style scoped>

</style>
