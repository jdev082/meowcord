<script lang="ts">
    async function getHome(page: number = 1) {
        // @ts-ignore
        let home = await fetch(`https://api.meower.org/home?autoget&page=${page}`).then(res => res.json());
        return home.autoget; 
    }
</script>

{#await getHome()}
    <h1>Loading posts...</h1>
{:then home} 
    {#each home as post}
        <div class="border rounded bg-light text-dark">
            <h1>{post.u}</h1>
            <p>{post.p}</p>
        </div>
    {/each}
{/await}
