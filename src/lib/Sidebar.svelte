<!-- It's a sidebar, what more do you want? -->

<script lang="ts">
    import SidebarIcons from "./SidebarIcons.svelte";
</script>

<div class="outer">
    <div class="inner bg-body-secondary text-dark overflow-scroll">
        <SidebarIcons>E</SidebarIcons>
    </div>
</div>

<style>
    .outer {
        height: 100vh;
        width: 100vw;
    }
    .inner {
        height: 100%;
        width: 6%;
        padding: 5px;
    }
</style>