<script setup>
    import anime from 'animejs/lib/anime.es.js';
import { onMounted, reactive, ref } from 'vue';
    const elem = ref(null);


    const cardRefs = ref(null);
    const cardIsHover = ref([false, false, false, false]);
    const isCardDrawn = ref([false, false, false, false])
    // const isCardActive = ref([false, false, false, false])
    const cards = ref([
        {
            frontFace: '/skill-cards/placeholder.svg', 
            backFace: '/skill-cards/placeholder-back.svg',
            // deafultTransformation: {translateX: '-90%', rotate: '-30deg'}
        },
        {
            frontFace: '/skill-cards/placeholder.svg', 
            backFace: '/skill-cards/placeholder-back.svg',
            // deafultTransformation: {translateX: '-30%', rotate: '-10deg'}
        },
        {
            frontFace: '/skill-cards/placeholder.svg', 
            backFace: '/skill-cards/placeholder-back.svg',
            // deafultTransformation: {translateX: '30%', rotate: '10deg'}
        },
        {
            frontFace: '/skill-cards/placeholder.svg', 
            backFace: '/skill-cards/placeholder-back.svg',
            // deafultTransformation: {translateX: '90%' , rotate: '30deg'}
        },
    ])

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

    // rename to draw
    function selectCardAnimation(index){
        const target = cardRefs.value[index];
        const notTargets = cardRefs.value.filter(ref => ref != target);

        if (isCardDrawn.value[index]) {
            console.log('soos');

            var tl = anime.timeline({
            easing: 'linear'
            });
            let rotation = cardRestingAngle(index)
            console.log(rotation);
            tl.add({
                targets: target,
                width: '20%',
                translateY: '-50%',
                rotateY: '0deg',
                scale: 1,
                // top: 0,
                duration: 500,
                rotate: cardRestingAngle(index),
            })
            
            // anime({
            //     targets: target,
            //     bottom: 0,
            //     rotateY: '0deg',
            //     width: '20%',
            // })

            // initialPosition(target, index);


            return   
        }

        


        // anime.set(target,{
        //     'transform-origin': 'center center'
        // })

        // set active css variable
        var tl = anime.timeline({
            easing: 'linear'
        });
        tl.add({
            targets: target,
            translateX: 0,
            translateY: '-200%',
            rotate: 0,
            duration: 500,
        }).add({
            targets: target,
            rotateY: '-180deg',
            // rotateZ: '180deg',
            duration: 1000,
        }).add({
            targets: target,
            width: '90%',
            // scale: 2.5,
            translateY: '-300%',
            // top: 0,
            duration: 500,
        })
        // cards.value.isDrawn = true;
        isCardDrawn.value[index] = true;


    }
    function cardRestingAngle(index){
        const startAngle = -30;
        const angleStep = 20;
        const rotation = startAngle + angleStep*index
        return rotation + 'deg';
    }

    function initialPosition(cardRef, index){
        
        anime({
            targets: cardRef,
            rotate: cardRestingAngle(index),
            translateY: '-50%',
            bottom: 0,
        })
    }

    onMounted(()=>{

        // anime.set(cardRefs.value,{'transform-origin'})
        cardRefs.value.forEach(initialPosition);


    })



    const w = 500;
    const h = 500;

    const cardWidth = 100;
    const cardHeight = 160;
</script>
<template>

<section class="h-screen bg-purple-500 relative">

    <div class="max-w-100">
        <div class="bg-red-400 w-full aspect-ratio-box relative ">
            <div class="absolute top-0 w-full h-full flex items-center justify-center bg-blue-300">
                <template v-for="(card, index) in cards" >
                    <div ref="cardRefs" 
                        @click="selectCardAnimation(index)"
                        :class="{'is-drawn': isCardDrawn[index]}" class="skill-card ">
                            
                            <div class="card__faces">
                                <!-- <div class="bg-white card__title">asdf</div> -->
                                <img class="card__face card__face--back" :src="card.backFace" >
                                <img class="card__face card__face--front" :src="card.frontFace" alt="">
                            </div>
                    
            
                        
                    </div>
                </template>
            </div>
            <!-- <div class="bg-orange-300 absolute top-0">
                asdfasdfasdf
            </div> -->
            
        </div>
    </div>
        
    

 
    
</section>

</template>

<style>
.aspect-ratio-box{
    /* 15:10 Aspect Ratio */
    padding-top: 150%;
}

.card__title{
    position: absolute;
    transform: translateY(-100%);
    width: 100%;
}


.skill-card img{
    position: absolute;
    backface-visibility: hidden;
}

.skill-card{
    /* @apply  absolute ; */
    position: absolute;
    
    transform-origin: bottom;
    /* height: 50px; */
    height: 25%;
    width: 25%;
    transform-style: preserve-3d;
    perspective: 20px;

    background: black;
}

.card__faces{
    /* position: absolute; */
    /* height: 100px;
    width: 100px; */
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform .25s ease-in-out;
    

}

.card__face--back{
    transform: rotateY(180deg);
    /* position: absolute; */
}
.card__face--front{
    /* transform: translateY(100%); */
}



.skill-card img{
    /* border: 2px solid black; */
}
.skill-card:hover .card__faces{
    
    transform: translateY(-20%);
}
.skill-card.is-drawn .card__faces{
    transform: none;
}

/* .skill-card.is-drawn{
    z-index: 10;
    width: 100%;

} */

/* .skill-card:hover{
    --translate-y: -10%;
} */

</style>