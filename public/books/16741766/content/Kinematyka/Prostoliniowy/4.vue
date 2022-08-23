<template>
  <Article>
    <Begin nr="2.4" advanced="1"> Wartość chwilowa i całkowita</Begin>
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
      {\displaystyle v_{chwilowe}=\lim_{\Delta t \to 0}⁡\frac{x(t_0+ \Delta
      t)-x(t_0 )}{\Delta t} = x'(t)}
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
