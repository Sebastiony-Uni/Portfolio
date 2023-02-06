<script lang="ts">
  import { goto } from "$app/navigation";


    const navbar: string[] = ["Home", "Dashboard", "Projects", "About"]
    type PageData = {
        currentPath: string,
    }
    export let data: PageData;

    $: ({currentPath} = data);

    //Either forward or backward through the navbar array
    function handleMove(dir: number){
        //get the currentidx to see where we are
        const currentIdx = navbar.filter((e) => e.toLowerCase() === currentPath.split("/")[1]).map((e) => navbar.indexOf(e))[0];
        // Check if it is home or not
        const newUrl: string = `/${navbar[currentIdx + dir].toLowerCase()}` === "/home" ? "/": `/${navbar[currentIdx + dir].toLowerCase()}`;
        //go to that idx + or - depending on number
        goto(newUrl)
    }
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
            <h1 class="my-auto px-10"><a href={nav.toLowerCase() === "home" ? "/" : nav.toLowerCase()}>{nav}</a></h1>
            {/each}
        </div>
    </div>
    <!-- Other content -->
    <div class="w-screen h-4/6">
        <!-- ArrowRight -->
        <div class="absolute right-10 top-1/2">
            <button class="bg-transparent" on:click={() => handleMove(1)}>
                👉
            </button>
        </div>
        <!-- ArrowLeft -->
        <div class="absolute left-10 top-1/2">
            <button class="bg-transparent" on:click={() => handleMove(-1)}>
                👈
            </button>
        </div>
        <slot />
    </div>
    <!-- Maybe bottom nav bar for socials -->
    <div class="w-screen h-1/6 bg-gray-400 opacity-40">
        
    </div>
</div>
