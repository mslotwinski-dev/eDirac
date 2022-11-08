<template>
  <Article>
    <Chapter nr="4" book="physics"> Mechanika Newtona </Chapter>
    <Begin nr="4.1" advanced="0"> Siły i ruch</Begin>
    <h3>Czym jest dynamika?</h3>
    <Section>
      Kinematyka, zajmująca się matematycznym opisem ruchu, jest bardzo ważnym
      działem fizyki. Jednakże obejmuje ona wyłącznie opis ruchu ciała z
      uwzględnieniem funkcji położenia, prędkości i przyspieszenia. Dynamika z
      kolei jest działem fizyki pozwalającym na pełny opis ruchu ciała, rozważa
      przyczyny tego ruchu i analizuje siły działające na ciało w danym
      układzie. Do najważniejszych praw z zakresu dynamiki należą trzy zasady
      dynamiki, sformułowane przez Isaaca Newtona.
    </Section>
    <Section>
      Zasady te stanowią doskonały przykład uniwersalności i prostoty praw,
      które panują w przyrodzie i znajdują zastosowanie we wszystkich
      przypadkach ruchu, zarówno na Ziemi, jak i w kosmosie. Sformułowanie przez
      Newtona trzech zasad dynamiki było jednym z jego największych osiągnięć i
      przyczyniło się do jego wielkiej sławy w świecie nauki. Okres, w którym
      Newton opracował zasady dynamiki, uznawany jest za początek nowożytnej
      nauki.
    </Section>
    <h3>Newton, Lagrange i Hamilton</h3>
    <Section>
      Mechanika nie kończy się jednak tylko na ujęciu Newtona, chociaż z
      początku może się tak wydawać. Przez całe początki twojej edukacji
      będziesz bowiem uczył się mechaniki opartej właśnie na jego trzech
      zasadach mechaniki. Takiej mechaniki uczą się inżynierowie budownictwa,
      metalurgii, technologii materiałowych, nawet inżynierowie mechaniki i
      budowy maszyn przez 99% swojej edukacji. Fizykom jednak to nie wystarcza i
      jak się okazuje udało im się wytworzyć całkiem nowy opis mechaniki.
    </Section>
    <Section>
      Newton swoje zasady opublikował w roku 1687. Po stu latach zasady
      mechaniki zostały już doskonale opisane i wydawałoby się, że mechanika
      jest już właściwie nauką kompletną i dokończoną. Takie samo wrażenie może
      mieć uczeń w liceum czy student, który uczy się mechaniki. Ruch, siły,
      energia, wydaje się, że mechanika się na tym kończy i jedynie rozdrabnia
      się ją na najbardziej szczegółowe przydadki.
    </Section>
    <Section>
      W 1788 roku włosko-francuski matematyk Joseph Louis Lagrange stworzył nową
      mechanikę z całkiem nowymi metodami, która dawała światu całkiem nowe
      możliwości. Używa dużo bardziej skomplikowanych struktur matematycznych
      (do mechaniki newtona wystarczy rachunek różniczkowy, w tym przypadku
      potrzebny nam rachunek wariacyjny), ale pozwala na opis tak
      skomplikowanych układów, że ludziom się to nawet nie śniło. Tak jak w
      równaniach Newtona główną rolę grały siły i przyspieszenia tak tu gra ją
      działanie i tajemniczy funkcjonał zwany <i>lagranżjanem</i>.
    </Section>
    <Section>
      Następnie w 1833 mechanika została jeszcze raz napisana od nowa przez
      Williama Rowana Hamiltona, który wprowadził mechanikę na jeszcze wyższy
      poziom abstrakcji pozwalający modelować układy jeszcze bardziej
      skomplikowane. Mechanika Hamiltona może służyć do opisu prostych układów,
      takich jak odbijająca się piłka, wahadło lub drgająca struna, której
      energia zmienia się z kinetycznej w potencjalną i z powrotem. Jednak jej
      siła ukazuje się w układach bardziej złożonych i dynamicznych, jak orbity
      planet w mechanice nieba. Mechanika Hamiltona stała się fundamentem
      rozwoju aparatu matematycznego mechaniki kwantowej.
    </Section>
    <Section>
      W całej części dotyczącej stricte mechaniki będziemy opisywać układy z
      wykorzystaniem metod Newtona. Mechaniką Lagrange'a i Hamiltona zajmiemy
      się w drugiej części, którą zwyczajowo nazwałem mechaniką analityczną
      (chociaż na uczelni najprawdopodobniej spotkasz ten przedmiot jako
      mechanika klasyczna lub mechanika teoretyczna, jednak zależało mi na
      odróżnieniu tych dwóch gałęzi).
    </Section>

    <h3>Punkt materialny</h3>
    <Section>
      W tym rozdziale omówimy zastosowranie zasad dynamiki Newtona do opisu
      ruchu punktu materialnego. Punkt materialny, który dalej będziemy nazywać
      cząstką, jest wygodną idealizacją: ciałem obdarzonym masą, któremu nie
      można jednak przypisać żadnych rozmiarów. Obiektem, który może
      przemieszczać się w przestrzeni, ale nie ma wewnętrznych stopni swobody.
      Może mieć <i>postępową</i> energię kinetyczną (czyli energię związaną z
      przemieszczaniem się w przestrzeni), ale nie może mieć energii związanej z
      obrotem lub wewnętrznymi drganiami czy deformacjami.
    </Section>
    <Section>
      Oczywiście prawa ruchu dla cial punktowych są prostsze niż prawa ruchu dla
      ciał rozciągłych i to jest głównym powrodem, dlaczego zaczynamy właśnie od
      nich. Opierając się na opisanej tu mechanice punktu materialnego. W
      dalszej części podręcznika rozwiniemy mechanikę ciał rozciągłych,
      traktując takie ciała jako układy wielu punktów materialnych.
    </Section>
    <Section>
      Niemniej, wrarto mieć na uwadze, że jest wiele ważnych zagadiień, w
      których obiekty będące przedmiotem zainteresowania można z dobrą
      dokładnością traktować w przybliżeniu jako masy punktowe. Często można tak
      na przykład traktować cząstki występujące w fizyce atomowej i subatomowej,
      a niekiedy nawet ciała makroskopowe. Kamień zrzucony ze szczytu urwiska
      niemal pod każdym względem można traktować jako ciało punktowe. Nawet
      planeta krążąca po orbicie wokół Słońca może być zwykle w przybliżeniu
      opisywana w taki sposób. Mechanika punktu materialnego jest zatem czymś
      więcej, niż tylko punktem wyjścia do mechaniki ciał rozciągłych: jest to
      teoria, która sama w sobie ma wiele zastosowań.
    </Section>
    <h3>Siła</h3>
    <Section>
      Czym jest siła? Pytanie może się wydawać głupie, ale musimy tą wielkość
      jasno zdefiniować? Siła to najprościej mówiąc miara oddziaływań między
      ciałami. Im mocniej ciała między sobą oddziałują i wprawiają siebie
      nazwajem w ruch, odkształcenia czy jakiekolwiek inne zmiany. Jednostką
      siły jest newton (N).
    </Section>
    <Section>
      Siła podlega tak zwanej zasadzie superpozycji. Najprościej mówiąc gdy na
      ciało działają dwie różne siły, to po prostu się dodają. Nie dodają się
      jednak ich wartości, a całe wektory. Stąd możemy zdefiniować pojęcie siły
      wypadkowej czyli wektor, który powstał po dodaniu wszystkich sił
      działających na ciało.
    </Section>
    <Formula nr="4.1">
      \displaystyle \vec F = \sum_{n} \ \vec F_n = \vec F_1 + \vec F_2 + \vec
      F_3 + ... + \vec F_n
    </Formula>
    <Section />
  </Article>
</template>
