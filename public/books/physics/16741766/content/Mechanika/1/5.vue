<template>
  <Article>
    <Begin nr="3.5" advanced="1"> Ruch prostoliniowy i krzywoliniowy </Begin>

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
      Oczywiste, prawda? Prawie. Będzie oczywiste przez praktycznie całe 8 tomów
      tej książki, jednak w ostatnim tomie poświęconym grawitacji i astrofizyce
      okaże się, że nie zawsze tak jest. Musimy założyć jedno ważne założenie
      aby to zadziałało - czasoprzestrzeń musi być płaska.
    </Section>
    <Section>
      <Flex>
        Jako ciekawostkę mogę pokazać ci to równanie, ale w przestrzeni wygiętej
        w kształt fistaszka. Myślę, że często spotykamy się z czasoprzestrzenią
        wygiętą w kształt fistaszka, więc na pewno ci się to przyda. Tak w
        ramach przypomnienia używamy tu układu współrzędnych sferycznych.
        <!-- <img class="bob" src="/books/shared/img/duck.png" /> -->
      </Flex>
    </Section>
    <Math>
      ds^2 = r^2(d\theta^2 + \ \big[ sin \ \theta(1 - \frac{3}{4}sin^2 \ \theta)
      \big] ^2 d\phi^2)
    </Math>
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
