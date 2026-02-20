<template>
  <section id="partners" class="py-16 md:py-24">
    <!-- Header -->
    <div class="mt-16 flex place-content-center lg:mx-auto mx-5 text-justify">
      <div class="prose lg:prose-xl text-white">
        <h1>Partneři</h1>
      </div>
    </div>

    <!-- Partners Grid -->
    <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-items-center">
        <a v-for="partner in partners" :key="partner.name" :href="partner.url" target="_blank" rel="noopener"
           class="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
          <img :src="partner.logo" :alt="partner.name" 
               class="object-contain w-32 h-16 md:w-40 md:h-20 max-w-full"/>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const partners = ref([
  {
    name: 'Magazín konopí',
    url: 'https://magazin-konopi.cz/',
    logo: '/konopi.svg',
  },
  {
    name: 'CzecHemp',
    url: 'https://czechemp.cz/',
    logo: '/CzecHemp.png',
  },
  {
    name: 'Czeched Substance',
    url: 'https://czsub.cz/',
    logo: '/czsub.svg',
  },
  {
    name: 'Česká psychedelická společnost',
    url: 'https://czeps.org/',
    logo: '/czeps.svg',
  },
  {
    name: 'Rare',
    url: 'https://www.racionalniregulace.cz/',
    logo: '/logo_rare.png',
  },
  {
    name: 'Rodiny proti prohibici',
    url: 'https://rodinyprotiprohibici.cz/',
    logo: '/logo_rodiny.png',
  },
])
</script>
