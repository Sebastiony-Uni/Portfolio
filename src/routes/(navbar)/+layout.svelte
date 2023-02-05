<script lang="ts">
    const navbar: string[] = ["Home", "Projects", "About"]
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&display=swap');

</style>
<!-- Container -->
<div class="w-screen h-screen flex flex-col font-robotoslab">
    <!-- Navbar Container -->
    <div class="w-screen h-1/6 flex flex-row bg-secondary ">
        <!-- Icon on Left -->
        <div class='w-2/6 h-full text-primary flex justify-center items-center text-2xl font-semibold'>
            <a href="/">WestburyPrice</a>
        </div>
        <!-- Navbar -->
        <div class="w-full h-full m-auto flex justify-center font-semibold">
            {#each navbar as nav}
            <h1 class="my-auto px-10"><a href={nav === "Home" ? "/" : nav}>{nav}</a></h1>
            {/each}
        </div>
    </div>
    <!-- Other content -->
    <slot />
</div>
