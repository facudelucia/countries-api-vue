import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload
    },
    filtrarPaises(state, payload) {
      state.paisesFiltrados = payload
    }
  },
  actions: {
    async getPaises({ commit }) {
      const res = await fetch('https://restcountries.eu/rest/v2/all')
      const data = await res.json()
      commit('setPaises', data)
    },
    filtrarRegion({ commit, state }, region) {
      const filtro = state.paises.filter(pais => pais.region.includes(region))
      commit('filtrarPaises', filtro)
    },
    filtrarNombre({ commit, state }, texto) {
      const filtro = state.paises.filter(pais => pais.name.toLowerCase().includes(texto.toLowerCase()))
      commit('filtrarPaises', filtro)
    }
  },
  getters: {
    topPaisesPoblacion(state) {
      return state.paisesFiltrados.sort((a, b) => {
        return a.population < b.population ? 1 : -1
      })
    }
  },
  modules: {
  }
})
