import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  filteredDocuments: [],
  sorted: true,
  sortedName: true
}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}
