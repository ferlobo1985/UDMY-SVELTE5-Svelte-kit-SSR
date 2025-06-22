<script>
    let { data } = $props();
    console.log(data)
</script>

<h3>User by ID: {data.params.id}</h3>
<hr/>
<div>
     <strong>{data.users.name}</strong> - {data.users.email}
</div>

<!-- <ul>
    {#each data.users as user(user.id)}
        <li>
            <strong>{user.name}</strong> - {user.email}
        </li>
    {/each}
</ul> -->