<template>
  <Article>
    <Begin nr="3.9" advanced="1"> Krzywizna i skręcenie </Begin>
    <Section>
      <b>UWAGA!</b> W celu zachowania czystości zapisu kropka nad funkcją
      wyjątkowo oznacza pochodną po torze ruchu, nie po czasie.
    </Section>
    <h3>Krzywizna toru</h3>
    <Section>
      Wyobraź sobie dowolny tor ruchu, powiedzmy s(t). Wybierz sobie na nim
      dowolne dwa punkty: P i oddalony o niego o Δs punkt P'. Następnie
      wyznaczmy wektory styczne w każdym z tych punktów odpowiednio τ i τ'.
      Naszym zadaniem jest wyznaczenie tego, jak bardzo nasz tor jest
      zakrzywiony. Jak możemy to wyznaczyć?
    </Section>
    <Image src="kinematyka/8.png" />
    <Section>
      Wektory styczne tworzą pewien kąt. Oznaczmy go tak jak najczęściej
      oznaczamy kąt czyli φ. Zauważ, że im on większy tym bardziej nasza krzywa
      zmienia kierunek. Gdy funkcja jest stała kąt jest równy 0. Im funkcja
      bardziej <i>zakręca</i> tym kąt jest większy. Jesteśmy więc na dobrej
      drodze.
    </Section>
    <Section>
      Drugą składową krzywizny jest odległość wektorów od siebie. Jeśli dwie
      krzywe <i>zakręciły się o ten sam kąt</i>, lecz jedna zrobiła to w ciągu
      2m, a druga w 20m, bardziej <i>ostra i zakrzywiona</i> będzie ta, która
      zrobiła to szybciej.
    </Section>
    <Section>
      Możemy więc zdefiniować krzywiznę toru jako granicę stosunku kąta między
      wektorami z odległością między nimi. W ten sposób otrzymujemy:
    </Section>
    <Formula nr="3.51">
      \displaystyle \kappa = \bigg| \frac{d\varphi}{ds} \bigg|
    </Formula>
    <Section>
      Dlaczego chcemy wyciągnąć z naszej wielkości wartość bezwzględną? To
      raczej kwestia do czego nam krzywizna służy. Nic nie stoi na przeszkodzie,
      aby zdefiniować krzywiznę ze znakiem, ale nam zależy tylko, aby znać to
      jak bardzo zakrzywiony jest tor, a nie, w którą stronę jest zakrzywiony.
    </Section>
    <Section>
      Odwrotność krzywizny nazywa sie promieniem krzywizny trajektorii w punkcie
      P.
    </Section>
    <Formula nr="3.52">\displaystyle R = \frac{1}{\kappa}</Formula>
    <Section>
      Jak wynika z definicji, krzywizna trajektorii okresla jak nieprostoliniowa
      jest trajektoria, jak dalece odbiega od linii prostej. Na podstawie
      definicji mozna wyprowadzic nastepujacy wzór na krzywizne trajektorii
      ruchu we współrzednych kartezjanskich:
    </Section>
    <Formula nr="3.53">
      \displaystyle \kappa = \frac{ | \ \ddot y \ | }{(1 + \dot y )^{3/2}}
    </Formula>
    <Section>
      Bardzo szczególnym przypadkiem krzywej jest okrąg. Krzywizna okręgu jest w
      każdym punkcie jednakowa i równa odwrotności jego promienia. Z tego można
      wywnioskować, że promień jego krzywizny to po prostu jego promień.
    </Section>
    <h3>Skręcenie</h3>
    <Section>
      Chcąc określić krzywiznę krzywej określonej w przestrzenii ciężko nam
      operować na kątach. W tym przypadku ukazuje się moc wektorów, które
      wprowadziliśmy. Po zastosowaniu odpowiednich pochodnych otrzymujemy wzór
      na krzywiznę krzywej L, w przedstawieniu parametrycznym r(t).
    </Section>
    <Formula nr="3.54">
      \displaystyle \kappa = \frac{|\dot \tau \times \ddot \tau|}{|\dot \tau|^3
      }
    </Formula>
    <Section>
      Analogicznie do wykrzywienia w kierunku stycznym możemy zdefiniować
      podobną wielkość, ale dotyczącą wykrzywienia prostej w kierunku
      binormalnym. Nazywamy tę wielkość skręceniem. W przypadku krzywej
      dwuwymiarowej skręcenie jest równe 0.
    </Section>
    <Formula nr="3.55">
      \displaystyle T = \bigg| \frac{d\psi}{ds} \bigg| = \frac{|(\dot \tau
      \times \ddot \tau) \cdot \htmlClass{dddot}{\tau} |}{|\dot \tau \times
      \ddot \tau|^2 }
    </Formula>
    <Section />
    <h3>Wzory Freneta</h3>
    <Section>
      Znając już pojęcie krzywizny i skręcenia możemy wyprowadzić tzw. wzory
      Freneta. Oznaczmy nasze wektory styczny, normalny i binormalny jako
      tradycyjne <M s="\vec \tau" />, <M s="\vec \eta" /> oraz
      <M s="\vec b" /> oraz wektor wodzący krzywej jako r. W ten sposób możemy
      otrzymać 4 wzory opisujące relacje między wektorami, a krzywizną i
      skręceniem krzywej.
    </Section>
    <Formula nr="3.56">
      \displaystyle \htmlClass{tr} {\begin{cases} \dot r = \tau \\ \dot \tau =
      \kappa \eta \end{cases} \qquad \begin{cases} \dot \eta = Tb - \kappa \tau
      \\ \dot b = -T \eta \end{cases}}
    </Formula>
  </Article>
</template>
