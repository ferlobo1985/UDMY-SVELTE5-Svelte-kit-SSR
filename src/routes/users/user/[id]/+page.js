import axios from 'axios';
import { error } from '@sveltejs/kit';

export async function load(){
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.data;
        return {
            users:data,
            car:'ferrari',
            color:['Red','Green','Blue']
        };
    } catch(err){
        throw error(500,'Failed to fetch users')
    }
}
