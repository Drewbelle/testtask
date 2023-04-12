import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    descriptions: [],
    sliderelement: [],
    reviews: []
  },
  getters: {
    GETDESCRIPTIONSFROMSTATE(state) {
      return state.descriptions
    },
    GETSLIDERELSFROMSTATE(state) {
      return state.sliderelement
    },
    GETREVIEWSFROMSTATE(state) {
      return state.reviews
    },
  },

  mutations: {
    SETDESCRIPTIONTOSTATE: (state, desc) => {
      state.descriptions = desc[0]
    },
    SETSLIDERELEMENTSTOSTATE: (state, sliderels) => {
      state.sliderelement = sliderels
    },
    SETREVIEWSTOSTATE: (state, reviews) => {
      state.reviews = reviews
    },
  },

  actions: {
    GETDESCRIPTIONFROMAPI({commit}) {
      return axios('http://localhost:3000/Descriptions',{
          method: "GET"
      })
          .then((desc) =>{
            commit('SETDESCRIPTIONTOSTATE', desc.data)
            return desc
          })
          .catch(console.log('error'))
    },
    GETSLIDERELEMENTSFROMAPI({commit}) {
      return axios('http://localhost:3000/Examples',{
          method: "GET"
      })
          .then((sliderels) =>{
            commit('SETSLIDERELEMENTSTOSTATE', sliderels.data)
            return sliderels
          })
          .catch(console.log('error'))
    },
    GETREVIEWSFROMAPI({commit}) {
      return axios('http://localhost:3000/Reviews',{
          method: "GET"
      })
          .then((reviews) =>{
            commit('SETREVIEWSTOSTATE', reviews.data)
            return reviews
          })
          .catch(console.log('error'))
    },
  },

  modules: {
  }
})
