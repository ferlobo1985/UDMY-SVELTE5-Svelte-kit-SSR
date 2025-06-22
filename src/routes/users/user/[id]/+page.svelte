<script>
    import { page } from '$app/state';
    let { data } = $props();
    console.log(data)
</script>

<h3>User by ID: {page.params.id}</h3>
<hr/>
<ul>
    {#each data.users as user(user.id)}
        <li>
            <strong>{user.name}</strong> - {user.email}
        </li>
    {/each}
</ul>