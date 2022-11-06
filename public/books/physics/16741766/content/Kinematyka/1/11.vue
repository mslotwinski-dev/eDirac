<template>
  <Article>
    <Begin nr="3.11" advanced="1"> Krzywizna i skręcenie </Begin>
    <h3>Krzywizna toru</h3>
    <Section>
      Wyobraź sobie dowolny tor ruchu. Wybierz sobie na nim dowolne dwa punkty:
      P i oddalony o niego o Δs punkt P'. Następnie wyznaczmy wektory styczne w
      każdym z tych punktów odpowiednio τ i τ'. Naszym zadaniem jest wyznaczenie
      tego, jak bardzo nasz tor jest zakrzywiony. Jak możemy to wyznaczyć?
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
    <Formula nr="2.46">
      \displaystyle \kappa = \bigg| \frac{d\varphi}{ds} \bigg|
    </Formula>
    <Section>
      Dlaczego chcemy wyciągnąć z naszej wielkości wartość bezwzględną? To
      raczej kwestia do czego nam krzywizna służy. Nic nie stoi na przeszkodzie,
      aby zdefiniować krzywiznę ze znakiem, ale nam zależy tylko, aby znać to
      jak bardzo zakrzywiony jest tor, a nie, w którą stronę jest zakrzywiony.
    </Section>
  </Article>
</template>
