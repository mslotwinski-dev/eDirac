<template>
  <Article>
    <Chapter nr="1" book="math"> Podstawy rachunku wariacyjnego </Chapter>
    <Begin nr="1.1" advanced="2"> Czym jest rachunek wariacyjny? </Begin>
    <h3>Idea rachunku wariacyjnego</h3>
    <Section>
      Rachunek wariacyjny wiąże się z problemem poszukiwania minimum lub
      maksimum funkcjonałów (przestrzeni funkcji). Wyobrażając sobie to jako grę
      - jeśli liczba to poziom 1, a funkcja to poziom 2, funkcjonał będzie
      poziomem 3, jakąś strukturą nad funkcjami. Intuicyjnie rozpatrujemy tutaj
      przestrzenie niezliczonych funkcji i znajdujemy tę ekstremalną funkcje,
      która jest z reguły tą szczególną, która nas interesuje.
    </Section>
    <h3>Przykład z mechaniki</h3>
    <Section>
      Przykładem użycia rachunku wariacyjnego jest trajektoria kopniętej piłki.
      Teoretycznie ilość możliwych trajektorii jest nieskończona, ale nas
      interesuje jedna konkretna, której równaniem jest parabola. Co tutaj
      osiąga ekstremum? Działanie. Jest to pewna wielkość fizyczna, której jako
      matematyk nie musisz jej znać, ale matematyka ma służyć opisowi przyrody,
      więc pokażemy czym ono jest.
    </Section>
    <Formula nr="1.1">
      {\displaystyle S = \int \limits _{t_{1}}^{t_{2}} \mathcal {L} (x(t), \dot
      x(t), t)dt}
    </Formula>
    <Section>
      Jak widzisz to, co całkujemy tutaj to nie funkcją, a czymś co przyjmuje
      funkcję (i jej pochodne) jako argument. Rachunek wariacyjny pozwala poznać
      ci ekstremum tego funkcjonału, które jest funkcją.
    </Section>
    <Section>
      A tak już w ramach czystej ciekawostki. Czym jest to śmieszne L pod całką?
      Jest na to jakiś wzór? Otóż, nazywa się to lagranżjan i w mechanice
      klasycznej przyjmuje formę różnicy energii kinetycznej i potencjalnej.
    </Section>
    <Formula nr="1.2">
      {\displaystyle \mathcal {L} = T - U = \frac{1}{2}mv^2 - U}
    </Formula>
    <Section>
      Gdzie U to energia potencjalna, która może być różna w zależności od
      sytuacji. Np. w spadającej kulce będzie wynosić mgh, natomiast w wahadle
      matematycznym kx<M c="^2" />.
    </Section>
  </Article>
</template>
