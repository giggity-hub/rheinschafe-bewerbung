<script setup>
import anime from 'animejs/lib/anime.es.js';
import { onMounted, ref } from 'vue';
import gsap from "gsap";

const skillCardRefs = ref([]);
const skillCardFrontRef = ref([]);
const skillCardBackRef = ref([]);

const isHover = [false, false, false, false];



let isAnyCardDrawn = false;
const skillCardData = [
    {},
    {},
    {},
    {}
]

const restingCards = [];
const restingDistance = -100;
const drawDistance = -120;
// const tuckedDistance = 100;

for (let angle=-30; angle <=30; angle+=20) {
    // + 90 deg weil einheitskreis 0 rechts hat bei uns 0 aber oben
    let angleRad = (angle + 90) * (Math.PI / 180); 
    let vectorX = Math.cos(angleRad);
    let vectorY = Math.sin(angleRad);

    restingCards.push({
        vectorX,
        vectorY,
        translateX: vectorX * restingDistance,
        translateY: vectorY * restingDistance,
        angleDeg: angle,
        angleRad,
    })
}

const restingCardAngle = (index) => restingCards[index].angleDeg;
// const restingCardVectorX = (index) => restingCards[index].x;
// const restingCardVectorY = (index) => restingCards[index].y;
const restingCardTranslateX = (index) => restingCards[index].translateX;
const restingCardTranslateY = (index) => restingCards[index].translateY;

// console.log(restingCards);


function hover({target}, index){
    if (isAnyCardDrawn) return;

    isHover[index] = !isHover[index];
    let restingCard = restingCards[index]
    let distance = isHover[index] ? drawDistance : restingDistance;

    gsap.to(target, {
        translateX: distance * restingCard.vectorX,
        translateY: distance * restingCard.vectorY,
        duration: .5,
    })
}


function drawCard(event, index){
    if (isAnyCardDrawn) return;

    let target = skillCardRefs.value[index];
    let frontFace = skillCardFrontRef.value[index];
    let backFace = skillCardBackRef.value[index];


    

    const tl = gsap.timeline();

    // tl.to()

    isAnyCardDrawn = true;

    let notTargets = skillCardRefs.value.filter(ref => ref != target);
    console.log(notTargets);

    tl.to(target, {
        rotation: 0,
        translateY: -250,
        translateX: 0,
        // scale: 3,
    })
    // hide the frontside
    tl.to(frontFace, {
        // skewY: -50,
        width: 0,
        translateX: '+=50', //half card width
        transformOrigin: 'center',
        ease: "power3.in",
    })
    // show backside;
    tl.fromTo(backFace, {
        translateX: 50
    },{
        translateX: 0,
        width: 100,
        ease: "power3.out"
    })
    // tl.to(backFace, {
    //     width: 100,
    // })

    // // translate card according to their angle
    // tl.to(notTargets, {
    //     translateY: '+=200',
    // }, 0)

    // scale the card
    // tl.to(target, {
    //     scale: 3,
    //     transformOrigin: 'center'
    // })

}

onMounted(()=>{
    console.log(skillCardFrontRef.value);
    console.log(skillCardBackRef.value);
    gsap.to(skillCardRefs.value, {
        stagger: 0,
        rotation: restingCardAngle,
        translateX: restingCardTranslateX,
        translateY: restingCardTranslateY,
        transformOrigin: "bottom",
        duration: 0,
    })
})
</script>

<template>

<div class="w-1/2 soos bg-orange-500">
      <svg
   class="w-full"

   viewBox="-150 -400 400 500"
>

    <!-- <rect v-for="(data, index) in skillCardData" 
        @mouseenter="hover($event, index)"
        @mouseleave="hover($event, index)"
        @click="drawCard($event, index)"
     ref="skillCardRefs" x="0" y="0" width="100" height="160" class="sus" fill="yellow" stroke="black" /> -->


    <g v-for="(data, index) in skillCardData" ref="skillCardRefs"
        @mouseenter="hover($event, index)"
        @mouseleave="hover($event, index)"
        @click="drawCard($event, index)">

        <rect ref="skillCardBackRef" width="0" height="160" fill="green" stroke="black" />
        <rect ref="skillCardFrontRef" width="100" height="160" fill="yellow" stroke="black" />
        
    </g>

  <circle cx="0" cy="0" r="5" ></circle>
</svg>

  </div>
</template>


<style>
    /* rotation */

</style>