<template>
  <Navbar />
  <div class="hero min-h-screen relative overflow-hidden">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/clean_video.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 z-[1] video-overlay"></div>
    <div class="hero-content text-center text-neutral-content relative z-10">
      <div class="mt-10">
        <div class="items-center w-full my-4">
          <h1 class="hidden lg:block font-burra text-4xl xl:text-9xl w-full font-bold text-secondary">
            Legalizujme II
          </h1>
          <h1 class="block lg:hidden font-burra text-6xl w-full font-bold text-secondary text-center">
            Legali<br>zujme II
          </h1>
        </div>
        <p class="text-lg xl:text-2xl text-secondary">14.3.</p>
        <p class="text-lg xl:text-2xl text-secondary">Praha – Kongresové centrum, Masarykova kolej</p>

        <p class="py-6 text-white text-lg xl:text-2xl mt-5 font-bold w-full">
          Největší konference o legalizaci a válce proti drogám
        </p>

        <div class="mt-10 items-center self-center">
          <Countdown />
        </div>

        <a
          href="#tickets"
          class="btn btn-lg bg-secondary text-primary border-0 hover:bg-secondary/80 font-bold font-burra text-xl mt-10 px-10"
          @click.prevent="scrollToTickets"
        >
          Koupit vstupenky
        </a>
      </div>
    </div>
  </div>

  <div>
    <AboutConference />

    <section id="venue" class="w-full max-w-6xl mx-auto py-12 md:py-24 px-4 md:px-6">
      <div class="my-16 flex place-content-center lg:mx-auto mx-5 text-justify">
        <div class="prose lg:prose-xl text-white">
          <h1>Místo konání</h1>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <img
          v-for="(photo, i) in venuePhotos"
          :key="i"
          :src="photo.src"
          :alt="photo.alt"
          width="400"
          height="300"
          class="rounded-lg object-cover w-full h-64 md:h-80 cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl"
          style="aspect-ratio: 400 / 300; object-fit: cover;"
          @click="openVenue(i)"
        />
      </div>
    </section>

    <Schedule />
    <Speakers />
    <div id="about"></div>
    <div class="mt-16 flex place-content-center lg:mx-auto mx-5 text-justify">
      <div class="mt-10 prose lg:prose-xl text-white">
        <div class="text-center text-primary">
          <h1>O nás</h1>
          <p>
            My, Students for Liberty CZ (Studenti za svobodu), jsme nezisková, apolitická, studentská
            organizace. Jsme tu, abychom podporovali a propojovali studenty hlásící se k myšlenkám svobody.
            Vznikli jsme v roce 2013 a od té doby jsme získali členy všude po České republice.
          </p>
          <p>
            Ideově máme blízko ke klasickému liberalismu a libertariánství, i proto jsou hlavní principy,
            které hájíme, sociální, ekonomická a akademická svoboda a respekt k soukromému vlastnictví.
          </p>

          <div>
            <a href="https://studentsforlibertycz.cz/" target="_blank" rel="noopener">
              <img class="w-full max-h-44" src="/SFL-logo-full-color-tall.svg" alt="SFL Logo" />
            </a>
          </div>
          <button class="btn btn-ghost btn-circle">
            <a href="https://www.instagram.com/czech.sfl/" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 26 26"
                   style="fill:#EDBE38;">
                <path
                  d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"></path>
              </svg>
            </a>
          </button>
          <button class="btn btn-ghost btn-circle ml-4">
            <a href="https://www.facebook.com/studentsforlibertycz" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 26 26"
                   style="fill:#EDBE38;">
                <path
                  d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 20.464844 14.003906 L 18.03125 14.003906 L 18.03125 23.007813 L 13.96875 23.007813 L 13.96875 14.003906 L 12.390625 14.003906 L 12.390625 10.96875 L 13.96875 10.96875 L 13.96875 9.035156 C 13.96875 6.503906 15.019531 5 18.007813 5 L 21.03125 5 L 21.03125 8.023438 L 19.273438 8.023438 C 18.113281 8.023438 18.035156 8.453125 18.035156 9.265625 L 18.03125 10.96875 L 20.796875 10.96875 Z"></path>
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>

    <Tickets />

    <section id="past" class="w-full pt-12 md:pt-24 flex justify-center">
      <div class="container grid items-center justify-center text-center">
        <div class="mt-16 mb-16 flex place-content-center lg:mx-auto mx-5 text-justify">
          <div class="mt-10 prose lg:prose-xl text-white text-center">
            <h1>Minulé ročníky</h1>
            <p class="text-primary">
              Jako Studenti za svobodu pořádáme již několikátý ročník naší tradiční podzimní konference.
              Více o našich minulých akcích se dozvíte na našem
              <a href="https://studentsforlibertycz.cz/udalosti/" target="_blank" rel="noopener">webu</a>.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0">
          <img
            v-for="(photo, i) in galleryPhotos"
            :key="i"
            :src="photo.src"
            :alt="photo.alt"
            width="400"
            height="300"
            class="rounded-lg object-cover cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl"
            style="aspect-ratio: 400 / 300; object-fit: cover;"
            @click="openGallery(i)"
          />
        </div>
      </div>
    </section>
    <Partners />
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      @click.self="closeLightbox"
    >
      <button
        class="absolute top-4 right-4 text-white text-4xl font-bold hover:text-secondary z-50 cursor-pointer"
        @click="closeLightbox"
      >&times;</button>

      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl font-bold hover:text-secondary z-50 cursor-pointer"
        @click.stop="prevLightbox"
      >&#8249;</button>

      <img
        :src="activeLightboxPhotos[lightboxIndex].src"
        :alt="activeLightboxPhotos[lightboxIndex].alt"
        class="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
      />

      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl font-bold hover:text-secondary z-50 cursor-pointer"
        @click.stop="nextLightbox"
      >&#8250;</button>

      <div class="absolute bottom-6 text-white/70 text-sm">
        {{ lightboxIndex + 1 }} / {{ activeLightboxPhotos.length }}
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const siteUrl = runtimeConfig.public.siteUrl || 'https://example.com';
const pageTitle = 'Legalizujme II';
const pageDescription = 'Největší konference o legalizaci a válce proti drogám.';

