<template>
  <section id="speakers" class="w-full max-w-6xl mx-auto py-12 md:py-24 px-4 md:px-6">
    <div class="my-16 flex place-content-center lg:mx-auto mx-5 text-justify">
      <div class="prose lg:prose-xl text-white">
        <h1 id="team">Řečníci</h1>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      <div
        v-for="(speaker, index) in speakers"
        :key="index"
        class="card w-full max-w-sm shadow-xl bg-secondary text-center cursor-pointer transition transform hover:scale-105 hover:shadow-2xl rounded-xl overflow-hidden"
        @click="openModal(speaker)"
      >
        <figure>
          <img
            class="mask mask-circle grayscale w-44 h-44 mt-5 object-cover"
            :src="speaker.photo"
            :alt="speaker.name"
          />
        </figure>
        <div class="card-body">
          <h2 class="text-center card-title w-full block">
            {{ speaker.name }}
          </h2>
          <p class="text-center text-sm text-gray-400">
            {{ speaker.organization }}
          </p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedSpeaker" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div class="bg-white rounded-lg max-w-lg w-full p-6">
        <div class="flex justify-end">
          <button @click="closeModal" class="text-gray-500 hover:text-black">&times;</button>
        </div>
        <figure class="flex justify-center mb-4">
          <img
            class="mask mask-circle w-44 h-44 object-cover"
            :src="selectedSpeaker.photo"
            :alt="selectedSpeaker.name"
          />
        </figure>
        <h2 class="text-2xl font-bold text-center mb-4">
          {{ selectedSpeaker.name }}
        </h2>

        <p class="text-center text-sm text-gray-400 mb-4">
          {{ selectedSpeaker.organization }}
        </p>
        <p v-html="selectedSpeaker.description"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      speakers: [
        {
          name: 'Lukáš Hurt',
          photo: '/speakers/hurt.webp',
          organization: 'Magazín Konopí',
          description: 'Původním vzděláním historik a anglista, který již řadu let pracuje jako překladatel, novinář, editor a vydavatel magazínu Konopí se zaměřením na konopí a jeho léčebné i další využití. Je spoluzakladatelem občanské iniciativy Rodiny proti prohibici, manažerem Českého konopného klastru a registrovaným konopným pacientem. Na začátku letošního roku spoluzaložil spolek Racionální regulace, jehož cílem je prosadit racionální reformu konopné legislativy a ukončit nesmyslnou prohibici této rostliny.'
        },
        {
          name: 'Jan Poláček',
          photo: '/speakers/polacek.webp',
          organization: 'Advokát',
          description: 'Advokát se zaměřením na trestní právo a specializací na případy související s konopím. Ve svých komentářích upozorňuje na paradoxní situace v české legislativě: např. konstatuje, že značná část veřejnosti si mylně myslí, že pěstování konopí pro vlastní potřebu nelze trestně stíhat.'
        },
        {
          name: 'Jaroslaw Kordys',
          photo: '/speakers/kordys.webp',
          organization: '',
          description: 'Polský občan, který se stal veřejně známým jako odsouzený v kauze spojené s ayahuaskou. Podle rozsudku ostravského soudu organizoval import koncentrátu tohoto nápoje z Peru a distribuoval jej na rituálech; soud mu za tento „nelegální obchod s psychotropním nápojem" v lednu 2022 uložil trest 8,5 roku vězení. V listopadu 2022 prezident Miloš Zeman Jaroslawa Kordyse a jeho manželku omilostnil, což zdůraznilo politický zájem o spravedlivé posuzování podobných případů.'
        },
        {
          name: 'Martin Duřt',
          photo: '/speakers/durt.webp',
          organization: 'Czeched Substance',
          description: 'Výzkumník a aktivista v oblasti drogové politiky, spoluzakladatel osvětové iniciativy Czeched Substance. Dlouhodobě se věnuje harm reduction (snižování rizik) a vzdělávání veřejnosti o nových psychoaktivních látkách. Pod hlavičkou Czeched Substance realizuje terénní výzkumy a osvětové kampaně. Kromě přednášek na školách poskytuje i poradenství k užívání drog. Je také součástí České psychedelické společnosti.'
        },
        {
          name: 'Pavel Kubů',
          photo: '/speakers/kubu.webp',
          organization: 'KOPAC',
          description: 'Adiktolog a odborník na medicínskou informatiku, významný český odborník na léčebné konopí. Od roku 2006 vede Etickou komisi Národního monitorovacího centra pro drogy a drogové závislosti, je dlouhodobě činný v oboru závislostí a lékařské konopné terapie. Působí v pacientské organizaci KOPAC (jako předseda do roku 2021). Kubů pravidelně vystupuje v médiích jako expert na terapeutické využití konopí.'
        },
        {
          name: 'Tomáš Prusek',
          photo: '/speakers/prusek.webp',
          organization: 'Naarden',
          description: 'Zakladatel a spolumajitel společnosti Naarden, předního českého distributora potřeb pro pokročilé pěstování. Designer pěstíren léčebného konopí.'
        },
        // TODO: Další řečníci budou doplněni
        // {
        //   name: 'Jindřich Vobořil',
        //   photo: '/speakers/voboril.jpg',
        //   organization: 'Společnost Podané ruce',
        //   description: 'Jindřich Vobořil působí v organizaci Společnost Podané ruce a jako expertní poradce současného premiéra. Patří k předním českým expertům v oblasti závislostí a v minulosti dlouhodobě zastával i pozici Národního protidrogového koordinátora, na které se zabýval například přípravou zákona o regulaci konopí, který by vytvořil jasná pravidla pro zavedení regulovaného trhu s konopím v České republice.'
        // },
        // {
        //   name: "Tomáš Vymazal",
        //   photo: "/speakers/vymazal.png",
        //   organization: "Racionální regulace",
        //   description:
        //     "Bývalý poslanec PSP ČR, který stojí za zvýšením hranice pro obsah THC v technickém konopí na 1 %. Předseda Asociace bezpečného konopí, z.s. a spoluzakladatel RARE - Racionální regulace, spolku který připravuje celoplošnou kampaň s cílem vytvořit tlak na politickou reprezentaci a přispět tak zásadně k přijetí zákona o regulaci konopí."
        // },
        // {
        //   name: "Robert Veverka",
        //   photo: "/speakers/veverka.jpg",
        //   organization: "Magazín Legalizace",
        //   description:
        //     " Robert Veverka je politicky aktivní propagátor reformy drogové politiky, který usiluje především o regulaci konopí pro osobní i průmyslové účely. Již patnáct let předsedá neziskové organizaci Legalizace.cz a od roku 2010 je vydavatelem a šéfredaktorem magazínu Legalizace. Posledních šest let je zastupitelem městské části Praha 2 za Pirátskou stranu, kde je členem bezpečnostní komise. Dále je členem komise Rady hl. m. Prahy pro protidrogovou politiku. V roce 2024 se stal předsedou spolku Racionální regulace RARE, ve kterém společně s dalšími odborníky aktivně připravuje návrh zákona o regulaci konopí, který by měl umožnit všem dospělým lidem legálně pěstovat a držet konopí pro vlastní potřebu nebo jej získat v distribuční síti speciálních prodejen. Za tímto účelem spolek letos v září spustil celonárodní kampaň Je to OK!"
        // },
        // {
        //   name: "Martin Duřt",
        //   photo: "/speakers/durt.png",
        //   organization: "Czeched Substance",
        //   description:
        //     "Martin Duřt je výzkumník fenomenologie psychoaktivních látek, spoluzakladatel harm reduction platformy Czeched Substance, člen České psychedelické společnosti a autor blogu <a class='link'  target='_blank' href=\" http://utheraptor.art\">utheraptor.art</a>. Ve své práci se zaměřuje na odhalování vlivu drog na lidské vědomí a snižování jejich rizik. Když se nevěnuje vědě, tvoří umění pomocí umělé inteligence a píše."
        // },
        // {
        //     name: 'Tereza Urzová',
        //     photo: '/speakers/urzova.jpg',
        //     organization: 'Institut liberálních studií',
        //     description: 'Tereza Urzová je lékařka a analytička Institutu liberálních studií. Dříve působila i ve spolku Svobodný přístav, který spoluzaložila. Dlouhodobě se věnuje ekonomickým a zdravotně-sociálním dopadům prohibice psychoaktivních látek.'
        // },
        // {
        //   name: 'Dana Syslová',
        //   photo: '/speakers/syslova.png',
        //   organization: 'Rodiny proti prohibici',
        //   description: 'Má univerzitní vzdělání v oboru sociální práce, absolvovala akreditovaný výcvik v systemické psychoterapii a je registrovanou inspektorkou kvality sociálních služeb. V současnosti působí jako nezávislá konzultantka, věnuje se zejména podpoře zvyšování kvality sociálních služeb a rozvoji organizací poskytujících sociální služby. Od loňského roku aktivně spolupracuje s iniciativou Rodiny proti prohibici.'
        // },
        // {
        //  name: 'Marianna Sádecká',
        //  photo: '/speakers/sadecka.webp',
        //  organization: 'Students For Liberty',
        //  description: 'Marianna vystudovala rakouskou ekonomickou školu, spoluzaložila Slovak Students for Liberty, působila v Paralelní Polis a má podcast o IT bezpečnosti s názvem lokál hosť.'
        // },
        // {
        //  name: 'Eva Césarová',
        //  photo: '/speakers/cesarova.jpg',
        //  organization: 'Česká psychadelická společnost',
        //  description: 'Eva Césarová je doktorskou studentkou adiktologie, spoluzakladatelkou České psychedelické společnosti, a také ředitelkou sekretariátu Nadačního fondu pro výzkum psychedelik. Výzkumu role psychedelik v léčbě závislostí se dlouhodobě věnuje, a stejnému tématu se bude věnovat i na konferenci jako moderátorka panelu "Psychadelika v medicíně: (Staro)nové horizonty léčby".'
        // },
        // {
        //   name: 'Barbara Mallarino',
        //   photo: '/speakers/mallarino.jpg',
        //   organization: 'Národní ústav duševního zdraví',
        //   description: 'Bára je absolventkou magisterského programu na UK oboru fyziologie člověka se specializací na neurobiologii.'
        // },
        // {
        //  name: 'Filip Blaha',
        //  photo: '/speakers/blaha.jpg',
        //  organization: 'Students For Liberty',
        //  description: 'Filip Blaha je člen Students For Liberty CZ a odborník na drogovou problematiku.'
        // },
        // {
        //  name: 'Irena Fenyklová',
        //  photo: '/speakers/fenyklova.jpg',
        //  organization: 'Rodiny proti prohibici',
        //  description: 'Matka syna, který byl odsouzen na dvanáct let vězení za přečiny související s pěstováním a držením velkého množství konopí, aniž by mu soudem byla prokázána distribuce. Je spoluzakladatelkou  iniciativy Rodiny proti prohibici, která sdružuje další oběti současných represivních zákonů a nabízí jim právní pomoc i lidskou podporu. Navštěvuje soudy s lidmi, kterým hrozí podobně drakonické tresty jako jejímu synovi, účastní se různých besed a konferencí s cílem šířit povědomí o této problematice. '
        // },
      ],
      selectedSpeaker: null
    };
  },
  methods: {
    openModal(speaker) {
      this.selectedSpeaker = speaker;
    },
    closeModal() {
      this.selectedSpeaker = null;
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
