<template>
  <Article>
    <Begin nr="1.6" advanced="0"> Siły działające w płynach</Begin>
    <h3>Siły masowe</h3>
    <Section>
      Siły masowe albo objętościowe są to siły wywierane bezpośrednio na płyn
      zawarty w rozważanym obszarze płynnym nie związane z powierzchnią
      ograniczającą ten obszar. Siły masowe możemy podzielić na 3 grupy:
      <ul>
        <li>
          Grawitacyjne - występują, gdy płyn porusza się w polu grawitacyjnym
          (czyli w praktyce zawsze i jest to najważniejsza z sił masowych).
        </li>
        <li>Bezwładności - występują przy ruchu z przyspieszeniem.</li>
        <li>
          Elektromagnetyczne - występującą m.in. wówczas, gdy płyn będący
          przewodnikiem elektryczności (płynny metal, gaz zjonizowany) porusza
          się w polu elektrycznym. Nie będziemy rozpatrywać płynów pod
          działaniem takich sił, jest nam to do szczęścia absolutnie zbędne.
          Tego typu sytuacje rozpatruje całkiem inna dziedzina fizyki nazywana
          magnetohydrodynamiką.
        </li>
      </ul>
    </Section>
    <Section>
      Siły masowe swoim działaniem obejmują każdy element płynu i są
      proporcjonalne do masy elementu dm, na który działają. Jednostkową siłą
      masową f w punkcie W (x, y, z) obszaru płynnego nazywa się stosunek siły
      masowej dF (działającej na masę d m = ρ dV, zawartą w elemencie
      objętościowym dV ) do masy elementu, a zatem:
    </Section>
    <Formula nr="2.1">
      {\displaystyle f = \frac{dF}{dm} = \frac{1}{\varrho}\frac{dQ}{dV}}.
    </Formula>
    <Section>
      Co do jednostki możesz zauważyć, że są równe przyspieszeniu, a nie sile.
      No skoro jest proporcjonalna do masy to rzeczywiście bardziej użyteczna
      jest wielkość którą dostaniemy po podzieleniu siły przez masę. To samo
      robiliśmy już dawno temu, kiedy dzieląc siłę ciężkości przez masę
      otrzymaliśmy przyspieszenie ziemskie. Powiem więcej, w 99% przypadków gdy
      płyn nie przyspiesza, wartość naszej siły masowej to będzie po prostu g =
      9,81
      <Math>\frac{m}{s^2}</Math>. Jakiś sens to ma, w końcu co innego może
      działać na masę płynu jak nie siła ciężkości. Czemu więc nazwali to siłą
      masową, a nie siłą ciężkości płynów? Żeby trudniej było Ci ogarnąć o co
      chodzi. No i może dlatego, że do sił masowych jeszcze zaliczamy
      bezwładność i siły elektromagnetyczne.
    </Section>
    <h3>Siły powierzchniowe</h3>
    <Section>
      No dobra, były siły związane z objętością to teraz będą te związane z
      powierzchnią. Siły powierzchniowe są przyłożone na powierzchni płynu i
      wywierane przez stykające się warstwy płynu lub płynu i podłoża. Cechą
      charakterystyczną sił powierzchniowych jest to, że ich natężenie w danym
      punkcie jest wprost proporcjonalne do pola danej powierzchni, na którą
      działają. Oznaczamy je grecką literą sigma.
    </Section>
    <Formula nr="2.2"> {\displaystyle \sigma = \frac{dF}{dS} }. </Formula>
    <Section>
      Jak możesz zauważyć jednostką tej siły jest z kolei również nie newton, a
      tym razem pascal. Kiepsko u hydrodynamików z nazewnictwem sił. Jakie są
      przykłady sił powierzchniowych?
      <ul>
        <li>Ciśnienie, najzwyklejsze w świecie, wywierane na płyn.</li>
        <li>Tarcie wewnętrzne w płynie lub tarcie płynu o ściany.</li>
        <li>Napór cieczy na ścianę zbiornika.</li>
      </ul>
    </Section>
    <h3>Siły zewnętrzne i wewnętrzne</h3>
    <Section>
      Możesz spotkać się z podziałem sił na te wewnętrzne i zewnętrzne. Podział
      ten jest bardzo prosty. Siły wewnętrzne to wszystkie siły masowe, czyli
      grawitacja, bezwładność i elektromagnetyzm, oraz niektóre powierzchniowe.
      Które? Np. siły międzycząsteczkowe, napięcie powierzchniowe czy siły
      lepkości. Pozostałe siły to siły zewnętrzne. Są to te pozostałe siły
      powierzchniowe, które są wynikiem jak sama nazwa wskazuje jakiegoś
      zewnętrznego działania. Przykład? Tłok naciskający na powierzchnie wody w
      strzykawce. Proste, prawda?
    </Section>
    <h3>Wektory główne sił *</h3>
    <Section>
      Spróbujmy policzyć to, co nazywamy siłą tradycyjnie. Jeśli nie wiesz czym
      są całki wielokrotne przejdź do następnego tematu.
    </Section>
    <Section>
      Zacznijmy od siły objętościowej. Siła dF przyłożona do masy to
      przekształcając wzór (2.1) fdm. Odejmijmy od pozostałych sił masowych f
      przyspieszenie płynu, które jest miarą siły bezwładności. Zastąpny dm =
      ρdV, a następnie scałkujmy. Voilàl, mamy wzór na całkowitą przyłożoną
      siłę, co dla odróżnienia nazywamy wektorem głównym siły. Tak sobie
      inżynierzy płynów wymyślili, nic nie poradzę.
    </Section>
    <Formula nr="2.3">
      {\displaystyle F_M = \varrho \int \limits _{V} (f - \frac{dv}{dt})dV}.
    </Formula>
    <Section> To samo możemy zrobić z siłami powierzchniowymi. </Section>
    <Formula nr="2.4">
      {\displaystyle F_S = \int \limits _{S} \sigma \cdot dS}.
    </Formula>
    <Section>
      Zauważ, że są to całki wielokrotne. Niektórzy powiedzą, że powinienem
      używać symbolu <Math>\iint</Math> i <Math>\iiint</Math>, jednak nie jest
      to obowiązek i w wielu podręcznikach tego nie uświadczysz, a zapis robi
      się wtedy dość nieczytelny. Wolę zachować czystość zapisu niż podlizywać
      się matematykom teoretycznym. Jeśli to czytacie, to nie pozdrawiam was.
    </Section>
  </Article>
</template>
