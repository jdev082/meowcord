<!-- Buttons for the Sidebar -->
<script lang="ts">
    export let alt: string;
</script>

<div class="rounded-circle bg-secondary bg-gradient text-light text-center button position-relative fs-2 fw-bold" title={alt}>
    <div class="position-absolute top-50 start-50 translate-middle">
        <slot></slot>
    </div>
</div>

<style>
    .button {
        height: 60px;
        width: 60px;
        margin-bottom: 10px;
    }
</style>