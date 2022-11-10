<template>
  <Article>
    <Begin nr="2.2" advanced="0"> Równowaga w polu sił</Begin>

    <h3>Pole potencjalne</h3>
    <Section>
      Jeżeli lewa strona równania (2.2) jest różniczką zupełną, to wyrażenie w
      nawiasie po prawej stronie tego równania również jest różniczką zupełną
      pewnej funkcji U współrzędnych przestrzennych, a więc:
    </Section>
    <Math>\displaystyle f_x dx + f_y dy + f_z dz = -dU</Math>
    <Section>Z czego wynika, że:</Section>
    <Math>
      \displaystyle f_x = \frac{- \partial U}{\partial x} \qquad f_y = \frac{-
      \partial U}{\partial y} \qquad f_z = \frac{- \partial U}{\partial z}
    </Math>
    <Section>
      Funkcję U spełniającą te warunki nazywamy potencjałem sił masowych. Po
      podstawieniu tej zależności do równania równowagi otrzymamy:
    </Section>
    <Formula nr="2.3">dp = -\varrho dU</Formula>
    <Section>
      W przypadku stałego ciśnienia wynika, że potencjał jest również stały.
      Powierzchnie jednakowego potencjału nazywamy powierzchniami
      ekwipotencjalnymi. Słowo to pojawi się jeszcze niejednokrotnie w różnych
      działach fizyki.
    </Section>

    <h3>Ciśnienie hydrostatyczne</h3>
    <Section>
      Rozpatrzmy najprostszy przypadek cieczy spoczywającej w polu
      grawitacyjnym. Jedyną siłą masową w tym przypadku jest grawitacja,
      natomiast gradient ciśnienia będzie działał w dól. Daje nam to następujące
      równanie.
    </Section>
    <Math> {\displaystyle \varrho g = \frac{dp}{dy}} </Math>
    <Section>
      Rozszerzając przez dy, a następnie całkując dochodzimy do wzoru na
      ciśnienie hydrostatyczne, jaki znamy z podstawówki. Zamienimy tylko dla
      ładniejszego zapisu stałą całkowania C na <M c="p_0" /> oraz współrzędną y
      na h, czyli wysokość.
    </Section>
    <Formula nr="2.4"> {\displaystyle p = \varrho g h + p_0} </Formula>
    <Section>
      Fizyczne uzasadnienie stałej <M c="p_0" /> to najzwyklejsze ciśnienie
      atmosferycze równe średnio 1000hPa, zależy od dnia. Ciśnienie na dnie
      naczynia to suma ciśnienie atmosferycznego i hydrostatycznego, stąd
      dodajemy do wyniku <M c="p_0" />
    </Section>
    <h3>Gwiazda *</h3>
    <Section>
      Wyprowadźmy na koniec równanie równowagi bardzo dużej masy, której części
      utrzymują się razem siłami grawitacyjnymi. Niech ϕ oznacza potencjał
      grawitacyjny pola wytwarzanego przez ciecz. Spełnia on następujące
      równanie różniczkowe:
    </Section>
    <Formula nr="2.5">
      \displaystyle \bigtriangleup \phi = 4\pi G \varrho
    </Formula>
    <Section>
      Natężenie pola grawitacyjnego jest wtedy równe -<M
        c="\bigtriangledown \phi"
      />, więc siła działająca na ciecz jest wtedy równa
      <M c="- \varrho { \bigtriangledown \phi }" />. Stąd warunkiem równowagi
      jest:
    </Section>
    <Math>
      \displaystyle - \varrho {\bigtriangledown \phi} = \bigtriangledown p
    </Math>
    <Section>
      Dzieląc równanie stronami przez gęstość, działając na obie jego strony
      operatorem dywergencji oraz korzystając z równania (2.5) otrzymujemy
      równanie równowagi gwiazdy w postaci:
    </Section>
    <Formula nr="2.6">
      \displaystyle \bigtriangledown \cdot \bigg( \frac{1}{\varrho} {
      \bigtriangledown p} \bigg) = 4\pi G \varrho
    </Formula>
    <Section>
      Jeśli ciało nie obraca się, w równowadze będzie miało kształt kuli, a
      rozkład gęstości i ciśnienia będzie centralnie symetryczny. Równanie to we
      współrzędnych sferycznych przybierze wówczas postać:
    </Section>
    <Formula nr="2.7">
      \displaystyle \frac{1}{r^2} \frac{d}{dr} \Bigg( \frac{r^2}{\varrho}
      \frac{dp}{dr} \Bigg) = 4\pi G \varrho
    </Formula>
  </Article>
</template>
