const baseURL = "http://localhost:3002/api/v1/";

// Listing

export const pollList = (data: any): Promise<{}> => {
  const authURL = `${baseURL}polling/list`;
  return fetch(authURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

// Create

export const pollCreate = (data: any): Promise<{}> => {
  const authURL = `${baseURL}polling/Create`;
  return fetch(authURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

// Update

export const pollUpdate = (data: any): Promise<{}> => {
  console.log("data",data);
  const authURL = `${baseURL}polling/update`;
  return fetch(authURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

// Delete

export const pollDelete = (data: any): Promise<{}> => {
  const authURL = `${baseURL}polling/delete`;
  return fetch(authURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)    
  }).then(response => response.json());
};

// Toggling Status 

export const pollToggleStatus = (data: any): Promise<{}> => {
  const authURL = `${baseURL}polling/activeOrDeactive`;
  return fetch(authURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)    
  }).then(response => response.json());
};

