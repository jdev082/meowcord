<script lang="ts">
    // @ts-nocheck
    import Sidebar from "./lib/components/Sidebar.svelte";
    import Home from "./lib/screens/Home.svelte";
    import Login from "./lib/screens/Login.svelte";
    import Logout from "./lib/screens/Logout.svelte";
    import Signup from "./lib/screens/Signup.svelte";
    // import Splash from "./lib/screens/Splash.svelte";

    import { loggedIn, screen, username, password } from "./lib/stores.js";
    import Cloudlink from "./lib/cloudlink.js";

    const cl = new Cloudlink("wss://server.meower.org/");

    cl.on("disconnected", () => {
        cl.connect("wss://server.meower.org/");

        if ($loggedIn) {
            cl.send({"cmd": "direct", "val": {"cmd": "authpswd", "val": {"username": $username, "pswd": $password}}});
        }
    });
</script>

<!-- <Splash/> -->

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
        {:else}
            <div class="position-absolute top-50 start-50 translate-middle text-center justify-content-center">
                <h1 class="display-2">Invalid screen</h1>
                <p>You'd might want to create a new GitHub issue if this persists</p>
                <div class="vstack gap-3">
                    <button class="btn btn-primary" on:click={() => { screen.set("home"); }}>Go back to Home</button>
                    <a class="btn btn-secondary" href="https://github.com/mdwalters/meowcord/issues/new">Create new GitHub issue</a>
                </div>
            </div>
        {/if}
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 5% 95% auto;
        grid-template-rows: auto;
        z-index: -1;
    }
</style>