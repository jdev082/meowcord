<script lang="ts">
    // @ts-nocheck
    import Sidebar from "./lib/components/Sidebar.svelte";
    import Home from "./lib/screens/Home.svelte";
    import Login from "./lib/screens/Login.svelte";
    import Logout from "./lib/screens/Logout.svelte";

    import { loggedIn, screen, username, password } from "./lib/stores.js";
    import Cloudlink from "./lib/cloudlink.js";

    const cl = new Cloudlink("wss://server.meower.org/");
</script>

<main>
    <Sidebar cl={cl}/>
    <div class="screen m-3">
        {#if $screen === "home"}
            <Home cl={cl}/>
        {:else if $screen === "login"}
            <Login cl={cl}/>
        {:else if $screen === "logout"}
            <Logout cl={cl}/>
        {/if}
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 5vw 90vw auto;
        grid-template-rows: auto;
    }
</style>