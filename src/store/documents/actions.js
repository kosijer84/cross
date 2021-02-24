import documentService from '../../services/DocumentService'
import {filterByTypes} from "@/helpers/DocumentsHelper";
const actions = {
  async getDocuments({commit}) {
    const documents = await documentService.getDocuments();
    commit('SET_DOCUMENTS', filterByTypes(documents.data.documents, ['.pdf', '.docx']));
  }}

export default actions
