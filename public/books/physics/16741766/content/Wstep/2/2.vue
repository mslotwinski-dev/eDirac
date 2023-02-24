<template>
  <Article>
    <Begin nr="2.2" advanced="0"> Cząstki w ruchu </Begin>
    <h3>Czym jest ciepło?</h3>
    <Section>
      Wbrew pozorom jednym z najtrudniejszych do zdefiniowania pojęć jest
      temperatura. Możemy niczym inżynier powiedzieć, że to taka własność ciał,
      którą mierzą termometry. Co one jednak mierzą dokładnie? Przez wieki
      powstawały coraz bardziej skomplikowane bardziej lub mniej skuteczne
      teorie próbujące wytłumaczyć to zjawisko. Najważniejszą z nich była teoria
      cieplika zgodnie z którą miarą temperatury była ilość płynu nazywanego
      właśnie cieplikiem. Teoria ta była bardzo skomplikowana i o ile przynosiła
      pewne rezultaty była kolosem na glinianych nogach.
    </Section>
    <Section>
      Sama termodynamika narodziła się wraz z pracami Nicolasa Carnota i jego
      modelem silnika, którego na pewno miałeś po dziurki w nosie podczas lekcji
      fizyki w szkole średniej. Właśnie tym przez większość naszej historii była
      termodynamika - nauką o maszynach cieplnych. Teorie, które wtedy tworzono
      były od teorii cieplika nieporównywalnie prostsze i bardziej efektywne, a
      opierały się nie na wymianie niewidocznego płynu, a na wymianie energii
      między ciałami. Ta energia cieplna pozwalała zamieniać temperaturę, a więc
      energię cieplną, na pracę mechaniczną. Temperatura stała się więc jedynie
      miarą energii, jednak wciąż ciężko było określić jak jest z nią dokładnie
      powiązana. Wprowadzono również termin równowagi termicznej oznaczający, że
      dwa obiekty mogące się wymieniać ciepłem są tej samej temperatury.
      Dolewając ciepłej wody do zimnej po czasie osiągną one również równowagę.
      Sam fakt istnienia temperatury i pewna logiczna właściwość (Jeśli A jest w
      równowadze z B i B w równowadze z C to A jest w równowadze z C) nazywamy
      zerową zasadą termodynamiki.
    </Section>
    <h3>Zasady termodynamiki</h3>
    <Section>
      Termodynamika jako całkiem nowa nauka na całkiem odmiennych zasadach niż
      poprzednie teorie posiadała kilka fundamentalnych zasad. Pierwsza z nich
      wprowadzała pojęcie energii wewnętrznej. Jest to w uproszczeniu energia
      cieplna, czyli ta energia, która jest powiązana z temperaturą. Zmieniać ją
      mogły dwa czynniki - dostarczone lub oddane ciepło i wykonana praca. W ten
      sposób (co powtarzam chyba trzeci raz, więc jeśli naprawdę tego nie
      zapamiętasz to dostaniesz w łeb) możliwe stało się stworzenie silników -
      urządzeń, które wydzielane ciepło (np. pod wpływem reakcji chemicznych
      związanych ze spalaniem paliwa) zamieniają na pracę mechaniczną (np.
      związaną z rozpędzaniem pojazdu). Warunkiem jest jednak, żeby ciepło i
      praca były zachowane, nie możemy uzyskać ciepła czy pracy z niczego. Jeśli
      dostarczymy 100J to tyle i tylko tyle układ może nam oddać w postaci pracy
      i wydzielonego ciepła.
    </Section>
    <Formula nr="2.X">\Delta U = Q + W</Formula>
    <Section>
      W formie matematycznej wygląda to tak. Zmiana energii wewnętrznej równa
      jest sumie dostarczonego ciepła (forma energii) i wykonanej przez układ
      pracy.
    </Section>
    <Section>
      Wszystko to wyglądało naprawdę pięknie. Jesteśmy w stanie spalać paliwo i
      dostarczać silnikowi ciepło, zamieniać je na pracę, następnie znowu
      ogrzewać silnik i tak w kółko. Jedyne, co było nam potrzebne do szczęścia
      to rozbudowa przemysłu paliwowego. Przez lata doskonalono schemat silnika
      Carnota oraz tworzono nowe cykle (m.in. znany ci na pewno cykl Diesla,
      którzy również będziemy analizować w 3 tomie). Pozostawało tylko pytanie
      gdzie jest granica. Jak sprawny silnik potrafimy stworzyć? Jasnym jest, że
      nie jesteśmy w stanie stworzyć silnika o sprawności wyższej niż 100%, gdyż
      umożliwiłoby mu wytwarzanie większej ilości energii niż sam pobiera. Taki
      układ, który produkuje energię w nieskończoność nazywamy perpetuum mobile
      (pierwszego rodzaju, zaraz poznamy rodzaj drugi).
    </Section>
    <Section>
      Tu wkracza druga zasada termodynamiki będąca jedną z najbardziej
      niezwykłych zasad w całej fizyce. Mówi ona, że istnieje pewna funkcja
      zwana entropią, która określa kierunek przebiegu procesów
      termodynamicznych. Zgodnie z nią niemożliwe jest skonstruowanie silnika o
      sprawności 100% (perpetuum mobile drugiego rodzaju) dlatego, że zgodnie z
      nią, ciepło nie może płynąć od ciała zimniejszego do ciała cieplejszego. W
      ten sposób silnik nie może ochładzać się w nieskończoność i wykonywać
      pracy bez dostarczenia energii potrzebnej, aby pracował. Gdyby tak było,
      twoja lodówka nie potrzebowałaby prądu, jednak za sprawą drugiej zasady
      termodynamiki jest on potrzebny, aby przenosić ciepło z układu
      zimniejszego (wnętrze) do cieplejszego (otoczenie lodówki). Właśnie z tego
      samego powodu w silnikach istnieją chłodnice (szczegółowo przeanalizujemy
      to w tomie trzecim poświęconym termodynamice). Spróbujmy jednak powiedzieć
      czym jest entropia. Jest to taka wielkość, że bardzo mała zmiana entropii
      jest stosunkiem wymienionego przez układ ciepła do jego temperatury.
      Wydaje się czymś bardzo prostym, ale nie jest takie, jak się wydaje na
      pierwszy rzut oka.
    </Section>
    <Formula nr="2.X">dS = \frac{dQ}{T}</Formula>
    <Section>
      Litera d to różniczka. Oznacza mniej więcej to samo, co
      <M s="\Delta" /> (zmiana wielkości) za wyjątkiem jednego szczegółu. Zmiana
      wielkości oznaczana jako <M s="\Delta" /> może być dowolna, natomiast
      różniczka oznaczana d to zmiana, ale taka nieskończenie mała w
      nieskończenie krótkiej chwili. W sumie to ma sens, różniczka to na logike
      malutka różnica. Od jej nazwy pochodzi dział matematyki zwany rachunkiem
      różniczkowy, który bada zmienność funkcji. Można powiedzieć, że "<M
        s="\Delta"
      />" oznacza zwykłe zmiany, natomiast "d" chwilowe w bardzo krótkim czasie.
      Iloraz <M s="\Delta v / \Delta t" /> to prędkość średnia, ale
      <M s="dv / dt" /> to już prędkość chwilowa. Doceń, że jako fizyk tłumaczę
      ci matmę mimo, że mogłem od razu przejść dalej.
    </Section>
    <Image src="wstep/7.png">
      Konieczność umieszczania w silnikach chłodnic wynika właśnie z drugiej
      zasady termodynamiki.
    </Image>
    <Section>
      Wróćmy jednak do entropii. Co ona w ogóle oznacza poza tym, że istnieje?
      Co ona opisuje? Ma ona pewną bardzo ciekawą właściwość. Jeżeli układ
      termodynamiczny przechodzi od jednego stanu równowagi do drugiego, bez
      udziału czynników zewnętrznych (a więc spontanicznie), to jego entropia
      <b>zawsze</b> rośnie. To wzrost entropii jest tym, co pokazuje w jakim
      kierunku przechodzą zmiany. A przynajmniej tak nam się wydawało do
      czasu...
    </Section>
    <Section>
      Zanim jednak pokażę przed tobą prawdziwe oblicze entropii musisz poznać
      jeszcze trzecią zasadę termodynamiki. Zastanówmy się w jaki sposób można
      było zmienić energię wewnętrzną. Oczywiście dostarczeniem / odebraniem
      ciepła lub poprzez wykonanie pracy. Jednak jak długo możemy to ciepło
      zabierać? Kiedyś przecież ta energia wewnętrzna musi się skończyć. Wynika
      stąd, że musi istnieć jakaś minimalna temperatura, w której energia będzie
      wynosić 0 (nie istnieje ujemna energia, a przynajmniej o niej nie wiemy).
      Temperaturę tą nazwano <b>zerem absolutnym</b> i wynosi dokładnie 0
      Kelwinów. Teraz ma sens stwierdzenie, że energia wewnętrzna jest równa 0J
      gdy temperatura jest równa 0K (lub -273,15 <M s="^\circ C" />). Czy jednak
      ta temperatura minimalna jest możliwa do osiągnięcia? Ppodstawiając we
      wzorze na entropię za temperaturę 0K, nasza entropia stałaby się
      nieskończona (dlatego nie wolno dzielić przez 0), co jest oczywistą
      sprzecznością. To prowadzi nas do trzech wniosków stanowiące właśnie
      trzecią zasadę termodynamiki.
      <ol>
        <li>
          Temperatura ma dolną granicę poniżej której nie da się zejść (0K).
        </li>
        <li>
          Energia wewnętrzna również ma dolny limit (0J), a osiąga go,
          temperatura osiąga swoje minimum (zero absolutne).
        </li>
        <li>
          Temperatury zera absolutnego nie da się osiągnąć, gdyż doprowadziłoby
          to do sprzeczności. Możemy jedynie się do niej coraz bardziej zbliżać.
        </li>
      </ol>
    </Section>
    <FunFact>
      Twórca czwartej zasady dynamiki (która jest zbyt skomplikowana, abym ją
      tutaj opisywał), Lars Onsager, dostał za jej sformułowanie nagrodę Nobla z
      chemii w roku 1968. Gdy w latach 30' opuścił Norwegię został wykładowcą
      chemii na uniwersytecie Yale, jednak problemem był fakt, iż nie posiadał
      doktoratu. Onsager na ten zarzut stwierdził, że on w zasadzie ma doktorat.
      Zaciekawiło to innych wykładowców, którzy pozwolili mu go zaprezentować.
      Gdy to zrobił chemicy zbaranieli. Onsager zaprezentował pracę z
      matematyki. Chcieli go już za to ostatecznie wyrzucić, jednak dziekan
      wydziału chemii poprosił o ocenę pracy profesorów z wydziału matematyki.
      Matematycy stwierdzili, że jeśli chemicy go nie chcą, to oni sami mu ten
      doktorat dadzą. Ostatecznie Onsager zachował posadę, przyznano mu doktorat
      z chemii, a po jakimś czasie stał się jednym z najwybitniejszych chemików.
      Widzisz? Nie tylko ty jesteś właściwym człowiekiem na niewłaściwym
      stanowisku.
      <Image src="wstep/onsager.png" border="true">
        Nie wiem jak wyglądał Onsager ale pewnie jakos tak
      </Image>
    </FunFact>
    <Section>
      Zasady termodynamiki można więc sterścić w 4 stwierdzeniach.
      <ol start="0">
        <li>Istnieje temperatura</li>
        <li>Istnieje zero bezwzlędne</li>
        <li>Istnieje entropia</li>
        <li>Istnieje zero bezwzględne</li>
      </ol>
    </Section>
    <Section>
      Jednak prawdziwe oblicze termodynamiki wciąż pozostaje pod płaszczem i
      teraz wiedząc to wszystko jestem w stanie Ci pokazać czym jest naprawdę...
    </Section>
    <h3>Fizyka statystyczna</h3>
    <Section>*DO ZROBIENIA*</Section>
  </Article>
</template>
