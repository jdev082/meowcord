<!-- It's a sidebar, what more do you want? -->

<script lang="ts">
    // @ts-nocheck
    import { screen, loggedIn } from "./../stores.js";

    export let cl;
</script>

<div class="outer">
    <div class="inner overflow-scroll">
        <button class="btn rounded-circle bg-secondary bg-gradient text-light text-center button position-relative fs-2 fw-bold" title="Example Chat" style="cursor: pointer;">
            <div class="position-absolute top-50 start-50 translate-middle">
                A
            </div>
        </button>
        <hr class="rounded border-secondary">
        <button class="btn rounded-circle bg-secondary bg-gradient text-light text-center button position-relative fs-2 fw-bold" title="Home" style="cursor: pointer;" on:click={() => {
            screen.set("home");
        }}>
            <div class="position-absolute top-50 start-50 translate-middle">
                <i class="bi bi-house-door"></i>
            </div>
        </button>
        {#if $loggedIn}
            <button class="btn rounded-circle bg-secondary bg-gradient text-light text-center button position-relative fs-2 fw-bold" title="Log out" style="cursor: pointer;" on:click={() => {
                screen.set("logout");
            }}>
                <div class="position-absolute top-50 start-50 translate-middle">
                    <i class="bi bi-box-arrow-left"></i>
                </div>
            </button>
        {:else}
            <button class="btn rounded-circle bg-secondary bg-gradient text-light text-center button position-relative fs-2 fw-bold" title="Log in" style="cursor: pointer;" on:click={() => {
                screen.set("login");
            }}>
                <div class="position-absolute top-50 start-50 translate-middle">
                    <i class="bi bi-box-arrow-in-left"></i>
                </div>
            </button>
        {/if}
    </div>
</div>

<style>
    .outer {
        height: 100vh;
        width: 100vw;
    }
    .inner {
        height: 100vh;
        width: 5vw;
        padding: 5px;
        position: fixed;
        background-color: var(--sidebar-bg);
    }
    .button {
        height: 60px;
        width: 60px;
        margin-bottom: 10px;
    }
</style>