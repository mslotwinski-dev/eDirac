<template>
  <Article>
    <Begin nr="1.4" advanced="0"> Lepkość </Begin>
    <h3>Czym jest lepkość?</h3>
    <Section>
      Jedną z istotnych właściwości każdego płynu rzeczywistego jest lepkość,
      która występuje tylko w czasie ruchu sąsiednich warstw płynu i zanika wraz
      z ustaniem ruchu. Lepkość jest to wedle definicji zdolność płynów do
      przenoszenia naprężeń stycznych przy wzajemnym przemieszczaniu elementów
      poruszających się z różnymi prędkościami. Niewiele ci to mówi? Nic nie
      szkodzi. Lepkość najprościej mówiąc miara określająca jak silne są siły
      tarcia między cząsteczkami podczas wzajemnego przesuwania warstw płynu po
      sobie. Przykładem cieczy o wysokiej lepkości jest np. miód, natomiast
      cieczą o małej lepkości jest woda. Najbardziej lepką cieczą z jaką się na
      codzień spotykamy jest smoła, u której jest ona równa 10 milionów
      pascalo-sekund (miara lepkości).
    </Section>
    <Image src="gif/1.gif">
      Porównanie dwóch płynów o różnych lepkościach.
    </Image>
    <Section>
      Wyobraźmy sobie przepływ wody rozlewającej się na powierzchni płytki.
      Zakładamy, że prędkość elementów płynu znajdujących się bezpośrednio na
      samym dnie, czyli tych stykających się z płytką jest równa zeru (zasada
      przylegania, braku poślizgu na płytce). Jest to logiczne, najniższe
      warstwy wody są najmocniej przyciskane do dna, a tam spotykają się z siłą
      tarcia o podłoże. Możemy postawić więc hipotezę. Im wyższa warstwa płynu
      tym szybciej się porusza. Taką samą hipotezę postawił Isaac Newton. Płyny,
      które ją spełniają nazywamy płynami newtonowskimi i tylko takimi będziemy
      się zajmować. Dziedzina nauki, która zajmuje się płynami nienewtonowskimi
      to reologia. Serio, takie płyny są naprawdę dziwne.
    </Section>
    <Image src="hydrodynamika/2.png">
      Pokaz doświadczeń z płynem nienewtonowskim na uniwersytecie w Mexico City
    </Image>
    <h3>No dobra, a jak to zdefiniować?</h3>
    <Section>
      Teraz zapiszmy to formalnie, ale najpierw zdefiniujmy coś takiego jak
      naprężenie ścinające (styczne). Brzmi groźnie, ale póki co wystarczy nam,
      abyśmy traktowali je jako ciśnienie. Jeżeli coś wyginamy, to naprężenie
      rzeczywiście jest równe stosunkowi siły do powierzchni na którą działa,
      więc ma to sens. A co oznacza naprężenie styczne? Naprężenie jest
      formalnie tensorem, ale nas póki co interesuje jedynie składowe wzdłuż
      nutru rzeki. Naprężenie ścinające działające na ciecz jest równe pochodnej
      prędkości po wysokości h pomnożonej przez właśnie lepkość, a dokładnie
      lepkość dynamiczna:
    </Section>
    <Formula nr="1.12">
      {\displaystyle \tau = \mu\frac{dv}{dh} = \mu\gamma}.
    </Formula>
    <Section>
      Pochodna prędkości po wysokości często jest nazywana szybkością ścinania i
      oznaczana grecką literą gamma, a definiujemy ją jak pewnie zauważyłeś w
      ten sposób:
    </Section>
    <Formula nr="1.13"> {\displaystyle \gamma = \frac{dv}{dh}}. </Formula>
    <Section>
      Istnieje również coś takiego jak lepkość kinematyczna. Jest to stosunek
      lepkości dynamicznej do gęstości:
    </Section>
    <Formula nr="1.14"> {\displaystyle \nu = \frac{\mu}{\varrho}}. </Formula>
    <h3>Od czego zależy lepkość płynu?</h3>
    <Section>
      Lepkość zależy od rodzaju płynu, jego temperatury i nieznacznie od
      ciśnienia, nie zależy natomiast (dla płynu niutonowskiego) od prędkości
      ani od gradientu prędkości. Z badań wynika, że dla cieczy ze wzrostem
      temperatury lepkość maleje, natomiast dla gazów rośnie. W cieczach wzrost
      temperatury powoduje powiększenie się odległości pomiędzy cząsteczkami,
      wskutek czego maleją siły spójności, czemu towarzyszy zmniejszenie się sił
      tarcia wewnętrznego. Wzrost temperatury gazu zmniejsza średnią drogę
      swobodną cząstek i powiększa liczbę zderzeń pomiędzy cząsteczkami, co
      prowadzi do zwiększenia sił tarcia wewnętrznego.
    </Section>
  </Article>
</template>
