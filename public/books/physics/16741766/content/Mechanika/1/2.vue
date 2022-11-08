<template>
  <Article>
    <Begin nr="3.2" advanced="1"> Tor ruchu </Begin>
    <h3>Jak wyznaczyć tor ruchu?</h3>
    <Section>
      Tor ruchu to krzywa zakreślana w przestrzeni przez wybrany punkt
      poruszającego się ciała. Możemy go wyznaczyć poprzez wyznaczenie równań
      trzech współrzędnych w zależności od czasu. Najłatwiej pokazać to na
      przykładzie.
    </Section>
    <Example title="Elipsoida" nr="3.1">
      <Section>
        Punkt porusza się w przestrzeni zgodnie z równaniami w układzie
        prostoliniowym
      </Section>
      <Math>
        {\displaystyle x = a \ cos(t) \qquad z = b \ sin(t) \qquad y = 1 - c \
        sin(t)}.
      </Math>
      <Section>Po jakim torze porusza się punkt?</Section>
      <Section>
        Dzieląc dwa pierwsze równania stronami, odpowiednio przez a i b,
        podnosząc stronami do kwadratu i dodając otrzymujemy
      </Section>
      <Math> {\displaystyle \frac{x^2}{a^2} + \frac{z^2}{b^2} = 1}. </Math>
      <Section>
        Jest to oczywiście równanie elipsy. Wyznaczając sin(t) z równania
        drugiego i podstawiając do trzeciego otrzymujemy
      </Section>
      <Math> {\displaystyle y = 1 - \frac{c}{b}z}. </Math>
      <Section>
        Jak widać oś y ogranicza funkcja liniowa. Zbierając te wszystkie
        informacje możemy narysować tor ruchu omawianej cząstki.
      </Section>
      <Image src="kinematyka/3.png" />
    </Example>
  </Article>
</template>
