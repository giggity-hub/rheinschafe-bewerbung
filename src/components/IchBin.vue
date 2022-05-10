<script setup>
import { reactive,ref, watchEffect } from 'vue';


const iAm = [
    {
        'icon': '🎓',
        'title': 'Stilechter Student',
        'text': 'Ich Studiere seit dem xxx Angewandte Informatik an der Universität Duisburg Essen'
    },
    {
        'icon': '🧠',
        'title': 'Big Brain',
        'text': 'Ich hab gerade nen 1.3er Schnitt und wurde für meine herrausragenden Leistungen auch mit einem Deutschland Stipedium belohnt'
    },
    {
        'icon': '🩳',
        'title': 'Cargo Shorts Connoisseur',
        'text': 'asdfasdfasdfasdfasdf'
    },
    {
        'icon': '🎨',
        'title': 'Gimp Gott',
        'text': 'Das erstellen von zahlreichen Dank Memes hat mich die Wege der Bildbearbeitung mit GIMP und Inkscape gelehrt'
    },
    // {
    //     'icon': '💻',
    //     'title': 'Javascript Junkie',
    //     'text': 'asdf asdf asdf asdfasd;flk ja;sdlfkj a;sdlkfj;asldkfj a;sdlkfj a;sdlkfja;sd lkfjas;dlfkja; sdflkj '
    // }
]

let activeAccordion = ref(0);

let selectedItem = ref(iAm[0]); 



function toggle(index){
    // activeAccordion.value = (index === activeAccordion.value ? -1 : index)
    // console.log(activeAccordion);
    activeAccordion.value = index;
}


watchEffect(() => {
  // tracks A0 and A1
  selectedItem.value = iAm[activeAccordion.value]
//   A2.value = A0.value + A1.value
})



</script>

<template>
<section class="mx-auto w-full p-5 max-w-250">




<div class="flex flex-col md:flex-row">
    <!-- icon selection -->
    <div class="bg-blue-500 flex flex-row justify-around md:flex-col text-4xl ">
        <div @click="toggle(index)"  v-for="(item, index) in iAm" class="select-button " :class="{'is-active': index === activeAccordion}">
            {{item.icon}}
        </div>
    </div>

    <!-- ich bin und detail view -->
    <div class="md:pl-10">
        <div>
            <h2 class="text-5xl">Ich bin ein</h2>
            <h1 class="text-6xl">{{selectedItem.title}}</h1>
        </div>
        <div class="text-4xl">
            {{selectedItem.text}}
        </div>
    </div>
</div>




<!-- {{activeAccordion}}
<div v-for="(item, index) in iAm" class="bg-blue-500">
    <div  @click="toggle(index)" class="bg-red-500 p-5 text-xl rounded-xl">
        {{item.icon}}{{item.title}}
    </div>
    <div :class="{'h-0': index != activeAccordion}" class="overflow-hidden text-lg p-5">
        {{item.text}}
    </div>
    
</div> -->
</section>
</template>

<style>
    h1, h2{
        font-family: Luckiest Guy;
    }
    .select-button{
        @apply bg-orange-500 p-5;
    }
    .select-button.is-active{
        @apply bg-red-500;
    }
</style>