<template>
  <section id="tickets" class="w-full py-12 md:py-24 flex justify-center">
    <div class="container max-w-4xl px-4">
      <div class="my-16 flex place-content-center">
        <div class="prose lg:prose-xl">
          <h1>Vstupenky</h1>
        </div>
      </div>

      <!-- Pricing table – desktop -->
      <div class="hidden md:block rounded-2xl border border-neutral/20 overflow-hidden">
        <!-- Header row -->
        <div class="grid grid-cols-4 gap-0 border-b border-neutral/20 bg-neutral/10 px-6 py-4">
          <div class="text-primary font-bold text-lg">Typ vstupenky</div>
          <div class="text-center">
            <div class="text-primary font-bold text-lg">V předprodeji</div>
            <div class="text-neutral text-sm font-medium">(do 13. 3.)</div>
          </div>
          <div class="text-center">
            <div class="text-primary font-bold text-lg">Na místě</div>
            <div class="text-neutral text-sm font-medium">(14. 3.)</div>
          </div>
          <div></div>
        </div>

        <!-- Ticket rows -->
        <div
          v-for="(ticket, i) in tickets"
          :key="i"
          class="grid grid-cols-4 gap-0 items-center px-6 py-5 transition-colors hover:bg-secondary/5"
          :class="{ 'border-b border-neutral/10': i < tickets.length - 1 }"
        >
          <div class="flex items-center gap-3">
            <span class="text-2xl">{{ ticket.icon }}</span>
            <span class="text-primary font-semibold text-lg">{{ ticket.name }}</span>
          </div>
          <div class="text-center text-neutral font-bold text-2xl">{{ ticket.presale }}</div>
          <div class="text-center text-neutral font-bold text-2xl">{{ ticket.onsite }}</div>
          <div class="text-center">
            <a
              href="#ticket-buy"
              class="btn btn-md bg-secondary text-primary border-0 hover:bg-secondary/80 font-bold"
              @click.prevent="scrollToBuy"
            >Koupit</a>
          </div>
        </div>
      </div>

      <!-- Pricing table – mobile -->
      <div class="flex flex-col gap-4 md:hidden">
        <div
          v-for="(ticket, i) in tickets"
          :key="i"
          class="rounded-2xl border border-neutral/20 overflow-hidden transition-colors"
        >
          <!-- Card header -->
          <div class="flex items-center gap-3 bg-neutral/10 px-4 py-3">
            <span class="text-2xl">{{ ticket.icon }}</span>
            <span class="text-primary font-bold text-lg">{{ ticket.name }}</span>
          </div>
          <!-- Card body -->
          <div class="px-4 py-4 flex flex-col gap-3">
            <div class="flex justify-between items-center">
              <span class="text-primary text-sm font-medium">V předprodeji <span class="text-neutral/60">(do 13. 3.)</span></span>
              <span class="text-neutral font-bold text-xl">{{ ticket.presale }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-primary text-sm font-medium">Na místě <span class="text-neutral/60">(14. 3.)</span></span>
              <span class="text-neutral font-bold text-xl">{{ ticket.onsite }}</span>
            </div>
            <a
              href="#ticket-buy"
              class="btn btn-block bg-secondary text-primary border-0 hover:bg-secondary/80 font-bold mt-1"
              @click.prevent="scrollToBuy"
            >Koupit</a>
          </div>
        </div>
      </div>

      <!-- Bitcoin payment note -->
      <div class="mt-6 rounded-xl bg-[#F7931A] px-6 py-4 flex items-center justify-center gap-3 text-white font-bold text-lg">
        <span class="text-2xl">₿</span>
        <span>Pro platbu Bitcoinem nás prosím <a href="https://studentsforlibertycz.cz/kontakt/" target="_blank" rel="noopener" class="underline hover:text-white/80">kontaktujte</a></span>
      </div>

      <!-- Ticket purchase iframe -->
      <div id="ticket-buy" class="mt-16 flex flex-col items-center">
        <iframe
          class="smsticket-iframe rounded-xl"
          src="https://www.smsticket.cz/api/widgets/event-sale/v2/cs/67113?eventInfo=false&utm_campaign=smsticket-prodejni-iframe"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
          style="height: 606px; width: 100%; max-width: 920px;">
        </iframe>
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

function scrollToBuy() {
  document.getElementById('ticket-buy')?.scrollIntoView({ behavior: 'smooth' });
}

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://www.smsticket.cz/static/scripts/dist/widgets/event-sale-iframe-v2/host.min.js';
  script.type = 'text/javascript';
  script.async = true;
  document.body.appendChild(script);
});
</script>
