<template>
  <Article>
    <Begin nr="3.5" advanced="0"> Ruch prostoliniowy i krzywoliniowy </Begin>

    <h3>Ruch na płaszczyźnie</h3>
    <Section>
      Wcześniej rozpatrywaliśmy ruch jednowymiarowy. Jak zatem opisać ruch w
      więcej niż jednym wymiarze? Wykorzystać możemy pierwszy wzór użyty w tym
      rozdziale. Różniczkując równanie obustronnie dostajemy wzór na prędkość w
      przestrzeni twójwymiarowej.
    </Section>
    <Formula nr="3.19">
      {\displaystyle \vec v = \frac{d \vec r}{dt} = \frac{dx}{dt} \hat{x} +
      \frac{dy}{dt} \hat{y} + \frac{dz}{dt} \hat{z}}
    </Formula>
    <Section>
      Analogicznie możemy postąpić, żeby otrzymać przyspieszenie. Proste,
      prawda? Przechodzimy dalej. Co jeśli nas nie interesuje równanie prędkości
      czy przemieszczeniam a sama jej wartość? Wystarczy obliczyć długość tego
      wektora z twierdzenia Pitagorasa.
    </Section>
    <Formula nr="3.20"> {\displaystyle ds^2 = x^2 + y^2 + z^2} </Formula>
    <Section>
      Oczywiste, prawda? Prawie. Będzie oczywiste przez praktycznie całe 8 tomów
      tej książki, jednak w ostatnim tomie poświęconym grawitacji i astrofizyce
      okaże się, że nie zawsze tak jest. Musimy założyć jedno ważne założenie
      aby to zadziałało - czasoprzestrzeń musi być płaska. Jako ciekawostkę mogę
      pokazać ci to równanie, ale w przestrzeni wygiętej w kształt fistaszka.
      Myślę, że często spotykamy się z czasoprzestrzenią wygiętą w kształt
      fistaszka, więc na pewno ci się to przyda. Tak w ramach przypomnienia
      używamy tu układu współrzędnych sferycznych.
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
  </Article>
</template>
