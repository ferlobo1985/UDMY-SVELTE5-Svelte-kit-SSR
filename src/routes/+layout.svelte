<script>
    let { children } = $props();
</script>
<div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span class="fs-4">My app</span>
      </a>


      <ul class="nav nav-pills">
        <li class="nav-item">
          <a href="/" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="/contact" class="nav-link">Contact</a>
        </li>
        <li class="nav-item">
          <a href="/users" class="nav-link">Users</a>
        </li>
        <li 
          data-sveltekit-preload-data
          class="nav-item">
          <a href="/posts" class="nav-link">Posts</a>
        </li>
      </ul>
    </header>
    <div>
        {@render children()}
    </div>
</div>
