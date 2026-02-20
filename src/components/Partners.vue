<template>
  <section id="partners" class="py-16">
    <!-- Header -->
    <div class="flex justify-center lg:mx-auto mx-5 mb-12">
      <div class="prose lg:prose-xl text-white text-center">
        <h1>Partneři</h1>
      </div>
    </div>

    <!-- Partners Grid -->
    <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
        <a v-for="partner in partners" :key="partner.name" :href="partner.url" target="_blank" rel="noopener"
           class="card bg-base-100/10 hover:bg-base-100/20 transition-all duration-300 rounded-xl p-6 flex items-center justify-center w-full max-w-xs">
          <figure class="flex items-center justify-center">
            <img class="object-contain max-h-24" :class="partner.class" :src="partner.logo" :alt="partner.name"/>
          </figure>
        </a>
      </div>
    </div>

    <!-- Footer spacer -->
    <div class="mt-20 mb-8 text-center">
      <p class="text-white/50 text-sm">
        Děkujeme našim partnerům za podporu konference
      </p>
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
    class: 'h-16 w-auto'
  },
  {
    name: 'CzecHemp',
    url: 'https://czechemp.cz/',
    logo: '/CzecHemp.png',
    class: 'h-16 w-auto'
  },
  {
    name: 'Czeched Substance',
    url: 'https://czsub.cz/',
    logo: '/czsub.svg',
    class: 'h-16 w-auto'
  },
  {
    name: 'Česká psychedelická společnost',
    url: 'https://czeps.org/',
    logo: '/czeps.svg',
    class: 'h-16 w-auto'
  },
  {
    name: 'Rare',
    url: 'https://www.racionalniregulace.cz/',
    logo: '/logo_rare.png',
    class: 'h-16 w-auto'
  },
  {
    name: 'Rodiny proti prohibici',
    url: 'https://rodinyprotiprohibici.cz/',
    logo: '/logo_rodiny.png',
    class: 'h-16 w-auto'
  },
])
</script>
