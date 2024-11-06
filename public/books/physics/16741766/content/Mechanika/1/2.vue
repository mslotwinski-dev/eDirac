<template>
  <Article>
    <Begin nr="3.2" advanced="0"> Tor ruchu </Begin>
    <h3>Tor ruchu w mechanice klasycznej</h3>
    <Section>
      Tor ruchu to krzywa zakreślana w przestrzeni przez wybrany punkt
      poruszającego się ciała. Możemy go wyznaczyć poprzez wyznaczenie równań
      współrzędnych w zależności od czasu, a następnie dopasowaniu do pewnego
      rodzaju krzywej. Najczęściej spotkasz się z krzywymi dwuwymiarowymi,
      ponieważ wiele zagadnień da się <i>spłaszczyć</i>, co nie oznacza, że jest
      to jakaś świętość. Jednym z częstszych rodzajów ruchu stricte
      trójwymiarowych jest ruch śrubowy (pole elektromagnetyczne). Właściwości
      naszej przestrzeni postulowane przez mechanikę pozwalają nam na
      rozpatrywanie każdej współrzędnej ruchu niezależnie i zasada ta działa nie
      ważne jaki układ współrzędnych dobierzemy do naszego zagadnienia. Ułatwia
      nam to również fakt, że równania ruchu w fizyce mają najczęściej charakter
      wektorowy. Równania Newtona, Lagrange'a, d'Alamberta... Są to liniowe
      równania różniczkowe, najczęściej pierwszego lub drugiego rzędu.
    </Section>
    <Section>
      Gdy uda Ci się takie równanie rozwiązać otrzymasz zestaw równań, z których
      każde wyraża jawnie wzór na daną współrzędną. Może to być na przykład
      układ [<M s="x(t), y(t)" />] lub [<M s="r(t), \varphi(t)" />]. Tor ruchu w
      tym przypadku będzie równaniem y(x) lub x(y) w zależności od naszych
      potrzeb i możliwości (analogicznie we współrzednych biegunowych jest to
      r(<M s="\varphi" />) lub <M s="\varphi" />(r)). Jak to zrobić? Wyznaczając
      funkcję odwrotną.
    </Section>
    <Section>
      Trzymajmy się już układu kartezjańskiego i ustalmy, że nasz ruch odbywa
      się wzdłuż krzywej r = [<M s="t^3" />,<M s="sin \ t" />]. Interesuje nas
      funkcja y(x). Wiemy, że funkcje x(t) oraz y(t) są zależne od czasu.
      Odwróćmy więc funkcję x(t) tak, aby otrzymać t(x), a następnie wstawmy
      otrzymany w ten sposób czas do równania na współrzędną y otrzymując
      funkcję y(t(x)) = y(x). Odwracając funkcję <M s="t^3" /> otrzymujemy
      równanie t = <M s="^3\sqrt x" />. Teraz wysatrczy wstawić je do równania
      na y otrzumując y(x) = sin (<M s="^3\sqrt x" />). Proste, prawda? Po
      wygenerowaniu wykresu funkcji tor ruchu ciała, które analizowaliśmy
      prezentuje się następująco.
    </Section>
    <Image src="kinematyka/9.png" />
    <h3>Warunki wyznaczalności</h3>
    <Section>
      Kiedy za nami są proste teorie czas na zderzenie ze skomplikowaną
      rzeczywistością. Pierwszy problem jest natury czysto matematycznej, a
      drugi określiłbym jako numeryczny. Bo co jeśli nasze współrzędne przybrały
      postać r = [<M s="t^2" />,<M s="t \ sin(t)" />]?
    </Section>
    <Section>
      Aby funkcja odwrotna była wyznaczalna musi spełniać dwa matematyczne
      warunki. Musi być różnowartościowa oraz musi być funkcją "na". Dla nas
      istotny będzie ten pierwszy warunek. Funkcja <M s="t^2" /> nie jest
      różnowartościowa. W tym przypadku rozwiązaniem jest zawężenie dziedziny do
      liczb dodanich, ale usuwamy w ten sposób część dziedziny.
    </Section>
    <Section>
      Znacznie gorzej sprawa wygląda w przypadku równania y(t). Odwrócenie tego
      równania jest niemożliwe i tu nie chodzi o jakikolwiek z warunków
      matematycznych (chociaż warunku różnowartościowości funkcja ta nie
      spełnia). Choćby funkcja ta była różnowartościowa to i tak wyznaczenie
      funkcji odwrotnej byłoby niemożliwe za pomocą funkcji elementarnych.
      Owszem, da się taką funkcję zapisać, ale nie będzie ona wyrażana
      jakimikolwiek funkcjami, które znamy jak dodawanie czy mnożenie. Generalna
      zasada jest taka, że gdy obok siebie stoją funkcje różnego rodzaju np.
      <M s="x + lnx" /> lub <M s="xe^x" /> to raczej tego nie odwrócimy.
    </Section>
    <Section>
      Żeby zaspokoić twoją ciekawość mimo wszystko pokażę ci jak wygląda tor
      ruchu omawianego powyżej ciała.
    </Section>
    <Image src="kinematyka/10.png" />
    <Section>
      Problem odwracalności funkcji wbrew teoretycznym przykładom, które
      przytoczyłem wcale nie jest czysto matematyczny i potrafi nam
      niejednokrotnie zatruć życie. Przykładem takiego równania jest równanie
      Keplera, którym zajmiemy się w rozdziale 12 dotyczącym grawitacji. Stanowi
      ono wzór na czas podczas obiegu elipsy uzależniając go od kąta (a
      wlaściwie anomalii mimośrodowej) u, jaki zakreśla planeta podczas obrotu.
    </Section>
    <Math>
      t = \pm \sqrt{\frac{\mu a^3}{\alpha}}(u - \epsilon sin \ u) + t_0
    </Math>
    <Section>
      Równania w których to czas jest funkcją drogi są w fizyce (na szczęście)
      rzadko spotykane, ale niestety istnieją. Fakt, że równanie to z mojej
      fizycznej estetyki (do której zamierzam cię zindoktrynować) jest paskudne,
      nie sprawia jednak, że jest całkiem bezużyteczne. Nawet brzydkie rzeczy
      można wykorzystać (morał ten warto przenieść do swojego życia osobistego).
      Zauważmy na przykład, jeśli kąt u będzie wynosić <M s="2\pi" /> to planeta
      na logikę powinna wykonać cały obrót. Nie wiemy oczywiście co to za kąt,
      bo fakt, że nazywa się anomalią mimośrodową nas co najwyżej może
      przestraszyć, ale podążmy dalej tą chłopskorozumową intuicją. Jeśli
      planeta wykona cały obrót to zmienne czasowe powinny się zredukować do
      okresu obiegu. Gdy zastosujemy tą implikację otrzymujemy w ten sposób...
      Trzecie prawo Keplera!
    </Section>
    <Math> T^2 = 4\pi^2\frac{\mu a^3}{\alpha} = \frac{4\pi^2}{G(M+m)}a^3 </Math>
    <h3>Tor ruchu w postaci uwikłanej</h3>
    <Section>
      Wyobraź sobie ruch sparametryzowany równaniem x = R sin t, y = R cos t.
      Jest to równanie okręgu wyrażone w postaci parametycznej. Taka postać jest
      bardzo wygodna w analizie matematycznej. Chcąc bowiem policzyć całkę po
      krzywej najpierw musimy ją sparametryzować. Można łatwo wykazać że postać
      parametryczna to rzeczywiście okrąg. Dzieląc obie strony każdego równania
      przez r, a następnie podnosząc do kwadratu.
    </Section>
    <Math>
      sin^2t = \left( \frac{x}{R}\right)^2, cos^2t = \left( \frac{y}{R}\right)^2
    </Math>
    <Section>
      Korzystając z jedynki trygonometrycznej
      <M s=" sin^2t + cos^2t = 1 " /> naszym oczom ukazuje się równanie okręgu.
    </Section>
    <Math>x^2 + y^2 = R^2 </Math>
    <Section>
      Jest to równanie okręgu w postaci uwikłanej. Chcąc przejść do równania w
      jawenej postaci y(x) musimy przenieść <M s="x^2" /> na prawą stronę, a
      następnie spierwiastkować. Jednak czy na pewno chcemy to robić?
      Pierwiastkując tracimy pewne informacje o funkcji. Znacznie lepiej
      zostawić ją w postaci uwikładnej. Jeszcze lepiej przedstawić to równanie
      we współrzednych biegunowych, gdzie jest ono postaci r = R.
    </Section>

    <Example title="Elipsa" nr="3.1">
      <Section>
        Punkt porusza się w przestrzeni zgodnie z równaniami w układzie
        prostoliniowym
      </Section>
      <Math>
        {\displaystyle x = a \ cos(t) \qquad z = b \ sin(t) \qquad y = 1 - c \
        sin(t)}.
      </Math>
      <Section>Po jakim torze porusza się punkt?</Section>
      <b>Rozwiązanie</b>
      <Section>
        Dzieląc dwa pierwsze równania stronami, odpowiednio przez a i b,
        podnosząc stronami do kwadratu i dodając otrzymujemy
      </Section>
      <Math> {\displaystyle \frac{x^2}{a^2} + \frac{z^2}{b^2} = 1}. </Math>
      <Section>
        Jest to oczywiście równanie elipsy. Wyznaczając sin(t) z równania
        drugiego i podstawiając do trzeciego otrzymujemy
      </Section>
      <Math> {\displaystyle y = 1 - \frac{c}{b}z}. </Math>
      <Section>
        Jak widać oś y ogranicza funkcja liniowa. Zbierając te wszystkie
        informacje możemy narysować tor ruchu omawianej cząstki.
      </Section>
      <Image src="kinematyka/3.png" />
    </Example>

    <Section>
      Zauważ, że krzywa ta mimo opisu w trzech wymiarach jest jedynie
      dwuwymiarowa. Dlatego możemy bez straty ogólności opisywać orbity planet
      używając jedynie dwóch współrzednych. Trójwymiarowa elipsa przypominająca
      jajo jest nazywana elipsoidą. Istnieją również przypadki, kiedy
      (upraszczając) nasza krzywa ma więcej wymiarów niż przestrzeń w jakiej się
      znajduje. Są to tak zwane rozmaitości, a koronnym przykładem ich użycia
      jest tworzenie map Ziemi. Nie jesteśmy w stanie narysować ich bez
      naruszenia proporcji ziemii na dwuwymiarowej kartce papieru. Dzieje się
      tak, ponieważ mimo, że powierzchnia Ziemi jest dwuwymiarowa to kartka
      <i>ma niedobór wymiarów</i> związany z jej krzywizną. Nie ma natomiast
      żadnego problemu, aby narysować dwuwymiarową powierzchnię Ziemi na
      dwuwymiarowej powierzchni globusa. Powierzchnia ziemii ma dwa wymiary, ale
      jest zanurzona w trzech wymiarach i dlatego daje się opisywać jak
      płaszczyzna jedynie lokalnie, a dobór odpowiednich współrzędnych (w
      przypadku globusa sferycznych) jest kluczowym zadaniem geometrii
      różniczkowej, której są one jednym z najważniejszych badanych obszarów. O
      geometrii różniczkowej opowiemy nieco później, gdyż analiza ruchu
      krzywoliniowego wymaga jej podstaw, a nie chcę cię zmuszać do czytania
      całych podręczników na ten temat.
    </Section>

    <h3>Różne rodzaje krzywych</h3>
    <Section>
      W tablicach do matematyki znajdziesz setki rodzajów krzywych, jednak
      spróbuję pokazać ci najpopularniejsze ich rodzaje, aby łatwo było ci
      wybrnąć z zadania. Przedstawione równania mogą być w postaci współrzędnych
      kartezjańskich, biegunowych lub parametrycznie. Postać parametryczną (a
      właściwie jedną z nich, bo jest ich nieskończenie wiele) otrzymasz zawsze
      stosując parametryzację x = t, y = y(t), dlatego ograniczymy się do
      ciekawych przypadków jak ten z okręgiem. Czasem jest to jednak jedyna
      możliwość, gdyż jak pokazaliśmy przed chwilą, wyznaczenie jawnie toru
      ruchu może być niemożliwe. Niestety tabela jest dostępna tylko na
      komputerach, gdyż jest zbyt szeroka na telefony :C
    </Section>
    <Grid class="display-min-800px">
      <GridH style="width: calc(80px + 8vw)">Krzywa</GridH>
      <GridH style="flex-grow: 1">Równanie</GridH>
      <GridH style="width: 200px">Wykres</GridH>
      <Flex style="width: 100%">
        <div style="width: calc(80px + 8vw)">Hipocykloida</div>
        <div style="flex-grow: 1">
          <M
            s="\displaystyle x = (R-c) cos \ t + a cos \left(\frac{R-a}{a} t \right) \\ y = (R-a) sin \ t - a sin \left(\frac{R-a}{a} t \right)"
          />
          <br />
          a/R - ilość wierzchołków hipocykloidy.
          <br />
          R - średnica krzywej.
        </div>
        <img
          width="200"
          src="/books/physics/16741766/img/kinematyka/krzywe/1.png"
        />
      </Flex>
      <Flex style="width: 100%">
        <div style="width: calc(80px + 8vw)">Cykloida (Brachistochrona)</div>
        <div style="flex-grow: 1">
          <M s="x = a (t - sin t) \\ y = a (1 - cos t)" />
          <br />
          Krzywa minimalizująca czas w spadku swobodnym.
        </div>
        <img
          width="200"
          src="/books/physics/16741766/img/kinematyka/krzywe/2.png"
        />
      </Flex>
      <Flex style="width: 100%">
        <div style="width: calc(80px + 8vw)">Elipsa</div>
        <div style="flex-grow: 1">
          <M
            s="\displaystyle \left(\frac{x}{a}\right)^2 + \left(\frac{y}{b}\right)^2 = 1"
          />
          <br />

          <M s="r = p/(e \ cos (\varphi) + 1)" />
          <br />

          <M s="x = a cost \\ y = b sin t" />
        </div>
        <img
          width="200"
          src="/books/physics/16741766/img/kinematyka/krzywe/3.png"
        />
      </Flex>
      <Flex style="width: 100%">
        <div style="width: calc(80px + 8vw)">Hiperbola</div>
        <div style="flex-grow: 1">
          <M
            s="\displaystyle \left(\frac{x}{a}\right)^2 - \left(\frac{y}{b}\right)^2 = 1"
          />
          <br />

          <M s="x = a cosht \\ y = a sinh t" />
        </div>
        <img
          width="200"
          src="/books/physics/16741766/img/kinematyka/krzywe/4.png"
        />
      </Flex>
      <Flex style="width: 100%">
        <div style="width: calc(80px + 8vw)">Kardioida</div>
        <div style="flex-grow: 1">
          <M s="\displaystyle (x^2+y^2-ax)^2 = a^2(x^2+y^2)" />
          <br />
          <M s="r = a(1 + cos \varphi)" />
        </div>
        <img
          width="200"
          src="/books/physics/16741766/img/kinematyka/krzywe/5.png"
        />
      </Flex>
      <Flex style="width: 100%">
        <div style="width: calc(80px + 8vw)">Krzywa balistyczna</div>
        <div style="flex-grow: 1">
          <M
            s="\displaystyle x = {\frac {v_{x0}}{\mu }}\left(1-e^{-\mu t}\right) \\ y = -{\frac {g}{\mu }}t+{\frac {1}{\mu }}\left(v_{y0}+{\frac {g}{\mu }}\right)\left(1-e^{-\mu t}\right)"
          />
        </div>
        <img
          width="200"
          src="/books/physics/16741766/img/kinematyka/krzywe/balistyczna.png"
        />
      </Flex>
      <Flex style="width: 100%">
        <div style="width: calc(80px + 8vw)">Krzywa Gaussa</div>
        <div style="flex-grow: 1">
          <M s="\displaystyle y = e^{x^2}" />
        </div>
        <img
          width="200"
          src="/books/physics/16741766/img/kinematyka/krzywe/6.png"
        />
      </Flex>
      <Flex style="width: 100%">
        <div style="width: calc(80px + 8vw)">Spirala logarytmiczna</div>
        <div style="flex-grow: 1">
          <M s="\displaystyle r = ae^{b\varphi}" />
        </div>
        <img
          width="200"
          src="/books/physics/16741766/img/kinematyka/krzywe/7.png"
        />
      </Flex>
    </Grid>
  </Article>
</template>
