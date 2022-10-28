<template>
  <Article>
    <Begin nr="3.4" advanced="0"> Prędkość i przyspieszenie</Begin>
    <h3>Wartość zmienna i chwilowa</h3>
    <Section>
      Przyjrzyjmy się ogólnemu przypadkowi, kiedy prędkość nie jest stała.
      Sprawa będzie wyglądać tak samo przy każdym wzorze, więc wyprowadzę ją
      tylko raz, natomiast wyprowadzanie chwilowej wartości będzie odbywać się
      tak samo. W tym ogólniejszym przypadku podany wyżej wzór prędkość opisuje
      nam prędkość średnią. Kiedy prędkość jest stała, prędkość średnia to po
      prostu prędkość. Wzór ten ma postać:
    </Section>
    <Formula nr="3.13">
      {\displaystyle v_{śr} = \frac{\Delta x}{\Delta t}}
    </Formula>
    <Section>
      A co jeśli chcemy przy zmiennym ruchu poznać nie prędkość średnią, a
      chwilową? Sprawdźmy więc co się dzieje gdy Δt zbliża się do 0. W chwili
      granicznej otrzymamy prędkość chwilową. Intuicja matematyczna, z pewnością
      podpowiada nam zastosowanie granicy gdy Δt dąży do 0, a podany iloraz to
      jest definicja pochodnej. Z tego wynika, że
    </Section>
    <Formula nr="3.14">
      {\displaystyle v(t_0) =\lim_{\Delta t \to 0}⁡\frac{\Delta x}{\Delta t} =
      \frac{d}{dt}x(t_0) = \dot {x}(t_0)}
    </Formula>
    <Section>
      Zapisy x'<M c="(t_0), \dot x(t_0)" />, oraz
      <M c="\frac{d}{dt}x(t_0)" /> są oczywiście tożsame i symbolizują pochodną
      w danym punkcie <M s="t_0" />. My będziemy stosować najczęściej te dwa
      ostatnie zapisy. Zapis z kropką jest najszybszy i symbolizuje pochodną po
      czasie, natomiast zapis w formie różniczek dx i dt jest bardziej elegancki
      i znacznie potężniejszy pod względem tego, co oferuje - pozwala na
      znacznie więcej, szczególnie w kontekście równań różniczkowych.
    </Section>
    <Section>
      Geometrycznie można więc powiedzieć, że prędkość chwilowa to nachylenie
      wykresu x(t) w danym punkcie, co jest oczywiste, bo skoro położenie
      wzrasta bardzo szybko to i nachylenie jego wykresu będzie ogromne.
      Właściwa zależność to v = tg α, gdzie α to nachylenie stycznej do wykresu
      funkcji x(t) w punkcie <M s="t_0" />.
    </Section>
    <Section>
      Pamiętając, że pochodną w punkcie możemy uogólnić na funkcję pochodna
      określoną w każdym punkcie t, w którym ona istnieje, uzyskamy zależność,
      że
    </Section>
    <Formula nr="3.15"> {\displaystyle v = \frac{d}{dt}x = \dot x } </Formula>
    <Section>
      Znając ten wzór możesz zapomnieć wszystkie poprzednie. W nim zawierają się
      wszystkie wzory użyte dotąd w tym dziale i znacznie znacznie więcej. Ten
      jeden wzór pozwala ci od teraz policzyć każde zadanie z kinematyki bez
      względu jaki to rodzaj ruchu. Fajne, prawda? Jedyny warunek to znać
      rachunek różniczkowy i całkowy, co zakładam, że biorąc się za tę ksiązkę
      opanowałeś do perfekcji tak jak walenie piwa przed wykładem.
    </Section>
    <Section>
      Chcąc wyznaczyć przyspieszenie chwilowe postępujesz tak samo, i jest to
      pochodna, ale z funkcji v(t). Warto zaznaczyć, że mając funkcję x(t)
      jesteś w stanie znaleźć a(t) za pomocą drugiej pochodnej.
    </Section>
    <Formula nr="3.16">
      {\displaystyle a = \frac{d}{dt}v = \frac{d^2}{dt^2}x = \ddot x}
    </Formula>
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
    <Formula nr="3.17"> {\displaystyle s=\int_{t_1}^{t_2}v(t)dt} </Formula>
    <Section>
      Całka nieoznaczona również jest użyteczna, gdyż całka nieoznaczona to
      pochodna „wstecz”, dlatego mając v(t) możemy wyznaczyć x(t) w ten sposób:
    </Section>
    <Formula nr="3.18">{\displaystyle x(t)=\int v(t)dt}</Formula>
    <h3>Ruch w 3 wymiarach</h3>
  </Article>
</template>
