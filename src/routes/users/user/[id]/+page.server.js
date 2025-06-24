import { error } from '@sveltejs/kit'

export async function load({fetch,params}){
    const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
    const response = await fetch(url);
    const json = await response.json();
    
    if(Object.keys(json).length !== 0){
        return {post:json}
    }
    error(404,'Dang it !!!')
}