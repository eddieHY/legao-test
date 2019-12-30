import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
    },
    state: {
      userInfo: {
        name: '大黄'
      },
      sidebar: {
        withoutAnimation: false,
        opened: true
      },
      device: 'desktop'
    },
    mutations: {
      [types.TOGGLE_SIDEBAR]: (state) => {
        window.console.log('=========')
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
      },
      [types.CLOSE_SIDEBAR]: (state, payload) => {
        state.sidebar.opened = false
        state.sidebar.withoutAnimation = payload
      },
      [types.TOGGLE_DEVICE]: (state, payload) => {
        state.device = payload
      }
    }
  })
}