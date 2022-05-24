<script setup>
import { ref } from 'vue';
import RatingStars from '../RatingStars.vue';

const stats = [
    {
        title: 'Intelligence',
        rating: 5,
        description: 'sooos saaaaaaaaas schooosch'
    },
    {
        title: 'Strength',
        rating: 10,
        description: 'sheeeeeeeeeeeeeeeesh shush'
    }
]
const showRating = ref([false, false]);
function fuck(index){
    console.log('sheesh');
    showRating.value[index]=true
}

</script>

<template>
    <div class="flex flex-col md:flex-row">
        <div class="bg-green-500 w-full p-5">
            <div class="">
                <div v-for="(stat, index) in stats" class="mb-5 bg-orange-400" @mouseenter="fuck(index)">
                    <div class="flex justify-between">
                        <div>{{stat.title}}</div>
                        <RatingStars :rating="stat.rating" :show="showRating[index]"/>
                        
                    </div>
                    <div>
                        {{stat.description}}
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-orange-400 w-full character-model">
            sdfgsdfg
        </div>
    </div>
</template>

<style>
.character-model{
    background-color: purple;
    background-image:  linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(to right, #444cf7 1px, #e5e5f7 1px);
    background-size: 20px 20px;
}


</style>