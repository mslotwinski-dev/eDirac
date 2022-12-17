<template>
  <Article>
    <Begin nr="7.2" advanced="0">
      Emergia potencjalna i siły zachowawcze
    </Begin>
    <h3>Siły zachowawcze</h3>
    <Section>
      Kolejnym krokiem do zrozumienia pojęcia i właściwości energii jest
      wprowadzenie pojęcia energii potencjalnej związanej z siłami działającymi
      na ciało. Wielkość tę będziemy oznaczać jako <M s="E_p" />, EP lub U.
      Energię potencjalną możemy zdefiniować tylko dla niektórych sił. Te siły,
      dla których jest to możliwe nazywamy zachowawczymi. Jak się okazuje,
      istnieją dwa warunki, które siła musi spełniać, aby była zachowawcza.
    </Section>
    <Section>
      Rozważmy teraz prostą sytuację, gdy na ciało działa tylko jedna siła, może
      to być przyciąganie grawitacyjne albo elektrostatyczne. F może zależeć od
      wielu zmiennych: może zależeć od położenia ciała r (im większa jest
      odległość planety od Słońca, tym słabsze jest przyciąganie grawitacyjne),
      może zależeć od prędkości ciała, jak w przypadku oporu aerodynamicznego,
      może też zależeć również od czasu, jak byłoby to w przypadku ładunku
      elektrycznego w polu elektrycznym zależnym od czasu. Wreszcie, jeśli siła
      jest wynikiem działania ludzi, może zależeć od wielu innych zmiennych — na
      przykład od tego, czy ci ludzie są wypoczęci, czy zmęczeni, czy są
      właściwe ustawieni itd.
    </Section>
    <Section>
      Pierwszy warunek, jaki musi spełnić siła, aby być zachowawczą, jest taki,
      że siła musi zależeć jedynie od położenia ciała, na które działa. Nie może
      więc zależeć np. od prędkości czy czasu. Jest wiele sił, które spełniają
      ten warunek np. siła przyciągania grawitacyjnego czy siła Coulomba. Siłą,
      o której nie można powiedzieć, że jest zachowawcza jest np. siła oporu
      powietrza (prędkość), siła tarcia (kierunek ruchu) czy siła magnetyczna
      (prędkość).
    </Section>
    <Section>
      Drugim warunkiem, aby uznać siłę za zachowawczą, jest właściwość, że praca
      od punktu 1 do punktu 2 zależy tylko i wyłącznie od odległości między
      punktami. Nie zależy od wyboru krzywej.
    </Section>
    <h3>Energia potencjalna</h3>
    <Section>
      Znaczenie sił zachowawczych (i ich nazwa) bierze się stąd że w przypadku,
      gdy wszystkie siły działające na ciało są siłami tego typu. wówczas możemy
      zdefiniować wielkość zwaną energią potencjalną (w skrócie EP), oznaczoną
      U(r) lub <M s="E_p" /> , która ma tę właściwość, że całkowita energia
      mechaniczna się nie zmienia.
    </Section>
    <Math>E = E_k + E_p = T + U</Math>
    <Section>
      Aby zdefiniować energię potencjalną U(r) odpowiadającą danej sile
      zachowawczej, najpierw wybieramy punkt odniesienia <M s="r_0" />, w którym
      na mocy definicji U będzie miała wartość równą zeru. Następnie definiujemy
      energię potencjalną U(r) w dowolnym punkcie r jako
    </Section>
    <Formula nr="7.6">
      U = -W(r_0 \rightarrow r) = \int \limits _{r_0}^r \vec F \cdot d \vec s
    </Formula>
    <Section>
      Wyrażając sens tego wzoru słowami, energia potencjalna U jest równa
      pomnożonej przez — 1 pracy, jaką siła F wykonuje przy przemieszczeniu
      cząstki z punktu odniesienia <M s="r_0" /> do interesującego nas punktu r.
    </Section>
    <Section>
      Dla niezbyt dużych wysokości i niezbyt dużych odległości (znacznie
      mniejszych od promienia Ziemi) można przyjąć, że pole grawitacyjne Ziemi w
      rozpatrywanym obszarze jest jednorodnym polem o kierunku pionowym i
      zwrocie w dół. Za poziom odniesienia można przyjąć dowolny punkt. Wtedy
      wszystkie punkty na poziomie odniesienia mają zerową energię potencjalną.
    </Section>
    <Formula nr="7.7">U = mgh</Formula>
    <h3>Zachowanie energii</h3>
    <Section>
      Wiemy już, że energia potencjalna to praca od punktu <M s="r_0" /> do r z
      ujemnym znakiem. Nie jest odkrywczym stwierdzić, że praca od punktu A do C
      jest równa sumie prac wykonanych między punktami A i B oraz między B i C.
      To samo prawo obowiązuje więc dla energii potencjalnej.
    </Section>
    <Math>\Delta W = W(A \rightarrow B) = -[U(A) - U(B)] = \Delta U</Math>
    <Section>
      Łącząc to ze wzorem na zmianę energii kinetycznej dostajemy następujący
      związek.
    </Section>
    <Math>\Delta T = - \Delta U</Math>
    <Section>
      Co przenosząc na drugą stronę daje nam związek zwany zasadą zachowania
      energii.
    </Section>
    <Formula nr="7.8">\Delta (T + U) = \Delta E = 0</Formula>
  </Article>
</template>
