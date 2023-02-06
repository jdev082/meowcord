<script lang="ts">
    import Sidebar from "./lib/components/Sidebar.svelte";
    import { screen } from "./lib/stores.js";
</script>

<main>
    <Sidebar/>
    <div class="screen m-3">
        {#if $screen === "home"}
            <h1>Home</h1>
            <p>You will never go home</p>
        {:else}
            <h1>No</h1>
        {/if}
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 5% 100% auto;
        grid-template-rows: auto;
    }
</style>