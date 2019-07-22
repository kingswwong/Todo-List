import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    itemList: [],
    status: -1
  },
  mutations: {
    pushItem(state, item) {
      state.itemList.push(item)
    },
    updateMsg(state, updateItem) {
      state.itemList[updateItem.index].contentMsg = updateItem.contentMsg
    },
    updateStatus(state, updateItem) {
      state.itemList[updateItem.index].isFinish = updateItem.isFinish
    },
    showListChange(state, showIndex) {
      state.status = showIndex
    },

  },
  getters: {
    getShowList: (state) => (status) => {
      if (status === -1) {
        return state.itemList
      } else {
        return state.itemList.filter((item) => {
          return item.isFinish === Boolean(status)
        })
      }
    }
  }
})

