<template>
  <Article>
    <Begin nr="4.2" advanced="0"> Siły i ruch</Begin>
    <h3>Wplyw siły na ciało</h3>
    <Section>
      Zacznijmy od drugiej zasady dynamiki Newtona. Stanowi ona właściwie
      definicję tego jak siła działa na ciało. Według Newtona miarą
      przyspieszenia ciała jest siła jaka na niego działa. Wbrew temu, co często
      mówią ci na lekcjach to wcale nie był jego własny pomysł. Prawo to
      stosował chociażby Robert Hooke lata przed Newtonem. Newtonomi
      zawdzięczamy natomiast matematyczne sformułowanie tej zasady na papierze.
    </Section>
    <Section>
      Bezwładność ciał jest to zdolność ciał do przeciwstawiania się wszelkim
      zmianom ruchu. Miarą bezwładności ciała jest jego masa. Właśnie ona jest
      miarą proporcjonalności między siłą, a przyspieszeniem ciała. Im większa
      masa tym bardziej ciało <i>opiera się</i> zmianom jego prędkości pod
      wpływem sił. Ostatecznie możemy teraz wprowadzić równanie, które nazywamy
      drugą zasadą dynamiki Newtona. Nie jesteśmy w stanie go póki co
      wyprowadzić, to jest póki co postulat, a jeśli coś jest postulatem to
      znaczy, że nie wiemy z czego się bierze - po prostu tak działa świat.
    </Section>
    <Section>
      Tak naprawdę jednak jest to niemałe przekłmanie. Druga zasada dynamiki
      Newtona może być wyprowadzona jako szczególny przypadek w mechanice
      Lagrange'a lub Hamiltona. Mimo, że jej nie znamy to ja pokażę ci jak
      wygląda jej wyprowadzenie jako czystą ciekawostkę.
    </Section>
    <Formula nr="4.2"> \vec F = m \vec a</Formula>
    <Section>
      Jest to jednak sformułowanie uproszczone pod tym względem, że po pierwsze
      zakłada, że masa ciała jest stała, a po drugie nie jest użyteczne w
      bardziej skomplikowanych obliczeniach.
    </Section>
    <Section>
      Wprowadźmy nową wielkość zwaną pędem. Wbrew pozorom jest to jedna z
      najważniejszych wielkości w całej fizyce, o czym niejednokrotnie się
      przekonasz. Jego fundamentalna rola wynika chociażby z tego, że jest ona
      zachowany we wszystkich układach. W przypadku gdyby nie był, nie byłaby
      spełniona symetria względem przesunięć w przestrzenii. Innymi słowami,
      prawa fizyki są w naszym świecie niezmienne w każdym miejscu na świecie i
      w kosmosie. W przypadku gdyby pęd nie był zachowany to spełniona nie
      byłaby również ta symetria, a co za tym idzie prawa fizyki w każdym
      miejscu na świecie byłyby inne. Więcej o symetriach i zasadach zachowania
      dowiesz się gdy zajmiemy się mechaniką Lagrange'a.
    </Section>
    <Section>
      No dobrze, a czym ten pęd jest? Jest to iloczyn prędkości i masy układu, a
      oznaczamy go literką p.
    </Section>
    <Formula nr="4.3"> p = m v</Formula>
    <Section>
      W ten sposób możemy zdefiować drugą zasadę Newtona w uogólnionej postaci
      jako:
    </Section>
    <Formula nr="4.4"> \displaystyle F = \frac{dp}{dt} = \dot p</Formula>
    <Section>
      Możemy się przekonać w bardzo prosty sposób, że zapis ten jest równoważny
      z poprzednim, a jest dużo potężniejszy pod względem zastosowań.
    </Section>
    <Math>
      {\displaystyle {\vec {F}}={\frac {\mathrm {d} {\vec {p}}}{\mathrm {d}
      t}}={\frac {\mathrm {d} }{\mathrm {d} t}}(m{\vec {v}})=m{\frac {\mathrm
      {d} {\vec {v}}}{\mathrm {d} t}}=m{\vec {a}}.}
    </Math>
    <h3>Siły w równowadze</h3>
    <Section>
      Pierwsza zasada wynika po części z drugiej (jednak jest tu mały szczegół,
      o którym powiemy potem). Rozważmy sytuację gdy siła jest równa 0. Jeżeli
      pochodna pędu jest równa 0 to najprostszy rachunek różniczkowy pokazuje,
      że pęd jest stały. Matematyk powiedziałby, że całkujemy obustronnie, ale
      dla nas to po prostu jest oczywiste.
    </Section>
    <Math>\dot p = 0 \quad \Rightarrow \quad p = const.</Math>
    <Section>
      Jeżeli masa jest stała wtedy i prędkość musi pozostać stała, dlatego w
      szkole uczymy się uproszczonej zasady, zgodnie z którą jeśli na ciało nie
      działają żadne siły to nie zmienia ono swojej prędkości. Nie jest to
      jednak w pełni prawda, gdyż wymaganym warunkiem jest to, żeby ciało nie
      zmieniało swojej masy.
    </Section>
    <Section>
      Pierwszą zasadę dynamiki możemy zatem zapisać w uproszczony sposób przy
      założeniu, że masa jest stała w postaci:
    </Section>
    <Math>
      {\displaystyle \sum F=0 \Leftrightarrow {\frac {d v}{d t}}=0.}
    </Math>
    <Section>
      Pierwsza zasada dynamiki Newtona jest rozwinięciem idei Galileusza, który
      zauważył, że jeżeli usuniemy przeszkody ruchu, to zniknie potrzeba
      podtrzymywania ruchu przez jakąkolwiek siłę. Ruch jednostajny
      prostoliniowy będzie się odbywać sam przez siebie, bez żadnej pomocy z
      zewnątrz, o takim ruchu mówimy czasem jako o ruchu swobodnym. Galileusz
      stwierdza, że z każdym obiektem można związać układ odniesienia i że opisy
      tego samego ruchu w każdym układzie są równoważne. Stwierdzenie to
      nazywane jest zasadą względności o której mówiliśmy w pierwszym temacie z
      kinematyki. Galileusz opisał także sposób zamiany wielkości opisujących
      ruch, gdy zmieniany jest układ odniesienia, zwany transformacją
      Galileusza.
    </Section>

    <h3>Równania różniczkowe</h3>
    <Section>
      Niemal wszystkie prawa fizyki mają postać równań różniczkowych lub dają
      się w takiej postaci zapisać, a każdy fizyk znaczną część swrojego czasu
      poświęca rozwiązywaniu takich równań. Równania różniczkowe, związane z
      drugą zasadą dynamiki Newtona lub jego odpowiednikami w sformułowaniu
      lagranżowskim lub hamiltonowskim, pojawiają się w większości zadań w tej
      książce. Są bardzo zróżnicowane pod względem stopnia trudności: niektóre
      są tak łatwe do rozwiązania, że prawie nie zwraca się na nie uwagi.
      Rozwrażmy na przykład drugą zasadę dynamiki Newtona dla cząstki
      poruszającej się wzdłuż osi x pod działaniem stałej siły F.
    </Section>
    <Math>\displaystyle \ddot x = \frac{F}{m}</Math>
    <Section>
      Całkując otrzymujemy wzór na prędkość, natomiast robiąc to dwukrotnie
      otrzymujemy wzór na położenie ciała.
    </Section>
    <Math>\displaystyle x(t) = x_0 + v_0t + \frac{F}{2m}t^2</Math>
    <Section>
      Rozwiązanie tego równania było na tyle łatwe, że niepotrzebna była
      znajomość teorii równań różniczkowych. Będziemy jednak mieć do czynienia z
      wieloma równaniami różniczkowymi, których rozwiązanie wymaga znajomości
      tej teorii. Oczywiście, jeśli poznałeś już w jakimś stopniu teorię rówrnań
      różniczkowych, z pewnością będzie mu łatwiej śledzić wywody, jednak
      zapoznawfanie się z elementami tej teorii w miarę postępu nauki nie
      powinno nastręczać trudności. W istocie wielu naukowców uważa, że z tą
      teorią matematyczną najlepiej zapoznawać się właśnie w kontekście jej
      zastosowań fizycznych.
    </Section>
    <h3>Skąd się bierze druga zasada dynamiki? *</h3>
    <Section>
      Uwaga, to będzie hardcorowy rachunek i jedyne co z tego zrozumiesz to
      dlaczego nie mówią Ci o tym skąd się biorą równania Newtona. Jednak po
      przejściu całej książki okaże się, że jest to przypadek tak prosty, że
      wręcz oczywisty.
    </Section>
    <Section>
      Zasady dynamiki Newtona mogą być wyprowadzone z mechaniki Lagrange'a.
      Naszym zadaniem jest, aby doprowadzić tajemniczą wielkość S zwaną
      działaniem do minimum.
    </Section>
    <Math>
      {\displaystyle S = \int \limits _{t_{1}}^{t_{2}} \mathcal {L} (x(t), \dot
      x(t), t)dt}
    </Math>
    <Section>
      Centralną rolę w mechanice analitycznej pełni pewna funkcja zwana
      lagranżjanem. Zdefiniujmy go tu jako różnicę między energią kinetyczną i
      potencjalną.
    </Section>
    <Math> \displaystyle \mathcal {L} = \frac{1}{2}m\dot x ^2 - U</Math>
    <Section>
      Gdzie U to energia potencjalna. Aby doprowadzić działanie do minimum
      korzystamy z równań Eulera-Lagrange'a. Wyglądają one w ten sposób.
    </Section>
    <Math>
      \displaystyle \frac{d}{dt} \bigg( \frac{\partial \mathcal L}{\partial \dot
      x} \bigg ) -\frac{\partial \mathcal L}{\partial x} = 0
    </Math>
    <Section>
      Kilka przekształceń pozwala nam podać oba wyprowadzone przez nas wzory.
      Pierwszy segment równań Eulara-Lagrange określa pęd układu:
    </Section>
    <Math>
      \displaystyle p = \frac{\partial \mathcal L}{\partial \dot x} = m \dot x
    </Math>
    <Section>
      Drugi segment natomiast jest odpowiedzialny za pochodną pędu po czasie.
    </Section>
    <Math>
      \displaystyle \dot p = \frac{\partial \mathcal L}{\partial x} = -
      \frac{dU}{dx}
    </Math>
    <Section>
      Zakładając, że nasza siła jest siłą zachowawczą tj. praca wykonana przez
      tą siłę zależy tylko od wartości drogi, a nie toru ruchu (nasze typowe
      siły mechaniczne spełniają tę właściwość) możemy zdefiniować siłę jako
      gradient pewnego potencjału.
    </Section>
    <Math>\displaystyle F = - { \bigtriangledown U }</Math>
    <Section>
      W ten sposób otrzymujemy ostateczne równanie okazujące się drugą zasadą
      Newtona.
    </Section>
    <Math> \displaystyle \dot p = - \frac{dU}{dx} = F </Math>
  </Article>
</template>
