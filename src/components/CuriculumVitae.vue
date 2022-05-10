<script setup>
import { ref } from 'vue';


const flipped = ref(false);

function flip(){
    console.log('flip');
    flipped.value = !flipped.value
    console.log(flipped.value);
}

</script>


<template>


<div class="px-5 mx-auto mt-10 flex justify-end max-w-screen-xl">
    <h1 class="text-5xl section-heading p-5">Kuhriculum Vitae</h1>

    <div class="h-0">
        <img src="../assets/cow.png" class=" cow h-50 " />
    </div>
    

</div>
<section class="bg-blue-400 h-50">
    

    <!-- kartenstapel -->
    <div>
        <div class="card-wrapper w-50 h-30 ">
            <div class="card" @click="flip" :class="{flipped: flipped}">
                <div class="card__side card__side--back ">
                    hallol breee
                </div>
                <div class="card__side card__side--front ">
                    hallol bro
                </div>
                
            </div>
        </div>

        
    </div>
</section>



</template>

<style>




.cow{
    transform: translateY(-2rem);
}



.card__side{
    @apply w-full h-full  absolute;
    background: green;
    backface-visibility: hidden;
}
.card__side--back{
    @apply w-30 h-50;
    transform: rotateY(180deg) rotateZ(90deg);
    transform-origin: top left;
}

.card-wrapper{
    position: relative;
}

.card{
    position: relative;
    @apply w-full h-full;
    /* background: purple; */
    transition: all .5s linear;
    transform-style: preserve-3d;
}

.card.flipped{
    /* background: orange; */
    transform: rotateY(180deg) rotate(90deg);
}

/* .card.flipped .card__side--back{
    transform: none;
    z-index: 2;
} */

</style>