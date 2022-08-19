<template>
  <Article>
    <Chapter nr="2" book="physics"> Ruch Prostoliniowy </Chapter>
    <Begin nr="2.1" advanced="0"> Podstawowy opis ruchu </Begin>
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
      natomiast końcowe jako <Math>x_2</Math>. Droga jaką przebył to zmiana
      położenia. Matematycznie możemy to opisać jako
    </Section>
    <Math center="true" nr="2.1">{s=|∆x|=|x_2-x_1|}</Math>
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
    <Math center="true" nr="2.2">
      {\displaystyle s=v\cdot t,\ \ v=\frac s{t},\ \ t=\ \ \frac s{v}}
    </Math>
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
    <Math center="true" nr="2.3">
      {\displaystyle a=\frac{v-v_0}{t} \ \ \Rightarrow \ \ v=v_0+at}
    </Math>
    <Section>
      Jak zatem obliczyć drogę pojazdu poruszającego się ze stałym
      przyspieszeniem? Podstaw do wzoru na drogę 2.2 prędkość średnią, czyli
      średnią arytmetyczną z <Math>v_0</Math> i <Math>v = at</Math>. Pozwoli ci
      to otrzymać następny wzór. Innym sposobem jest wyznaczenie go z całki
      oznaczonej, jako, że prędkość jest funkcją, jednak nie jest to konieczne.
    </Section>
    <Math center="true" nr="2.4">
      {\displaystyle s = v_{śr}\cdot t = \frac{v_0 + (v_0 + at)}{2} \cdot t =
      \frac{1}{2}at^2 + v_0t}
    </Math>
    <h3>Równania ruchu</h3>
    <Section>*Work in progress*</Section>
    <h3>Wartość zmienna i chwilowa (oraz TROCHĘ matematyki)</h3>
    <Section>
      Przyjrzyjmy się ogólnemu przypadkowi, kiedy prędkość nie jest stała.
      Sprawa będzie wyglądać tak samo przy każdym wzorze, więc wyprowadzę ją
      tylko raz, natomiast wyprowadzanie chwilowej wartości będzie odbywać się
      tak samo. W tym ogólniejszym przypadku podany wyżej wzór prędkość opisuje
      nam prędkość średnią. Kiedy prędkość jest stała, prędkość średnia to po
      prostu prędkość. Wzór ten ma postać:
    </Section>
    <Math center="true" nr="2.5">
      {\displaystyle v_{śr} = \frac{\Delta x}{\Delta t}}
    </Math>
    <Section>
      A co jeśli chcemy przy zmiennym ruchu poznać nie prędkość średnią, a
      chwilową? Uwaga, będzie bardzo matematycznie! Potraktujmy położenie jako
      funkcje zależną od czasu x(t). W ten sposób w każdej chwili możemy
      przyporządkować położeniu inną wartość – dokładnie tak jak ma to miejsce w
      praktyce. Wiemy już, że prędkość to zmiana położenia podzielona przez
      zmianę czasu. Spróbujmy zbadać prędkość samochodu w chwili t0. Wartość
      położenia w tym momencie to <Math>x(t_0)</Math>. Wybieramy teraz dowolny
      moment <Math>t_1</Math>, im bliżej <Math>t_0</Math> tym bardziej pomiar
      będzie dokładny. Prędkość średnia na tym odcinku to oczywiście
    </Section>
    <Math center="true" nr="2.6">
      {\displaystyle v=\frac{x(t_1 )-x(t_0 )}{t_1-t_0 } }
    </Math>
    <Section>
      Tylko, że wciąż jest to prędkość średnia, jednak na krótkim odcinku czasu
      Δt. Im krótszy ten odcinek czasu, tym bardziej dokładny będzie pomiar
      prędkości chwilowej. Podstawmy więc w równaniu 2.6 dla wygody
      <Math>\Delta t = t_1 - t_0</Math>. Pewnie się domyślasz do czego dąże.
      Sprawdźmy więc co się dzieje gdy Δt zbliża się do 0. W chwili granicznej
      otrzymamy prędkość chwilową. Intuicja matematyczna, z pewnością podpowiada
      nam zastosowanie granicy gdy Δt dąży do 0, a podany iloraz to jest
      definicja pochodnej. Z tego wynika, że
    </Section>
    <Math center="true" nr="2.7">
      {\displaystyle v_{chwilowe}=\lim_{∆t \to 0}⁡\frac{x(t_0+ Δt)-x(t_0 )}{Δt}
      = x'(t)}
    </Math>
    <Section>
      Zapisy <Math>x'(t_0) , \dot x(t_0)</Math> oraz
      <Math>\frac{d}{dt}x(t_0)</Math> są oczywiście tożsame i symbolizują
      pochodną w danym punkcie <Math>t_0</Math>. My będziemy stosować
      najczęściej ten ostatni zapis dlatego, że jest najbardziej wygodny i
      pozwala na znacznie więcej niż pozostałe.
    </Section>
    <Section>
      Geometrycznie można więc powiedzieć, że prędkość chwilowa to nachylenie
      wykresu x(t) w danym punkcie, co jest oczywiste, bo skoro położenie
      wzrasta bardzo szybko to i nachylenie jego wykresu będzie ogromne.
      Właściwa zależność to v = tg α, gdzie α to nachylenie stycznej do wykresu
      funkcji x(t) w punkcie <Math>t_0</Math>.
    </Section>
    <Section>
      Pamiętając, że pochodną w punkcie możemy uogólnić na funkcję pochodna
      określoną w każdym punkcie t, w którym ona istnieje, uzyskamy zależność,
      że
    </Section>
    <Math center="true" nr="2.8">
      {\displaystyle v(t) = \frac{d}{dt}x(t) }
    </Math>
    <Section>
      Chcąc wyznaczyć przyspieszenie chwilowe postępujesz tak samo, i jest to
      pochodna, ale z funkcji v(t). Warto zaznaczyć, że mając funkcję x(t)
      jesteś w stanie znaleźć a(t) za pomocą drugiej pochodnej.
    </Section>
    <Math center="true" nr="2.8">
      {\displaystyle a(t) = \frac{d}{dt}v(t) = \frac{d^2}{dt^2}x(t)}
    </Math>
    <h3>Droga jako pole pod wykresem</h3>
    <Section>
      Na lekcji fizyki już w podstawówce najprawdopodobniej dowiedziałeś się, że
      droga jest równa polu pod wykresem v(t). To w zasadzie tyle, w zależności
      od tego jaki kształt tego wykresu tak musieliśmy kombinować. Jednak na
      studiach lub pod koniec szkoły średniej dowiedziałeś się o tym, że pole
      pod wykresem funkcji jest równe całce oznaczonej od a do b. Możemy użyć
      tej wiedzy w praktyce wyprowadzając wzór na drogę jako pole pod wykresem.
      Znając metody całkowania będziesz od teraz mógł policzyć drogę w podanym
      czasie wyrażoną poprzez dowolną funkcję.
    </Section>
    <Math center="true" nr="2.9">
      {\displaystyle s=\int_{t_1}^{t_2}v(t)dt}
    </Math>
    <Section
      >Całka nieoznaczona również jest użyteczna, gdyż całka nieoznaczona to
      pochodna „wstecz”, dlatego mając v(t) możemy wyznaczyć x(t) w ten sposób:
    </Section>
    <Math center="true" nr="2.10">{\displaystyle x(t)=\int v(t)dt}</Math>
  </Article>
</template>
