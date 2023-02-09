<script lang="ts">
    // @ts-nocheck
    import Sidebar from "./lib/components/Sidebar.svelte";
    import Home from "./lib/screens/Home.svelte";

    import { loggedIn, screen } from "./lib/stores.js";
    import Cloudlink from "./lib/cloudlink.js";

    const cl = new Cloudlink("wss://server.meower.org/");

    cl.once("connected", () => {
        cl.send({"cmd": "direct", "val": {"cmd": "authpswd", "val": {"username": "test", "pswd": "test"}}});
        loggedIn.set(true);
    });
</script>

<main>
    <Sidebar/>
    <div class="screen m-3">
        {#if $screen === "home"}
            <Home cl={cl}/>
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