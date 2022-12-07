<template>
  <Article>
    <Chapter nr="5" book="physics">
      Ruch pocisków i cząstek naładowanych
    </Chapter>
    <Begin nr="5.1" advanced="0"> Opór powietrza </Begin>
    <h3>Czym jest opór ruchu</h3>
    <Section>
      W programach większości wstępnych kursów fizyki przeznacza się pewien czas
      na analizowanie ruchu pocisków, jednak niemal zawsze pomija się przy tym
      wpływ oporu powietrza. W wielu przypadkach jest to doskonałe przybliżenie,
      w innych jest oczywiste, że opór powietrza jest znaczący i musimy
      wiedzieć, jak go uwzględnić. Tak czy inaczej, musimy mieć jakąś metodę
      oszacowania, na ile jego wpływ jest istotny. Zacznijmy od przyjrzenia się
      pewnym podstawowym właściwościom siły oporu powietrza lub innego ośrodka,
      w którym porusza się ciało. Będę używał ogólnego określenia „opór
      powietrza”, ponieważ w większości przypadków mamy do czynienia z pociskami
      poruszającymi się w powietrzu, jednak analiza przebiega w taki sam sposób
      w przypadku innych gazów, a w wielu przypadkach także cieczy.
    </Section>
    <Section>
      Najbardziej oczywistą właściwością oporu powietrza, dobrze znaną każdemu,
      kto jeździ na rowerze, jest jego zależność od prędkości u poruszającego
      się ciała. Poza tym w przypadku wielu ciał siła pojawiająca sie w wyniku
      ruchu w powietrzu jest skierowana przeciwnie do prędkości v.
    </Section>
    <Section>
      Powinieneś jednak zdawać sobie sprawę, że istnieją sytuacje, kiedy tak z
      pewnością nie jest, na przykład siła, z jaką powietrze działa na skrzydło
      samolotu, nazywaną siłą nośną, bez której samoloty nie mogłyby latać.
      Niemniej, dalej będziemy zakładać, że siła i prędkość mają przeciwne
      zwroty. Bardziej zaawansowane przykłady opływu ciał będziemy rozpatrywać w
      drugim tomie dotyczącym m. in. mechaniki płynów.
    </Section>
    <h3>Opór powietrza</h3>
    <Section>
      Funkcja F(v), która określa wartość siły oporu powietrza, zmienia się w
      bardzo skomplikowany sposób, zwiaszcza gdy prędkość ciała zbliża się do
      prędkości dźwięku. Jednak przy niedużych prędkościach często dobrym
      przybliżeniem jest następujący ogólny wzór (potem będziemy go uzupełniać):
    </Section>
    <Formula nr="5.1">F(v) = bv + cv^2 </Formula>
    <Section>
      Gdzie pierwszy człon to opór liniowy, drugi natomiast to opór kwadratowy.
    </Section>
    <Section>
      Mechanizmy fizyczne kryjące się za każdym z tych członów bardzo się
      różnią. Człon liniowy opisuje opór lepki w ośrodku i jest na ogół
      proporcjonalny do lepkości ośrodka i promienia pocisku. Człon kwadratowy
      pojawia się dlatego, że pocisk musi nieustannie nadawać przyspieszenie
      masie powietrza, z którym się stale zderza. Człon ten jest proporcjonalny
      do gęstości ośrodka i powierzchni przekroju poprzecznego pocisku. W
      szczególności, dla pocisków o kształcie kulistym współczynniki b i c w
      równaniu (4.1) mają postać:
    </Section>
    <Formula nr="5.2">
      b = \beta R \qquad c = \gamma S \ \Rightarrow c \ \sim R^2
    </Formula>
    <Section>
      Gdzie R to promień naszej kuli, natomiast pozostałe współczynniki zależą
      od ośrodka. Dla kulistego pocisku w powietrzu w tzw. warunkach normalnych
      ich wartości wynoszą mniej więcej tyle:
    </Section>
    <Math>
      \beta = 1,6 \cdot 10^{-4} \ \frac{N \cdot s}{m^2}, \qquad \gamma = 0,25
      \frac{N \cdot s^2}{m^4}
    </Math>
    <Section>
      Choć te parametry są właściwe jedynie dla kuli poruszającej się w
      powietrzu w warunkach normalnych, dają jednak pewne wyobrażenie o tym, na
      ile istotna jest siła oporu nawet w przypadku ciał o kształcie
      odbiegającym od sfery, poruszających się w rozmaitych gazach, przy
      temperaturze i ciśnieniu nie odbiegającym zbytnio od warunków normalnych.
    </Section>
    <Section>
      Często zdarza się, że jeden z wyrazów we wzorze (5.1) jest zaniedbywalnie
      mały w porównaniu z drugim. W takim przypadku rozwiązanie równania Newtona
      jest łatwiejsze. Aby określić, kiedy tak można zrobić w danym zagadnieniu
      i który człon pominąć, musimy porównać wielkości obu członów.
    </Section>
  </Article>
</template>
