<script setup>
import { onMounted, ref } from 'vue';
import Boardgame from './Boardgame.vue';


const data = [
    {
        title: "Schule",
        text: "Ja da hab ich mein Gymnasiales moped gegettet"
    },
    {
        title: "Baumarkt",
        text: "I han in 1 Baumarcht die rejale einjeräumd"
    },
    {
        title: "Auslandsjahr",
        text: "ijfd schmie jott eff deeh"
    },
    {
        title: "UNI",
        text: "uni schmuni und so you know whats uppp"
    },
    {
        title: "Koch",
        text: "von dann bis dann hab ich bei vapiano die woks geschwunken"
    },
    {
        title: "Tutor",
        text: "he was a tutor boi he said see you lootr boiii"
    },
    {
        title: "you",
        text: "hire me! now"
    }
]


const flipped = ref(false);

function flip(){
    console.log('flip');
    flipped.value = !flipped.value
    console.log(flipped.value);
}

const selectedOccupation = ref(data[0])

function changeHandler(e){
    console.log('sheeeeeesh', e);
    selectedOccupation.value = data[e.field];
}


</script>


<template>


<div class="px-5 mx-auto mt-10 flex justify-end max-w-screen-xl">
    <h1 class="text-5xl section-heading p-5">Kuhriculum Vitae</h1>

    <div class="h-0">
        <img src="../../assets/cow.png" class=" cow h-50 " />
    </div>
    

</div>
<section class="bg-green-400 relative flex items-stretch flex-col-reverse md:flex-row">
    
    <!-- <iframe src="kuhriculum-vitae.html" class="w-full"></iframe> -->
    <!-- kartenstapel -->
    <!-- <div>
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

        
    </div> -->
    <div class="w-full sticky self-start top-0 text-6xl py-10 px-10">
        <h1>{{selectedOccupation.title}}</h1>
        <p class="text-3xl">{{selectedOccupation.text}}</p>
    </div>

    <div class="bg-green-500 w-full ">
        <Boardgame @change="changeHandler"/>
    </div>
        
    
  
</section>
lkjhjlkh



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