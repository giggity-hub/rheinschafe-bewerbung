<script setup>
import anime from 'animejs/lib/anime.es.js';
import { onMounted, ref } from 'vue';
import gsap from "gsap";

const skillCardRefs = ref([]);
const skillCardFrontRef = ref([]);
const skillCardBackRef = ref([]);

const selectedCardIndex = ref(-1);
const skillCardData = [
    {},
    {},
    {},
    {}
]

const restingCards = [];
const restingDistance = -100;

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


let tl = gsap.timeline();

function drawCard(event, index){
    let isAnyCardDrawn = selectedCardIndex.value != -1;
    
    if (isAnyCardDrawn){
        tl.eventCallback('onReverseComplete', ()=>{
            console.log('soooooooooooooooos?/');
            selectedCardIndex.value = -1;
        })
        tl.reverse();
        
        return;
    }
    event.stopPropagation();

    let target = skillCardRefs.value[index];
    let frontFace = skillCardFrontRef.value[index];
    let backFace = skillCardBackRef.value[index];

    tl = gsap.timeline();

    selectedCardIndex.value = index;

    let notSelectedCards = skillCardRefs.value.filter(ref => ref != target);


    // translate the selected card to the center;
    tl.to(target, {
        rotation: 0,
        translateY: -250,
        translateX: 0,
        // scale: 3,
        duration: .2,
    })
    
    tl.add('scaleAndFlip');
    // hide the frontside
    tl.to(frontFace, {
        // skewY: -50,
        width: 0,
        translateX: 50, //half card width
        transformOrigin: 'center',
        ease: "power3.in",
        duration: .2,
        // skewY: 50,
    })
    // show backside;
    tl.fromTo(backFace, {
        translateX: 50,
        
        // skewY: -50,
    },{
        translateX: 0,
        // skewY: 0,
        width: 100,
        ease: "power3.out",
        duration: .2
    })
    tl.to(target, {
        scale: 3,
        transformOrigin: 'center'
    }, '-=.2')

    // hide not selectedCards
    tl.to(notSelectedCards, {
        translateY: '100',
        rotation: 0,
        duration: .4,
    }, 0)

}

onMounted(()=>{
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
      @click="soos"
   class="w-full"

   viewBox="-150 -450 400 550"
>
<filter id="f3" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceAlpha" dx="20" dy="-20" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
    <!-- <rect v-for="(data, index) in skillCardData" 
        @mouseenter="hover($event, index)"
        @mouseleave="hover($event, index)"
        @click="drawCard($event, index)"
     ref="skillCardRefs" x="0" y="0" width="100" height="160" class="sus" fill="yellow" stroke="black" /> -->


    <g v-for="(data, index) in skillCardData" ref="skillCardRefs" class="shadow skill-card" :class="{'is-selected': selectedCardIndex === index}"
        

        @click="drawCard($event, index)">

        <g class="hover-group">
            <rect ref="skillCardBackRef" width="0" height="160" fill="green" stroke="black" />
            <image class="face--front" preserveAspectRatio="none"  ref="skillCardFrontRef" href="/skill-cards/placeholder.svg" width="100" height="160" alt="" />
            
        </g>
        <rect width="100" height="160" fill="transparent"></rect>
        <!-- <rect ref="skillCardFrontRef" width="100" height="160" fill="yellow" stroke="black" /> -->
        
    </g>
    
  <circle cx="0" cy="0" r="5" ></circle>
</svg>

  </div>
</template>


<style>
    .shadow{
        filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3));
        /* border-radius: 5px; */
    }
    /* rotation */

    .hover-group{
        transition: transform .4s ease-in-out;
    }

    /* .hover-group */
    .skill-card:hover .hover-group{
        transform: translateY(-5%);
    }

    .skill-card.is-selected .hover-group{
        transform: none;
    }

</style>