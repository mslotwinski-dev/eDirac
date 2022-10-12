<template>
  <Article>
    <Begin nr="1.3" advanced="0"> Rozszerzalność płynu </Begin>
    <h3>Ściśliwość</h3>
    <Section>
      Ściśliwość płynu charakteryzuje jego podatność na odkształcenie
      objętościowe przy zmianie ciśnienia. Niech masa płynu o objętości V, w
      temperaturze T, znajduje się pod ciśnieniem p. Zmiana (a właściwie
      różniczka) ciśnienia o wartość dp powoduje zmianę objętości płynu o dV.
      Współczynnikiem ściśliwości jest nazywany iloraz względnej zmiany
      objętości do zmiany ciśnienia, czyli:
    </Section>
    <Math center="true" nr="1.7">
      {\displaystyle \zeta = -\frac{1}{V}\frac{dV}{dp} =
      \frac{1}{\rho}\frac{d\rho}{dp}}
    </Math>
    <Section>
      Po uwzględnieniu równań (1.4) lub (1.5) wyznacza się zależność
      współczynnika ściśliwości od ciśnienia:
    </Section>
    <Math center="true" nr="1.8"> {\displaystyle \zeta(p) = \frac{1}{p}} </Math>
    <Section>dla gazów oraz</Section>
    <Math center="true" nr="1.9">
      {\displaystyle \zeta(p) = \frac{a + 2b(p - p_0)}{1 + a(p - p_0) + b(p -
      p_0)^2}}
    </Math>
    <Section>
      dla cieczy. Jak widać, istnieje związek między wartością ciśnienia i
      wartością współczynnika ściśliwości. Ściśliwość cieczy jest tak mała, że w
      większości przypadków technicznych może być pominięta.
    </Section>
    <h3>Rozszerzalność cieplna</h3>
    <Section>
      Rozszerzalność cieplna płynu charakteryzuje jego podatność na zmianę
      objętości przy zmianie temperatury. Miarą tej podatności jest współczynnik
      rozszerzalności cieplnej, wyrażający względną zmianę objętości przy
      zmianie temperatury o 1 K
    </Section>
    <Math center="true" nr="1.10">
      {\displaystyle \beta = \frac{1}{V}\frac{dV}{dT} =
      \frac{1}{\rho}\frac{d\rho}{dT}}
    </Math>
    <Section>
      Współczynnik rozszerzalności cieplnej jest funkcją temperatury, jednak gdy
      zmiany temperatury nie są zbyt duże, przyjmuje się β = const w
      rozpatrywanym przedziale wartości temperatury. Po wprowadzeniu do wzoru
      (1.11), w miejsce zmiany objętości, zmianę gęstości otrzymuje się:
    </Section>
    <Math center="true" nr="1.11">
      {\displaystyle \beta = -\frac{1}{\rho}\frac{d\rho}{dT} }.
    </Math>
    <Section>
      Wynika stąd, że przyrostowi temperatury towarzyszy zmniejszenie gęstości.
      Wyjątkiem jest jednak woda w przedziale [0, 4]<Math> ^\circ C </Math>.
      Dlaczego?
    </Section>
    <h3>Anomalna rozszerzalność wody</h3>
    <Section>
      Anomalna rozszerzalność wody jest trudnym problemem dla fizyków, jej
      badania zarówno doświadczalne jak i teoretyczne stale się toczą. Uważa
      się, ze wiązania wodorowe odgrywają ważną rolę w tym zjawisku.
    </Section>
    <Section>
      Cząsteczki wody są powiązane ze sobą wiązaniami wodorowymi, w których
      atomy tlenu sąsiadujących cząsteczek łączą się za pośrednictwem atomu
      wodoru jednej z tych cząsteczek. Takie wiązania prowadzą w idealnym
      przypadku do wytworzenia otoczenia cząsteczki wody w kształcie
      czworościanu foremnego z cząsteczkami wody w wierzchołkach. Wzrost
      temperatury (nasilanie się drgań termicznych) psuje tę idealną strukturę,
      co umożliwia upakowanie większej liczby cząsteczek w jednostce objętości,
      czyli prowadzi do zwiększenia gęstości.
    </Section>
    <Section>
      Jednocześnie ze wzrostem temperatury wiązanie wodorowe się wydłuża, co
      skutkuje zmniejszeniem gęstości wody. Poniżej 4 stopni pierwszy efekt
      przeważa, co objawia się wzrostem gęstości wody czyli anomalną
      rozszerzalnością. Powyżej 4 stopni przeważa wydłużanie się wiązań i
      rozszerzalność staje się normalna – gęstość maleje przy wzroście
      temperatury.
    </Section>
  </Article>
</template>
