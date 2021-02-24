import HttpService from './HttpService';

class ApiService {
  constructor() {
    const handleSuccessResponse = (response) => response;
    const handleErrorResponse = (error) => error;
    const unauthorizedCallback = () => {};

    this.api = new HttpService(
      {
        baseURL: process.env.VUE_APP_BASE_URL,
      },
      handleSuccessResponse,
      handleErrorResponse,
      unauthorizedCallback,
    );

    this.apiClient = this.api.client;
  }
}

export default ApiService;
