<template>
  <Article>
    <Begin nr="1.2" advanced="0">Pole elektryczne</Begin>
    <h3>Ładunek</h3>
    <Section>
      Musimy zacząć od czegoś absolutnie podstawowego i niepodzielnego. Od
      ładunku. Ładunek jest pewną właściwością cząstek. Tak samo jak masa -
      cząstki po prostu mogą go mieć lub nie. Co więc sprawia, że cała nasza
      technologia opiera się o przesył ładunku? Łatwość w jego kontroli.
      Wykorzystanie pól elektrycznych i magnetycznych pozwala nam na kontrolę
      ruchu elektronów w przewodniku. Inne materiały pozwalają nam całkiem
      izolować nas od jego skutków. Jeszcze inne działają jak układy logiczne -
      możemy warunkowo włączać lub wyłączać przepływ prądu. Te ostatnie są
      najważniejsze i najciekawsze, a nazywamy je półprzewodnikami. O nie oparta
      jest cała obecna elektronika.
    </Section>
    <Section>
      Ładunek tak samo jak masa musi mieć swoją jednostkę. Jest to kulomb i
      oznaczamy go literą C. Jaki jest więc ładunek jednego elektronu? Ładunek
      ten nosi nazwę ładunku elementarnego i wynosi dokładnie tyle.
    </Section>
    <Formula nr="1.1">e = 1,6 \cdot 10^{−19} C</Formula>
    <Section>
      Absurdalnie mało prawda? No nie ma co się dziwić, gdybyś chciał podać masę
      elektronu w kilogramach to równie mała liczba by wyszła. A nasze jednostki
      mają być skuteczne do ludzkich zastosowań. Jako, że jeden elektron ma
      ładunek e, to całkowity ładunek Q (ewentualnie q w zależności od humoru)
      zawsze będzie wielokrotnością e.
    </Section>
    <Formula nr="1.2">Q = ne</Formula>
    <Section>
      Istnieje jedno zatrzeżenie. Ładunek elementarny to najmniejsza i
      niepodzielna część ładunku elektrycznego. Ale mimo to istnieją cząstki –
      kwarki – obdarzone ułamkowym ładunkiem elementarnym. Kwark górny ma np.
      ładunek ⅔e. Gdzie haczyk? Kwarki występują zawsze związane tworząc inne,
      większe, cząstki. W ten sposób ładunek właściwej cząstki jest już
      wielokrotnością ładunku elementarnego.
    </Section>
    <Section>
      W praktyce możemy też zapytać się jak gęsto ładunek jest
      <i>upakowany</i>. W ten sposób możemy policzyć gęstość liniową,
      powierzchniową i <i>tą zwykłą</i> gęstość ładunku.
    </Section>
    <Formula nr="1.3">
      \lambda = \frac{dQ}{dl} \ \bigg[\frac{C}{m}\bigg], \qquad \sigma =
      \frac{dQ}{dS} \ \bigg[\frac{C}{m^2}\bigg], \qquad \varrho = \frac{dQ}{dV}
      \ \bigg[\frac{C}{m^3}\bigg]
    </Formula>
    <Section />
    <h3>Pole elektryczne</h3>
    <Section>
      Ciała obdarzone ładunkiem wytwarzają wokół siebie pole elektryczne (i
      magnetyczne, o czym później). Za sprawą pola ciała elektrycznie naładowane
      oddziałują ze sobą. Pole elektryczne służy do rozpędzania ciał, natomiast
      magnetyczne do <i>zakręcania</i> ich toru. Zajmijmy się tym pierwszym.
      Siła jakiej doznaje cząstka jest tym mocniejsza im w mocniejszym polu się
      znajduje. Nic odkrywczego.
    </Section>
    <Formula nr="1.4">F = q E</Formula>
    <Section>
      No dobrze, a jak to pole uzyskać? Podstawowym najbardziej fundamentalnymi
      prawami, jakie opisują pola elektryczne i magnetyczne są równania
      Maxwella.
    </Section>
    <Formula nr="1.5">
      \bigtriangledown \cdot E = \frac{\varrho}{\varepsilon}, \qquad
      \bigtriangledown \cdot B = 0, \\ \bigtriangledown \times E=- \frac
      {\partial B}{\partial t}, \qquad \bigtriangledown \times B = \mu J+
      \varepsilon \mu \frac {\partial E}{\partial t}
    </Formula>
    <Section>
      Za ich pomocą możemy wyprowadzić wszystkie interesujące nas wzory. To, co
      nas interesuje to pierwsze równanie. Za jego pomocą można zapisać wzór
      opisujący pole jakie wytwarza pojedyńczy ładunek.
    </Section>
    <Formula nr="1.6"> E = \frac{Q}{4 \pi \varepsilon r^2} </Formula>
    <Section>
      Tajemnicza <M s="\varepsilon" /> to przenikalność elektryczna ośrodka.
      Zależy ona od materiału i określa jak dobrze dany ośrodek przepuszcza pole
      elektryczne.
    </Section>
    <Section>
      Oczywiście możemy liczyć również pole elektryczne pierścienia, druta,
      pączka czy tostera, ale nie ma potrzeby. Nie będziemy się na elektronice
      rozpatrywać pola elektrycznego w każdej sytuacji, bo nam to nie jest
      potrzebne. Mamy sięgać w niebo, a nie przebudowywać fundamenty na Ziemii.
    </Section>
    <Section>
      Zbliżamy się do naszego pierwszego obwodu. Teraz musimy zdefiniować nową
      wielkość zwaną potencjałem. Tutaj miałem dylemat, ponieważ w fizyce
      teoretycznej używa się oznaczenia <M s="\varphi" />, natomiast w fizyce
      technicznej i elektronice litery V. Oznaczymy go tutaj literą v mając
      nadzieję, że nikt nas nie pobije.
    </Section>
    <Formula nr="1.6"> E = - {\bigtriangledown}V </Formula>
    <Section>
      Jak pewnie wiesz gradient wskazuje kierunek zmian przestrzennych. W ten
      sposób stworzyliśmy niesamowicie użyteczną dla nas wielkość. Linie pola
      elektrycznego będą zawsze zwrócone w stronę mniejszego potencjału. Co za
      tym idzie każda cząstka będzie poruszać się z punktu o większym potencjale
      do punktu o mniejszym. Tego właśnie potrzebowaliśmy.
    </Section>
    <Section>
      Aby otrzymać ruch cząstek wystarczy pryzłożyć do drutu dwa potencjały -
      wyższy i niższy. Elektrony same popłyną w stronę niższego potencjału,
      czyli wywołamy prąd. Przyczyną prądu jest więc różnica potencjałów, a
      prościej możemy ją nazwać <b>napięciem</b>.
    </Section>
  </Article>
</template>
