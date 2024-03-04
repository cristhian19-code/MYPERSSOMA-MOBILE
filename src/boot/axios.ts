import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: AxiosInstance;
  }
}

const api = axios.create({ baseURL: 'https://apimyperssoma.azurewebsites.net/api/' });

export default boot(({ app }) => {
  app.config.globalProperties.$api = api;
});

export { api };
