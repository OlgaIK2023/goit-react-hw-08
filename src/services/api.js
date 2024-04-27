import axios from "axios";

const instance = axios.create({
  baseURL: "https://https://66297acf67df268010a0db3a.mockapi.io/",
});

export const requestContacts = async () => {
  const { data } = await instance.get("/contacts");

  return data;
};

export const requestProductsByQuery = async (query = "") => {
  const { data } = await instance.get(`/products/search?q=${query}`);

  return data;
};

export const requestProductDetailrequestContactsById = async (productId) => {
  const { data } = await instance.get(`/products/${productId}`);

  return data;
};