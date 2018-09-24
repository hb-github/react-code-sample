//import { MemberEntity } from '../../model';

const baseURL = 'http://localhost:3001/api/v1/';

export const adminLogin = (data: any): Promise<{}> => {
    const authURL = `http://localhost:3001/api/v1/admin/login`;
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

