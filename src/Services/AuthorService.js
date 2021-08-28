import { authorsEndpoint } from "../Shared/endpoints";


export const getAuthors = () => {
    return fetch(authorsEndpoint)
    .then(res => res.json())    
    .then(authors => {
        console.log(authors)
        return authors
    });
}

