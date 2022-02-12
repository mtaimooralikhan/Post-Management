import axios from "axios";
import store from "../redux/store";

const postUrl = `https://jsonplaceholder.typicode.com/posts`;

//View All posts 
export const postListApi = async (request) => {
  if (request.payload.search) {
    return await axios.get(`${postUrl}/${request.payload.search}`);  
  }
  return await axios.get(`${postUrl}`);
};
export const createPostApi = async (request) => {
  const data = JSON.stringify(request.payload);
  console.log(JSON.stringify(request));
  return await axios.post(`${postUrl}`, data);
};
export const updatepostApi = async (request) => {
  const data = JSON.stringify(request.payload);
  console.log(JSON.stringify(request));
  return await axios.put(`${postUrl}`, data);
};
export const deletePostApi = async (request) => {
 
  // console.log("api,,,",request.payload);
  return await axios.delete(`${postUrl}/${request.payload.id}`);
};
