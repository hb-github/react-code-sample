//import { MemberEntity } from '../../model';

const baseURL = 'http://192.168.39.35:3004/api/v1/';

export const adminLogin = (data: any): Promise<{}> => {
    const authURL = `${baseURL}admin/login`;
    return fetch(authURL,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => (response.json()))
};

