<!-- It's a sidebar, what more do you want? -->

<script lang="ts">
    import SidebarIcons from "./SidebarIcons.svelte";
</script>

<div class="outer">
    <div class="inner overflow-scroll">
        <SidebarIcons>A</SidebarIcons>
        <SidebarIcons>B</SidebarIcons>
        <SidebarIcons>C</SidebarIcons>
        <SidebarIcons>D</SidebarIcons>
        <SidebarIcons>E</SidebarIcons>
        <SidebarIcons>F</SidebarIcons>
        <SidebarIcons>G</SidebarIcons>
        <SidebarIcons>H</SidebarIcons>
        <SidebarIcons>I</SidebarIcons>
        <SidebarIcons>J</SidebarIcons>
        <SidebarIcons>K</SidebarIcons>
        <SidebarIcons>L</SidebarIcons>
        <SidebarIcons>M</SidebarIcons>
        <SidebarIcons>N</SidebarIcons>
        <SidebarIcons>O</SidebarIcons>
        <SidebarIcons>P</SidebarIcons>
        <SidebarIcons>Q</SidebarIcons>
        <SidebarIcons>R</SidebarIcons>
        <SidebarIcons>S</SidebarIcons>
        <SidebarIcons>T</SidebarIcons>
        <SidebarIcons>U</SidebarIcons>
        <SidebarIcons>V</SidebarIcons>
        <SidebarIcons>W</SidebarIcons>
        <SidebarIcons>X</SidebarIcons>
        <SidebarIcons>Y</SidebarIcons>
        <SidebarIcons>Z</SidebarIcons>
        <hr class="rounded border-secondary">
        <SidebarIcons><i class="bi bi-house-door"></i></SidebarIcons>
    </div>
</div>

<style>
    .outer {
        height: 100vh;
        width: 100vw;
    }
    .inner {
        height: 100%;
        width: 5%;
        padding: 5px;
        background-color: var(--sidebar-bg);
    }
</style>