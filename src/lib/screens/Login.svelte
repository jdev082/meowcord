<!-- Makes you login to Meower! -->
<script lang="ts">
    // @ts-nocheck
    import { loggedIn, screen, username } from "../stores.js";

    export let cl;
</script>

<svelte:head>
    <title>Log in - Meowcord</title>
</svelte:head>

<div class="position-absolute top-50 start-50 translate-middle text-center justify-content-center">
    <h1 class="display-2">Log in to Meower</h1>
    <div class="vstack gap-3">
        <input type="text" class="form-control" id="username" placeholder="Type in your username here" on:keypress={(event) => {
            if (event.key == "Enter") {
                // @ts-nocheck
                document.getElementById("login-button").click();
            };
        }}>
        <input type="password" class="form-control" id="password" placeholder="Type in your password here" on:keypress={(event) => {
            if (event.key == "Enter") {
                // @ts-nocheck
                document.getElementById("login-button").click();
            };
        }}>
        <button class="btn btn-primary" id="login-button" on:click={() => {
            // @ts-nocheck
            cl.send({"cmd": "direct", "val": {"cmd": "authpswd", "val": {"username": document.getElementById("username").value, "pswd": document.getElementById("password").value}}});
            loggedIn.set(true);
            username.set(document.getElementById("username").value);
            screen.set("home");
        }}>Log in</button>
        <button class="btn btn-secondary" on:click={() => {
            screen.set("signup");
        }}>Sign up</button>
    </div>
</div>