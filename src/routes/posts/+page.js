import axios from 'axios'
import { error, redirect } from '@sveltejs/kit'

export const prerender = true;

export async function load(){
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        const posts = await res.data;

        return {
            posts:posts
        }
    } catch(err){
        //throw error(500, 'Failed to fetch posts')
        redirect(307,'/')
    }
}