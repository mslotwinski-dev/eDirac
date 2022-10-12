<template>
  <Article>
    <Chapter nr="2" book="physics"> Równowaga płynu </Chapter>
    <Begin nr="2.1" advanced="0"> Siły działające w płynach</Begin>
    <h3>Siły masowe</h3>
    <Section>
      Siły masowe albo objętościowe są to siły wywierane bezpośrednio na płyn
      zawarty w rozważanym obszarze płynnym nie związane z powierzchnią
      ograniczającą ten obszar.Do sił masowych zalicza się (na przykład):
      <ul>
        <li>
          Siłę grawitacyjną występującą, gdy płyn porusza się w polu
          grawitacyjnym (czyli w praktyce zawsze i jest to najważniejsza z sił
          masowych).
        </li>
        <li>
          Siłę elektromagnetyczną występującą m.in. wówczas, gdy płyn będący
          przewodnikiem elektryczności (płynny metal, gaz zjonizowany) porusza
          się w polu elektrycznym. Nie będziemy rozpatrywać płynów pod
          działaniem takich sił, jest nam to do szczęścia absolutnie zbędne.
          Tego typu sytuacje rozpatruje całkiem inna dziedzina fizyki nazywana
          magnetohydrodynamiką.
        </li>
        <li>Siłę bezwładności występującą przy ruchu zmiennym.</li>
      </ul>
    </Section>
    <Section>
      Siły masowe swoim działaniem obejmują każdy element płynu i są
      proporcjonalne do masy elementu dm, na który działają. Jednostkową siłą
      masową f w punkcie W (x, y, z) obszaru płynnego nazywa się stosunek siły
      masowej dF (działającej na masę d m = ρ dV, zawartą w elemencie
      objętościowym dV ) do masy elementu, a zatem:
    </Section>
    <Math center="true" nr="2.1">
      {\displaystyle f = \frac{dF}{dm} = \frac{1}{\rho}\frac{dQ}{dV}}.
    </Math>
    <Section>
      Co do jednostki możesz zauważyć, że są równe przyspieszeniu, a nie sile.
      No skoro jest proporcjonalna do masy to rzeczywiście bardziej użyteczna
      jest wielkość którą dostaniemy po podzieleniu siły przez masę. To samo
      robiliśmy już dawno temu, kiedy dzieląc siłę ciężkości przez masę
      otrzymaliśmy przyspieszenie ziemskie. Powiem więcej, w 99% przypadków
      wartość naszej siły masowej to będzie po prostu g = 9,81
      <Math>\frac{m}{s^2}</Math>. Jakiś sens to ma, w końcu co innego może
      działać na masę płynu jak nie siła ciężkości. Czemu więc nazwali to siłą
      masową, a nie siłą ciężkości płynów? Żeby trudniej było Ci ogarnąć o co
      chodzi.
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
    <Math center="true" nr="2.2">
      {\displaystyle \sigma = \frac{dF}{dS} }.
    </Math>
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
    <h3>Wektory główne sił</h3>
    <Section>Spróbujmy policzyć to, co nazywamy siłą tradycyjnie.</Section>
    <Section>
      Zacznijmy od siły objętościowej. Siła dF przyłożona do masy to
      przekształcając wzór (2.1) fdm. Dodajmy do sił masowych f przyspieszenie
      płynu, które jest nierozerwalnie związane z siłą bezwładności. Zastąpny dm
      = ρdV, a następnie scałkujmy. Voilà, mamy wzór na całkowitą przyłożoną
      siłę, co dla odróżnienia nazywamy wektorem głównym siły. Tak sobie
      inżynierzy płynów wymyślili, nic nie poradzę.
    </Section>
    <Math center="true" nr="2.3">
      {\displaystyle F_M = \rho \int \limits _{V} (f - \frac{dv}{dt})dV}.
    </Math>
    <Section> To samo możemy zrobić z siłami powierzchniowymi. </Section>
    <Math center="true" nr="2.4">
      {\displaystyle F_S = \int \limits _{S} \sigma \cdot dS}.
    </Math>
  </Article>
</template>
