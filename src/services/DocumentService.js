import ApiService from "@/services/ApiService";

class DocumentService extends ApiService {
  getDocuments = () =>
    this.apiClient.get('/documents.json');
}
const documentService = new DocumentService();

export default documentService;
