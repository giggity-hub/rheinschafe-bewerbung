<script setup>
import { reactive } from 'vue';


const iAm = [
    {
        'icon': '🧠',
        'title': 'Big Brain',
        'text': 'Ich hab gerade nen 1.3er Schnitt und wurde für meine herrausragenden Leistungen auch mit einem Deutschland Stipedium belohnt'
    }
]

let activeAccordion = reactive(-1)

function toggle(index){
    activeAccordion = (index === activeAccordion ? -1 : index)
    console.log(index);
}


// export default{
//           data(){
//               return{
//                   iAm,
//                   activeToggle: -1,
//               }
//           }
//       }

</script>

<template>

<h1>Ich bin ein...</h1>


<div v-for="(item, index) in iAm" class="bg-blue-500">
    <div @click="toggle(index)">
        {{item.title}}
    </div>
    <div :class="{'h-0': index != activeAccordion}" class="overflow-hidden">
        {{item.text}}
    </div>
    
</div>

</template>