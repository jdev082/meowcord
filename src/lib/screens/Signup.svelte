<!-- Makes you login to Meower! -->
<script lang="ts">
    // @ts-nocheck
    import { loggedIn, screen, username, password } from "../stores.js";

    export let cl;
</script>

<svelte:head>
    <title>Sign up - Meowcord</title>
</svelte:head>

<div class="position-absolute top-50 start-50 translate-middle text-center justify-content-center">
    <h1 class="display-2">Sign up to Meower</h1>
    <div class="vstack gap-3">
        <input type="text" class="form-control" id="username" placeholder="Type in a username here" on:keypress={(event) => {
            if (event.key == "Enter") {
                // @ts-nocheck
                document.getElementById("login-button").click();
            };
        }}>
        <input type="password" class="form-control" id="password" placeholder="Type in a password here" on:keypress={(event) => {
            if (event.key == "Enter") {
                // @ts-nocheck
                document.getElementById("signup-button").click();
            };
        }}>
        <button class="btn btn-primary" id="signup-button" on:click={() => {
            // @ts-nocheck
            cl.send({"cmd": "direct", "val": {"cmd": "gen_account", "val": {"username": document.getElementById("username").value, "pswd": document.getElementById("password").value}}});
            username.set(document.getElementById("username").value);
            password.set(document.getElementById("password").value);
            loggedIn.set(true);
            screen.set("home");
        }}>Sign up</button>
        <button class="btn btn-secondary" on:click={() => {
            screen.set("login");
        }}>Log in</button>
    </div>
</div>