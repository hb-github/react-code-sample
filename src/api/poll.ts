import { methodHandler } from './methodHandler';

// List poll 
export const pollList = (data: any): Promise<{}> => {
  const authURL = `${process.env.API_URL}polling/list`;
  return fetch(authURL, methodHandler('POST', data))
    .then(response => response.json());
};

// Create poll
export const pollCreate = (data: any): Promise<{}> => {
  const authURL = `${process.env.API_URL}polling/Create`;
  return fetch(authURL, methodHandler('POST', data)).then(response => response.json());
};

// Update poll
export const pollUpdate = (data: any): Promise<{}> => {
  console.log("data", data);
  const authURL = `${process.env.API_URL}polling/update`;
  return fetch(authURL, methodHandler('POST', data)).then(response => response.json());
};

// Delete poll
export const pollDelete = (data: any): Promise<{}> => {
  const authURL = `${process.env.API_URL}polling/delete`;
  return fetch(authURL, methodHandler('POST', data)).then(response => response.json());
};

// Change poll status  
export const pollToggleStatus = (data: any): Promise<{}> => {
  const authURL = `${process.env.API_URL}polling/activeOrDeactive`;
  return fetch(authURL, methodHandler('POST', data)).then(response => response.json());
};

