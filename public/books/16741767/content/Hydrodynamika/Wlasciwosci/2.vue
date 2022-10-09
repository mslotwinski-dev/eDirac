<template>
  <Article>
    <Begin nr="1.2" advanced="0"> Właściwości płynów </Begin>
    <h3>Ciśnienie</h3>
    <Section>
      Mieliśmy do czynienia już nie raz z siłami. Niestety w mechanice płynów
      pojęcie to jest niepraktyczne. Musielibyśmy rozpatrywać niezliczoną ilość
      sił osobno dla każdej cząstki. Znacznie lepiej zamiast rozpatrywać siły
      osobno rozpatrywać całą powierzchnię na jaką ona działa. W ten sposób
      dochodzimy do wielkości zwanej ciśnienie i definiujemy ją jako:
    </Section>
    <Math center="true" nr="1.1"> {\displaystyle p = \frac{F}{S}} </Math>.
    <Section>Jednostką ciśnienia jest pascal (Pa)</Section>
    <h3>GĘSTOŚĆ</h3>
    <Section>
      Przypomnijmy czym jest gęstość. Od teraz praktycznie przez całą
      hydrodynamikę będzie to najważniejsza właściwość badanych ciał tak jak w
      mechanice jest to masa. Gęstość w punkcie definiujemy jako:
    </Section>
    <Math center="true" nr="1.2"> {\displaystyle \rho = \frac{dm}{dV}} </Math>
    <Section>
      Jeśli płyn jest poddawany stałemu ciśnieniu, jego gęstość w każdym punkcie
      jest jednakowa i po prostu równa m/V. Rzadziej używane jest pojęcie
      ciężaru właściwego, który jest ilorazem gęstości i przyśpieszenia
      ziemskiego:
    </Section>
    <Math center="true" nr="1.3"> {\displaystyle \gamma = \rho g} </Math>
    <Section>
      W ogólnym przypadku gęstość płynu zależy od czasu, temperatury i
      ciśnienia. Dla gazu doskonałego możemy ją wyprowadzić oczywiście z
      równania gazu doskonałego:
    </Section>
    <Math center="true" nr="1.4"> {\displaystyle \rho = \frac{p}{RT} } </Math>
    <Section>
      W przypadku cieczy sprawa nie wygląda już tak pięknie. Dla nich obowiązują
      wzory doświadczalne:
    </Section>
    <Math center="true" nr="1.5">
      {\displaystyle \rho = \rho_0(1 + a(p - p_0) + b(p - p_0)^2 )}
    </Math>
    <Section>oraz</Section>
    <Math center="true" nr="1.6">
      {\displaystyle \rho = \frac{\rho_0}{1 - \beta (T - T_0)} }.
    </Math>
    <Section>
      <Math>\rho_0</Math> to gęstość płynu w temperaturze 0<Math>^\circ C</Math
      >, natomiast stałe a, b i <Math>\beta</Math> są wyznaczane doświaczalnie w
      zależności od budowy cząsteczkowej płynu.
    </Section>
    <Image src="1.png">
      Zależności gęstości od ciśnienia i temperatury dla gazów i płynów
    </Image>
    <Section>
      Gęstość cieczy w szerokim zakresie wartości ciśnienia i temperatury
      zmienia się nieznacznie, co w wielu przypadkach pozwala przyjmować ρ =
      const. Gęstość gazu jest funkcją ciśnienia i temperatury oraz dodatkowo
      zależy od prędkości gazu, lecz wpływ ten uwidacznia się dopiero przy
      dużych prędkościach. Przy małych prędkościach i niewielkich jej zmianach ρ
      = const przyjmuje się również w przypadku gazu. Płyn, którego gęstość jest
      stała lub zależna tylko od ciśnienia, czyli ρ = ρ(p), jest nazywany płynem
      barotropowym, jego przeciwieństwem jest płyn baroklinowy.
    </Section>
    <h3>Ściśliwość</h3>
    Ściśliwość płynu charakteryzuje jego podatność na odkształcenie objętościowe
    przy zmianie ciśnienia. Niech masa płynu o objętości V, w temperaturze T,
    znajduje się pod ciśnieniem p. Zmiana (a właściwie różniczka) ciśnienia o
    wartość dp powoduje zmianę objętości płynu o dV. Współczynnikiem ściśliwości
    jest nazywany iloraz względnej zmiany objętości do zmiany ciśnienia, czyli:
    <Math center="true" nr="1.7">
      {\displaystyle \zeta = \frac{1}{V}\frac{dV}{dp} =
      \frac{1}{\rho}\frac{d\rho}{dp}}
    </Math>
    Po uwzględnieniu równań (1.4) lub (1.5) wyznacza się zależność współczynnika
    ściśliwości od ciśnienia:
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
  </Article>
</template>
