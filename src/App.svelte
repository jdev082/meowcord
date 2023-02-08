<script lang="ts">
    // @ts-ignore

    import Sidebar from "./lib/components/Sidebar.svelte";
    import Home from "./lib/screens/Home.svelte";

    import { screen } from "./lib/stores.js";

    const ws = new WebSocket("wss://server.meower.org/");

    async function connect() {
        ws.send(`{"cmd": "direct", "val": {"cmd": "type", "val": "js"}}`);
        ws.send(`{"cmd": "direct", "val": {"cmd": "ip", "val": "${await fetch("https://api.meower.org/ip").then(res => res.text())}"}}`);
        ws.send(`{"cmd": "direct", "val": "meower"}`);
        ws.send(`{"cmd": "direct", "val": {"cmd": "authpswd", "val": {"username": "test", "pswd": "test"}}}`);
    }
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
        grid-template-columns: 5% 90% auto;
        grid-template-rows: auto;
    }
</style>