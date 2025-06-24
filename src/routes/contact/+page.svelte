<script>
    import { afterNavigate, beforeNavigate, goto, onNavigate } from "$app/navigation";

    afterNavigate(()=>{
        /// WHEN NAVIGATE TO LOCATION
        console.log('After navigate')
    })

    beforeNavigate(()=>{
        /// WHEN NAVIGATE OUT OF LOCATION
        console.log('Before navigate')
    })

    onNavigate(()=>{
        console.log('on navigate')
    })

</script>

<h1>This is the contact page</h1>
<button onclick={()=>goto('/')}>Redirect page</button>