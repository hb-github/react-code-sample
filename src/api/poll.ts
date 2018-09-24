const baseURL = "http://192.168.39.34:3002/api/v1/";

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

export const pollUpdate = (data: any): Promise<{}> => {
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


