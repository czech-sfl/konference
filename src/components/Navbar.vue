<template>
  <!-- Top bar -->
  <div class="z-50 navbar bg-secondary fixed [&_a]:text-neutral [&_a]:opacity-100 [&_a:hover]:text-primary [&_a:hover]:bg-neutral/10 [&_a]:transition-colors">
    <div class="navbar-start">
      <!-- Burger button – mobile only -->
      <button
        class="btn btn-ghost text-neutral lg:hidden"
        aria-label="Otevřít menu"
        @click="menuOpen = true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
        </svg>
      </button>
    </div>

    <!-- Desktop links -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="link in links" :key="link.to">
          <NuxtLink class="text-xl" :to="link.to">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </div>

    <div class="navbar-end"></div>
  </div>

  <!-- Full-page mobile overlay -->
  <Teleport to="body">
    <Transition name="overlay">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-[100] flex flex-col bg-secondary lg:hidden"
      >
        <!-- Close button -->
        <div class="flex justify-end p-4">
          <button
            class="btn btn-ghost text-neutral"
            aria-label="Zavřít menu"
            @click="menuOpen = false"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Nav links -->
        <nav class="flex flex-1 flex-col items-center justify-center gap-6">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="font-burra text-3xl font-bold text-neutral transition-colors hover:text-primary"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue';

const menuOpen = ref(false);

const links = [
  { to: '/#about-conference', label: 'O konferenci' },
  { to: '/#schedule', label: 'Program' },
  { to: '/#speakers', label: 'Řečníci' },
  { to: '/#about', label: 'O nás' },
  { to: '/#tickets', label: 'Vstupenky' },
  { to: '/#past', label: 'Minulé ročníky' },
  { to: '/#partners', label: 'Partneři' },
];

// Prevent body scroll when overlay is open
watch(menuOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : '';
  }
});
</script>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.overlay-enter-from {
  opacity: 0;
  transform: translateY(-1rem);
}
.overlay-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}
</style>
