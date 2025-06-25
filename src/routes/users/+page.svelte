<script>
    import axios from 'axios';
    let email = $state('');

    async function postUser() {
        try{
            const url = '/api/users';
            const response = await axios.post(url,{
                email
            })
            console.log(response.data)
        }catch(e){
            console.log(e)
        }
    }
</script>

<h1>This is the users page</h1>
<input type="email" bind:value={email}/>
<button onclick={postUser}>Post user</button>
