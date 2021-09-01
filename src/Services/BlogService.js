import { postsEndpoint } from "../Shared/endpoints";

export const getPosts = () => {
    return fetch(postsEndpoint)
    .then(res => res.json())    
    .then(posts => {
        // console.log(posts)
        return posts
    });
}