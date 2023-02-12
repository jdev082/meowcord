<!-- Home sweet home! -->
<script lang="ts">
    // @ts-nocheck
    import { loggedIn, username } from "../stores.js";

    export let cl;

    async function getHome(page: number = 1) {
        let home = await fetch(`https://api.meower.org/home?autoget&page=${page}`).then(res => res.json());
        return home.autoget;
    }

    cl.on("direct", (data) => {
        if (data.val.post_origin == "home" && data.val.type == 1) {
            let pfp = document.createElement("div");
            let posts = document.getElementById("home-posts");
            let post = document.createElement("div");
            let post_username = document.createElement("p");
            let post_content = document.createElement("p");

            pfp.classList.add("float-start", "me-3");
            pfp.innerHTML = `<img class="rounded-circle" width="50" height="50" alt="{post.u}'s profile picture" src="https://i.insider.com/602ee9ced3ad27001837f2ac?width=50&height=50">`;
            post.append(pfp);

            post_username.classList.add("mb-0");

            switch (data.val.u) {
                case "Discord":
                    post_username.innerHTML = `<b class="badge text-light" style="background-color: #5865F2;">${data.val.p.split(": ")[0]}</b>`;
                    post_content.innerText = data.val.p.slice(data.val.p.indexOf(": ") + 1);
                case "Webhooks":
                    post_username.innerHTML = `<b class="badge bg-warning text-light">${data.val.p.split(": ")[0]}</b>`;
                    post_content.innerText = data.val.p.slice(data.val.p.indexOf(": ") + 1);
                case "gcbridge":
                    post_username.innerHTML = `<b class="badge text-light" style="background-color: #ffa200;">${data.val.p.split(": ")[0]}</b>`;
                    post_content.innerText = data.val.p.slice(data.val.p.indexOf(": ") + 1);
                case "Revower":
                    post_username.innerHTML = `<b class="badge bg-danger text-light">${data.val.p.split(": ")[0]}</b>`;
                    post_content.innerText = data.val.p.slice(data.val.p.indexOf(": ") + 1);
                default:
                    post_username.innerHTML = `<b>${data.val.u}</b>`;
                    post_content.innerText = data.val.p;
            }

            post.append(post_username);
            post.append(post_content);
            posts.prepend(post);
        }
    });
</script>

<svelte:head>
    <title>Home - Meowcord</title>
</svelte:head>

{#await getHome()}
    <div class="position-absolute top-50 start-50 translate-middle">
        <div class="spinner spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
{:then home}
    <div id="home-posts">
        {#each home as post}
            <div class="float-start me-3">
                <img class="rounded-circle" width="50" height="50" alt="{post.u}'s profile picture" src="https://i.insider.com/602ee9ced3ad27001837f2ac?width=50&height=50">
            </div>
            <div>
                {#if post.u == "Discord"}
                    <b class="badge text-light" style="background-color: #5865F2;">{post.p.split(": ")[0]}</b>
                    <p>{post.p.slice(post.p.indexOf(": ") + 1)}</p>
                {:else if post.u == "Webhooks"}
                    <b class="badge bg-warning text-light">{post.p.split(": ")[0]}</b>
                    <p>{post.p.slice(post.p.indexOf(": ") + 1)}</p>
                {:else if post.u == "gcbridge"}
                    <b class="badge text-light" style="background-color: #ffa200;">{post.p.split(": ")[0]}</b>
                    <p>{post.p.slice(post.p.indexOf(": ") + 1)}</p>
                {:else if post.u == "Revower"}
                    <b class="badge bg-danger text-light">{post.p.split(": ")[0]}</b>
                    <p>{post.p.slice(post.p.indexOf(": ") + 1)}</p>
                {:else}
                    <b>{post.u}</b>
                    <p>{post.p}</p>
                {/if}
            </div>
        {/each}
    </div>

    <br><br>

    <div class="fixed-bottom input-group">
        {#if $loggedIn}
            <input type="text" class="form-control" id="input" placeholder="Type something..." autocomplete="false"
            maxlength="360" on:keypress={(event) => {
                if (event.key == "Enter") {
                    // @ts-nocheck
                    document.getElementById("input-post").click();
                };
            }}>
            <button class="btn btn-primary" id="input-post" on:click={() => {
                // @ts-nocheck
                cl.send({"cmd": "direct", "val": {"cmd": "post_home", "val": document.getElementById("input").value}})
                document.getElementById("input").value = "";
            }}>Post</button>
        {:else}
            <input type="text" class="form-control" id="input" placeholder="You cannot post because you aren't logged in" disabled>
            <button class="btn btn-primary" id="input-post" disabled>Post</button>
        {/if}
    </div>
{:catch error}
    <div class="position-absolute top-50 start-50 translate-middle text-center justify-content-center">
        <h1 class="display-2">An error occured</h1>
        <p>Please try refrshing the tab, or try again later.</p>
        <code>{error}</code>
    </div>
{/await}

<style>
    .spinner {
        color: var(--sidebar-colour);
    }

    #input {
        margin-left: 5.8vw;
        margin-bottom: 2vh;
    }

    #input-post {
        margin-right: 0.8vw;
        margin-bottom: 2vh;
    }
</style>