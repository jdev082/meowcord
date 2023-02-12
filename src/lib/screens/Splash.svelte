<script lang="ts">
    import { blur, scale } from "svelte/transition";

    let visible: boolean = true;

    // @ts-ignore
    setTimeout(() => {
        visible = false;
    }, 3000);
</script>

{#if visible}
    <div id="splash" transition:blur={{ duration: 500 }}>
        <div class="position-absolute top-50 start-50 translate-middle">
            <h1 transition:scale={{ duration: 500 }}>meowcord</h1>
        </div>
    </div>
{/if}

<style>
    #splash {
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        background-color: #ff9238;
        justify-content: center;
        text-align: center;
    }
</style>