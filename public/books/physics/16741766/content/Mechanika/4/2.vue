<template>
  <Article>
    <Begin nr="6.2" advanced="0"> Zderzenia </Begin>
    <h3>Czym jest zderzenie?</h3>
    <Section>
      Praktycznym zastosowaniem zasady zachowania pędu jest teoria zderzeń.
      Teraz poznasz tylko jej podstawy, samej teorii zderzeń poświęcimy osobny
      dział, gdy będziesz bardziej zaawansowany, a w dalekiej przyszłości
      poświęcimy jeszcze kilka działów na teorię zderzeń atomów, jąder i cząstek
      elementarnych, które rządzą się całkiem innymi prawami.
    </Section>
    <Section>
      Główną oś rozważań stanowi stwierdzenie, że podczas zderzenia pęd układu
      jest zachowany. Zderzenia dzielimy na sprężyste i niesprężyste. Większość
      zderzeń jest sprężysta, co oznacza, że przedmioty odbijają się od siebie.
      Przykładem takiego zderzenia jest zderzenie kulek do bilarda
    </Section>
    <Section>
      Zderzenie niesprężyste następuje wtedy, gdy ciała podczas zderzenia
      <i>łączą się</i> w jeden układ. Przykładem takiego zderzenia jest
      najczęściej zderzenie dwóch samochodów.
    </Section>
    <Image src="dynamika/11.png">
      Zderzenie sprężyste o góry i niesprężyste na dole
    </Image>
    <h3>Proste zderzenia</h3>
    <Section>
      Przejdźmy do praktyki, zaczynając od zderzenia niesprężystego dwóch ciał.
      Początkowy pęd układu jest równy:
    </Section>
    <Math> p = m_1 v_1 + m_2 v_2 </Math>
    <Section> natomiast pęd końcowy jest równy </Section>
    <Math> p = m1 v + m_2 v = (m_1 + m_2)v </Math>
    <Section>
      Co nam daje dosłownie jawny wzór na prędkość układu ciał po zderzeniu.
    </Section>
    <Formula nr="6.2">v = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}</Formula>
    <Section>
      W przypadku, kiedy jedno ciało spoczywa wzór nam się redukuje do wartości:
    </Section>
    <Math>v = \frac{m_1}{m_1 + m_2} v_1</Math>
    <Example title="wypadek">
      <Section>
        Samochód o wadze 2,5 tony uderzył w wąskiej uliczce w tył pojazdu
        spoczywającego na miejscu parkingowym. Waga poszkodowanego pojazdu to
        1,25 tony. Oba samochody zderzyły się, a następnie przebyły 10 metrów.
        Poszkodowany kierowca twierdzi, że sprawca nie tylko wjechał w tył jego
        samochodu, ale i przekroczył na ulicy dozwoloną prędkość 50km/h. Czy
        może mieć rację? Współczynnik tarcia drogi to 0,5.
      </Section>
      <Section>
        Zadanie możemy znacznie szybciej zrobić z zasady zachowania energii,
        jednak i teraz jest to możliwe. Na samym początu określmy prędkość po
        zderzeniu pojazdu.
      </Section>
      <Math>
        v = \frac{m_1}{m_1 + m_2} v_0 = \frac{2,5}{3,75}v_0 = \frac{2}{3}v_0
      </Math>
      <Section>
        Następnie ze wzoru na drogę dostajemy (ruch jest opóźniony, więc
        przyspieszenie jest ujemne)
      </Section>
      <Math>s = vt - \frac{1}{2}at^2 = vt - \frac{F}{2m}t^2</Math>
      <Section>
        Z czego tylko wyznaczymy czas? Z drugiej zasady dynamiki. Zakładając, że
        siła tarcia jest stała, a więc i zmiana pędu jest stała, po
        przekształceniu otrzymujemy następujący wzór:
      </Section>
      <Math>t = \frac{p}{F} = \frac{mv}{mg\mu} = \frac{v}{g\mu}</Math>
      <Section>
        Co po podstawieniu równania na drogę daje nam po zredukowaniu
      </Section>
      <Math>s = \frac{v^2}{2g\mu}</Math>
      <Section>Sama prędkość jest więc równa tyle</Section>
      <Math>
        v = \sqrt{2 sg\mu} = \sqrt{2 \cdot 10 \cdot 10 \cdot 0,5} = 10
        \bigg[\frac{m}{s} \bigg]
      </Math>
      <Section>
        Mamy więc prędkość samochodów po zderzeniu. Aby otrzymać prędkość
        samochodu, który był sprawcą wypadku musimy wrócić do pierwszego wzoru.
        Otrzymujemy więc, że:
      </Section>
      <Math> v_0 = {2}{3}v = 15 \frac{m}{s} = 54 \frac{km}{h} </Math>
      <Section>
        Co daje nam wniosek, że kierowca przekroczył prędkość. Jeżeli
        uwzględnimy, że samochody się zgniotły, a więc część energii została
        przeniesiona na wywołanie odkształceń, to prędkość sprawcy musiała być
        jeszcze większa. Samochód więc przekroczył dozwoloną prędkość.
      </Section>
    </Example>
  </Article>
</template>
