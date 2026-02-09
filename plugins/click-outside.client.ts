export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    beforeMount: (el, binding) => {
      const element = el as HTMLElement & { clickOutsideEvent?: (event: MouseEvent) => void };
      element.clickOutsideEvent = (event: MouseEvent) => {
        if (!(el === event.target || el.contains(event.target as Node))) {
          binding.value(el);
        }
      };
      document.addEventListener('click', element.clickOutsideEvent);
    },
    unmounted: (el) => {
      const element = el as HTMLElement & { clickOutsideEvent?: (event: MouseEvent) => void };
      if (element.clickOutsideEvent) {
        document.removeEventListener('click', element.clickOutsideEvent);
      }
    }
  });
});
