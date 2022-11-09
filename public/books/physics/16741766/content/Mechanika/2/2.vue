<template>
  <Article>
    <Begin nr="4.2" advanced="0"> Zasady dynamiki Newtona</Begin>
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
      drugą zasadą dynamiki Newtona. Nie jesteśmy w stanie go wyprowadzić, to
      jest po prostu postulat, a jeśli coś jest postulatem to znaczy, że nie
      wiemy z czego się bierze - po prostu tak działa świat.
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
      Pierwsza zasada wynika z drugiej. Rozważmy sytuację gdy siła jest równa 0.
      Jeżeli pochodna pędu jest równa 0 to najprostszy rachunek różniczkowy
      pokazuje, że pęd jest stały. Matematyk powiedziałby, że całkujemy
      obustronnie, ale dla nas to po prostu jest oczywiste.
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
  </Article>
</template>
