<template>
  <div>
    <div class="moved" />
    <div class="container">
      <header class="orwell">Zasady nowomowy</header>
      <div>
        Nowomowa, urzędowy język Oceanii, została opracowana zgodnie z
        ideologicznymi potrzebami ingsocu, czyli socjalizmu angielskiego. W 1984
        roku nikt jeszcze nie posługiwał się wyłącznie nowomową...
      </div>
      <div class="no">NIE</div>
      <div>
        Nie zależy nam na ograniczaniu Ciebie podczas korzystania z serwisu,
        przeciwiwnie, wolność pcha społeczeństwo w przód. Jedyne na czym nam
        zależy to jasne zdefiniowanie tego jak możesz korzystać z naszych
        zasobów oraz tego w jaki sposób powinieneś się odnosić do innych, którzy
        z niego czerpią. Zasady mają być proste, jawne i klarowne, oraz co
        najważniejsze - tak minimalne jak to możliwe.
      </div>
      <ol class="rules">
        <li>
          Zasady korzystania z serwisu
          <ol>
            <li>
              Korzystanie z serwisu oraz podręczników eDirac jest bezpłatne i
              nie wymaga podawania danych.
            </li>

            <li>
              Dodawanie podręczników eDirac do wszelkich zestawień literatury
              (np. podawanej studentom na zajęciach) jest całkowicie dozwolone i
              nie wymaga informowania o tym żadnych podmiotów.
            </li>
          </ol>
        </li>
        <li>
          Prawa autorskie
          <ol>
            <li>
              Zezwala się na nieograniczony użytek materiałów dostępnych na
              eDirac pod warunkiem uznania autorstwa.
            </li>
            <li>
              Zezwala się na nieograniczone kopiowanie i cytowanie fragmentów
              podręczników na zasadach uznania autorstwa i podania źródła
              cytowanego fragmentu.
            </li>
            <li>
              Zezwala się na nieograniczoną dystrybucję oraz rozprowadzanie
              zasobów eDirac pod warunkiem uznania autorstwa.
            </li>
            <li>
              Zezwala się na nieograniczoną modyfikację materiału dostępnego na
              eDirac pod warunkiem podania źrdódła do oryginalnego fragmentu.
            </li>
            <li>
              Zezwala się na nieograniczone używanie zasobów eDirac przez
              ogranizacje non-profit bez uznania jakiegokolwiek autorstwa.
            </li>
            <li>
              W przypadku użytku niekomercyjnego podawanie źródła używanych
              fragmentów nie jest wymagane (jednak oczywiście mile widziane).
            </li>
          </ol>
        </li>
        <li>
          Standardy społeczności
          <ol>
            <li>
              Korzystając z zasobów eDirac zabrania się względem innych
              użytkowników:
              <ul>
                <li>Nawołynia do krzywdzenia siebie oraz innych</li>
                <li>
                  Promowania treści stworzonych w celu krzywdzenia innych osób
                </li>
                <li>
                  Nękania i prześladowania innych osób bez względu na ich
                  tożsamość
                </li>
                <li>
                  Dokonywania przestępstw oraz nawoływania do ich wykonania
                </li>
              </ul>
            </li>
            <li>
              Korzystając z zasobów eDirac zabrania się również działać na ich
              szkodę tj.:
              <ul>
                <li>
                  Podejmowania działań powodujących nadmierne obciążenie serwera
                  serwisu
                </li>
                <li>
                  Wykorzystywania luk w zabezpieczeniach Serwisu i konfiguracji
                  serwera na niekorzyść użytkowników
                </li>
                <li>
                  Wgrywania lub wstrzykiwania na serwer i do bazy danych kodu,
                  skryptów i oprogramowania mogących wyrządzić szkodę
                  oprogramowaniu, serwisowi i jego użytkownikom
                </li>
                <li>
                  Wgrywania lub wstrzykiwania na serwer i do bazy danych kodu,
                  skryptów i oprogramowania mogących śledzić lub wykradać dane
                  serwisu i jego użytkowników
                </li>
                <li>
                  Podejmowania jakichkolwiek działań mających na celu
                  uszkodzenie, zablokowanie działania Serwisu lub
                  uniemożliwienie realizacji celu w jakim działa
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          Zmiany Regulaminu
          <ol>
            <li>
              Wszelkie postanowienia regulaminu mogą być w każdej chwili
              jednostronnie zmieniane, bez podawania przyczyn
            </li>
            <li>
              Zmiany regulaminu wchodzą w życie natychmiast po ich publikacji
            </li>
            <li>
              Traktuje się iż każdy użytkownik, kontynuując korzystanie z
              Serwisu po zmianie Regulaminu akceptuje go w całości
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  padding: 20px;
  margin: 10px auto;
  max-width: 1000px;
  font-size: 18px;
}

.orwell,
.rules {
  font-size: 25px;
  font-weight: 600;
  text-transform: uppercase;
  color: theme(dark);
  margin: 15px 0;
}

.rules ol li {
  margin: 5px 0;
  font-size: 18px;
  font-weight: 400;
  text-transform: none;
}

.no {
  font-size: 60px;
  font-weight: 700;
  text-transform: uppercase;
  color: theme(main);
}
</style>
