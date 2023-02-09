<!-- Makes you logout from Meower! -->
<script lang="ts">
    // @ts-nocheck
    import { loggedIn, screen } from "../stores.js";

    export let cl;
</script>

<svelte:head>
    <title>Log out - Meowcord</title>
</svelte:head>

<div class="position-absolute top-50 start-50 translate-middle text-center">
    <h1 class="display-2">Log out from Meower</h1>
    <p>Are you sure you want to logout?</p>
    <div class="hstack gap-3 justify-content-center">
        <button class="btn btn-danger" id="login-button" on:click={() => {
            // @ts-nocheck
            cl.disconnect();
            loggedIn.set(false);
            screen.set("home");
        }}>Yes</button>
        <button class="btn btn-light" id="login-button" on:click={() => {
            // @ts-nocheck
            screen.set("home");
        }}>No</button>
    </div>
</div>