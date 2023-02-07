<script lang="ts">
    async function getHome(page: number = 1) {
        // @ts-ignore
        let home = await fetch(`https://api.meower.org/home?autoget&page=${page}`).then(res => res.json());
        return home.autoget; 
    }
</script>

<svelte:head>
    <title>Home - Meower Bootstrap</title>
</svelte:head>

{#await getHome()}
    <div class="position-absolute top-50 start-50 translate-middle">
        <div class="spinner spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
{:then home} 
    {#each home as post}
        <div class="float-start me-3">
            <img class="rounded-circle" width="50" height="50" src="https://i.insider.com/602ee9ced3ad27001837f2ac?width=50&height=50">
        </div>
        <div>
            <p class="mb-0"><b>{post.u}</b> <span class="text-muted">{new Date(post.t.e * 1000)}</span>
            <p>{post.p}</p>
        </div>
    {/each}

    <br>

    <div class="fixed-bottom input-group">
        <input type="text" class="form-control input" placeholder="Type something...">
        <button class="btn btn-primary input-post">Post</button>
    </div>
{/await}

<style>
    .spinner {
        color: var(--sidebar-colour);
    }

    .input {
        margin-left: 90px;
        margin-bottom: 10px;
    }

    .input-post {
        margin-right: 10px;
        margin-bottom: 10px;
    }
</style>