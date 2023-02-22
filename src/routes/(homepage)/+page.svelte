<script>
    import headshot from '$lib/images/headshot.png';
</script>
<!-- Body -->
<body class="flex w-full h-full font-robotoslab">
    <!-- Background -->
    <div class="w-full h-full xl:bg-default xl:bg-no-repeat xl:bg-center xl:bg-cover flex xl:flex-col xl:text-left flex-col">
        <!-- Image -->
        <div class="flex flex-row xl:hidden">
            <img src={headshot} class="xl:hidden block w-20 h-20 m-10 rounded-md" alt="profile photo"/>
            <!-- Heading on Phone -->
            <div class="flex flex-col my-auto">    
                <p class="xl:hidden block text-4xl text-primary line-through">Welcome Undefined!</p>
                <p class="text-red-500 text-right mr-16">--ERROR--</p>
            </div>
        </div>
        <!-- Div to push to bottom -->
        <div class="xl:block hidden basis-4/6"></div>
        <!-- Link text in background -->
        <p class="font-robotoslab font-semibold text-white xl:mt-32 xl:text-2xl xl:pl-24 mx-auto xl:mx-0 xl:block hidden ">I create projects all the time that end up no where. <br> Check them out <a class="hover:text-secondary" href="/notimplemented">here</a></p>
        <p class="xl:hidden block pl-10 text-xl hover:text-primary">&#60 Bio &#62</p>
        <!-- Bio Text -->
        <div class="xl:hidden block">
            <ul class="flex md:flex-row flex-col xl:hidden py-5">
                <li class="xl:hidden block pl-10 text-base">Currently Studying a Bachelor of Information Technology</li>
                <p class="xl:hidden block pl-10 text-base font-semibold text-green-900 hover:text-red-500">&#60!-- Graduating 2023 Semester 1 --&#62</p>
            </ul>
            <ul class="flex md:flex-row flex-col xl:hidden">
                <li class="xl:hidden block pl-10 text-base">Majoring in Game Developement</li>
                <p class="xl:hidden block pl-10 text-base font-semibold text-green-900 hover:text-red-500">&#60!-- Enjoys web programming --&#62</p>
            </ul>
            <ul class="flex md:flex-row flex-col xl:hidden py-5">
                <li class="xl:hidden block pl-10 text-base">Huge fan of networking and Tech conventions</li>
                <p class="xl:hidden block pl-10 text-base font-semibold text-green-900 hover:text-red-500">&#60!-- Even bigger fan of coffee  --&#62</p>
            </ul>
            <ul class="flex md:flex-row flex-col xl:hidden">
                <li class="xl:hidden block pl-10 text-base">Eagerly awaiting your connection</li>
                <p class="xl:hidden block pl-10 text-base font-semibold text-green-900 hover:text-red-500">&#60!-- Connect with me on my socials  --&#62</p>
            </ul>
        </div>
        <p class="xl:hidden block p-10 text-xl hover:text-primary">&#60/ Bio &#62</p>
    </div>
</body>