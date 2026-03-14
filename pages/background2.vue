<template>
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
        
        <div class="mt-16 text-white text-xl xl:text-3xl font-medium">
          <p class="mb-2">Matěj Černý</p>
          <p class="mb-2">Věznice Rýnovice</p>
          <p class="mb-2">Belgická 3765/11</p>
          <p class="mb-2">Jablonec nad Nisou 466 21</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Empty page with only background and text
</script>

<style scoped>
/* Ensure full height */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>