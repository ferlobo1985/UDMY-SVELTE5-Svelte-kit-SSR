import { fail } from '@sveltejs/kit';

export const actions = {
    nameofform: async({request})=>{
        const formData = await request.formData();
        const name = formData.get('name');
        const errors = {};

        if(!name){
            errors.name = 'The input is empty';
        }

        if(!errors.name){
            return { success: true}
        }

        return fail(422,{errors})
    }
}