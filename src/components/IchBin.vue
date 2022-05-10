<script setup>
import { reactive,ref } from 'vue';


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
    {
        'icon': '',
        'title': 'Javascript Junkie',
        'text': 'asdf asdf asdf asdfasd;flk ja;sdlfkj a;sdlkfj;asldkfj a;sdlkfj a;sdlkfja;sd lkfjas;dlfkja; sdflkj '
    }
]

let activeAccordion = ref(-1)

function toggle(index){
    activeAccordion.value = (index === activeAccordion.value ? -1 : index)
    console.log(activeAccordion);
}




</script>

<template>
<section class="mx-auto w-full p-5 max-w-250">

<h1>Ich bin ein...</h1>

{{activeAccordion}}
<div v-for="(item, index) in iAm" class="bg-blue-500">
    <div @click="toggle(index)" class="bg-red-500 p-5 text-xl rounded-xl">
        {{item.icon}}{{item.title}}
    </div>
    <div :class="{'h-0': index != activeAccordion}" class="overflow-hidden text-lg p-5">
        {{item.text}}
    </div>
    
</div>
</section>
</template>

<style>
    
</style>