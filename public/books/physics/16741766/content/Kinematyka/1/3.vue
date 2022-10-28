<template>
  <Article>
    <Begin nr="3.3" advanced="0"> Elementarny opis ruchu </Begin>
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
      linijkę. Oznaczmy jego początkowe położenie jako <M s="x_1" />, natomiast
      końcowe jako <M s="x_2" />. Jego przemieszczenie to zmiana położenia.
      Przemieszczenie różni się od drogi tym, że może być ono ujemne, natomiast
      podając drogę interesuje nas tylko jego wartość nie ważne w którą stronę
      by nie było. Matematycznie możemy to opisać jako
    </Section>
    <Formula nr="3.6">{s=|\Delta x|=|x_2-x_1|}</Formula>
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
    <Formula nr="3.7"> {\displaystyle v=\frac {x-x_0}{t}} </Formula>
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
    <Formula nr="3.8">
      {\displaystyle a=\frac{v-v_0}{t} \ \ \Rightarrow \ \ v=v_0+at}
    </Formula>
    <Section>
      Jak zatem obliczyć drogę pojazdu poruszającego się ze stałym
      przyspieszeniem? Podstaw do wzoru na drogę prędkość średnią, czyli średnią
      arytmetyczną z <M s="v_0" /> i v = at. Pozwoli ci to otrzymać następny
      wzór. Innym sposobem jest wyznaczenie go z całki oznaczonej, jako, że
      prędkość jest funkcją, jednak nie jest to konieczne.
    </Section>
    <Formula nr="3.9">
      {\displaystyle x-x_0 = v_{śr}\cdot t = \frac{v_0 + (v_0 + at)}{2} \cdot t
      = \frac{1}{2}at^2 + v_0t}
    </Formula>
    <Section>
      Zauważ, że znak przyspieszenia nie mówi nic o kierunku ruchu tak jak znak
      przemieszczenia czy prędkości. Wręcz bardzo często znak przyspieszenia i
      prędkości będzie przeciwny jak podczas omawiania drgań i fal.
      <Example title="samochód" nr="5.2">
        <ul>
          <li>
            Samochód jedzie z prędkością 25km/h, natomiast po 10 sekundach jego
            prędkość wynosi 15km/h. Jego przyspieszenie wynosi -2<M
              c="km/s^2"
            />.
          </li>
          <li>
            Samochód jedzie z prędkością 25km/h, natomiast po 10 sekundach jego
            prędkość wynosi 35km/h. Jego przyspieszenie wynosi 2<M
              c="km/s^2"
            />.
          </li>
          <li>
            Samochód jedzie z prędkością -25km/h, natomiast po 10 sekundach jego
            prędkość wynosi -15km/h. Jego przyspieszenie wynosi 2<M
              c="km/s^2"
            />.
          </li>
          <li>
            Samochód jedzie z prędkością -25km/h, natomiast po 10 sekundach jego
            prędkość wynosi -35km/h. Jego przyspieszenie wynosi -2<M
              c="km/s^2"
            />.
          </li>
        </ul>
        Możesz zatem zauważyć, że pojazd zwalnia jeśli jego znak przyspieszenia
        i prędkości jest przeciwny.
      </Example>
    </Section>
    <h3>Podstawowe równania ruchu</h3>
    <Section>
      Kinematyka pierwszym działem fizyki, jaki poznajemy i dla większości jest
      tym najłatwiejszym. Nie ma tu żadnych skomplikowanych równań, a większość
      zadań pozwala nam rozwiązać tabela z pięcioma wzorami. Podstawowe dla
      kinematyki są dwa wzory: (3.8) oraz (3.9), jednak przypomnijmy je.
      Pierwszy wzór to definicja przyspieszenia.
    </Section>
    <Formula nr="3.8"> {\displaystyle v=v_0+at} </Formula>
    <Section>
      Drugi natomiast pozwala w ruchu jednostajnie przyspieszonym obliczyć
      drogę.
    </Section>
    <Formula nr="3.9">
      {\displaystyle x - x_0 = \frac{1}{2}at^2 + v_0t}
    </Formula>
    <Section>
      Są to podstawowe równania ruchu, które po odpowienim przekształceniu
      pozwalają rozwiązać prawie każde zadanie z ruchu jednostajnie
      przyspieszonego.
    </Section>
    <h3>Dodatkowe równania ruchu</h3>
    <Section>
      Zauważ, że w równaniach mamy do czynienia z pięcioma wielkościami. Są to:
      <M s="s, v, t, a \ oraz \ v_0" />. Zwykle jedna z tych wielkości nie
      występuje w zadaniu ani jako dana, ani niewiadoma - dane są trzy z
      pozostałych wielkości, a naszym zadaniem jest znaleźć czwartą. W
      równaniach (3.8) oraz (3.9) występują właśnie po trzy wielkości z których
      obliczamy czwartą. W pierwszym z nich nie występuje droga s, w drugim
      natomiast prędkość końcowa v. Z tych dwóch równań możemy wyprowadzić trzy
      inne, z których każde nie zawiera innej ze wspomnianych pięciu wielkości.
      Po pierwsze możemy wyelimonować czas, co po podstawieniu czasu wyliczonego
      z jednego równania do czasu w drugim równaniu da nam
    </Section>
    <Formula nr="3.10"> {\displaystyle v^2 = v_0^2 + 2 a(x - x_0)} </Formula>
    <Section>
      Inne przekształcenie pozwala nam wyeliminować przyspieszenie
    </Section>
    <Formula nr="3.11">
      {\displaystyle x - x_0 = \frac{1}{2}(v_0 + v)t}
    </Formula>
    <Section>
      Natomiast ostatnie - prędkość początkową. Zauważ, że nie występuje tu
      prędkość początkowa w przeciwieństwie do wzoru (3.5), dlatego tutaj mamy
      przy jednym z członów przeciwny znak.
    </Section>
    <Formula nr="3.12">
      {\displaystyle x - x_0 = vt - \frac{1}{2}at^2}
    </Formula>
    <Section>
      Właśnie jesteś w stanie rozprawić się z każdym zadaniem z ruchu
      jednostajnego i jednostajnie przyspieszonego. Zostanie nam jeszcze ruch
      zmienny bez stałego przyspieszenia czy prędkości, który jest trudniejszy
      ze względu na aparat matematyczny - potrzebna nam umiejętność
      różniczkowania i całkowania.
    </Section>
  </Article>
</template>
