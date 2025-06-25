import axios from 'axios';
import { error } from '@sveltejs/kit';

// export const prerender = false;

export async function load({data,params}){
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        const user = await res.data;

        return {
            user:user,
            params,
            ...data
        };
    } catch(err){
        throw error(500,'Failed to fetch users')
    }
}
