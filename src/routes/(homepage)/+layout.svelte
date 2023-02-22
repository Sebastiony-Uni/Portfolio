<script>
    import linkedin from '$lib/images/linkedin.svg';
    import github from '$lib/images/github.svg';
</script>


<!-- Container -->
<div class="w-screen h-screen flex xl:flex-row flex-col-reverse">
    <!-- Side Nav bar -->
    <div class="xl:h-screen xl:w-1/12 w-screen h-1/6 bg-primary flex xl:flex-col justify-evenly xl:p-10">
            <!-- Socials -->
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/sebastianwestbury-price/" target="_blank" rel="noreferrer" class="my-auto">
                <img class="xl:w-15 xl:h-15 w-9 h-9" src={linkedin} alt='LinkedIn Connection'/>
            </a>
            <!-- Name -->
            <p class="xl:hidden text-3xl my-auto font-robotoslab text-secondary">WestburyPrice</p>
            <!-- GitHub -->
            <a href="https://github.com/Sebastiony-Uni" target="_blank" rel="noreferrer" class="my-auto">
                <img class="xl:w-17 xl:h-17 w-10 h-10" src={github} alt='Github Connection'/>
            </a>
    </div>
    <!-- The main content -->
    <div class="xl:w-11/12 xl:h-screen w-full h-full bg-secondary">
        <slot />
    </div>
</div>
