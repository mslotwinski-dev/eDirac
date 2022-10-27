<template>
  <Article>
    <Chapter nr="1" book="physics"> Cząstki i fale </Chapter>
    <Begin nr="1.1" advanced="0">
      Promieniowanie termiczne i narodziny fizyki kwantowej
    </Begin>
    <h3>Narodziny Fizyki Kwantowej</h3>
    <Section>
      <i>
        Jest rok 1900. naszej ery. Cała fizyka została odkryta przez
        naukowców... Cała? Nie! Jeden, jedyny wzór, opisujący promieniowanie
        cieplne, wciąż stawia opór najeźdźcom i uprzykrza życie legionom
        naukowców stacjonującym w uniwersytetach Harvard, Cambridge, Heidelberg
        i w Warszawie...
      </i>
    </Section>
    <Section>
      Pod koniec XIX. wieku, panowało przekonanie, że fizyka jest już właściwie
      opisana i nie skrywa żadnych tajemnic przed ludźmi. Przez stulecie udało
      się opisać prawa mechaniki w całkiem nowej formie Lagrange'a i Hamiltona.
      Dokonaliśmy wiele odkryć w teorii sprężystości, a równanie Naviera-Stokesa
      stało się fundamentem hydrodynamiki i aerodynamiki. Odkryliśmy
      elektrodynamikę i to jak elektryczność przeplata się z magnetyzmem.
      Zdobyliśmy tajemnice światła opisując jego falową elektromagnetyczną
      naturę, a następnie opisując fale i wszystkie inne zjawiska
      elektromagnetyczne przy pomocy równań Maxwella. Sformułowano całą
      termodynamikę, a następnie na jej fundamentach fizykę statystyczną
      pozwalającą opisywać w statystyczny (kto by się spodziewał) sposób ruch
      wszystkich mikroskopowych obiektów. Nic już nie skrywało tajemnic.
    </Section>
    <Section>
      Właściwie to prawie nic. Drobne nieścisłości były związane z opisem
      promieniowania termicznego (cieplnego). W prawdzie wzór wyprowadzony na
      gruncie fizyki klasycznej (pokażemy go później) dość dobrze opisywał
      natężenie emitowanych fal długich, jednak im były one krótsze tym bardziej
      wyprowadzony wzór zwracał absurdalne wyniki. Nie tylko nie zgadzały się
      one z wynikiem, ale chcąc sprawdzić całość wypromieniowanej energii
      okazuje się być ona nieskończona. Przecież żadne ciało nie może
      promieniować z nieskończoną energią, z tym wzorem na pewno było coś nie
      tak. Fizyka klasyczna po raz pierwszy nas zawiodła, co postrzegano dotąd
      jako niemożliwe. Musieliśmy znaleźć coś, co nas z tej sytuacji uratuje.
    </Section>
    <Section>
      Znamy dokładną datę narodzin fizyki kwantowej - to 19 października 1900
      roku. W tym dniu Max Planck po raz pierwszy publicznie przedstawił swój
      słynny odtąd wzór na widmo promieniowania ciała doskonale czarnego. Dwa
      miesiące później, 14 grudnia 1900 roku, na posiedzeniu Towarzystwa
      Fizycznego w Berlinie Planck przedstawił wyprowadzenie tego wzoru, w
      którym zerwał z fizyką klasyczną. Przyjął założenia, że wypromieniowana
      energia pojawia się w formie kwantów (porcji, takich jak krople wody w
      oceanie) energii zachowującymi się jak cząstki, a że promieniowanie to w
      dawnym rozumieniu po prostu fala elektromagnetyczna zaczęły się sypać całe
      fundamenty fizyki. W końcu czym ona jest? Przez sto lat dowiedliśmy ponad
      wszelką wątpliwość, że jest ciągłą falą, a nagle ma niby być cząstką?
      Absurdalne, prawda? Ale jak się okazało tylko tak udało nam się otrzymać
      prawidłowy wynik. Tak narodziła się fizyka kwantowa.
    </Section>
    <Section>
      Kwant to jest po prostu porcja, swego rodzaju paczka. Jeśli mamy 3
      szklanki wody na stole to jest ona skwantowana (ułożona w porcjach), ale
      jeśli wybuchną i woda rozleje się wszędzie nagle okaże się, że już jest
      rozłożona w sposób ciągły. Komputer działa w oparciu o kod napisany w 0 i
      1, czyli jego "myślenie" jest skwantowane. Kwant to po prostu
      przeciwieństwo czegoś ciągłego.
    </Section>
    <Section>
      Wydaje się, że to nic wielkiego, prawda? Wyobraź sobie życie w ogromnym
      zamku przez tysiące lat. Stopniowo poznajesz jego tajemnice aż w końcu
      wydaje ci się, odkryłeś go w całości, został ci jeden mały pokój.
      Zaciekawiony wchodzisz do środka, a tam ukazują się drzwi. Zdziwiony
      podchodzisz do nich i otwierasz. Wtedy twoim oczom ukazuje się cały, wręcz
      nieskończony świat który czeka na odkrycie. Tym właśnie było
      promieniowanie cieplne - drzwiami zamku fizyki klasycznej, za którymi
      czekał nieskończony niezbadany świat fizyki kwantowej. Wyobraź sobie ten
      widok gdy twoim oczom ukazuje się cały nieodkryty nieskończony świat. To
      uczucie musiało być niesamowite. Właśnie tego doświadczyli fizycy z całego
      świata. Fizyka znowu stała się potrzebna, a świat znowu miał dla nas
      tajemnice do odkrycia. Znowu staliśmy się odkrywcami świata.
    </Section>
    <h3>Natężenie? No prawie...</h3>
    <Section>
      Użycie słowa natężenie promieniowania miało na celu uprościć wprowadzenie
      - tak naprawdę chodzi o radiancje spektralną. Jeśli idziesz tylko
      tematami, które omijają zaawansowane zagadnienia, nie załamuj się. Na
      spokojnie, zaraz pokażę ci czym ona jest. Dla tych, którzy już to
      przerobili będzie to przypomnienie. Przejdziemy od początku do końca
      prawie całą radiometrię.
    </Section>
    <Section>
      Światło i ogólnie promieniowanie elektromagnetyczne z pewnością przenosi
      jakąś energię cieplną - oznaczmy ją tak jak w starej dobrej termodynamice
      Q. Skoro mamy energię to policzmy w takim razie moc promieniowania. Ta moc
      nazywa się strumieniem promieniowania i oznaczamy grecką literą
      <Math>P_e</Math>, zatem:
      <Math center="true" nr="1.1"> {\displaystyle P = \frac{d}{dt}Q_e } </Math>
    </Section>
    <Section>
      Teraz przyszedł czas na natężenie promieniowania. Definiujemy go jako
      stosunek natężenia światła do kąta<Math>\Omega</Math>, który oświetla.
      <Math center="true" nr="1.2">
        {\displaystyle I = \frac{d}{d\Omega} P _{e} }
      </Math>
      Dlaczego kąt jest istotny? Kiedy jeździsz samochodem masz dwa główne
      rodzaje świateł: mijania (zielona ikonka, tzw. krótkie) i drogowe
      (niebieska ikonka, tzw. długie). Moc ich promieniowania jest taka sama,
      tym czym się różnią to kątem, jaki oświetlają. Światła krótkie oświetlają
      znacznie większą część drogi, ale natężenie promieniowania jest mniejsze.
      Światła długie zmniejszają kąt działania, dlatego ich natężenie jest
      większe.
    </Section>
    <Section>
      Zbliżamy się już do końca. Czym jest Radiancja? Skoro już mamy światło o
      danym natężeniu to teraz sprawdźmy na jaką powierchnie pada. Bardziej nas
      ono oślepi patrząc się na nie z kilku centymetrów niż z kilku metrów,
      prawda? No to podzielmy natężenie światła przez powierzchnię, jaką
      oświetla i uwzględnijmy jeszcze kąt <Math>\theta</Math> pod jakim na nie
      patrzymy. Patrząc na wprost światło nas oświetli najbardziej, natomiast
      patrząc pod kątem 90 stopni w ogóle nie świeci nam w oczy. Idealnie więc
      nada się tu funkcja cosinus.
      <Section>
        <Math center="true" nr="1.3">
          {\displaystyle L = \frac{dI_e}{dScos\theta} }
        </Math>
      </Section>
    </Section>
    <Section>
      No i przyszedł na finał - radiancja spektralna. Czym ona jest? Każda fala
      elektromagnetyczna ma jakąś długość, prawda? No to po prostu dzielimy
      radiancję przez długość tej fali. Oto przepis na radiancję spektralną. To
      jest stosunek radiancji do długości fal:
      <Math center="true" nr="1.4">
        {\displaystyle S = \frac{dL_e}{d\lambda} }
      </Math>
    </Section>

    <h3>Promieniowanie ciała doskonale czarnego</h3>
    <Section>
      Już w XIXw. zostało udowodnione, że natężenie promieniowania termicznego
      jest zależne tylko od temperatury ciała, nie zaś od materiału z jakiego
      było wykonane. Stosując prawa klasycznej termodynamiki, zakładając, że
      promieniowanie powstaje w wyniku drgań cząstek elektrycznych, John
      Rayleigh oraz James Jeans wyprowadzili teoretyczny rozkład promieniowania
      ciała doskonale czarnego. Radiancja spektralna według niego wynosi:
      <Math center="true" nr="1.5">
        {\displaystyle S(\lambda, T) = 2\frac{ckT}{\lambda^4} },
      </Math>
      gdzie k to oczywiście stała Boltzmanna. Napatrzyłeś się? No to wyrzucamy
      to wspomnienie do kosza. Fizyka klasyczna nas zawiodła, teraz naszym
      przyjacielem jest fizyka kwantowa.
      <Image src="1.png" />
    </Section>
    <Section>
      W 1900 r. Planck opracował wzór na <Math>S(\lambda)</Math>, który
      doskonale pasował do wyników eksperymentalnych dla wszystkich długości fal
      i dla wszystkich temperatur:
    </Section>
    <Math center="true" nr="1.6">
      {\displaystyle S(\lambda ,T) = {\frac {2hc^{2}}{\lambda ^{5}}}{\frac
      {1}{e^{hc /\lambda kT}-1}}}
    </Math>
    <Section>Tajemniczą stałą h zdefiniujemy w następnym temacie.</Section>
    <h3>Kwanty promieniowania</h3>
    <Section>
      Kluczowym elementem równania wyprowadzonego przez Plancka jest niepozorny,
      a jednak przełomowy argument wykładniczy, który zapiszemy jako
      <Math>E_\gamma</Math> i zdefiniujemy jako:
    </Section>
    <Math center="true" nr="1.7">
      {\displaystyle E_\gamma = \frac{hc}{\lambda}} = hf
    </Math>
    <Section>
      Równanie 1.6 było pierwszym użyciem symbolu h i rozpoczęło nową erę w
      historii fizyki. Planck jednak, z jego wykształceniem w fizyce klasycznej,
      po prostu nie mógł uwierzyć w taki wynik, pomimo natychmiastowego sukcesu
      jego równania w dopasowaniu wszystkich danych eksperymentalnych.
    </Section>
    <Section>
      Nikt nie rozumiał tego równania przez 17 lat, ale w końcu Einstein
      wyjaśnił to za pomocą bardzo prostego modelu z dwoma kluczowymi pomysłami:
      <ol>
        <li>
          Energie atomów, które emitują promieniowanie, są skwantowane. Jest to
          oczywiste, przecież atomy nie są ciągłe tylko są ułożone porcjami.
          Jeden atom, drugi atom, trzeci atom...
        </li>
        <li>
          Skoro atomy są skwantowane to energie promieniowania są również
          skwantowane w postaci kwantów promieniowania elektromagnetycznego
          (które teraz nazywamy fotonami i skrótowo oznaczamy symbolem
          <Math>\gamma</Math>), każdy o energii <Math>E_\gamma= hf</Math>.
        </li>
      </ol>
      W swoim modelu wyjaśnił procesy, dzięki którym atomy mogą emitować i
      absorbować fotony oraz jak atomy mogą być w równowadze z emitowanym i
      pochłanianym światłem. Teraz wykażemy, że wzór Plancka jest słuszny i
      wyprowadzimy dwa inne twierdzenia, które już spotkaliśmy.
    </Section>
    <h3>Prawo Wiena</h3>
    <Section>
      Długość fali <Math>\lambda_{max}</Math>, przy której
      <Math>S(\lambda)</Math> ma maksimum (dla danej temperatury T), można
      znaleźć, licząc pierwszą pochodną równania. 1.6 względem
      <Math>\lambda</Math> i przyrównując do zera, a następnie obliczając
      długość fali. Wiesz jak się liczy ekstrema, więc nie muszę ci tego
      tłumaczyć. Wynik znany jest jako prawo Wiena
    </Section>
    <Math center="true" nr="1.8">
      {\displaystyle \lambda_{max} = \frac{b}{T} }
    </Math>
    <Section>
      gdzie b to stała Wiena b = 2,9 <Math>\cdot</Math> 10
      <Math>^{-3} m \cdot K </Math>
    </Section>
    <h3>Prawo Stefana-Boltzmanna</h3>
    <Section>
      Przed chwilą różniczkowaliśmy równanie 1.6, więc teraz je scałkujemy (jest
      to znacznie trudniejsze, żeby nie było, że nie ostrzegałem). Jeśli
      scałkujemy je na wszystkich długościach fal (dla danej temperatury)
      znajdujemy moc na jednostkę powierzchni A promieniującego ciała, czyli
      strumień energii.
    </Section>
    <Math center="true" nr="1.9">
      {\displaystyle \Phi = \frac{P}{S} = \sigma T^{4} }
    </Math>
    <Section>
      Jest to oczywiście znane nam prawo Stefana-Boltzmanna. Jeśli następnie
      pomnożymy przez całkowitą powierzchnię S, znajdziemy całkowitą moc
      promieniowania P.
    </Section>
    <Math center="true" nr="1.9"> {\displaystyle P = \sigma ST^{4} } </Math>
    <Section>
      <Math>\sigma</Math> jest oczywiście stałą Stefana-Boltzmanna i wynosi
    </Section>
    <Center>
      <Math>
        {\displaystyle \sigma ={\frac {2\pi ^{5}k^{4}}{15h^{3}c^{2}}}=5,67\times
        10^{-8}\mathrm {\frac {W}{m^{2}K^{4}}}}
      </Math>
    </Center>
  </Article>
</template>
