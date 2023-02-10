<script lang="ts">
    // @ts-nocheck
    import Sidebar from "./lib/components/Sidebar.svelte";
    import Home from "./lib/screens/Home.svelte";
    import Login from "./lib/screens/Login.svelte";
    import Logout from "./lib/screens/Logout.svelte";
    import Signup from "./lib/screens/Signup.svelte";

    import { loggedIn, screen } from "./lib/stores.js";
    import Cloudlink from "./lib/cloudlink.js";

    const cl = new Cloudlink("wss://server.meower.org/");

    cl.on("disconnected", () => {
        loggedIn.set(false);
        cl.connect("wss://server.meower.org/");
    });
</script>

<main>
    <Sidebar/>
    <div class="screen m-3">
        {#if $screen === "home"}
            <Home cl={cl}/>
        {:else if $screen === "login"}
            <Login cl={cl}/>
        {:else if $screen === "logout"}
            <Logout cl={cl}/>
        {:else if $screen === "signup"}
            <Signup cl={cl}/>
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