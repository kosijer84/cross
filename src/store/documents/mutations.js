const mutations = {
  SET_DOCUMENTS(state, documents) {
    state.documents = documents;
    state.filteredDocuments = documents
  },
  SET_FILTERED_DOCUMENTS(state, documents) {
    state.filteredDocuments = documents
  }
}

export default mutations
