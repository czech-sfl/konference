<template>
  <div class="z-50 navbar bg-secondary fixed [&_a]:text-neutral [&_a]:opacity-100 [&_a:hover]:text-primary [&_a:hover]:bg-neutral/10 [&_a]:transition-colors [&_summary]:text-neutral [&_summary]:opacity-100 [&_summary:hover]:text-primary [&_summary:hover]:bg-neutral/10 [&_summary]:transition-colors">
    <div class="navbar-start">
      <details class="dropdown">
        <summary tabindex="0" role="button"
                 class="btn btn-ghost text-neutral lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
          </svg>
        </summary>
        <ul class="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-secondary rounded-box w-52 ">
          <li>
            <NuxtLink @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)"
                      to="/#schedule">
              Program
            </NuxtLink>
          </li>
          <li>
            <NuxtLink @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)"
                      to="/#speakers">
              Řečníci
            </NuxtLink>
          </li>
          <li>
            <NuxtLink @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)"
                      to="/#about">O nás
            </NuxtLink>
          </li>

          <!--          <li>-->
          <!--            <details v-click-outside="subNavbarHide">-->
          <!--              <summary class="dropdown">Tickets</summary>-->
          <!--              <ul class="p-2">-->
          <!--                <li>-->
          <!--                  <router-link-->
          <!--                      @click="subNavbarHide($event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)"-->
          <!--                      to="#tickets">Standard tickets-->
          <!--                  </router-link>-->
          <!--                </li>-->
          <!--                <li>-->
          <!--                  <router-link-->
          <!--                      @click="subNavbarHide($event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)"-->
          <!--                      to="#tickets_gala">Gala tickets-->
          <!--                  </router-link>-->
          <!--                </li>-->
          <!--              </ul>-->
          <!--            </details>-->
          <!--          </li>-->
          <!--          <li>-->
          <!--            <router-link @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)" to="/#team">-->
          <!--              Team-->
          <!--            </router-link>-->
          <!--          </li>-->
          <li>
            <NuxtLink @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)"
                      to="/#past">Minulé ročníky
            </NuxtLink>
            <NuxtLink @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)"
                      to="/#partners">Partneři
            </NuxtLink>
            <NuxtLink @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)"
                      to="/#tickets">Vstupenky
            </NuxtLink>
          </li>
          <!--          <li>-->
          <!--            <router-link @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)" to="/#contact">-->
          <!--              Contact-->
          <!--            </router-link>-->
          <!--          </li>-->

        </ul>
      </details>
      <!--      <router-link class="font-burra text-3xl xl:text-5xl w-full font-bold text-neutral" to="" >Legalizujme</router-link>-->
    </div>

    <div class="navbar-center hidden lg:flex ">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink class="text-xl" to="/#schedule">Program</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-xl" to="/#speakers">Řečníci</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-xl" to="/#about">O Nás</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-xl" to="/#past">Minulé ročníky</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-xl" to="/#partners">Partneři</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-xl" to="/#tickets">Vstupenky</NuxtLink>
        </li>

        <!--        <li>-->
        <!--          <details v-click-outside="subNavbarHide">-->
        <!--            <summary class="text-xl">Tickets</summary>-->
        <!--            <ul class="p-2">-->
        <!--              <li>-->
        <!--                <router-link @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)"-->
        <!--                             class="text-xl" to="#tickets">Standard tickets-->
        <!--                </router-link>-->
        <!--              </li>-->
        <!--              <li>-->
        <!--                <router-link @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)"-->
        <!--                             class="text-xl" to="#tickets_gala">Gala tickets-->
        <!--                </router-link>-->
        <!--              </li>-->
        <!--            </ul>-->
        <!--          </details>-->
        <!--        </li>-->
        <!--        <li>-->
        <!--          <router-link class="text-xl" to="/#team">Team</router-link>-->
        <!--        </li>-->
        <!--        <li>-->
        <!--          <router-link class="text-xl" to="/#partners">Partners</router-link>-->
        <!--        </li>-->
      </ul>
    </div>
    <div class="navbar-end ">
    </div>
  </div>
</template>
<script>
import Tickets from "./Tickets.vue";

export default {
  name: "Navbar",
  components: {Tickets},
  methods: {
    subNavbarHide(el) {
      console.log("subNavbarHide");
      console.log(el);
      el.removeAttribute("open");
    }
  },
}
</script>
<style scoped>

</style>
