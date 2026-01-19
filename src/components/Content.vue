<template>
  <Navbar/>
  <div class="hero min-h-screen " style="background-image: url(/img_2.jpg);">
    <div class="hero-overlay "></div>
    <div class="hero-content text-center text-neutral-content">

      <div class="mt-10 ">
        <!--        <h1 class="mb-5 text-5xl font-bold text-white">INSPIRED 2 CARE</h1>-->
<!--        <p class="text-lg xl:text-2xl text-secondary ">Konference</p>-->
        <div class=" items-center w-full my-4 ">
          <h1 class="hidden lg:block font-burra text-4xl xl:text-9xl w-full font-bold text-secondary">Legalizujme II</h1>
          <h1 class="block lg:hidden font-burra text-6xl w-full font-bold text-secondary text-center">Legali<br>zujme II
          </h1>
        </div>
        <p class="text-lg xl:text-2xl text-secondary ">14.3.</p>
        <p class="text-lg xl:text-2xl text-secondary ">Praha – Kongresové centrum, Masarykova kolej</p>


        <p class="py-6 text-white text-lg xl:text-2xl mt-5 font-bold w-full">
          Největší konference o legalizaci a válce proti drogám
        </p>


        <div class="mt-10 items-center self-center ">
          <Countdown/>
        </div>

        <!--        <div id="about" class="mt-24  flex place-content-center mx-5 lg:mx-auto text-justify">-->
        <!--          <div class="stats stats-vertical lg:stats-horizontal">-->

        <!--            <div class="stat">-->
        <!--              <div class="stat-value text-neutral">Praha</div>-->
        <!--            </div>-->

        <!--            <div class="stat">-->
        <!--              <div class="stat-value text-primary">26. října</div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->


        <!-- TODO: Vstupenky budou doplněny
        <li>
          <router-link to="/#tickets"
                        class="btn btn-lg   mt-32  bg-gradient-to-r from-secondary to-neutral  motion-safe:animate-bounce transition-opacity  ease-in duration-700 shadow-xl border-0">Vstupenky</router-link>
        </li>
        -->
      </div>
    </div>
  </div>


  <!--  <div id="tickets">-->
  <!--    <Tickets/>-->
  <!--  </div>-->
  <!--  <div id="tickets_gala">-->
  <!--    <TicketsGala/>-->
  <!--  </div>-->

  <!--  <div class="divider"></div>-->
  <div class="prose-h1:font-burra">
    <AboutConference/>
    <Schedule/>
    <Speakers/>
    <!--    <Organizers/>-->
    <!--    <div class="divider"></div>-->
    <div id="about"></div>
    <div class="mt-16  flex place-content-center lg:mx-auto mx-5 text-justify">
      <div class="mt-10  prose lg:prose-xl text-white prose-headings:text-neutral prose-headings:font-burra">
        <div class="text-center text-primary ">

          <h1 class="text-neutral">O nás</h1>
          <p class="">My, Students for Liberty CZ (Studenti za svobodu), jsme nezisková, apolitická, studentská
            organizace. Jsme
            tu, abychom podporovali a propojovali studenty hlásící se k myšlenkám svobody. Vznikli jsme v roce 2013 a od
            té doby jsme získali členy všude po České republice.
          </p>
          <p class="">
            Ideově máme blízko ke klasickému liberalismu a libertariánství, i proto jsou hlavní principy, které hájíme,
            sociální, ekonomická a akademická svoboda a respekt k soukromému vlastnictví.</p>


          <div class=" ">
            <a href="https://studentsforlibertycz.cz/" target="_blank">
              <img class="w-full max-h-44" src="/SFL-logo-full-color-tall.svg" alt="SFL Logo"/>
            </a>
          </div>
          <button class="btn btn-square">
            <a href="https://www.instagram.com/czech.sfl/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 26 26"
                   style="fill:#EDBE38;">
                <path
                    d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"></path>
              </svg>
            </a>
          </button>
          <button class="btn btn-square ml-4">
            <a href="https://www.facebook.com/studentsforlibertycz" target="_blank">
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


    <section id="past" class="w-full pt-12 md:pt-24  flex justify-center">
      <div class="container grid items-center justify-center   text-center">
        <div class="mt-16 mb-16 flex place-content-center lg:mx-auto mx-5 text-justify">
          <div
              class="mt-10  prose lg:prose-xl text-white prose-headings:text-neutral prose-headings:font-burra text-center ">

            <h1 class="">Minulé ročníky</h1>
            <p class="text-primary">Jako Studenti za svobodu pořádáme již několikátý ročník naší tradiční podzimní konference. Více o našich minulých akcích se dozvíte na našem <a href="https://studentsforlibertycz.cz/udalosti/" target="_blank">webu</a>.</p>
          </div>
        </div>
        <!--            <p class="text-primary">sadfasd dsafas adsfas dasfasf </p>-->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0">
          <img
              src="/konference/20211106-14_30_49-NIKON_D500.webp"
              alt="Konference"
              width="400"
              height="300"
              class="rounded-lg object-cover"
              style="aspect-ratio: 400 / 300; object-fit: cover;"
          />
          <img
              src="/konference/20231104-19_36_19-NIKON_D500.webp"
              width="400"
              height="300"
              style="aspect-ratio: 400 / 300; object-fit: cover;"
              alt="Konference"
              class="rounded-lg object-cover"
          />
          <img
              src="/konference/20221105-16_39_03-NIKON_D500.webp"
              alt="Konference"
              width="400"
              height="300"
              class="rounded-lg object-cover"
              style="aspect-ratio: 400 / 300; object-fit: cover;"
          />
        </div>
      </div>



    </section>
    <!-- TODO: Vstupenky budou doplněny
    <Tickets/>
    -->
    <Partners/>
  </div>


</template>

<script>

import Countdown from "./Countdown.vue";
import Navbar from "./Navbar.vue";
import Partners from "./Partners.vue";
import Organizers from "./Organizers.vue";
import Info from "./Info.vue";
import Speakers from "./speakers.vue";
import Schedule from "./Schedule.vue";
import AboutConference from "./AboutConference.vue";
import Tickets from "./Tickets.vue"


export default {
  name: "Content",
  components: {Speakers, Info, Organizers, Partners, Navbar, Countdown, Schedule, AboutConference, Tickets}
}
</script>
