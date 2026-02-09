<template>
  <div class="">
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
      <div class="flex flex-col rounded-box text-neutral bg-secondary p-2">
        <span class="font-bold countdown font-mono text-3xl">
          <span :style="'--value:' + String(days).padStart(2, '0').charAt(0) + ';'"></span>
          <span :style="'--value:' + String(days).padStart(2, '0').charAt(1) + ';'"></span>
        </span>
        dní
      </div>
      <div class="flex flex-col rounded-box text-neutral bg-secondary p-2">
        <span class="font-bold countdown font-mono text-3xl">
          <span :style="'--value:' + String(hours).padStart(2, '0') + ';'"></span>
        </span>
        hod
      </div>
      <div class="flex flex-col rounded-box text-neutral bg-secondary p-2">
        <span class="font-bold countdown font-mono text-3xl">
          <span :style="'--value:' + String(minutes).padStart(2, '0') + ';'"></span>
        </span>
        min
      </div>
      <div class="flex flex-col rounded-box text-neutral bg-secondary p-2">
        <span class="font-bold countdown font-mono text-3xl">
          <span :style="'--value:' + String(seconds).padStart(2, '0') + ';'"></span>
        </span>
        sec
      </div>
    </div>
  </div>
</template>

<script setup>
const deadline = '2026-03-14T13:00:00';

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

function getTimeRemaining() {
  const total = new Date(deadline).getTime() - new Date().getTime();
  seconds.value = Math.floor((total / 1000) % 60);
  minutes.value = Math.floor((total / 1000 / 60) % 60);
  hours.value = Math.floor((total / (1000 * 60 * 60)) % 24);
  days.value = Math.floor(total / (1000 * 60 * 60 * 24));
}

let timer;
onMounted(() => {
  getTimeRemaining();
  timer = setInterval(getTimeRemaining, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>