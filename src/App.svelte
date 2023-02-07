<script lang="ts">
    import Sidebar from "./lib/components/Sidebar.svelte";
    import Home from "./lib/screens/Home.svelte";

    // @ts-ignore
    import { screen } from "./lib/stores.js";

    const ws = new WebSocket("wss://server.meower.org/");

</script>

<main>
    <Sidebar/>
    <div class="screen m-3">
        {#if $screen === "home"}
            <Home/>
        {:else}
            <h1>No</h1>
        {/if}
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 5% 90% auto;
        grid-template-rows: auto;
    }
</style>