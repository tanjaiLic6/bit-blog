import { authorsEndpoint } from "../Shared/endpoints";


export const getSingleAuthor = (id) => {
    return fetch(authorsEndpoint + '/' + id)
    .then(res => res.json())    
    .then(author => {
        return author
    });
}

