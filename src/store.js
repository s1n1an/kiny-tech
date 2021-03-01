import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const store = new Store({
  state: {
    gray: false
  },

  mutations: {
    changeGray(state) {
      const isGray = !state.gray
      
      const bodyStyle = document.getElementById('body').style
      bodyStyle.setProperty('filter', isGray ? 'gray' : 'none')
      bodyStyle.setProperty('-webkit-filter', isGray ? 'grayscale(100%)' : 'none')

      state.gray = isGray
    }
  },

  actions: {}
})

export default store
