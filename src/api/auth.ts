import { methodHandler } from './methodHandler';
export const adminLogin = (data: any): Promise<{}> => {
    const authURL = `${process.env.API_URL}admin/login`;
    return fetch(authURL,
        methodHandler('POST', data))
        .then((response) => (response.json()))
};

