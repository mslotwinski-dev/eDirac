<template>
  <Article>
    <Begin nr="2.2" advanced="2"> Równowaga hydrostatyczna w gwiazdach</Begin>
    <h3>Gwiazda</h3>
    <Section>
      Wyprowadźmy na koniec równanie równowagi bardzo dużej masy, której części
      utrzymują się razem siłami grawitacyjnymi. Niech ϕ oznacza potencjał
      grawitacyjny pola wytwarzanego przez ciecz. Spełnia on następujące
      równanie różniczkowe:
    </Section>
    <Formula nr="2.5">
      \displaystyle \bigtriangleup \phi = 4\pi G \varrho
    </Formula>
    <Section>
      Natężenie pola grawitacyjnego jest wtedy równe -<M
        c="\bigtriangledown \phi"
      />, więc siła działająca na ciecz jest wtedy równa
      <M c="- \varrho \bigtriangledown \phi" />. Stąd warunkiem równowagi jest:
    </Section>
    <Math>
      \displaystyle - \varrho \bigtriangledown \phi = \bigtriangledown p
    </Math>
    <Section>
      Dzieląc równanie stronami przez gęstość, działając na obie jego strony
      operatorem dywergencji oraz korzystając z równania (2.5) otrzymujemy
      równanie równowagi gwiazdy w postaci:
    </Section>
    <Formula nr="2.6">
      \displaystyle \bigtriangledown \cdot \bigg( \frac{1}{\varrho}
      \bigtriangledown p \bigg) = 4\pi G \varrho
    </Formula>
    <Section>
      Jeśli ciało nie obraca się, w równowadze będzie miało kształt kuli, a
      rozkład gęstości i ciśnienia będzie centralnie symetryczny. Równanie to we
      współrzędnych sferycznych przybierze wówczas postać:
    </Section>
    <Formula nr="2.7">
      \displaystyle \frac{1}{r^2} \frac{d}{dr} \Bigg( \frac{r^2}{\varrho}
      \frac{dp}{dr} \Bigg) = 4\pi G \varrho
    </Formula>
  </Article>
</template>
