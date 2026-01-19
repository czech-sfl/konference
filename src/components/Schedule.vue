<!-- Schedule.vue -->
<template>
  <section id="schedule" class="schedule-section">
    <div class="schedule-container">
    <div class="my-16 flex place-content-center lg:mx-auto mx-5 text-justify">

      <div class="prose lg:prose-xl text-white prose-headings:text-neutral">
      <h1 class="schedule-title">Program</h1>
      </div></div>
      <div class="schedule-grid">
        <div
          v-for="(session, index) in schedule"
          :key="index"
          class="session-card"
          @click="openSession(session)"
        >
          <div class="session-card-body">
            <h2 class="session-card-time">{{ session.time }}</h2>
            <p class="session-card-title">{{ session.title }}</p>

              <div v-if="session.speakers" class="session-speakers">
                <span class="label">Řečníci: </span>
                <template v-for="(speaker, speakerIndex) in session.speakers" :key="speakerIndex">
                  {{ speaker.name }}<template v-if="speakerIndex < session.speakers.length - 1">, </template>
                </template>
              </div>
            <div v-if="session.moderator" class="session-moderator">
              <span class="label">Moderátor: </span>
              <span>{{ session.moderator.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div :class="['modal', { 'modal-open': selectedSession }]" >
        <div class="modal-overlay" @click="closeModal"></div>
        <div class="modal-content">
          <!-- Session Details -->
          <div v-if="!selectedSpeaker">
            <h2 class="modal-title">{{ selectedSession?.title }}</h2>
            <p class="modal-description">{{ selectedSession?.description }}</p>

            <div v-if="selectedSession?.speakers" class="modal-section">
              <h3 class="modal-subtitle">Řečníci</h3>
              <div class="modal-speakers">
                <div
                  v-for="(speaker, index) in selectedSession.speakers"
                  :key="index"
                  class="modal-person"
                  @click.stop="openSpeaker(speaker)"
                >
                  <img :src="speaker.picture" alt="" class="modal-image">
                  <p class="modal-name">{{ speaker.name }}</p>
                </div>
              </div>
            </div>

            <div v-if="selectedSession?.moderator" class="modal-section">
              <h3 class="modal-subtitle">Moderátor</h3>
              <div class="modal-person" @click.stop="openSpeaker(selectedSession.moderator)">
                <img :src="selectedSession.moderator.picture" alt="" class="modal-image">
                <p class="modal-name-moderator">{{ selectedSession.moderator.name }}</p>
              </div>
            </div>
          </div>

          <!-- Speaker Details -->
          <div v-else>
            <button class="modal-back-button" @click="closeSpeaker">Zpět</button>
            <h2 class="modal-title">{{ selectedSpeaker.name }}</h2>
            <img :src="selectedSpeaker.picture" alt="" class="modal-image-large">
            <p class="modal-description">{{ selectedSpeaker.bio }}</p>
          </div>

          <button class="modal-close-button" @click="closeModal">Zavřít</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Schedule',
  data() {
    return {
      schedule: [
        {
          time: '13:00 - 18:00',
          title: 'Program bude upřesněn',
          description: 'Podrobný program konference bude zveřejněn později.'
        },
        // TODO: Program bude doplněn
        // {
        //   time: '12:15 - 13:00',
        //   title: 'Registrace',
        //   description: 'Registrace jsou otevřeny od 12:15 do 13:00.'
        // },
        // {
        //   time: '13:00 - 14:00',
        //   title: 'Konopí bez mýtů: Česko na prahu legalizace',
        //   description: '',
        //   speakers: [
        //     {
        //       name: 'Tomáš Vymazal',
        //       picture: '/speakers/vymazal.png',
        //       bio: 'Bývalý poslanec PSP ČR, který stojí za zvýšením hranice pro obsah THC v technickém konopí na 1 %. Předseda Asociace bezpečného konopí, z.s. a spoluzakladatel RARE - Racionální regulace, spolku který připravuje celoplošnou kampaň s cílem vytvořit tlak na politickou reprezentaci a přispět tak zásadně k přijetí zákona o regulaci konopí.'
        //     },
        //     {
        //       name: 'Jindřich Vobořil',
        //       picture: '/speakers/voboril.jpeg',
        //       bio: 'Jindřich Vobořil působí jako expertní poradce současného premiéra. Patří k předním českým expertům v oblasti závislostí a v minulosti dlouhodobě zastával i pozici Národního protidrogového koordinátora, na které se zabýval například přípravou zákona o regulaci konopí, který by vytvořil jasná pravidla pro zavedení regulovaného trhu s konopím v České republice.'
        //     },
        //     {
        //     name: "Robert Veverka",
        //     picture: "/speakers/veverka.jpg",
        //     bio:
        //       " Robert Veverka je politicky aktivní propagátor reformy drogové politiky, který usiluje především o regulaci konopí pro osobní i průmyslové účely. Již patnáct let předsedá neziskové organizaci Legalizace.cz a od roku 2010 je vydavatelem a šéfredaktorem magazínu Legalizace. Posledních šest let je zastupitelem městské části Praha 2 za Pirátskou stranu, kde je členem bezpečnostní komise. Dále je členem komise Rady hl. m. Prahy pro protidrogovou politiku. V roce 2024 se stal předsedou spolku Racionální regulace RARE, ve kterém společně s dalšími odborníky aktivně připravuje návrh zákona o regulaci konopí, který by měl umožnit všem dospělým lidem legálně pěstovat a držet konopí pro vlastní potřebu nebo jej získat v distribuční síti speciálních prodejen. Za tímto účelem spolek letos v září spustil celonárodní kampaň Je to OK!"
        //     }
        //   ],
        //   moderator: {
        //     name: 'Filip Blaha',
        //     picture: '/speakers/blaha.jpg',
        //     bio: 'Filip Blaha je člen Students For Liberty CZ a odborník na drogovou problematiku.'
        //   }
        // },
        // {
        //   time: '14:00 - 14:15',
        //   title: 'Pauza',
        //   description: 'Krátká přestávka na občerstvení.'
        // },
        // {
        //   time: '14:15 - 15:00',
        //   title: 'Zdraví před trestem: harm reduction aneb lidský přístup k drogové politice',
        //   description: '',
        //   speakers: [
        //     {
        //       name: 'Martin Duřt',
        //       picture: '/speakers/durt.png',
        //       bio: 'Martin Duřt je výzkumník fenomenologie psychoaktivních látek, spoluzakladatel harm reduction platformy Czeched Substance, člen České psychedelické společnosti a autor blogu utheraptor.art. Ve své práci se zaměřuje na odhalování vlivu drog na lidské vědomí a snižování jejich rizik. Když se nevěnuje vědě, tvoří umění pomocí umělé inteligence a píše.'
        //     }
        //   ],
        //   moderator: {
        //     name: 'Tereza Urzová',
        //     picture: '/speakers/urzova.jpg',
        //     bio: 'Tereza Urzová je lékařka a analytička Institutu liberálních studií. Dříve působila i ve spolku Svobodný přístav, který spoluzaložila. Dlouhodobě se věnuje ekonomickým a zdravotně-sociálním dopadům prohibice psychoaktivních látek.'
        //   }
        // },
        // {
        //   time: '15:00 - 15:30',
        //   title: 'Velká pauza',
        //   description: 'Delší přestávka'
        // },
        // {
        //   time: '15:30 - 16:30',
        //   title: 'Zločin bez oběti: Příběhy obětí války proti drogám',
        //   description: 'Příběhy lidí postižených represivní politikou.',
        //   speakers: [
        //     {
        //       name: 'Lukáš Hurt',
        //       picture: '/speakers/hurt.jpg',
        //       bio: 'Původním vzděláním historik a anglista, který již řadu let pracuje jako překladatel, novinář, editor a vydavatel magazínu Konopí se zaměřením na konopí a jeho léčebné i další využití. Je spoluzakladatelem občanské iniciativy Rodiny proti prohibici, manažerem Českého konopného klastru a registrovaným konopným pacientem. Na začátku letošního roku spoluzaložil spolek Racionální regulace, jehož cílem je prosadit racionální reformu konopné legislativy a ukončit nesmyslnou prohibici této rostliny.'
        //     },
        //     {
        //       name: 'Dana Syslová',
        //       picture: '/speakers/syslova.png',
        //       bio: 'Má univerzitní vzdělání v oboru sociální práce, absolvovala akreditovaný výcvik v systemické psychoterapii a je registrovanou inspektorkou kvality sociálních služeb. V současnosti působí jako nezávislá konzultantka, věnuje se zejména podpoře zvyšování kvality sociálních služeb a rozvoji organizací poskytujících sociální služby. Od loňského roku aktivně spolupracuje s iniciativou Rodiny proti prohibici.'
        //     },
        //     {
        //       name: 'Irena Fenyklová',
        //       picture: '/speakers/fenyklova.jpg',
        //       bio: 'Matka syna, který byl odsouzen na dvanáct let vězení za přečiny související s pěstováním a držením velkého množství konopí, aniž by mu soudem byla prokázána distribuce. Je spoluzakladatelkou  iniciativy Rodiny proti prohibici, která sdružuje další oběti současných represivních zákonů a nabízí jim právní pomoc i lidskou podporu. Navštěvuje soudy s lidmi, kterým hrozí podobně drakonické tresty jako jejímu synovi, účastní se různých besed a konferencí s cílem šířit povědomí o této problematice.'
        //     }
        //   ],
        //   moderator: {
        //     name: 'Marianna Sádecká',
        //     picture: '/speakers/sadecka.webp',
        //     bio: 'Marianna vyštudovala rakúsku ekonomickú školu, spoluzaložila Slovak Students for Liberty, pôsobila v Paralelnej Polis a má podcast o IT bezpečnosti s názvom lokál hosť.'
        //   }
        // },
        // {
        //   time: '16:30 - 16:45',
        //   title: 'Pauza',
        //   description: 'Krátká přestávka.'
        // },
        // {
        //   time: '16:45 - 17:45',
        //   title: 'Psychedelika v medicíně: (Staro)nové horizonty léčby',
        //   description: '',
        //   speakers: [
        //     {
        //       name: 'Barbara Mallarino',
        //       picture: '/speakers/mallarino.jpg',
        //       bio: 'Bára je absolventkou magisterského programu na UK oboru fyziologie člověka se specializací na neurobiologii.'
        //     },
        //   ],
        //   moderator: {
        //     name: 'Eva Césarová',
        //     picture: '/speakers/cesarova.jpg',
        //     bio: 'Eva Césarová je doktorskou studentkou adiktologie, spoluzakladatelkou České psychedelické společnosti, a také ředitelkou sekretariátu Nadačního fondu pro výzkum psychedelik. Výzkumu role psychedelik v léčbě závislostí se dlouhodobě věnuje, a stejnému tématu se bude věnovat i na konferenci jako moderátorka panelu "Psychadelika v medicíně: (Staro)nové horizonty léčby".'
        //   },
        // }
      ],
      selectedSession: null,
      selectedSpeaker: null
    }
  },
  methods: {
    openSession(session) {
      this.selectedSession = session;
      this.selectedSpeaker = null; // Reset selected speaker
      // Optional: Prevent background scrolling when modal is open
      document.body.classList.add('modal-open');
    },
    closeModal() {
      this.selectedSession = null;
      this.selectedSpeaker = null;
      // Remove class from body to allow scrolling again
      document.body.classList.remove('modal-open');
    },
    openSpeaker(speaker) {
      this.selectedSpeaker = speaker;
    },
    closeSpeaker() {
      this.selectedSpeaker = null;
    }
  }
}
</script>

<style>
@import './Schedule.css';
</style>
