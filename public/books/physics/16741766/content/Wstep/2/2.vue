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
      W formie matematycznej wygląda to tak. Zmiana energii wewnętrznej (U)
      równa jest sumie dostarczonego ciepła (forma energii, oznaczana Q) i
      wykonanej przez układ pracy (W).
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
          Temperatura ma dolną granicę poniżej której nie da się zejść (zero
          absolutne).
        </li>
        <li>
          Energia wewnętrzna również ma dolny limit, a osiąga go, gdy
          temperatura osiąga zero absolutne.
        </li>
        <li>
          Temperatury zera absolutnego nie da się osiągnąć, gdyż doprowadziłoby
          to do sprzeczności. Możemy jedynie się do niej coraz bardziej zbliżać.
        </li>
      </ol>
    </Section>
    <Bio>
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
      z chemii, a po jakimś czasie stał się jednym z najwybitniejszych chemików
      XX wieku. Widzisz? Nie tylko ty jesteś właściwym człowiekiem na
      niewłaściwym stanowisku.
      <Image src="wstep/onsager.png" border="true">
        Nie wiem jak wyglądał Onsager, ale pewnie jakos tak
      </Image>
    </Bio>
    <Section>
      Zasady termodynamiki można więc sterścić w 4 stwierdzeniach.
      <ol start="0">
        <li>Istnieje temperatura</li>
        <li>Istnieje energia wewnętrzna</li>
        <li>Istnieje entropia</li>
        <li>Istnieje zero bezwzględne</li>
      </ol>
    </Section>
    <Section>
      Problemem jest jedynie fakt, że tych zasad nie da się udowodnić.
      Wymyśliliśmy, że tak ma być i tylko tyle jesteśmy w stanie zrobić. Było
      jasne, że termodynamika mimo, że działa świetnie to jej prawdziwe oblicze
      wciąż pozostaje dla nas w ukryciu, jednak teraz wiedząc to wszystko,
      jestem w stanie Ci pokazać co za nią się kryje naprawdę.
    </Section>
    <h3>To wszystko jest statystyką</h3>
    <Section>
      Kiedy w grę wchodzą absurdalnie wielkie liczby wszystko staje się jedynie
      statystyką. Stwierdzenie to tyczy się dwóch rzeczy - taktyki wojennej
      Stalina oraz powodu, dla którego stworzono fizykę statystyczną. Na sam
      początek zastanówmy się jednak nad modelem gazu, takim bardzo prostym, w
      którym jego cząsteczki są zamknięte w pudełku i nieustannie się zderzają.
      Jego trzema najważniejszymi parametrami są: ciśnienie (p), objętość (V)
      oraz temperatura (T). Mając bardzo prosty model gazu są one związane tzw.
      równaniem Clapeyrona, które pełni bardzo ważną rolę w fizyce i chemii.
    </Section>
    <Formula nr="2.X">pV = nRT</Formula>
    <Section>
      Oznaczenia p, V oraz T są nam znane, jednak czym są n oraz R? R to stała
      gazowa równa około 8,31 J/mol<M s="\cdot" />K. Stałe w fizyce zwykle są
      tylko po to, żeby wzór zgadzał się z wynikiem eksperymentu. Nikt nie wie
      dlaczego wynosi akurat tyle i najprawdopodobniej nigdy się nie dowiemy. Po
      prostu jest potrzebna, aby otrzymać prawidłowy wynik. Literą n natomiast
      oznaczamy liczbę moli gazu. W molach liczymy ilość cząsteczek.
    </Section>
    <Formula nr="2.X">1 \ mol = 6,022 \cdot 10^{23} \ cząsteczek</Formula>
    <Section>
      Ta przeogromna liczba cząsteczek, jaka mieści się w jednym molu nazywamy
      liczbą Avogadra. Mimo, że nie on ją wprowadził zaproponował teorię zgodnie
      z którą w tej samej objętości gazu, przy tej samej temperaturze i
      ciśnieniu, znajduje się ta sama ilość cząstek, niezależnie od rodzaju
      gazu. Dla zobrazowania, w szklance wody mamy około 20 moli
      <M s="H_2 O" /> czyli około 10<M s="^{25}" /> cząsteczek. Dużo to mało
      powiedziane.
    </Section>
    <Section>
      Wiedząc ile cząsteczek gazu mieści się w danym zbiorniku (wystarczy
      przekształcić wzór do postaci pV/RT) możemy spróbować zapisać dla niego
      zwykłe tradycyjne równania ruchu zaproponowane przez Newtona. Natrafiamy
      jednak na pewien problem. Jedna cząstka nie jest trudna do opisania,
      potrafimy znaleźć jej prędkość czy położenie (przynajmniej z dokładnością,
      na jaką pozwala mechanika kwantowa). Kiedy mamy jednak kilkanaście cząstek
      sprawa robi się ciężka, bo każda ma w danej chwili całkiem inne położenie,
      prędkość czy energię. To teraz sobie wyobraź, że mamy do czynienia nie z
      kilkunastoma cząstkami, ale z ponad 10<M s="^{23}" />. To nie jest trudne
      - to jest niewykonalne.
    </Section>
    <Section>
      Każda próba opisania takiego układu była jak walenie głową w ścianę. Na
      gruncie obecnych teorii opartych o zwykłe równania różniczkowe nie dało
      się opisać tych wszystkich cząstek. Trzeba było wykorzystać całkiem nowy
      aparat matematyczny, który pozwoli opanować tak gigantyczne ilości
      obiektów. Całkiem ciekawym trafem okazało się, że taka teoria już istniała
      i została wręcz stworzona do analizowania dowolnie wielkich ilości danych.
      Jej nazwa to statystyka.
    </Section>
    <Section>
      Co ciekawe bardzo wiele innowacyjnych działów fizyki cechowało się tym, ze
      korzystały z całkiem nowego aparatu matematycznego niż wszystkie inne
      teorie. Analiza, a w drugiej kolejności algebra to oczywiście
      najważniejsze dla fizyka działy matematyki, jednak nie brakuje teorii,
      które zostały napisane w całkiem innym języku. Tak jak fizyka statystyczna
      jest napisana w oparciu o statystykę tak fizyka kwantowa korzysta mówi w
      języku analizy funkcjonalnej i prawdopodobieństwa, natomiast teoria
      względności jest napisana w oparciu o geometrię różniczkową.
    </Section>
    <Section>
      Podstawowym pojęciem statystyki są rozkłady statystyczne. Zamist
      stwierdzać po kolei jaką prędkość ma dana cząstka spróbujmy odpowiedzieć
      na pytanie jak wiele cząstek posiada taką prędkość, a nie inną. Pierwszą
      odpowiedzią na to pytanie był rozkład Maxwella-Boltzmanna. Jego wzór jest
      naprawdę paskudny, więc całkiem wyrzućmy wszelkie stałe fizyczne. Nie
      będzie to więc pełen wzór, ale jednak rozkład, który otrzymamy zachowa
      swój kształt.
    </Section>
    <Math> f(v)= v^2 \ e^{-v^2} </Math>
    <Image src="wstep/8.png">
      Rozkład Maxwella-Boltzmanna dla 1 miliona cząsteczek o temperaturach -100
      <M s="^\circ C" />, 20<M s="^\circ C" /> oraz 600<M s="^\circ C" />
    </Image>
    <Section>
      Czy czegoś ci to nie przypomina? Tak, to ten słynny (choć lekko
      zmodyfikowany) rozkład Gaussa. To niesamowite, że nie tylko zmienne
      socjologiczne (IQ), biologiczne (wzrost, waga) czy ekonomiczne podlegają
      tej samej krzywej, ale również rozkłady wielkości fizycznych. Teraz zróbmy
      coś ciekawego, zaraz zobaczysz dlaczego. Zamiast policzyć wartość średnią
      prędkości, policzmy wartość średnią prędkości podniesionej do kwadratu
      (wartość średnią najczęściej oznaczamy w <M s="\langle" /> takich
      <M s="\rangle" /> nawiasach). Za pomocą kilku wzorów ze statystyki daje
      nam to następujący wynik.
    </Section>
    <Math> \langle v^2 \rangle = 3kT/m </Math>
    <Section>
      Gdzie m to masa cząstek, T to temperatura, natomiast k to stała Boltzmanna
      pojawiająca się praktycznie we wszystkich wzorach fizyki statystycznej.
      Teraz wreszcie dojdziemy do celu, który próbowaliśmy osiągnąć od samego
      początku. Pomnóżmy obie strony przez masę i podzielmy przez 2. Po lewej
      stronie dostajemy coś, co jest nam bardzo dobrze znane - (średnia, gdyż
      użyliśmy średniej prędkości) energia kinetyczna cząstek.
    </Section>
    <Formula nr="2.X">\langle E_k \rangle = \frac{3}{2}kT</Formula>
    <Section>
      Właśnie tym jest temperatura - energią kinetyczną cząstek naszego układu.
      Fizycy jednak nie poprzestali na tym. Fizyka statystyczna stała się
      potężnych narzędziem do opisu zjawisk w których oddziaływała ze sobą
      ogromna liczba cząstek. Pozwalała sprawnie opisywać zjawiska takie jak
      magnetyzm (niezliczona ilość cząstek wytwarzających pole magnetyczne),
      elektrony w metalach (ogromne sieci krystaliczne) czy promieniowanie
      (ogromne ilości fotonów - cząstek światła). To ostatnie zastosowanie
      doprowadziło do narodzin fizyki kwantowej, kiedy to okazało się, że
      promieniowanie składa się nie z fal elektromagnetycznych, a z cząstek
      (kwantów) nazywanych fotonami, które jedynie statystycznie gdy ich bardzo
      wiele układają się w kształt fali.
    </Section>
    <Section>
      Alternatywnie do rozkładu Maxwella-Boltzmanna powstały dwa inne ważne
      rozkłady statystyczne. Rozkład Fermiego-Diraca oraz rozkład
      Bosego-Einsteina. Nie będę jednak ci o nim mówił zbyt wiele, gdyż ich
      zastosowanie jest bardziej skomplikowane. Wystarczy wiedzieć, że pierwszy
      rozkład tyczy się fermionów (np. elektrony), natomiast drugi bozonów (np.
      fotonów). O fermionach i bozonach dowiesz się w rozdziale 2.5 o budowie
      materii.
    </Section>
    <Section>
      Skoro wiemy już czym jest temperatura i czym jest energia wewnętrzna
      (energią kinetyczną cząstek) łatwo możemy udowodnić, że istnieje zero
      absolutne. Minimalna temperatura jest wtedy gdy cząstki się całkiem
      zatrzymują. Nie da się być wolniejszym niż stojąc w miejscu. Okej tylko
      teraz pytanie dlaczego zero absolutne jest nieosiągalne i cząstki nie są w
      stanie się całkiem zatrzymać. Otóż jakkolwiek by to nie brzmiało, cząstki
      w świecie kwantowym same z siebie się teleportują. <b>Tak</b>, cząstki się
      telepotują, a czekając dostatecznie długo w teorii twoje ciało może się
      teleportować na księżyc. Jakkolwiek mało prawdopodobne by nie było, że
      wszystkie atomy twojego ciała teleportują się w jednym momencie w to samo
      miejsce jest to możliwe. Taka spontaniczna teleportacja nazywa się
      fluktuacją i o ile w świecie rzeczywistym praktycznie nie jest możliwe,
      aby się wydarzyła to w swiecie kwantowym takie teleportacje dzieją się
      cały czas. Właśnie dlatego cząstki nigdy nie przestaną się poruszać.
      Choćbyśmy je próbowali zatrzymać to będą nieustannie fluktuować i zmieniać
      swoje położenie - dlatego, cząstki nigdy nie będą w spoczynku.
    </Section>
    <h3>Prawdziwe oblicze entropii</h3>
    <Section>
      Teraz pozostaje nam sformułowanie na nowo ostatniej z zasad termodynamiki.
      Dotychczas entropia była funkcją, która wskazywała kierunek przemian w
      termodynamice. Tylko dlaczego? Dlaczego akurat ta funkcja wskazuje
      kierunek przemian? Druga zasada termodynamiki wskazywała to za pewnik -
      tak jest bo tak jest i to tyle. Jakkolwiek dla zwykłego inżyniera takie
      uzasadnienie wystarczy my chcemy zrozumieć jak działa świat i dlaczego.
      Spróbujmy dowiedzieć czym entropia jest naprawdę analizując rozprężający
      się gaz.
    </Section>
    <Section>
      Rozprężanie gazu skutkuje oczywiście zwrostem entropii (temperatura
      maleje, więc entropia rośnie). Jednak zostawmy entropię i zadajmy sobie
      pytanie co się dzieje się wraz ze zwiększeniem objętności zajmowanej przez
      cząsteczki gazu. Nawet małe dziecko stwierdzy, że im większy obszar, tym
      większa liczba możliwych rozmieszczeń takiej samej liczby atomów, więc
      wzrasta również stopień nieuporządkowania. Jakiejkolwiek analizy procesu
      byśmy nie dokonali, tam gdzie entropia rośnie tam rosnąć będzie
      nieuporządkowanie. Próbując uporządkować układ będziemy musieli sami
      włożyć pracę, jednak przez to, że nasza wydajność nigdy nie będzie równa
      100% zawsze część energii zostanie oddana do otoczenia w postaci ciepła.
      Będziemy więc zawsze stratni, zawsze więcej pracy włożymy w uporządkowanie
      układu niż jemu będzie konieczne, aby znowu wrócić do chaosu. Pomyśl czy
      łatwiej stłuc szklankę czy ją posklejać?
    </Section>
    <Section>
      Właśnie tym jest entropia, <b>entropia jest chaosem</b>. No dobrze, a co z
      tą słynną strzałką, która wskazuje przebieg procesu? Otóż, ona nie
      istnieje. Nie istnieje i nie może istnieć. Zanim jednak popadniemy w
      rozpacz wykonajmy prosty eksperyment. Rzuć kilka razy dwoma kostkami do
      gry. Jeśli obie kostki wskażą tę samą liczbę oczek to mamy sukces, gdy
      będą różne porażkę. Co jest bardziej prawdopodobne? Wykonując eksperyment
      dostatecznie wiele razy okaże się, że stan gdy obie kostki są
      uporządkowane i wskazują tę samą liczbę oczek zdarza się znacznie
      rzadziej. Ten sam wynik otrzymamy prostym rachunkiem prawdopodobieństwa
      (mamy na to około 16%). Wniosek płynie stąd jeden - chaos jest bardziej
      prawdopodobny od uporządkowania. Teraz powtórz to z trzema (2%), czterema
      (0,4%) czy pięcioma (0,07%) kostkami. Za każdym razem uporządkowanie jest
      coraz trudniej otrzymać. A teraz sobie wyobraź nie 5, a <M s="10^{23}" />
      cząstek. Właśnie to jest druga zasada termodynamiki w prawdziwym wydaniu.
      Chaos rośnie nie dlatego, że magiczna druga zasada mówi że tak jest. Chaos
      rośnie dlatego, że chaos jest znacznie bardziej prawdopodobny od ładu.
    </Section>
    <Section>
      Tym samym entropia przestaje być magiczna jak była wcześniej. Proces w
      kierunku odwrotnym może wydarzyć (np. ciepła i zimna woda zamiast się
      mieszać rozdzialą się) jednak jest to tak skrajnie mało prawdopodobne, że
      praktycznie niemożliwe. Można to porównać do małpy, której damy
      klawiaturę. Jakkolwiek absurdalnie mało prawdopodobne by to nie było,
      istnieje niezerowa szansa, że napisze ona Szekspira - istnieje szansa, że
      chaos zamieni się w porządek.
    </Section>
    <Section>
      Tylko teraz pozostaje ostatnie pytanie jak ją zmierzyć? Oznaczmy ilość
      wszystkich sposobów na które cząstki mogą przyjąć położenie prędkość czy
      energię jako <M s="\Omega" />. Mając 3 dostępne położenia, 3 dostępne
      prędkości i 4 dostępne prędkości dostajemy dla jednej cząstki wynik 36. W
      praktyce dostępne położenia czy prędkości liczy się w miliardach miliardów
      miliardów, jednak zostańmy przy naszym pierwszym przykładzie. Kiedy mamy
      do czynienia z dwoma cząstkami każda z nich ma do dyspozycji 36 stanów, a
      więc widzimy łącznie <M s="\Omega" /> jest równa 1 296 (<M s="36^2" />).
      Jak widzisz te liczby bardzo szybko stają się gigantyczne, co pokazuje, że
      coraz trudniej osiągnąć porządek . Entropię otrzymujemy licząc logarytm
      naturalny ze wszystkich możliwych stanów (logarytm o podstawie e = 2,72) i
      mnożąc przez znaną nam już stałą Boltzmanna.
    </Section>
    <Formula nr="2.X">S = k \ ln \Omega</Formula>
    <Section>
      Niestety prowadzi nas to też do innego wniosku. Skoro wszechświat stale
      będzie dążył w kierunku coraz większej entropii, w końcu w całości
      osiągnie równowagę termiczną. W końcu cała temperatura się wyrówna i nawet
      sporadyczne fluktuacje nas od tego nie uratują. Jeśli wszelkie różnice się
      wyrównają i osiągniemy całkowity chaos wszelkie różnice zanikną. Tak
      najprawdopodobniej umrze wszechświat, nie w wielkiej ekspozji i
      fajerwerkach, a w zanikającej szarości, która w końcu zatrzyma wszelkie
      zmiany, bo nie będą miały kierunku, w którym mogłyby zachodzić. Hipoteza
      ta nazywa się cieplną śmiercią wszechświata i najprawdopodobniej z samej
      natury prawdopodobieństwa nasza rzeczywistość się skończy. Widocznie chaos
      jest nam już pisany, a doprowadziło nas do tego zwykłe doświadczenie z
      kostkami. Właśnie dlatego fizyka jest tak piękna, bo pozwala ze zwykłych
      eksperymentów wyciągać wnioski co do tego jak działa świat, a skoro kiedyś
      się on skończy to tym bardziej daje nam to motywację, aby zdążyć go poznać
      tak dobrze jak to tylko możliwe.
    </Section>
  </Article>
</template>
