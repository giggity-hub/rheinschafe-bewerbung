<!-- <?xml version="1.0" encoding="UTF-8" standalone="no"?> -->
<!-- Created with Inkscape (http://www.inkscape.org/) -->


<script >

import anime from 'animejs/lib/anime.es.js';

const fieldSelectors = [
   '#field-0', '#field-1', '#field-2', '#field-3', '#field-4', '#field-5', '#field-6'
]
const pathSelectors = [
   '#path-0', '#path-1', '#path-2', '#path-3', '#path-4', '#path-5'
]

export default {
  data() {
    return {
      currentField: 0,
      motionPathData: "",
    }
  },
  methods: {
     fieldClickHandler(field){

      //   maybe jump on the spot
        if(field === this.currentField) return;

         let [begin, end] = [this.currentField, field].sort();
         let pathSegCount = Math.abs(begin - end)
         let path = this.generatePath(begin, end)
         
         let hops = this.generateHops(pathSegCount)
         console.log('hops', hops);
         
         

         let reversed = field < this.currentField;
         this.currentField = field;

         anime({
            targets: this.character,
            direction: reversed ? 'reverse' : 'normal',
            cx: path('x'),
            cy: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 1000,
            // loop: true
            keyframes: hops,
         });

         this.$emit('change', {
            field
         })
 
      },

      generatePath(begin, end){
         let pathString = this.paths.slice(begin, end).join(" ")
         // animejs needs a path dom node
         this.$refs.motionPath.setAttribute('d', pathString)

         return anime.path(this.$refs.motionPath);
      },
      generateHops(pathSegCount){
         console.log('pathsegcount', pathSegCount)
         const hopHeight = 15
         const hop = [{translateY: -hopHeight},{translateY: 0}]
         const hopsPerSegment = 3;
         let hopCount = pathSegCount * hopsPerSegment;
         let hops = []
         // Do one hop if the current field is selected again
         if (pathSegCount === 0) return hops;
         for (hopCount; hopCount > 0; hopCount--) {
            hops = hops.concat(hop)
            // console.log('hops', hops);
         }
         return hops
      }
  },

  mounted() {



     this.character = this.$el.querySelector('#character');
   //   do some magic
      this.character.style.transformBox = 'fill-box';
      this.character.style.transformOrigin = 'center';


     this.characterOffsetX = -parseFloat(this.character.getAttribute('cx'));
     this.characterOffsetY = -parseFloat(this.character.getAttribute('cy'));

  

   this.fields = fieldSelectors.map((selector,index) => {

      let $field = this.$el.querySelector(selector);
      $field.onclick = ()=> this.fieldClickHandler(index)
      // $field.addEventListener('click', this.fieldClickHandler)
      return $field;
   })

   this.paths = pathSelectors.map(selector => {
      let $path = this.$el.querySelector(selector);
 
      // uppercase svg path instructions are absolute, lowercase are relative;
      return $path.getAttribute('d')
   })
  }
}

</script>

<template>


<div class="root-placeholder w-full">



<svg class="w-full absolute top-0 hidden pointer-events-none"  viewBox="0 0 210 297">
   <path ref="motionPath"  />
</svg>



<svg
   class="w-full"

   viewBox="0 0 173.63303 167.96248"
   version="1.1"
   id="svg5"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">

  <defs
     id="defs2" />
  <g
     id="layer1"
     transform="translate(-32.464112,-68.308175)">
    <path
       style="fill:none;stroke:#000000;stroke-width:2.11085;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:6.33254, 6.33254;stroke-dashoffset:0;stroke-opacity:1"
       d="M 40.793091,130.38526 C 64.857431,116.83185 97.134589,114.96696 116.59829,117.15509"
       id="path-0"
       class="motion-path" />
    <path
       style="display:inline;fill:none;stroke:#000000;stroke-width:2.11085;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:6.33254, 6.33254;stroke-dashoffset:0;stroke-opacity:1"
       d="M 116.59829,117.15509 C 116.59829,117.15509 182.89284,140.23408 129.43829,149.95309 75.983749,159.6721 130.92988,186.70762 130.92988,186.70762"
       id="path-1"
       class="motion-path" />
    <path
       style="fill:none;stroke:#000000;stroke-width:2.11085;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:6.33254, 6.33254;stroke-dashoffset:0;stroke-opacity:1"
       d="M 130.92988,186.70762 C 156.04624,201.14874 192.23164,183.23088 199.99417,156.5105"
       id="path-2"
       class="motion-path" />
    <path
       style="fill:none;stroke:#000000;stroke-width:2.11085;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:6.33254, 6.33254;stroke-dashoffset:0;stroke-opacity:1"
       d="M 199.99417,156.5105 C 216.54943,106.66493 163.46502,54.515786 117.10525,73.164426"
       id="path-3"
       class="motion-path" />
    <path
       style="fill:none;stroke:#000000;stroke-width:2.11085;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:6.33254, 6.33254;stroke-dashoffset:0;stroke-opacity:1"
       d="M 70.32068,159.97578 C 67.968854,193.99934 95.899916,228.08545 115.20207,227.75685"
       id="path-5"
       class="motion-path" />
    <path
       style="font-variation-settings:normal;opacity:1;vector-effect:none;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2.11085;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:6.33254, 6.33254;stroke-dashoffset:0;stroke-opacity:1;-inkscape-stroke:none;stop-color:#000000;stop-opacity:1"
       d="M 117.10525,73.164426 C 81.6423,89.608989 69.773213,126.19287 70.32068,159.97578"
       id="path-4"
       class="motion-path" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:6.31399px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.15785"
       x="34.525703"
       y="140.96773"
       id="text2113"><tspan
         id="tspan2111"
         style="stroke-width:0.15785"
         x="34.525703"
         y="140.96773">Schule</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:5.37476px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.134369"
       x="107.04007"
       y="197.54323"
       id="text5711"><tspan
         id="tspan5709"
         style="stroke-width:0.134369"
         x="107.04007"
         y="197.54323">Auslandsjahr</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:5.37476px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.134369"
       x="107.27644"
       y="236.1893"
       id="text5711-9"><tspan
         id="tspan5709-3"
         style="stroke-width:0.134369"
         x="107.27644"
         y="236.1893">You</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:5.37476px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.134369"
       x="50.141483"
       y="170.46252"
       id="text5711-8"><tspan
         id="tspan5709-5"
         style="stroke-width:0.134369"
         x="50.141483"
         y="170.46252">Tutor</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:5.37476px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.134369"
       x="188.70233"
       y="151.44675"
       id="text5711-3"><tspan
         id="tspan5709-4"
         style="stroke-width:0.134369"
         x="188.70233"
         y="151.44675">Uni</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:5.37476px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.134369"
       x="110.11002"
       y="109.65154"
       id="text5711-3-2"><tspan
         id="tspan5709-4-3"
         style="stroke-width:0.134369"
         x="110.11002"
         y="109.65154">Baumarkt</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:5.37476px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.134369"
       x="78.373596"
       y="77.502914"
       id="text5711-3-9"><tspan
         id="tspan5709-4-5"
         style="stroke-width:0.134369"
         x="78.373596"
         y="77.502914">Koch</tspan></text>
    <ellipse
       style="fill:#2b0000;stroke:#000000;stroke-width:0.500003"
       id="field-0"
       cx="38.687195"
       cy="130.67294"
       rx="5.9730816"
       ry="2.9406457"
       class="field " />
    <ellipse
       style="fill:#2b0000;stroke:#000000;stroke-width:0.500003"
       id="field-3"
       cx="199.87405"
       cy="158.28778"
       rx="5.9730816"
       ry="2.9406457"
       class="field " />
    <ellipse
       style="fill:#2b0000;stroke:#000000;stroke-width:0.500003"
       id="field-5"
       cx="70.094925"
       cy="161.1082"
       rx="5.9730816"
       ry="2.9406457"
       class="field " />
    <ellipse
       style="fill:#2b0000;stroke:#000000;stroke-width:0.500003"
       id="field-6"
       cx="110.98338"
       cy="227.55493"
       rx="5.9730816"
       ry="2.9406457"
       class="field " />
    <ellipse
       style="fill:#2b0000;stroke:#000000;stroke-width:0.500003"
       id="field-4"
       cx="117.07727"
       cy="73.414993"
       rx="5.9730816"
       ry="2.9406457"
       class="field " />
    <ellipse
       style="display:inline;fill:#2b0000;stroke:#000000;stroke-width:0.500003"
       id="field-1"
       cx="116.9752"
       cy="117.32231"
       rx="5.9730816"
       ry="2.9406457"
       class="field " />
    <ellipse
       style="display:inline;fill:#2b0000;stroke:#000000;stroke-width:0.500003"
       id="field-2"
       cx="129.70354"
       cy="184.7011"
       rx="5.9730816"
       ry="2.9406457"
       class="field " />
    <ellipse
       style="fill:#ffff00;stroke:#ff0000;stroke-width:1.18999;stroke-dasharray:3.56997, 3.56997"
       id="character"
       cx="39.049522"
       cy="125.56796"
       rx="5.6117249"
       ry="5.0022407" />
  </g>
</svg>



</div>

</template>

