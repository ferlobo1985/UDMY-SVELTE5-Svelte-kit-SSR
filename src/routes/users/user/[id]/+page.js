import axios from 'axios';
import { error } from '@sveltejs/kit';

export async function load({params}){
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        const data = await res.data;

        return {
            users:data,
            params
        };
    } catch(err){
        throw error(500,'Failed to fetch users')
    }
}