// Gallery
const galleryPhotos = [
  { src: '/konference/20211106-14_30_49-NIKON_D500.webp', alt: 'Konference 2021' },
  { src: '/konference/20231104-19_36_19-NIKON_D500.webp', alt: 'Konference 2023' },
  { src: '/konference/20221105-16_39_03-NIKON_D500.webp', alt: 'Konference 2022' },
  { src: '/gallery/20241026-12_52_48-NIKON_D500.webp', alt: 'Konference 2024' },
  { src: '/gallery/20241026-13_24_11-NIKON_D500.webp', alt: 'Konference 2024' },
  { src: '/gallery/20241026-14_47_02-NIKON_D500.webp', alt: 'Konference 2024' },
  { src: '/gallery/20241026-15_54_35-NIKON_D500.webp', alt: 'Konference 2024' },
  { src: '/gallery/20241026-17_09_40-NIKON_D500.webp', alt: 'Konference 2024' },
  { src: '/gallery/ERP06432X.webp', alt: 'Konference 2024' },
  { src: '/gallery/ERP06433X.webp', alt: 'Konference 2024' },
  { src: '/gallery/ERP06438X.webp', alt: 'Konference 2024' },
  { src: '/gallery/ERP06493X.webp', alt: 'Konference 2024' },
];

// Venue
const venuePhotos = [
  { src: '/venue/022.webp', alt: 'Kongresové centrum Masarykovy koleje' },
  { src: '/venue/025.webp', alt: 'Kongresové centrum Masarykovy koleje' },
  { src: '/venue/floorplan.webp', alt: 'Plánek Kongresového centra' },
];

// Unified lightbox
const lightboxOpen = ref(false);
const lightboxIndex = ref(0);
const activeLightboxPhotos = ref(galleryPhotos);

function openGallery(index) {
  activeLightboxPhotos.value = galleryPhotos;
  lightboxIndex.value = index;
  lightboxOpen.value = true;
}
function openVenue(index) {
  activeLightboxPhotos.value = venuePhotos;
  lightboxIndex.value = index;
  lightboxOpen.value = true;
}
function closeLightbox() {
  lightboxOpen.value = false;
}
function nextLightbox() {
  lightboxIndex.value = (lightboxIndex.value + 1) % activeLightboxPhotos.value.length;
}
function prevLightbox() {
  lightboxIndex.value = (lightboxIndex.value - 1 + activeLightboxPhotos.value.length) % activeLightboxPhotos.value.length;
}

function onKeydown(e) {
  if (!lightboxOpen.value) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextLightbox();
  if (e.key === 'ArrowLeft') prevLightbox();
}

function scrollToTickets() {
  document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
}

onMounted(() => window.addEventListener('keydown', onKeydown));
onUnmounted(() => window.removeEventListener('keydown', onKeydown));

useSeoMeta({
  title: `${pageTitle} | Konference`,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogImage: `${siteUrl}/img_2.jpg`,
  twitterCard: 'summary_large_image'
});

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/` }]
});
</script>
