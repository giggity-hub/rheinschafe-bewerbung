<script setup>
    import anime from 'animejs/lib/anime.es.js';
import { onMounted, reactive, ref } from 'vue';
    const elem = ref(null);


    const cardRefs = ref(null);
    const cardIsHover = ref([false, false, false, false]);
    const isCardSelected = ref([false, false, false, false])
    const cards = [
        {
            frontFace: '/skill-cards/placeholder.svg', 
            backFace: '/skill-cards/placeholder.svg',
            deafultTransformation: {translateX: '-90%', rotate: '-30deg'}
        },
        {
            frontFace: '/skill-cards/placeholder.svg', 
            backFace: '/skill-cards/placeholder.svg',
            deafultTransformation: {translateX: '-30%', rotate: '-10deg'}
        },
        {
            frontFace: '/skill-cards/placeholder.svg', 
            backFace: '/skill-cards/placeholder.svg',
            deafultTransformation: {translateX: '30%', rotate: '10deg'}
        },
        {
            frontFace: '/skill-cards/placeholder.svg', 
            backFace: '/skill-cards/placeholder.svg',
            deafultTransformation: {translateX: '90%' , rotate: '30deg'}
        },
    ]

    function cardHoverAnimation(index){
        console.log('shishh');
        const isHover = !cardIsHover.value[index];
        const target = cardRefs.value[index];
        const {deafultTransformation} = cards[index];

        anime({
            targets: target,
            paddingBottom: isHover ? '50px' : 0,
            // easing: 'linear',
            easing: 'spring(1, 80, 10, 0)',
            round: 0,
            duration: 300,
        })

        cardIsHover.value[index] = isHover;
    }

    function selectCardAnimation(index){
        const target = cardRefs.value[index];
        const notTargets = cardRefs.value.filter(ref => ref != target);
        console.log(target);
        console.log(notTargets);
        // set active css variable
        var tl = anime.timeline();
        tl.add({
            targets: target,
            translateX: 0,
            translateY: 0,
            rotate: 0,
            // width: '50%',
            duration: 1000,
        })
        isCardSelected.value[index] = true;

        // anime()
        //     translateX: 100,
        //     translateY: 0,
        //     rotate: 0,
        //     duration: 1000,
        // })
    }

    onMounted(()=>{
        let angle = -30;
        const angleStep = 20;
        // anime.set(cardRefs.value,{'transform-origin'})
        cardRefs.value.forEach((ref, index) => {
            anime({
                targets: ref,
                rotate: angle + 'deg',
                translateY: '-50%',
                // ...cards[index].deafultTransformation

            })
            angle += angleStep;
        });
        // anime({
        //     targets: elem.value,
        //     translateX: '200%'
        // })
    })



</script>
<template>

<section class="h-screen bg-purple-500 relative">
    <svg class="w-full max-w-200" viewBox="0 0 500 500">
        
        <rect v-for="(card, index) in cards" x="10" y="10" width="100" height="100"/>
    </svg>
        <!-- <template v-for="(card, index) in cards" >
            <div ref="cardRefs" :class="{'is-selected': isCardSelected[index]}" class="skill-card bg-red-500 " 
                >
                <img    
                @click="selectCardAnimation(index)"
                
                src="/skill-cards/placeholder.svg" alt="">
            </div>
        </template> -->
    

 
    
</section>

</template>

<style>
.skill-card{
    @apply w-1/10 absolute left-0 right-0 mx-auto bottom-0;
    transition: padding .2s ease-in-out;
    transform-origin: bottom;
    max-width: 500px;
    max-height: 100%;
    /* border: 2px solid black; */
    /* transform: translateX(var(--translate-x)) rotate(var(--rotation)) translateY(var(--translate-y)); */
}

.skill-card:hover{
    
    padding-bottom: 50px;
}

.skill-card.is-selected{
    z-index: 10;
    width: 100%;

}

/* .skill-card:hover{
    --translate-y: -10%;
} */

</style>