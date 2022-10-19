<template>
  <Article>
    <Begin nr="2.2" advanced="0"> Podstawowy opis ruchu </Begin>
    <h3>RUCH JEDNOSTAJNY PROSTOLINIOWY</h3>
    <Section>
      Wszechświat jest w ciągłym ruchu. Właściwie nawet jeśli wydaje nam się, że
      jakieś ciało spoczywa to jesteśmy w stanie znaleźć obiekt, wobec którego
      już się porusza. Ruch ciał to jest jedna z pierwszych rzeczy, jakie na
      fizyce badamy. Tak naprawdę, badamy go już jako dzieci, kiedy rzucimy
      śnieżkę mocniej poleci dalej. Póki co nie będziemy zajmować się
      przyczynami ruchu, a jedynie jego opisem. Co ma więc ruch? Pytanie głupie,
      ale zastanówmy się, co musi się zmienić, aby nastąpił. Pierwsze co nam
      przychodzi do głowy to zmiana położenia. To nam niestety nie wystarczy,
      potrzeba nam jeszcze czegoś. Czy jeśli jakiś obiekt się teleportuje to się
      porusza? W sumie to jest pytanie natury raczej filozoficznej, ale nawet
      jeśli to taki przypadek nas nie interesuje. Ruch to zmiana położenia w
      określonym czasie.
    </Section>
    <Section>
      Wyobraźmy sobie ślimaka pędzącego po stole i postawioną obok niego
      linijkę. Oznaczmy jego początkowe położenie jako <Math>x_1</Math>,
      natomiast końcowe jako <Math>x_2</Math>. Jego przemieszczenie to zmiana
      położenia. Przemieszczenie różni się od drogi tym, że może być ono ujemne,
      natomiast podając drogę interesuje nas tylko jego wartość nie ważne w
      którą stronę by nie było. Matematycznie możemy to opisać jako
    </Section>
    <Math center="true" nr="2.2">{s=|\Delta x|=|x_2-x_1|}</Math>
    <Section>
      W praktyce wygląda to tak. Ślimak zaczynał ruch gdy wskazywał na linijce
      2cm, a zakończył go gdy na linijce mieliśmy 7cm. Droga jaką przebył to
      2cm. Proste, prawda? Tak samo sprawa wygląda z czasem, gdy zaczynał ruch o
      21:31, natomiast kończył go o godzinie 21:37 czas ruchu wynosił 6 minut.
      No dobra, bo zbyt wiele rzeczy nie odkryliśmy.
    </Section>
    <Section>
      A co jeśli ślimak przesunie się z 7cm na 2cm, czyli przesunie się w tył?
      Będzie to dla ciebie zaskoczeniem, ale wzór ten funkcjonuje dalej: 2cm –
      7cm = -5cm. Przemieszczenie w tył będziemy oznaczać jako przemieszczenie
      ujemne. Zawsze może się zdarzyć, że samochód będzie jechał w przód, a
      potem zawróci. Musimy uwzględniać również ten przypadek, dlatego
      przyzwyczajamy się, że przemieszczenie może być ujemne. Ujemna może być
      również prędkość – prędkość ujemna to prędkość jady w tył.
    </Section>
    <Section>
      No właśnie, jak sprawa ma się z prędkością? Wzór chyba zna każdy, ale
      przypomnę jego treść.
    </Section>
    <Math center="true" nr="2.3"> {\displaystyle v=\frac {x-x_0}{t}} </Math>
    <Section>
      Od razu przekształciłem go, aby móc wyznaczyć daną wielkość z gotowego
      wzoru, jednak następnym razem nie będę już tego robił, chyba, że sytuacja
      tego wymaga. To już rola fizyka, żeby umiał przekształcić wzór i wyliczyć
      z niego co potrzebuje. Niestety, to są równania dla stałej prędkości. Jak
      sobie radzić gdy prędkość się zmienia?
    </Section>
    <h3>Przyspieszenie</h3>
    <Section>
      Zacznijmy od czegoś czegoś prostszego. Szczególnym przypadkiem ruchu
      zmiennego jest ruch jednostajnie przyspieszony. Przyspieszenie to
      wielkość, która pokazuje nam jak zmieniła się prędkość w czasie. Możemy
      więc zapisać najprostszy wzór na przyspieszenie
    </Section>
    <Math center="true" nr="2.4">
      {\displaystyle a=\frac{v-v_0}{t} \ \ \Rightarrow \ \ v=v_0+at}
    </Math>
    <Section>
      Jak zatem obliczyć drogę pojazdu poruszającego się ze stałym
      przyspieszeniem? Podstaw do wzoru na drogę 2.2 prędkość średnią, czyli
      średnią arytmetyczną z <Math>v_0</Math> i <Math>v = at</Math>. Pozwoli ci
      to otrzymać następny wzór. Innym sposobem jest wyznaczenie go z całki
      oznaczonej, jako, że prędkość jest funkcją, jednak nie jest to konieczne.
    </Section>
    <Math center="true" nr="2.5">
      {\displaystyle x-x_0 = v_{śr}\cdot t = \frac{v_0 + (v_0 + at)}{2} \cdot t
      = \frac{1}{2}at^2 + v_0t}
    </Math>
    <Section>
      Zauważ, że znak przyspieszenia nie mówi nic o kierunku ruchu tak jak znak
      przemieszczenia czy prędkości. Wręcz bardzo często znak przyspieszenia i
      prędkości będzie przeciwny jak podczas omawiania drgań i fal. Dam ci dwa
      przykłady dodatniego i ujemnego przyspieszenia
      <ul>
        <li>
          Samochód jedzie z prędkością 25km/h, natomiast po 10 sekundach jego
          prędkość wynosi 15km/h. Jego przyspieszenie wynosi -2km/s2.
        </li>
        <li>
          Samochód jedzie z prędkością 25km/h, natomiast po 10 sekundach jego
          prędkość wynosi 35km/h. Jego przyspieszenie wynosi 2km/s2.
        </li>
        <li>
          Samochód jedzie z prędkością -25km/h, natomiast po 10 sekundach jego
          prędkość wynosi -15km/h. Jego przyspieszenie wynosi 2km/s2.
        </li>
        <li>
          Samochód jedzie z prędkością -25km/h, natomiast po 10 sekundach jego
          prędkość wynosi -35km/h. Jego przyspieszenie wynosi -2km/s2.
        </li>
      </ul>
      Możesz zatem zauważyć, że pojazd zwalnia jeśli jego znak przyspieszenia i
      prędkości jest przeciwny.
    </Section>
  </Article>
</template>
