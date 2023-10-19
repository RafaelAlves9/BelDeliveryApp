import { AxiosBuilder } from "./axios.builder";
import { firebaseConfig } from "@config/firebase/firebaseConfig";

const baseUrl = `https://${firebaseConfig.projectId}.firebaseio.com/`;
//const token = getLocalStorageProperty("user", "token");

const instances = {
  public: AxiosBuilder.build()
    .withDefaultHeader()
    .toDomain()
    .initInstance(),
  private: AxiosBuilder.build()
    .withUrl(baseUrl)
    .withHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    })
    .haveCredentials()
    .toDomain()
    .initInstance(),
  privateFile: AxiosBuilder.build()
    .withUrl(baseUrl)
    .withHeaders({
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"
    })
    .haveCredentials()
    .toDomain()
    .initInstance(),
};

instances.private.interceptors.request.use((config) => {
  return config;
}, function (error) {
  return Promise.reject(error);
});

instances.private.interceptors.response.use((response) => {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export { instances };