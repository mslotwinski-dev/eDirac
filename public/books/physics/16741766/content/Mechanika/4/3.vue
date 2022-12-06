<template>
  <Article>
    <Begin nr="6.3" advanced="0"> Rakieta </Begin>
    <h3>Napęd rakietowy</h3>
    <Section>
      Ważnym przykładem zastosowania zasady zachowania pędu jest napęd
      rakietowy. Napęd taki jest rozwiązaniem podstawowego problemu, jak wprawić
      ciało w ruch, jeśli nie ma żadnego zewnętrznego elementu, odktórego
      mogłoby się ono odepchnąć lub który mógłby ciało popchnąć.
    </Section>
    <Section>
      Aby lepiej zrozumieć tę sytuację, wyobraź sobie, że stoisz na środku
      idealnie śliskiej tafli zamarzniętego jeziora. Najprostszym sposobem
      dostania się do brzegu jest zdjęcie czegokolwiek, co można odrzucić,
      naprzykład buta, i rzucenie tą rzeczą najmocniej jak to możliwe w kierunku
      przeciwrnym do brzegu. Zgodnie z trzecią zasadą dynamiki Newtona kiedy
      pchamy but w jedną stronę, but pcha nas w stronę przeciwną. Kiedy rzucamy
      butem, działająca na nas siła reakcji buta powoduje odrzut w przeciwnym
      kierunku i ślizganie się po lodzie w kierunku brzegu.
    </Section>
    <Section>
      Rakieta działa mniej więcej na tej samej zasadzie. Jej silnik
      zaprojektowany jest w ten sposób, by wyrzucać produkty spalania paliwa z
      tyłu rakiety, co powoduje, że dzięki trzeciej zasadzie dynamiki rakieta
      jest popychana do przodu.
    </Section>
    <h3>Ruch rakiety</h3>
    <Section>
      Aby przeanalizowrać ruch rakiety, musimy przeanalizować całkowity pęd
      układu. Przyjmijmy, że rakieta masę m przemieszcza się w dodatnim kierunku
      osi y (mogę więc pisać w skrócie v zamiast) i wyrzuca produkty spalania
      paliwa z prędkością u względem rakiety.
    </Section>
    <Section>
      Ponieważ z rakiety wyrzucana jest materia, jej masa stale się zmniejsza. W
      chwili t pęd rakiety ma wartość mv, natomiast nieco później w chwili t +
      dt, rakieta ma masę (m + dm), gdzie dm jest ujemne. Jej pęd jest wtedy
      równy (m + dm)(v + dv). Paliwo wyrzucone w czasie dt ma masę -dm, i
      prędkość v - u względem Ziemi. Całkowity pęd układy jest więc równy:
    </Section>
    <Math> p(t + dt) = (m + dm)(v + dv) — dm(v-u) = mv + mdv + u dm </Math>
    <Section>
      Pominęliśmy dm dv, jako wielkość zaniedbywalnie małą. Co innego mała
      liczba, a co innego mała liczba pomnożona przez drugą małą liczbę.
      Jesteśmy fizykami, nasze równania mają działać, a nie być sztucznie
      wyidealizowane.
    </Section>
    <Section> Zmiana całkowitego pędu rakiety jest więc równa: </Section>
    <Math> dp = p(t + dt) - p(t) = mdv + u dm </Math>
    <Section>
      Jeśli na rakietę działa jakaś dodatkowra siła zewnętrzna F (na przykład
      grawitacja) to zmiana całkowitego pędu jest równa F dt. W tym przypadku
      zakładam, że nie ma sił zewnętrznych, tak że P jest stałe i dP = 0. Mamy
      więc:
    </Section>
    <Math>m dv = -dm u</Math>
    <Section> Dzieląc obie strony równania przez dt otrzymujemy wzór </Section>
    <Formula nr="6.3">m \dot v = - \dot m u</Formula>
    <Section>
      <M s="\dot m" /> to prędkość spalania - ilość masy, jaką silnik wyrzuca w
      jednostce czasu. To równanie bardzo przypomina równanie Newtona (F = ma),
      dla zwykłej cząstki. Możemy więc stwierdzić, że <M s=" -\dot m v" /> jest
      siłą ciągu, jaka działa na rakietę, aby się poruszała.
    </Section>
    <Section>
      Wróćmy do równania mdv = -dm u. Można je rozwiązać dzieląc obustronnie
      przez m, a następnie całkując. Otrzymujemy w ten sposób równanie na
      przyrost prędkości rakiety (<M s="v_0" /> to stała całkowania).
    </Section>
    <Formula nr="6.4"> v - v_0 = u \ ln(\frac{m_0}{m}) </Formula>
    <Section>
      Ten wynik nakłada istotne ograniczenie na maksymalną prędkość rakiety.
      Stosunek <M s="m_0" />/m jest największy, gdy całe paliwro zostaje spalone
      i m jest jedynie masą rakiety z ładunkiem użytecznym. Jednak nawet wtedy,
      gdy spalone paliwo stanowi 90% masy początkowej, a ten stosunek jest równy
      zaledwie 10, logarytmując 10 otrzymujemy 2,3. Przyrost prędkości nie może
      być więc większy niż 2,3u. Z tego powodu konstruktorzy rakiet starają się
      maksymalnie zwiększyć u i tworzą rakiety wielostopniowe, które mogą
      odrzucać ciężkie zbiorniki paliwa, wykorzystywane na początku lotu, aby
      zredukowrać całkowitą masę rakiety w późniejszych fazach lotu.
    </Section>
  </Article>
</template>
