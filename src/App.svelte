<script lang="ts">
    // @ts-ignore

    import Sidebar from "./lib/components/Sidebar.svelte";
    import Home from "./lib/screens/Home.svelte";

    import { screen } from "./lib/stores.js";
</script>

<main>
    <Sidebar/>
    <div class="screen m-3">
        {#if $screen === "home"}
            <Home/>
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