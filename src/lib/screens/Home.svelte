<!-- Home sweet home! -->
<script lang="ts">
    // @ts-nocheck
    import { toRelative } from "../relative.js";
    import { screen, loggedIn } from "../stores.js";

    export let cl;

    async function getHome(page: number = 1) {
        let home = await fetch(`https://api.meower.org/home?autoget&page=${page}`).then(res => res.json());
        return home.autoget;
    }

    cl.on("direct", (data) => {
        if (data.val.post_origin == "home" && data.val.type == 1) {
            let pfp = document.createElement("div");
            let pfp_img = document.createElement("img");
            let posts = document.getElementById("home-posts");
            let post = document.createElement("div");
            let post_username = document.createElement("p");
            let post_content = document.createElement("p");

            pfp.classList.add("float-start", "me-3");
            pfp_img.classList.add("rounded-circle");
            pfp_img.width = 50;
            pfp_img.height = 50;
            pfp_img.alt = `${data.val.u}'s profile picture`;
            pfp_img.src = "https://i.insider.com/602ee9ced3ad27001837f2ac?width=50&height=50";
            pfp.append(pfp_img);
            post.append(pfp);

            post_username.classList.add("mb-0");
            post_username.value = `<b>${data.val.u}</b>`;
            post_content.value = data.val.p;
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
                <p class="mb-0"><b>{post.u}</b> <!-- <span class="text-muted">{toRelative(post.t.e * 1000)}</span> --></p>
                <p>{post.p}</p>
            </div>
        {/each}
    </div>

    <br><br>

    <div class="fixed-bottom input-group">
        {#if $loggedIn}
            <input type="text" class="form-control" id="input" placeholder="Type something..." on:keypress={(event) => {
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
            <input type="text" class="form-control" placeholder="You cannot post because you aren't logged in" disabled>
            <button class="btn btn-primary" disabled>Post</button>
        {/if}
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