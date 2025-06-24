<script>
    let { data } = $props();
</script>

{#each data.posts as post(post.id) }
    <div>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <hr/>
    </div>
{/each}