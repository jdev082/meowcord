<!-- Home sweet home! -->
<script lang="ts">
    // @ts-nocheck
    import { loggedIn, username } from "../stores.js";

    export let cl;

    async function getHome(page: number = 1): object[] {
        let home = await fetch(`https://api.meower.org/home?autoget&page=${page}`).then(res => res.json());
        return home.autoget;
    }

    async function getProfilePicture(user: string): string {
        let user_data = await fetch(`https://api.meower.org/users/${user}`).then(res => res.json());
        return `./pfp/icon_${user_data.pfp_data - 1}.svg`;
    }

    cl.on("direct", async (data) => {
        if (data.val.post_origin == "home" && data.val.type == 1) {
            let pfp = document.createElement("div");
            let posts = document.getElementById("home-posts");
            let post = document.createElement("div");
            let post_username = document.createElement("p");
            let post_content = document.createElement("p");

            pfp.classList.add("float-start", "me-3");
    
            post.append(pfp);

            post_username.classList.add("mb-0");

            if (data.val.u == "Discord") {
                pfp.innerHTML = `<img class="rounded-circle bg-light" width="50" height="50" alt="${data.val.p.split(": ")[0]}'s profile picture" src="${await getProfilePicture(data.val.p.split(": ")[0])}" onerror="this.src='./pfp/icon_err.svg'">`;
                post_username.innerHTML = `<b class="badge text-light" style="background-color: #5865F2;">${data.val.p.split(": ")[0]}</b>`;
                if (data.val.p.slice(data.val.p.indexOf(": ") + 1) == "") {
                    post_content.innerHTML = "<br>";
                } else {
                    post_content.innerText = data.val.p.slice(data.val.p.indexOf(": ") + 1);
                }
            } else if (data.val.u == "Webhooks") {
                post_username.innerHTML = `<b class="badge bg-warning text-light">${data.val.p.split(": ")[0]}</b>`;
                if (data.val.p.slice(data.val.p.indexOf(": ") + 1) == "") {
                    post_content.innerHTML = "<br>";
                } else {
                    post_content.innerText = data.val.p.slice(data.val.p.indexOf(": ") + 1);
                }
            } else if (data.val.u == "Revower" || data.val.u == "Revower") {
                pfp.innerHTML = `<img class="rounded-circle bg-light" width="50" height="50" alt="${data.val.p.split(": ")[0]}'s profile picture" src="${await getProfilePicture(data.val.p.split(": ")[0])}" onerror="this.src='./pfp/icon_err.svg'">`;
                post_username.innerHTML = `<b class="badge bg-danger text-light">${data.val.p.split(": ")[0]}</b>`;
                if (data.val.p.slice(data.val.p.indexOf(": ") + 1) == "") {
                    post_content.innerHTML = "<br>";
                } else {
                    post_content.innerText = data.val.p.slice(data.val.p.indexOf(": ") + 1);
                }
            } else {
                pfp.innerHTML = `<img class="rounded-circle bg-light" width="50" height="50" alt="${data.val.u}'s profile picture" src="${await getProfilePicture(data.val.u)}" onerror="this.src='./pfp/icon_err.svg'">`;
                post_username.innerHTML = `<b>${data.val.u}</b>`;
                if (data.val.p == "") {
                    post_content.innerHTML = "<br>";
                } else {
                    post_content.innerText = data.val.p;
                }
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
            <div>
                {#if post.u == "Discord"}
                    <div class="float-start me-3">
                        {#await getProfilePicture(post.p.split(": ")[0])}
                            <div class="rounded-circle bg-light" style="width: 50px; height: 50px;"></div>
                        {:then pfp}
                            <div class="rounded-circle bg-light">
                                <img width="50" height="50" alt="{post.u}'s profile picture" src={pfp} onerror="this.src='./pfp/icon_err.svg'">
                            </div>
                        {/await}
                    </div>
                    <b class="badge text-light" style="background-color: #5865F2;">{post.p.split(": ")[0]}</b>
                    <p>{post.p.slice(post.p.indexOf(": ") + 1)}</p>
                {:else if post.u == "Webhooks"}
                    <b class="badge bg-warning text-light">{post.p.split(": ")[0]}</b>
                    <p>{post.p.slice(post.p.indexOf(": ") + 1)}</p>
                {:else if post.u == "Revower"}
                    <div class="float-start me-3">
                        {#await getProfilePicture(post.p.split(": ")[0])}
                            <div class="rounded-circle bg-light" style="width: 50; height: 50;"></div>
                        {:then pfp}
                            <img class="rounded-circle bg-light" width="50" height="50" alt="{post.u}'s profile picture" src={pfp} onerror="this.src='./pfp/icon_err.svg'">
                        {/await}
                    </div>
                    <b class="badge bg-danger text-light">{post.p.split(": ")[0]}</b>
                    <p>{post.p.slice(post.p.indexOf(": ") + 1)}</p>
                {:else}
                    <div class="float-start me-3">
                        {#await getProfilePicture(post.u)}
                            <div class="rounded-circle bg-light" style="width: 50; height: 50;"></div>
                        {:then pfp}
                            <img class="rounded-circle bg-light" width="50" height="50" alt="{post.u}'s profile picture" src={pfp} onerror="this.src='./pfp/icon_err.svg'">
                        {/await}
                    </div>
                    <b>{post.u}</b>
                    <p>{post.p}</p>
                {/if}
            </div>
        {/each}
    </div>

    <br><br>

    <div class="fixed-bottom input-group">
        {#if $loggedIn}
            <input
                type="text"
                class="form-control"
                id="input"
                placeholder="Type something..."
                autocomplete={false}
                maxlength=360
                on:keypress={(event) => {
                    if (event.key == "Enter") {
                        document.getElementById("input-post").click();
                    }
                }}
                on:input={() => {
                    cl.send({ "cmd": "direct", "val": { "cmd": "set_chat_state", "val": { "chatid": "livechat", "state": 101 } } });
                }}
            >
            <button class="btn btn-primary" id="input-post" on:click={() => {
                cl.send({"cmd": "direct", "val": {"cmd": "post_home", "val": document.getElementById("input").value}})
                document.getElementById("input").value = "";
            }}>Post</button>
        {/if}
    </div>
{:catch error}
    <div class="position-absolute top-50 start-50 translate-middle text-center justify-content-center">
        <h1 class="display-2">An error occured</h1>
        <p>Please try refrshing the tab, or try again later. If this issue persists, please create a new GitHub issue.</p>
        <code>{error}</code>
        <div class="vstack gap-3">
            <button class="btn btn-primary" on:click={() => { window.location.refresh(); }}>Refresh</button>
            <a class="btn btn-secondary" href="https://github.com/meowcord-dev/meowcord/issues/new">Create new GitHub issue</a>
        </div>
    </div>
{/await}

<style>
    .spinner {
        color: var(--dark-light);
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