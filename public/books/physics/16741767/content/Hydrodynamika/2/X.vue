<template>
  <Article>
    <Begin nr="2.2" advanced="1"> Strumień objętości i masy</Begin>
    <h3>Strumień objętości</h3>
    <Section>
      Strumień objętości <M c="Q_v" /> to wielkość określająca ile
      <M c="m^3" /> cieczy lub gazu przepłynie przez daną powierzchnię S w ciągu
      sekundy. Jest to więc iloczyn skalarny wektora v i powierzchni S, a zatem:
    </Section>
    <Formula nr="2.3">
      {\displaystyle Q_v = \frac{dV}{dt} = \vec v \cdot S}
    </Formula>
    <Section>
      Niestety powyższa definicja dotyczy tylko przekrojów płaskich
      prostopadłych do ruchu płynu. Chcąc być bardziej papiescy od papieża
      możemy wyprowadzić bardziej formalną definicję w formie całki.
    </Section>
    <Formula nr="2.4">
      {\displaystyle Q_v = \oint \limits_S \vec v \cdot dS = \int \limits_V
      (\nabla \cdot \vec v) dV}
    </Formula>
  </Article>
</template>
