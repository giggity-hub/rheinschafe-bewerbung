<script setup>
import { onMounted, ref } from 'vue';
import gsap from "gsap";

const skillCardRefs = ref([]);
const skillCardFrontRef = ref([]);
const skillCardBackRef = ref([]);

const selectedCardIndex = ref(-1);
const skillCardData = [
    {
        title: "Design",
        front: "/skill-cards/placeholder.svg" ,
        back: "/skill-cards/design/back.svg",    
    },
    {
        title: "Frontend",
        front: "/skill-cards/placeholder.svg" ,
        back: "/skill-cards/frontend/back.svg",
    },
    {
        title: "Data Science",
        front: "/skill-cards/placeholder.svg" ,
        back: "/skill-cards/data-science/back.svg",
    },
    {
        title: "Backend",
        front: "/skill-cards/placeholder.svg" ,
        back: "/skill-cards/design/back.svg",
    }
]



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

    let rotationStart = -30;
    let rotationStep = 20;
    const restingDistance = -100;
    skillCardRefs.value.forEach((target, index)=>{
        let angleDeg = rotationStart + rotationStep*index;
        let angleRad = (angleDeg + 90) * (Math.PI / 180);
        let vectorX = Math.cos(angleRad);
        let vectorY = Math.sin(angleRad);

        gsap.to(target, {
            rotation: angleDeg,
            translateX: vectorX * restingDistance,
            translateY: vectorY * restingDistance,
            transformOrigin: "bottom",
            duration: 0,
        })
    })
})
</script>

<template>

<div class="w-1/2 soos bg-orange-500">
<svg class="w-full" viewBox="-150 -450 400 550">
    <g v-for="(data, index) in skillCardData" ref="skillCardRefs" class="shadow skill-card" :class="{'is-selected': selectedCardIndex === index}"
        @click="drawCard($event, index)">

        <g class="hover-group">
            <text transform="translate(50, -10)" class="card__title" >{{data.title}}</text>
            <image width="0" :href="data.back" ref="skillCardBackRef"  height="160" preserveAspectRatio="none" ></image>
            <image class="face--front" preserveAspectRatio="none"  ref="skillCardFrontRef" href="/skill-cards/placeholder.svg" width="100" height="160" alt="" />
        </g>
        <rect width="100" height="160" fill="transparent"></rect>
    </g>
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

    .card__title{
        fill: red;
        text-anchor: middle;
        position: absolute;
        opacity: 0;
        transition: opacity .4s ease;
        /* transform: translateX(50%); */
        /* text-align: center; l*/
        /* width: 100%; */
    }
    .skill-card:hover .card__title{
        opacity: 1;
    }
    .skill-card.is-selected .card__title{
        opacity: 0;
    }
</style>