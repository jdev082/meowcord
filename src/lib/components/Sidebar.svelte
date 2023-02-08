<!-- It's a sidebar, what more do you want? -->

<script lang="ts">
    import SidebarIcons from "./SidebarIcons.svelte";

    import { screen } from "./../stores.js";
</script>

<div class="outer">
    <div class="inner overflow-scroll">
        <SidebarIcons alt="This is a useless example">A</SidebarIcons>
        <hr class="rounded border-secondary">
        <SidebarIcons alt="Home"><i class="bi bi-house-door"></i></SidebarIcons>
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
</style>