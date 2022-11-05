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
    <Math
      >\displaystyle f_x = \frac{- \partial U}{\partial x} \qquad f_y = \frac{-
      \partial U}{\partial y} \qquad f_z = \frac{- \partial U}{\partial z}</Math
    >
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
    <Formula nr="2.X"> {\displaystyle p = \varrho g h + p_0} </Formula>
    <Section>
      Fizyczne uzasadnienie stałej <M c="p_0" /> to najzwyklejsze ciśnienie
      atmosferycze równe średnio 1000hPa, zależy od dnia. Ciśnienie na dnie
      naczynia to suma ciśnienie atmosferycznego i hydrostatycznego, stąd
      dodajemy do wyniku <M c="p_0" />
    </Section>
  </Article>
</template>
