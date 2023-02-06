<template>
  <Article>
    <Begin nr="4.8" advanced="0">
      Zasady dynamiki w układzie współrzędnych
    </Begin>
    <h3>Rozkład sił</h3>
    <Section>
      Zakładając, że masa jest stała siłę możemy zapisać jako iloczym
      przyspieszenia i masy. To jest dość oczywiste. Co jednak gdy mamy do
      czynienia z bardziej skomplikowanym rozkładem sił? Najczęściej ogólny wzór
      rozkładamy na 3 składowe. W ten sposób otrzymujemy równoważność.
    </Section>
    <Formula nr="4.11">
      \displaystyle \vec F = m \vec a \quad \Leftrightarrow \quad \begin{cases}
      \ F_x = m \ddot x \\ \ F_y = m \ddot y \end{cases}
    </Formula>
    <Section />
    <h3>Równia pochyła</h3>
    <Section>
      Sztandarowym przykładem użycia równań Newtona do rozwiązywania problemów
      mechanicznych jest równia pochyła. Jest to w zasadzie jakakolwiek płaska
      powierzchnia pochylona pod pewnym kątem. Zacznijmy od analizy sił.
    </Section>
    <Image src="dynamika/6.png">Rozkład sił na równi pochyłej</Image>
    <Section>
      Ciężar ciała na równi jest równy mg, jednak jego nacisk na równie, jak i
      reakcja równi, są prostopadłe do jej powierzchni i wynoszą
      <M s="mg \ cos \theta" />. Siła styczna, która zsuwa naszą masę jest równa
      <M s="mg \ sin \theta" />.
    </Section>
    <Section>
      Zakładając, że siły tarcia nie występują możemy przyrównać siłę zsuwania
      do wzoru Newtona. W tym przypadku dostajemy:
    </Section>
    <Math>\displaystyle ma = mg \ sin \theta</Math>
    <Section>
      Co po skróceniu daje nam przyspieszenie, jakie doznaje zsuwane ciało.
    </Section>
    <Math>\displaystyle a = g \ sin \theta</Math>
    <Section>
      Nie jest to jednak przypadek, jaki nas interesuje. Dołożymy tutaj siłę
      tarcia. W tym przypadku wypadkowa siła zsuwająca będzie równa
    </Section>
    <Math>
      \displaystyle F = mg \ sin \theta - N \mu = mg \ sin \theta - mg \ cos
      \theta \mu
    </Math>
    <Section>Przyspieszenie zsuwającego ciężarku jest wtedy równe</Section>
    <Formula nr="4.12">
      \displaystyle a = g (sin \theta - \mu cos \theta)
    </Formula>
    <Section>
      Jako ćwiczenie dla bardziej zaawanaowanych możesz spróbować udowodnić ten
      wzór, który również możesz stosować.
    </Section>
    <Math>
      \displaystyle a = g \sqrt{ 1 + \mu^2} \ sin(\theta + arctg (-\mu))
    </Math>
    <h3>Biegunowe układy sił *</h3>
    <Section>
      Zaletą współrzędnych kartezjańskich jest ich prostota, jak się jednak
      przekonamy, rozwiązanie niektórych zadań jest niemal niemożliwe bez użycia
      różnych układów współrzędnych krzywoliniowych. Aby zilustrować trudności
      pojawiające się w takich układach współrzędnych, zastanówmy się, jaką
      postać przyjmie druga zasada dynamiki Newtona w przypadku zagadnienia
      płaskiego, opisywanego za pomocą współrzędnych biegunowych.
    </Section>
    <Section>
      Podobnie jak we współrzędnych kartezjańskich, wygodnie jest wprowadzić dwa
      prostopadłe do siebie wersory, które będziemy oznaczali
      <M s="\htmlClass{hat}{\hat r}" /> i
      <M s="\htmlClass{hat}{\hat \varphi}" />. Ważny jest fakt, że wersory w
      układzie kartezjańskim nie zmieniają się niezależnie od tego jaki punkt
      byśmy nie wybrali, natomiast w układzie biegunowym oba wersory zmieniają
      się w zależności od wybranego punktu (odcinek jest w końcu w innym
      kierunku i nachylony pod innym kątem).
    </Section>
    <Section>
      Siłę możemy zapisać zatem tradycyjnie jako układ sił w dwóch składowych:
    </Section>
    <Math>
      \vec F = F_r \htmlClass{hat}{\hat r} + F_\varphi \htmlClass{hat}{\hat
      \varphi}
    </Math>
    <Section>
      Jeśli rozważane ciało jest kamieniem poruszającym się po okręgu,
      przymocowanym do linki, której drugi koniec trzymam w ręce, to
      <M s="F_r" /> będzie siłą naprężenia linki, a <M s="F_\varphi" />, siłą
      oporu powietrza, hamującą ruch w kierunku stycznym do okręgu. Naszym
      pierwszym zadaniem jest znaleźć pochodną wersora r, a wynosi ona
    </Section>
    <Math>
      \displaystyle \frac{d}{dt} \htmlClass{hat}{\hat r} = \dot \varphi
      \htmlClass{hat}{\hat \varphi}
    </Math>
    <Section>
      Dysponując wyrażeniem na pochodną wersora r, możemy obliczyć pochodną po
      czasie wektora r. Korzystając ze wzoru na pochodną iloczynu, otrzymujemy
      dwa człony:
    </Section>
    <Formula nr="4.13">
      \displaystyle \vec v = \dot r \htmlClass{hat}{\hat r} + r \dot \varphi
      \htmlClass{hat}{\hat \varphi}
    </Formula>
    <Section>
      Różniczkując natomiast ponownie otrzymujemy wzór na przyspieszenie
    </Section>
    <Math>
      \displaystyle \vec a = \frac{d}{dt} (\dot r \htmlClass{hat}{\hat r} + r
      \dot \varphi \htmlClass{hat}{\hat \varphi})
    </Math>
    <Section>
      Jedyne, co nam jest w tym przypadku potrzebne to pochodna po czasie
      wersora <M s="\varphi" />. Tym razem znowu możesz zaufać na słowo, że jest
      to:
    </Section>
    <Math>
      \displaystyle \frac{d}{dt} \htmlClass{hat}{\hat \varphi} = - \dot \varphi
      \htmlClass{hat}{r}
    </Math>
    <Section>
      Teraz możemy wykonać różniczkowanie otrzymując wzór na przyspieszenie w
      uporządkowanej postaci:
    </Section>
    <Formula nr="4.14">
      \vec a = (\ddot r - r \dot \varphi^2) \htmlClass{hat}{\hat r} + (r \ddot
      \varphi + 2 \dot r \dot \varphi) \htmlClass{hat}{\hat \varphi}
    </Formula>
    <Section>
      Ten paskudny wzór nieco łatwiej zrozumieć, jeśli rozwrażymy szczególny
      przypadek, gdy r jest stałe, jak w przypadku kamienia zaczepionego na
      końcu linki o stałej długości, na którym wymuszamy ruch po okręgu. Przy
      stałym r obie pochodne r są równe zeru, dzięki czemu ostateczne
      przyspieszenie jest równe:
    </Section>
    <Math>
      \vec a = -r \omega^2 \htmlClass{hat}{\hat r} + r \varepsilon
      \htmlClass{hat}{\hat \varphi}
    </Math>
    <Section>
      Gdzie pierwszy człon to przyspieszenie dośrodkowe o wartości
      <M s="v^2/R" /> zwrócone do środka okręgu (stąd znak minus), natomiast
      pozostały człon odpowiada za przyspieszenie kątowe. Ostatecznie zasady
      newtona we współrzędnych biegunowych przyjmują postać:
    </Section>
    <Formula nr="4.15">
      \displaystyle \vec F = m \vec a \quad \Leftrightarrow \quad \begin{cases}
      \ F_r = m (\ddot r - r \dot \varphi^2 )\\ \ F_\varphi = m (r \ddot \varphi
      + 2 \dot r \dot \varphi) \end{cases}
    </Formula>
    <Section>
      Te równania są znacznie bardziej skomplikowane niż proste równania we
      współrzędnych kartezjańskich. Tak naprawdę jedną z przyczyn, dla których
      podejmuje się trud sformułowania mechaniki newtonowskiej w podejściu
      Lagrange’a, jest fakt, że w tym formalizmie posługiwanie się współrzędnymi
      krzywoliniowymi jest równie łatwe co współrzędnymi kartezjańskimi.
    </Section>
    <h3>Oscylator</h3>
    <Section>
      Druga zasada dynamiki we współrzędnych biegunowych ma tak skomplikówany
      wygląd, że ktoś całkiem zasadnie mógłby pomyśleć, że nigdy nie znajdzie
      ona zastosowania. Tak naprawdę jednak jest wiele zagadnień, które
      najłatwiej rozwiązuje się właśnie we współrzędnych biegunowych. Jakie na
      przykład?
    </Section>
    <Section>
      Rozpatrzymy układ, który w fizyce nazywa się oscylatorem lub inaczej
      wahadłem. Jego specyfika polega na tym, że niczym wahadło porusza się od
      jednego skrajnego położenia do drugiego. W tym przypadku będzie to
      deskorolka na rampie.
    </Section>
    <Example title="Deskorolka">
      <Section>
        Na placach dla deskorolkarzy można natrafić na konstrukcję onazwie
        <i>half-pipe</i>. Przypomina ona walcową rynnę o betonowych ścianach.
        Puszczamy deskorolkę na brzegu <i>rynny</i> o promieniu 5m. Korzystając
        z zasad dynamiki Newtona, opisz ruch deskorolki przy założeniu, że
        wszelkie opory ruchu można pominąć. W przypadku, kiedy początkowe
        położenie deskorolki znajduje się blisko najniższego punktu rynny,
        oblicz czas, po jakim deskorolka wróci do położenia początkowego.
      </Section>
      <b>Rozwiązanie</b>
      <Section>
        Deskorolka może poruszać się tylko po okręgu, więc zagadnienie
        najłatwiej opisać we współrzędnych biegunowych. Jeśli R jest stałe,
        druga zasada dynamiki przyjmuje postać:
      </Section>
      <Math>
        F_r = -mR\dot \varphi ^2, \qquad F_\varphi = -mR\dot \varphi ^2
      </Math>
      <Section>
        Na deskorolkę działają dwie siły: jej ciężar w = mg i siła reakcji rynny
        N, skierowana prostopadle do jej powierzchni. Łatwro się przekonać, że
        składowe całkowitej siły F mają następującą postać:
      </Section>
      <Math>
        F_r = mg \ cos \varphi - N, \qquad F_\varphi = -mg \ sin \varphi
      </Math>
      <Section>
        Interesuje nas zmiana kąta, więc wykorzystamy drugie wyrażenie, które
        podstawiając do wzoru na <M s="F_\varphi" /> daje nam wzór.
      </Section>
      <Math>-mg \ sin \varphi = m R \ddot \varphi</Math>
      <Section>
        Co po skróceniu i uporządkowaniu daje nam następujące równanie
        różniczkowe:
      </Section>
      <Math>\displaystyle \ddot \varphi = - \frac{g}{R} \ sin \varphi</Math>
      <Section>
        Jest to tak zwane równanie wahadła matematycznego i na nasze
        nieszczęście jest to różniczkowe równanie... Nieliniowe...
      </Section>
      <Section>
        Nieliniowe równania różniczkowe są praktycznie nierozwiązywalne. Jedyne,
        co możemy zrobić to wyznaczyć przybliżone równanie dla małych wychyleń
        przyrównując sinus kąta do wartości tego kąta. Wprowadzając dodatkowy
        parametr
      </Section>
      <Math>\omega = \sqrt{\frac{g}{R}}</Math>
      <Section>Otrzymujemy równanie w postaci:</Section>
      <Math>\ddot \varphi = - \omega ^2 \varphi</Math>
      <Section>
        To równanie potrafimy już rozwiązać i w efekcie daje nam ono rodzinę
        funkcji:
      </Section>
      <Math>
        \varphi(t) = A \ sin(\omega t) + B \ cos(\omega t) = C \ sin (\omega t +
        \varphi_0)
      </Math>
      <Section>
        Patrząc na to rozwiązanie, możemy przede wszystkim powiedzieć, że
        zgodnie z tym, czego spodziewaliśmy się, nasza deskorolka oscyluje,
        przechodząc nieustannie w sposób okresowy od wartości dodatnich do
        wartości ujemnych, a potem znówr do wrartości dodatnich. W
        szczególności, deskorolka po raz pierwszy wraca do położenia
        początkowego, gdy <M s="\omega t = 2\pi" />. Czas potrzebny na wykonanie
        takiego ruchu nazywa się okresem ruchu i jest oznaczany jako t .
        Dochodzimy zatem do wniosku, że okres oscylacji deskorolki dany jest
        wzorem
      </Section>
      <Math> t = \frac{2\pi}{\omega} = 2\pi \sqrt{\frac{g}{R}}</Math>
      <Section>
        Co podstawiając do warunków zadania daje nam 4,5 sekundy, co kończy
        zadanie.
      </Section>
    </Example>
    <Section>
      Najważniejsze wnioski jakie powinieneś wyciągnąć z tego przykładu to po
      pierwsze wzór na okres drgań wahadła:
    </Section>
    <Formula nr="4.16">\omega = \sqrt{\frac{g}{l}} </Formula>
    <Section>
      gdzie w ogólności l to długość promienia czy linki naszego wahadła. Drugie
      ważne równanie to równanie wahadła matematycznego w postaci
    </Section>
    <Formula nr="4.17">
      \displaystyle \ddot \varphi = - \frac{g}{l} \ sin \varphi
    </Formula>
    <Section>
      które dla małych kątów upraszcza się do równania różniczkowego, którego
      rozwiązaniem jest znane nam ze szkoły równanie falowe
    </Section>
    <Formula nr="4.18"> \varphi(t) = A \ sin (\omega t + \varphi_0) </Formula>
    <Section>
      gdzie A to jest amplituda fali (maksymalne jej wychylenie).
    </Section>
    <Section>
      Szerzej o naturze drgań i fal porozmawiamy w drugim tomie w części
      dotyczącej drgań i fal mechanicznych. Pojęcie fal jednak nie ogranicza się
      do mechaniki i tak w tomie 4 i 5, spotkamy fale elektromagnetyczne, a w
      tomie 6 i 8, poznamy funkcje falowyme układów kwantowych. Już teraz
      powinieneś wiedzieć, że właściwie cała nasza materia składa się z fal,
      każdy obiekt i każde oddziaływanie jest falą i nawet tekst, który czytasz
      zapisany jest na pewnej fali materii.
    </Section>
    <Section>
      No i każda fala to też cząstka ale to już temat na osobną dyskusję.
      Logiczna ta fizyka.
    </Section>
  </Article>
</template>
