<template>
  <section id="cenik" class="w-full py-12 md:py-24 flex justify-center">
    <div class="container max-w-4xl px-4">
      <div class="my-16 flex place-content-center">
        <div class="prose lg:prose-xl">
          <h1>Ceník vstupenek</h1>
        </div>
      </div>

      <div class="rounded-2xl border border-neutral/20 overflow-hidden">
        <!-- Header row -->
        <div class="grid grid-cols-3 gap-0 border-b border-neutral/20 bg-neutral/10 px-4 md:px-6 py-4">
          <div class="text-primary font-bold text-base md:text-lg">Typ vstupenky</div>
          <div class="text-center">
            <div class="text-primary font-bold text-base md:text-lg">V předprodeji</div>
            <div class="text-neutral text-sm font-medium">(do 13. 3.)</div>
          </div>
          <div class="text-center">
            <div class="text-primary font-bold text-base md:text-lg">Na místě</div>
            <div class="text-neutral text-sm font-medium">(14. 3.)</div>
          </div>
        </div>

        <!-- Ticket rows -->
        <div
          v-for="(ticket, i) in tickets"
          :key="i"
          class="grid grid-cols-3 gap-0 items-center px-4 md:px-6 py-5 transition-colors hover:bg-secondary/5"
          :class="{ 'border-b border-neutral/10': i < tickets.length - 1 }"
        >
          <div class="flex items-center gap-3">
            <span class="text-2xl">{{ ticket.icon }}</span>
            <span class="text-primary font-semibold text-base md:text-lg">{{ ticket.name }}</span>
          </div>
          <div class="text-center text-neutral font-bold text-xl md:text-2xl">{{ ticket.presale }}</div>
          <div class="text-center text-neutral font-bold text-xl md:text-2xl">{{ ticket.onsite }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tickets = [
  { icon: '👤', name: 'Základní vstupenka', presale: '200,-', onsite: '300,-' },
  { icon: '🎓', name: 'Studentská vstupenka', presale: '100,-', onsite: '200,-' },
  { icon: '❤️', name: 'Vstupenka podporovatele', presale: '500,-', onsite: '500,-' }
];
</script>
