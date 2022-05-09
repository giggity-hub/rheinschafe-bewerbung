<template>
<div class="bg-black w-full h-screen flex-col flex relative lg:(flex-row-reverse justify-end)">
    <div class="    lg:text-right flex-shrink-0">
        <h1 class="hero-text">Moin Leude</h1>
        <h2 class="hero-text">Stefan hier</h2>
    </div>
    <div class="bullshit relative h-0 flex-grow  lg:( flex-grow-0 h-full) flex items-end" >
        <img class="max-h-full object-contain" alt="Hero-banner" src="../assets/hero-1080x1200.png" />
    </div>
</div>



</template>

<style>

.hero-text{
    @apply text-white text-8xl p-5;
    /* font-size: */
}


/* .bullshit{
    display: flex;
    flex-grow: 1;
    position: relative;
    flex-shrink:1;
} */

</style>