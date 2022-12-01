<template>
  <Article>
    <Chapter nr="6" book="physics"> Pęd i moment pędu </Chapter>
    <Begin nr="6.1" advanced="0"> Zasada zachowania pędu </Begin>
    <h3>Jeszcze raz o akcji i reakcji</h3>
    <Section>
      Konsekwencją dwóch pierwszych równań Newtona jest stwierdzenie, że siła to
      pochodna pędu. Co jednak ciekawego wynika z 3 zasady? Załóżmy, że mamy dwa
      ciała punktowe, być może o różnych masach i oznaczmy jako 1 i 2. Siły
      działające pomiędzy nimi są równe i przeciwnie skierowane, co wynika z 3
      zasady dynamiki newtona. Co z tego wynika? Zogdnie z drugim prawen Newtona
      siła równa sie szybkości zmian pędu. Dochodzimy więc do wniosku, że
      szybkość zmian pędu pierwszej i drugiej muszą być takie same.
    </Section>
    <Math>\frac{dp_1}{dt} = \frac{dp_2}{dt} </Math>
    <Section>
      Zgodnie z matematyczną tożsamością dla pochodnych, że (a + b)' = a' + b',
      przenosząc równanie na jedną stronę otrzymujemy.
    </Section>
    <Math> \frac{d (p_1 + p_2)}{dt} = 0 </Math>
    <Section>
      Co po scałkowaniu daje nam równanie w postaci
      <M s="p_1 + p_2 = const" />. Co to dla nas oznacza?
    </Section>
    <Section>
      Zakładamy w naszym przykładzie, że nie ma innych sił. To, co otrzymaliśmy
      dowodzi temu, że w zamkniętym układzie pęd jest zawsze zachowany. W ten
      sposób wyrażamy zasadę zachowania pędu. Rozumowanie to możemy rozszerzyć o
      przypadek wielu różnych ciał, co daje nam ostateczną zasadę.
    </Section>
    <Formula nr="6.1"> {\sum} _{i} m_i v_i = const</Formula>
    <Section>
      Zasad zachowania jest przynajmniej kilka. Wiemy o tym, że zachowane są
      bezwzględnie energia, pęd, moment pędu oraz ładunek. Wszystko spoko tylko
      jakiś nudny ten dowód. Wiesz niby ma sens, tak bez fajerwerków. Typowy
      wykład mechaniki poszedłby dalej, ale ja nie jestem ani typowym, ani
      wykładowcą, ani tym bardziej mechaniki, dlatego pokażę Ci znacznie
      ciekawszy dowód.
    </Section>
    <h3>Symetrie, a zasady zachowania</h3>
    <Section>
      Teraz opowiem ci troszkę więcej o mechanice Lagrange'a. Jeśli interesujesz
      się fizyką to będzie dla ciebie zalążek tego, czego za jakiś czas będziesz
      miał już dość i przez co nie będziesz spał całe noce. Dla niefizyków -
      oddech czymś zupełnie nowym. Nie będą tego od ciebie wymagać, ale podam to
      w formie ciekawostki.
    </Section>
    <Section>
      Jak kiedyś mówiłem, ale przypomnę, centralną rolę pełni w niej tzw.
      funkcja Lagrange'a, zwana lagranżjanem. Możemy lagranżjan przypisać
      każdemu układowi, a będzie on równy różnicy jego energii kinetycznej i
      potencjalnej.
    </Section>
    <Math>\mathcal L(q, \dot q, t) = T - U</Math>
    <Section>
      Czym jest tutaj q? Jest to tak zwana współrzędna uogólniona. Co to
      oznacza? Że możemy wybrać dokładnie taką, jaką chcemy. Możemy opisać
      lagranżjan w jednym wymiarze jako <M s="\mathcal L(x, \dot x, t)" />,
      możemy w trzech wymiarach jako <M s="\mathcal L(r, \dot r, t)" />, a nawet
      we współrzędnych krzywoliniowych jako
      <M s="\mathcal L(\varphi, \dot \varphi, t)" /> otrzymując dokładnie ten
      sam wynik. Świetne, prawda?
    </Section>
    <Section>
      Lagranżjan ten może podlegać tak zwanym symetriom. Czym jest symetria? Na
      przykład odbijając w lustrze skrzydło motyla albo obracając się o kąt 360
      stopni otrzymamy ten sam układ, co wcześniej. Dokładnie tak samo może stać
      się z lagranżjanem, po pewnej jego transformacji możemy otrzymać taki sam
      lagranżjan jak wcześniej. W jakim przypadku?
    </Section>
    <Section>
      Rozważmy swobodną cząstke bez energii potencjalnej, poruszającą się z
      jakąś prędkością w jednym wymiarze. Jej lagranżjan będzie dany wzorem na
      energię kinetyczną.
    </Section>
    <Math>\mathcal L = \frac{1}{2}m \dot x^2</Math>
    <Section>
      Co się stanie jednak gdy przesuniemy ten układ o pewną odległość w
      przestrzeni powiedzmy o odległość a? Lagranżjan będzie miał roboczo taką
      postać:
    </Section>
    <Math> \mathcal L = \frac{1}{2}m \dot {(x + a)} ^2 </Math>
    <Section>
      Możesz jednak zauważyć, że dodanie wartości stałej nie zmieni wartości
      pochodnej. To wynika wprost z jej definicji pochodnej. Lagranżjan więc nie
      zmienił się podczas przesunięcia w przestrzeni, a więc otrzymaliśmy
      symetrię względem przesunięcia. Tylko co to nam daje?
    </Section>
    <Section>
      Okazuje się zgodnie z tak zwanym twierdzeniem Noether, że każda symetria
      lagranżjanu oznacza, że jakaś wielkość jest tu zachowana. W przypadku
      przesunięć w przestrzeni jest to właśnie nic innego, jak pęd. Dlaczego
      akurat przesunięcia? To już inna sprawa, ale każda symetria generuje coś
      innego. Symetria względem czasu daje nam zasadę zachowania energii, a
      względem obrotów zasadę momentu pędu.
    </Section>
    <Section>
      Musisz przyznać, że jest to ciekawszy dowód i co najlepsze z góry załatwia
      nam wszystkie zasady zachowania.
    </Section>
  </Article>
</template>
