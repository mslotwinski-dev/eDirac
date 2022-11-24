<template>
  <Article>
    <Begin nr="4.9" advanced="1"> Siły podstawowe i pola </Begin>
    <h3>Pole i potencjał</h3>
    <Section>
      Zajmijmy się czymś, co nazywamy siłami podstawowymi. Intuicja może
      podpowiadać, że są to 4 podstawowe siły we wszechświecie, czyli
      oddziaływanie silne, elektromagnetyczne, słabe i grawitacyjne. Każda z
      tych sił może być opisana jako pole wektorowe opisujące wektor siły w
      każdym punkcie przestrzeni. Zakladając, że rotacja tego pola jest równa 0
      (co zawsze jest spełnione dla pól stałych w czasie), pole to posiada
      energię potencjalną oznaczaną jako U lub <M s="E_P" />.
    </Section>
    <Section>
      Rozumowanie w kierunku odwrotnym mówi nam, że wektor wskazujący kierunek
      najszybszych zmian pola energii potencjalnej (jej gradient) jest co do
      wartości równy sile, jaka działa na ciało w tym polu w tym pukcie.
    </Section>
    <Formula nr="4.19"> F = - { \bigtriangledown U }</Formula>
    <Section>
      Każde bezwirowe pole posiada energię potencjalną. Energia w ogólności to
      zdolność wykonania pracy przez ciało, jednak ten szczególny rodzaj energii
      możemy rozpartywać jako pole skalarne, którego zmiany są miarą siły,
      jakiej doznaje ciało.
    </Section>
    <Image src="dynamika/7.png">
      Zależność między energią potencjalną, a siłą
    </Image>
    <h3>Pole elektromagnetyczne</h3>
    <Section>
      Zacznijmy od elektryczności i magnetyzmu. Cząsteczki noszą ładunek
      oznaczany jako q i mierzymy w Coulombach (C). Jest to ich fundamentalna
      właściwość tak jak masa. Ładunek jednego elektronu (e) jest zwany
      ładunkiem fundamentalnym i jest najmniejszą ilością ładunku, jaki może
      swobodnie występować w przyrodzie. Podkreśliłem swobodnie, bo mamy
      przecież kwarki mają ładunek ułamkowy np. 1/3e czy 2/3e, jednak kwarki nie
      mogą występować samotnie, zawsze są
      <i>upakowane</i> w większe cząstki (hadrony), których ładunek zawsze jest
      wielokrotnością e.
    </Section>
    <Section>
      W makroskopowej skali całe ciała mogą być naładowane, a jest to
      spowodowane nadmiarem lub niedoborem elektronów. Naładowane ciała
      wytwarzają wokół siebie pole elektryczne. Pola te oddziałują ze sobą,
      czego skutkiem jest siła (siła Coulomba) między każdym naładowanym ciałem
      czy cząstką wynosząca:
    </Section>
    <Math>F = \frac{1}{4\pi \varepsilon} \frac{q_1 q_2}{r^2}</Math>
    <Section>
      Jedyny człon, który nie jest tu określony to <M s="\varepsilon" />. Jest
      to przenikalność elektryczna i określa jak sama nazwa wskazuje jak mocno
      dany ośrodek tłumi pole elektromagnetyczne w danym punkcie. Może być on
      zarówno skalarem, jak i tensorem. A jaki jest sens fizyczny oznaczenia
      przenikalności elektrycznej jako tensora? Oznacza to, że w ośrodku takim
      przenikalność ma różne wartości w różnych kierunkach. Najczęściej jednak
      przenikalność elektryczna to zwykła liczba, która w próżni jest oznaczana
      indeksem 0 i jest równa:
    </Section>
    <Math>
      \varepsilon_0 8,854 \cdot 10^{-12} \ \ \Big[ \frac{C^2}{N \ m^2} =
      \frac{F}{m} \Big]
    </Math>
    <Section>
      Jednostka oznaczona jako F to farad, którą poznasz w przyszłości, ale po
      prostu ładniej ta jednostka wygląda. Siły elektryczne sa znacznie bardziej
      skomplikowane niż może się to wydawać, w końcu podaliśmy jedynie przykład
      dla dwóch pojedyńczych <b>spoczywających</b> ładunków nie wspominając
      nawet o naładowanych rurkach czy pierścieniach lub ich ruchomych wersjach
      gdzie w grę wchodzi magnetyzm. Elektromagnetyzmowi poświęcimy osobny
      (czwarty) tom.
    </Section>
    <Section>
      Wspominaliśmy, że ładunki generują pola, a jakie jest natężenie tych pól?
    </Section>
  </Article>
</template>
