<script>
    let { children } = $props()
</script>
<div class="container">
    <header>
        My app header
    </header>
    <hr/>
    <div>
        {@render children()}
    </div>
</div>