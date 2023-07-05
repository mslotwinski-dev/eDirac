<template>
  <Article>
    <Begin nr="1.3" advanced="0">Obwody, prądy i napięcia</Begin>
    <h3>Napięcie</h3>
    <Section>
      Wiemy już, że przyczyną przepływu prądu w przewodniku jest różnica
      potencjałów elektrycznych na jego końcach. Wielkość tą nazywamy napięciem.
      Jej definicja na ten moment jest naprawdę posta. Jednostką napięcia jest
      wolt.
    </Section>
    <Formula nr="1.7"> U = v_B - v_A </Formula>
    <Section>
      Napięcie jest miarą energii, jaką posiada ładunek płynący w obwodzie.
      Można je zdefiniować jako miarę energii, jaką zyskuje ładunek podczas
      przepływu, czyli wykonanej pracy przeciwko polu.
    </Section>
    <Formula nr="1.8"> U = \frac{W_{A \rightarrow B}}{q}</Formula>
    <Section>
      Napięcie elektryczne w ogólniejszym przypadku wcale nie musi być rozłożone
      równomiernie, prawda? Wtedy przydaje się nam ukochany rachunek
      różniczkowy. Jeśli chcemy obliczyć wartość czegoś zmiennego to nie ma
      innej opcji, musimy liczyć pochodną albo całkę. W tym przypadku napięcie
      to scałkowana wartość pola elektrycznego w każdym punkcie.
    </Section>
    <Formula nr="1.9"> U = \int \limits_A^B E \cdot dl</Formula>
    <Section />
    <h3>Prąd</h3>
    <Section>
      Okej, skoro mamy prąd i już przepływa to musimy powiedzieć jak tego wiele.
      Im więcej ładunku przepływa w danej chwili tym większe jest natężenie
      prądu lub w skrócie prąd. Definicja jest tu chyba oczywista. Im więcej
      elektronów tym większe musi być natężenie. Dzielimy więc ilość ładunku,
      który przepłynął przez czas, w którym tego dokonał. No, a jeśli chcemy być
      dokładniejsi to liczymy pochodną z przepływu ładunku po czasie.
    </Section>
    <Formula nr="1.10"> I = \frac{dQ}{dt}</Formula>
    <Section>Prąd mierzymy w amperach (oznaczamy literą A, np. 1 A).</Section>
    <Section>
      Napięcie więc mierzy nam prąd jakościowo - mówi jak jest silny i jak
      trudno się mu przeciwstawić. Natężenie mierzy nam prąd ilościowo mówiąc
      jak wiele jest elektronów.
    </Section>
    <Section>
      Aby znaleźć całkowity ładunek, który przepłynął musimy przekształcić nasz
      wzór. Najpierw mnożymy obustronnie przez dt, a potem całkujemy.
    </Section>
    <Formula nr="1.11"> Q = \int \limits_{t} I \ dt</Formula>
    <Section>
      Dla przykładu w obwodach prądu przemiennego, jeśli prąd będzie równy
      <M s="I_0 sin (\omega t)" /> funkcja ładunku będzie równa
    </Section>
    <Section>A mając całkę nieoznaczoną, oznaczona to formalność.</Section>

    <Math> Q = - \frac{I_0}{\omega} cos (\omega t) </Math>
    <h3>Obwody</h3>
    <Section>
      Nareszcie przyszedł czas na pierwszy obwód. Będzie absurdalnie prosty, ale
      to tylko początek.
    </Section>
    <Image src="circ/1/1.png" />
    <Section>
      Jak widzisz ma 3 elementy. Nie będę udawał, że nie wiesz co jest czym, bo
      skończyłeś szkołę średnią. Ale mimo wszystko dla formalności - na dole
      mamy źródło prądu, może to być bateria, silnik lub bezpośrednio gniazdko
      elektryczne. Następnie mamy rezystor i żarówkę. Rezystor jest elementem,
      który <i>wytłumia</i> napięcie. Napięcie przechodząc przez rezystor spada,
      przez co na żarówce wydzieli się mniejsza moc. Gdyby nie rezystor żarowka
      spaliłaby się, a w obwodzie mielibyśmy prawdopodobnie zwarcie.
    </Section>
    <Section>
      No właśnie... Napięcie na rezystorze spada. Ale w jaki sposób i jaka jest
      miara tego spadku?
    </Section>
    <Section>
      Elementy elektroniczne mają 3 główne parametry. Jest to opór, pojemność i
      indukcyjność.
    </Section>
    <Section>
      Opór zwany także rezystancją (z łac. resistere — sprzeciwiać się, stawiać
      opór) mówi nam jak silną przeszkodą dla płynącego prądu jest nasz element.
      Im mniejszy opór tym większy prąd wywoła to samo napięcie. W ogólności
      opór jest dany następującym wzorem.
    </Section>
    <Formula nr="1.11"> R = \frac{dU}{dI}</Formula>
    <Section>
      Opór mierzymy i podajemy w omach (<M s="\Omega" />). Jak widzisz może być
      dowolną, nawet najbardziej skomplikowaną funkcją. Ale na nasze szczęście
      większość elementów spełia prawo Ohma, mówiące, że opór jest wielkością
      stałą.
    </Section>
    <Formula nr="1.12"> R = \frac{U}{I}</Formula>
    <Section>
      Tylko mamy tu kilka zastrzeżeń. Po pierwsze musimy zachować stałą
      temperaturę, co jest czasem praktycznie niemożliwe, bo przepływ prądu
      wywołuje wzrost temperatury. Po drugie tylko niektóre elementy posiadają
      stały opór. Na oporniki może i działa, ale na diody czy tranzystory już
      nie. Przyjmujemy, że na diodach napięcie zawze spada o 0,7 V.
    </Section>
    <Image src="1/1.png">
      Charakterystyki prądowo napięciowe rezystora, diody i fotokomórki. Jak
      widzisz tylko pierwszy wykres spełnia prawo Ohma.
    </Image>
    <Section>
      Kolejną właściwością elementów obwodu jest pojemność. Określa zdolność
      elementów do gromadzenia w sobie ładunków. Elementami wyspecjalizowanymi w
      pojemności są kondensatory. Ich budowa to dwie metalowe blaszki oddalone
      od siebie. Może nam się zapalić lampka, jakim cudem przez taki obwód
      płynie prąd? Otóż podczas przepływu prądu elektrony gromadzą się na
      pierwszej blaszcze nie mając gdzie uciec. Z czasem gromadzi się ich tyle,
      że pole elektryczne wytwarzane przez nie odpycha elektrony po drugiej
      stronie blaszki. W ten sposób generuje się prąd mimo braku przepływu
      ładunku.
    </Section>
    <Image src="1/2.png" />
    <Formula nr="1.13"> C = \frac{dQ}{dU}</Formula>
    <Section>
      Pojemność kondensatora płaskiego zależy od powierzchni S okładek i
      odległości l między nimi, a także substancji, która między nimi się
      znajduje.
    </Section>
    <Formula nr="1.14"> C = \varepsilon \frac{S}{l}</Formula>
    <Section>
      Pojemność jest dość ciekawym elementem obwodów, ponieważ żarowka w
      obwodzie z kondensatorem nie zgaśnie od razu po odłączeniu zasilania, a
      świecić będzie jeszcze przez jakiś czas. Dzieje się tak, ponieważ
      kondensator potrzebuje czasu na naładowanie, ale też jakąś chwilę będzie
      się wyładowywał.
    </Section>
    <Section>
      Ostatnim elementem jest indukcyjność. Określa zdolność elementu do
      wytwarzania pola, ale tym razem magnetycznego. A jaka jest jej rola w
      obwodzie? Zmienne pole magnetyczne wytwarza zmienne pole elektryczne i na
      odwrót, ale zgodnie z regułą lenza w ten sposób, aby
      <i>przeszkadzało</i> polu magnetycznemu, które je wywołuje.
    </Section>
    <Section>
      Co to oznacza na ludzki? Indukcyjność przeciwdziała zmianom prądu. Nie
      przepływie prądu jak opór, ale jego zmianom. Tak jak turbina w wodzie. Gdy
      woda będzie się rozpędzać turbina będzie stawiać jej opór, aby nie było to
      możliwe. Ale gdy ta turbina już się rozpędzi to nawet gdy woda będzie
      chciała zwolnić, ona będzie chciała naszą wodę rozpędzać.
    </Section>
    <Formula nr="1.15"> L = \frac{\Phi}{I}</Formula>
    <Section>
      Elementem, którego głównym parametrem jest indykcyjność jest cewka.
      Wygląda dosłownie jak sprężyna w środku której generuje się pole
      magnetyczne. Jej indykcyjność zależy od liczby zwojów (N), powierzchni jej
      przekroju (S), długości (l) i przenikalności magnetycznej ośrodka w którym
      się znajduje (<M s="\mu" />).
    </Section>
    <Formula nr="1.16"> L = \mu \frac{N^2 S}{l}</Formula>
  </Article>
</template>
