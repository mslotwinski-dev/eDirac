<template>
  <Article>
    <Begin nr="3.7" advanced="0"> Prędkość i przyspieszenie</Begin>
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
    <Section />
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
    <h3>Ruch na płaszczyźnie</h3>
    <Section>
      Wcześniej rozpatrywaliśmy ruch jednowymiarowy. Jak zatem opisać ruch w
      więcej niż jednym wymiarze? Wykorzystać możemy pierwszy wzór użyty w tym
      rozdziale. Różniczkując równanie obustronnie dostajemy wzór na prędkość w
      przestrzeni twójwymiarowej.
    </Section>
    <Formula nr="3.19">
      {\displaystyle \vec v = \frac{d \vec r}{dt} = \frac{dx}{dt}
      \htmlClass{hat}{\hat x} + \frac{dy}{dt} \htmlClass{hat}{\hat y} +
      \frac{dz}{dt} \htmlClass{hat}{\hat z}}
    </Formula>
    <Section>
      Analogicznie możemy postąpić, żeby otrzymać przyspieszenie. Proste,
      prawda? Przechodzimy dalej. Co jeśli nas nie interesuje równanie prędkości
      czy przemieszczeniam a sama jej wartość? Wystarczy obliczyć długość tego
      wektora z twierdzenia Pitagorasa.
    </Section>
    <Formula nr="3.20"> {\displaystyle ds^2 = dx^2 + dy^2 + dz^2} </Formula>
    <Section>
      Oczywiste, prawda? Prawie. Po pewnej małej modyfikacji (w przyszłości
      dodamy do tej równości czwarty wymiar czasowy), będzie oczywiste przez
      praktycznie całe 8 tomów tej książki, jednak w ostatnim tomie poświęconym
      grawitacji i astrofizyce okaże się, że nie zawsze tak jest. Musimy
      poczynić jedno ważne założenie aby to zadziałało - czasoprzestrzeń musi
      być płaska.
    </Section>
    <FunFact>
      <Flex>
        Jako ciekawostkę mogę pokazać ci to równanie, ale w przestrzeni wygiętej
        w kształt fistaszka. Myślę, że często spotykamy się z czasoprzestrzenią
        wygiętą w kształt fistaszka, więc na pewno ci się to przyda. Tak w
        ramach przypomnienia używamy tu układu współrzędnych sferycznych.
        <!-- <img class="bob" src="/books/shared/img/duck.png" /> -->
      </Flex>
      <Math>
        ds^2 = r^2(d\theta^2 + \ \big[ sin \ \theta(1 - \frac{3}{4}sin^2 \
        \theta) \big] ^2 d\phi^2)
      </Math>
    </FunFact>

    <Section>
      Wracamy na ziemię. Tak samo jak drogę, z twierdzenia pitagorasa możemy
      wyliczyć prędkość. Scałkowanie obustronne daje nam dodatkowy wzór na
      prędkość. Szczerze mówiąc, jest średnio użyteczny, ale zawsze warto o nim
      powiedzieć.
    </Section>
    <Formula nr="3.21">
      {\displaystyle s = \int \sqrt{\dot x^2 + \dot y^2 + \dot z^2}dt}
    </Formula>
    <h3>Przyspieszenie</h3>
    <Section>
      Wektor przyspieszenia jest w ogólnym przypadku nachylony pod pewnym kątem
      do toru. Rozważmy przypadek dwuwymiarowy, gdzie ciało porusza się po
      płaskiej powierzchni. Wektory jednostkowe osi tego układu oznaczymy
      kolejno:
      <M s=" \tau" /> (styczny), <M s=" \eta" /> (prostopadły), oraz b (drugi
      prostopadły tyle, że w górę, nie przyda się nam). Naturalny układ
      współrzędnych jest układem ruchomym, związanym z poruszającym się punktem.
    </Section>
    <Section>
      Możemy więc rozłożyć przyspieszenie tak jak roskładaliśmmy prędkość i
      przemieszczenie
    </Section>
    <Formula nr="3.22">
      {\displaystyle \vec a = a_\tau \tau + a_\eta \eta + a_b b}
    </Formula>
    <Section>
      Jako, że ruch jest zakrzywiony ma on pewien promień krzywizny R. Więcej o
      krzywiźnie będzie w temacie 11. Kilka prostych przekształceń pozwala nam
      wykazać, że
    </Section>
    <Math>
      {\displaystyle a_\tau = \frac{dv}{dt} = \dot v \quad a_\eta =
      \frac{v^2}{R} \quad a_b = 0}
    </Math>
    <Section> Zatem ruch punktu w dwóch wymiarach możemy opisać jako: </Section>
    <Formula nr="3.23">
      \displaystyle \vec a = \frac{dv}{dt} \tau + \frac{v^2}{R} \eta
    </Formula>
    <Section />

    <h3>Podział ruchów</h3>
    <Section>
      Ze względu na przyspieszenie prostopadłe rozróżnia się dwa rodzaje ruchów:
      <div style="margin: 3px 10px">
        a) Ruch prostoliniowy, jeżeli <M s="a_\eta" /> = 0,
      </div>
      <div style="margin: 3px 10px">
        b) Ruch krzywoliniowy, jeżeli <M s="a_\eta" /> ≠ 0,
      </div>
    </Section>
    <Section>
      Natomiast ze wzlędu na przyspieszenie styczne mówimy o trzech rodzajach
      ruchu:
      <div style="margin: 3px 10px">
        a) Ruch jednostajnym, jeżeli <M s="a_\tau" /> = 0,
      </div>
      <div style="margin: 3px 10px">
        b) Ruch jednostajnie zmienny, jeżeli <M s="a_\tau" /> = const,
      </div>
      <div style="margin: 3px 10px">
        b) Ruch niejednostajnie zmienny, jeżeli <M s="a_\tau" /> ≠ const,
      </div>
    </Section>
  </Article>
</template>
