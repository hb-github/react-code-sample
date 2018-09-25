//import { MemberEntity } from '../../model';

const baseURL = 'http://localhost:3002/api/v1/';

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

