<script setup>
import anime from 'animejs/lib/anime.es.js';
import { onMounted, ref } from 'vue';
import gsap from "gsap";

const skillCardRefs = ref([]);
const isHover = [false, false, false, false];
let isAnyCardDrawn = false;
const skillCardData = [
    {},
    {},
    {},
    {}
]
const testRef = ref(null);

const restingDistance = -100;
const drawDistance = -120;

function hover({target}, index){
    if (isAnyCardDrawn) return;

    // console.log('sheeeeeeeeeeeeeeeesh');
    let angleDeg = getCardRotationDeg(index);
    // + 90 weil bei einheitskreis 0 rechts ist wir aber 0 oben haben
    let vector = vectorFromAngle(angleDeg + 90);

    isHover[index] = ! isHover[index];

    const distance = isHover[index] ? drawDistance : restingDistance;

    gsap.to(target, {
        translateX: vector.x * distance,
        translateY: vector.y * distance,
        duration: .5,
    })
}




function vectorFromAngle(angleDeg){
    let angleRad = angleDeg * (Math.PI / 180);
    return {
        x: Math.cos(angleRad),
        y: Math.sin(angleRad)
    }
}

function getCardRotationDeg(index){
    const startAngle = -30;
    const angleStep = 20;
    return startAngle + angleStep*index;
}

function drawCard({target}, index){

    const tl = gsap.timeline();

    // tl.to()

    isAnyCardDrawn = true;

    let notTargets = skillCardRefs.value.filter(ref => ref != target);
    console.log(notTargets);

    tl.to(target, {
        rotation: 0,
        translateY: -300,
        translateX: 0,
        // scale: 3,
    })
    tl.to(notTargets, {
        translateY: -50,
    }, 0)
}

onMounted(()=>{
    let target = testRef.value;


    // gsap.set()

    
    
    // let distance = -100;
    skillCardRefs.value.forEach((target, index) =>{
        let angleDeg = getCardRotationDeg(index);
        
        // + 90 weil bei einheitskreis 0 rechts ist wir aber 0 oben haben
        let vector = vectorFromAngle(angleDeg + 90);
        gsap.to(target, {
            rotation: angleDeg,
            transformOrigin: "bottom",
            translateX: vector.x * restingDistance,
            translateY: vector.y * restingDistance,
            duration: 2,
        })
        // gsap.to(target, {
        //     translateY: -100,
        //     delay: 2,
        // })
        // angle += angleStep;
    })

    
    // anime.set(target, {
    //     transformOrigin: '0% 50% 50%',
    // })
    // anime({
    //     targets: target,
    //     rotate: 45,
    //     duration: 9000,
    // })
})
</script>

<template>

<div class="w-1/2 soos bg-orange-500">
      <svg
   class="w-full"

   viewBox="-150 -400 400 500"


>

    <rect v-for="(data, index) in skillCardData" 
        @mouseenter="hover($event, index)"
        @mouseleave="hover($event, index)"
        @click="drawCard($event, index)"
     ref="skillCardRefs" x="0" y="0" width="100" height="160" class="sus" fill="yellow" stroke="black" />
  <!-- <circle cx="0" cy="0" r="50" ></circle> -->
</svg>

  </div>
</template>


<style>
    /* rotation */

</style>