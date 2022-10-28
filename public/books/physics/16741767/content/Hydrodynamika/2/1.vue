<template>
  <Article>
    <Chapter nr="2" book="physics"> Równowaga płynu </Chapter>

    <Begin nr="2.1" advanced="0"> Równanie równowagi</Begin>
    <h3>Równowaga w płynach</h3>
    <Section>
      Aby płyn był w równowadze musimy zadbać, aby w równowadze były zarówno
      siły masowe jak i powierzchniowe. Zacznijmy od sił masowych.
    </Section>
    <Math>
      {\displaystyle F_x = f_x dm = f_x \varrho dV = f_x \varrho dxdydz}
    </Math>
    <Section>
      Oczywiście musimy zapisać trzy takie równania, osobno dla każdego kierunku
      x, y i z. Teraz rozpatrzmy siły powierzchniowe, czyli ciśnienie w punkcie
      dx. Wynosi ono wtedy (co nie jest odkrywcze) dp, a działa na boki dy i dz.
      Rozszerzmy teraz dp przez dx, otrzymamy następujące równanie sił
      powierzchniowych.
    </Section>
    <Math>
      {\displaystyle F_x = \sigma_x dS = \frac{dp}{dx}dxdS =
      \frac{dp}{dx}dxdydz}
    </Math>
    <Section>
      Po zapisaniu równości, a następnie skróceniu dxdydz otrzymujemy równanie
      równowagi dla współrzędnej x.
    </Section>
    <Math> {\displaystyle \varrho f_x = \frac{dp}{dx}} </Math>
    <Section>
      Możemy napisać osobno 3 równania dla każdego kierunku albo zapisać je
      wektorowo, w ten sposób otrzymujemy nasze właściwe równanie równowagi
      płynów zwane równaniem Eulera.
    </Section>
    <Formula nr="2.1"> {\displaystyle \varrho \vec f = \nabla p} </Formula>
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
    <Formula nr="2.2"> {\displaystyle p = \varrho g h + p_0} </Formula>
    <Section>
      Fizyczne uzasadnienie stałej <M c="p_0" /> to najzwyklejsze ciśnienie
      atmosferycze równe średnio 1000hPa, zależy od dnia. Ciśnienie na dnie
      naczynia to suma ciśnienie atmosferycznego i hydrostatycznego, stąd
      dodajemy do wyniku <M c="p_0" />
    </Section>
  </Article>
</template>
