import { error } from '@sveltejs/kit';

export function GET(obj){
    //console.log(obj)
    return new Response(
        JSON.stringify({username:'Steve'}),
        { status: 201 }
    )
}

export async function POST({request}){
    const { email } = await request.json();

    if(email != 'francis@gmail.com'){
        return error(404,'You are not Francis')
    }

    return new Response('Success',{ status:201})
}