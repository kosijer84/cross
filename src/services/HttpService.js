import axios from 'axios';

class HttpService {
  constructor(
    options = {},
    handleSuccessResponse,
    handleErrorResponse,
    unauthorizedCallback,
  ) {
    this.client = axios.create(options);

    this.client.interceptors.response.use(
      handleSuccessResponse,
      handleErrorResponse,
    );

    this.setUnauthorizedCallback(unauthorizedCallback);
  }

  attachHeaders(headers) {
    Object.assign(this.client.defaults.headers, headers);
  }

  removeHeaders(headerKeys) {
    headerKeys.forEach((key) => delete this.client.defaults.headers[key]);
  }

  handleErrorResponse(error) {
    try {
      const { status } = error.response;
      switch (status) {
        case 401:
          this.setUnauthorizedCallback();
          break;
        default:
          break;
      }
      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(error);
    }
  }

  setUnauthorizedCallback(callback) {
    this.unauthorizedCallback = callback;
  }
}

export default HttpService;
