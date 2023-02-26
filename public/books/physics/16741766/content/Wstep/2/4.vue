<template>
  <Article>
    <Begin nr="2.4" advanced="0"> Tajemniczy świat kwantów </Begin>
    <Section>
      Fizyka kwantowa to naprawdę niesamowitą, ale przy tym bardzo trudną nauka.
      Nie zdziw się gdy nie zrozumiesz wszystkiego, o czym mówię (sam nie
      rozumiem wszystkiego o czym mówię, więc luz), ale mam nadzieję, że po tym
      wszystkim przynajmniej minimalnie będziesz orientować się w jej
      podstawowych zasadach.
    </Section>
    <h3>Cząstki czy fale?</h3>
    <Section>
      Pod koniec XIX. wieku, panowało przekonanie, że fizyka jest już właściwie
      kompletna i nie skrywa żadnych tajemnic przed ludźmi. Często słyszano
      zdania, że nie warto jest nawet się jej uczyć, skoro nie ma w niej już nic
      do odkrycia. To, co zostało ludzkości to rola dla inżynierów. Oni mieli
      tworzyć w oparciu o istniejące prawa konstrukcje, maszyny czy mechanizmy
      produkcji. Jednak czy naprawdę rola fizyki się wtedy skończyła? Właściwie
      to została jedna drobnostka. Istniały małe problemy z opisem
      promieniowania termicznego. To nie tak, że wzór wyprowadzony na grucie
      fizyki klasycznej po prostu nie działał. On był nietrafiony do wszelkich
      granic absurdu. Tu właśnie wkroczył Max Planck, który stworzył pojęcie
      kwantu.
    </Section>
    <Section>
      Zacznijmy od początku samej idei. Światło przez wiele lat wydawało się
      falą elektromagnetyczną, a odkrycie Plancka zawaliło wszelkie podstawy
      fizyki klasycznej. W końcu czym ma być światło? Zjawiska załamania,
      ugięcia czy nakładania się fal świetlnych wskazywały jasno, że światło
      musi być falą. Promieniowanie natomiast mówi, że światło wydobywa się w
      postaci cząstek. Czym zatem światło jest? Odpowiedź brzmi: oba.
    </Section>
    <Section>
      Kwant to nic innego jak porcja. Porcją światła i wszelkiego rodzaju innego
      promieniowania elektromagnetycznego (ultrafiolet, promieniowanie gamma,
      fale radiowe etc.) jest foton - bezmasowa czastka pędząca z prędkością
      światła. Chcąc policzyć energię jednego fotonu musimy skorzystać z
      następującego wzoru zaproponowanego przez Plancka.
    </Section>
    <Formula nr="2.X">E = h \nu</Formula>
    <Section>
      Teraz pytanie co jest czym. Literą h oznaczamy stałą Plancka. Jest to
      jedna z najważniejszych stałych w fizyce i cechuje się występowaniem w
      praktycznie wszystkich wzorach mechaniki kwantowej. Drugi czynnik to
      częstotliwość fotonu. Tak jak fala światła ma częstotliwość, tak foton
      również ją posiada. Otrzymujemy w ten sposób naprawde interesujący
      wniosek, foton mimo, że jest cząstką ma swoją częstotliwość niczym fala.
    </Section>
    <Section>
      Teraz nasunęło się pytanie czy skoro światło które było falą można
      opisywać jako cząstkę to czy zwykłe cząstki można opisywać jako fale.
      Pytanie czy elektron jest falą jeszcze kilka lat wcześniej wydawało się
      absurdalne, jednak teraz już nie mieliśmy nic, w co mogliśmy wierzyć -
      trzeba było się przekonać. Jakże ironiczny był fakt, że elektron
      rzeczywiście okazał się falą. Teraz pytanie jak ją opisać. Pierwszym
      krokiem było sprawdzenie jaką fala elektronu miała długość. Okazało się,
      że równanie, które poprawnie łączy długość fali fotonu i jego pęd (tak,
      fotony mają pęd mimo braku masy) pasuje również do wszelkich innych
      cząstek. W ten sposób otrzymano długość na falę materii.
    </Section>
    <Formula nr="2.X">\lambda = \frac{h}{p} = \frac{h}{mv} </Formula>
    <Section />
    <h3>Im więcej wiemy tym mniej wiemy</h3>

    <Section>
      Skoro mamy już długość fali fajnie byłoby znać cały jej wzór (tzw. funkcja
      falowa). Tu jednak robi się problem. To, co mamy do dyspozycji to dwa
      fakty. Pierwszym jest oczywiście, że długość naszej funkcji falowej musi
      być równa h/p. Drugi jest taki, że skoro natężenie światła, a więc ilość
      fotonów padających na naszą powierzchnie jest równa kwadratowi równania
      falowego światła (póki co uwierz na słowo, kiedyś to wyprowadzimy), to
      kwadrat naszej funkcji falowej musi być związany z tym ile fotonów jest w
      jakim miejscu. Musi być zatem związany z prawdopodobieństwem znalezienia
      fototu tam, a nie gdzie indziej.
    </Section>
    <Section>
      Chcąc nie chcąc nie jesteśmy w stanie takiego równania wyprowadzić, możemy
      jedynie spróbować wymyślić takie równanie, które zgadza się możliwie jak
      najlepiej z wynikami eksperymentów. I wiesz co? Udało się w nie trafić.
      Nie da się go udowodnić lub póki co tego nie potrafimy, ale osobą, której
      się to udało, był Erwin Schrödinger, ten sam od paradoksu z kotem.
      Równanie to wygląda przerażająco, ale uwierz, że działa. Przedstawię ci je
      w jednym wymiarze (x), żeby nie mącić jeszcze bardziej, dla cząstki bez
      energii potencjalnej. Jeśli się go boisz przejdź pod obrazek.
    </Section>
    <Formula nr="2.X">
      i \hbar \frac{d}{dt} \psi = -\frac{\hbar}{2m} \frac{d^2}{dx^2} \psi
    </Formula>
    <Section>
      Okej, to wygląda przerażająco, ale nie załamuj się. To jest równanie z
      naprawdę wysokiej półki i jedynie poglądowo ci się postaram je
      wytłumaczyć. <M s="\psi" /> to oczywiście nasza szukana funkcja falowa.
      Nie jest jednak podana wprost, a poprzez zmiany. Stała
      <M s="\hbar" /> jest nazywana zredukowaną stałą Plancka lub h kreślonym i
      co do wartości równa <M s="h/2\pi" />. Ignorując wszelkie stałe fizyczne
      otrzymamy wniosek, że tempo wzorstu funkcji falowej w czasie jest
      proporcjonalne do tempa wzrostu z tempa wzrostu funkcji falowej w
      przestrzeni (tak samo jak przyspieszenie to tempo wzrostu z tempa wzrostu
      drogi). Brzmi kosmicznie, ale mogliśmy się tego spodziewać po teorii
      opisującej tak kosmiczne rzeczy jak świat mikroskopowych cząstek.
    </Section>
    <Image src="wstep/9.gif">
      Tak wyglada obliczona z równania Schrödingera funkcja falowa podróżującego
      swobodnie elektronu - trzeba przyznać, że zachowuje się ciekawie.
    </Image>
    <Section>
      Twoją uwagę powinna zwrócić jedna rzecz. Funkcja falowa gdy ją podniesiemy
      do kwadratu wskazuje prawdopodobieństwo znalezienia cząstki w danym
      miejscu. Cząstka ma jedynie prawdopodobieństwo, że jest w tym, a nie innym
      miejscu. Brzmi to absurdalnie, ale powoli chyba zaczynasz się
      przyzwyczajać do skali absurdu praw fizyki. Cząstka nie ma swojego
      określonego położenia zanim tego nie sprawdzimy. Ma jedynie
      prawdopodobieństwo, że znajdzie się w tym, a nie innym miejscu. A co się
      dzieje zanim zbadamy położenie cząstki?
    </Section>
    <Section>
      Załóżmy, że mamy armatę i dwie płytki, każda ma 50% szans, że trafi w nią
      elektron. Strzelamy elektronem, ale jeszcze nie sprawdzamy w którą
      elektron uderzył. Gdzie się on znajduje? Logiczna odpowiedź brzmi, że albo
      na jednej albo na drugiej. Jest ona jednak błędna. Elektron zanim poznamy
      jego położenie zachowuje się tak jakby był na obu płytkach jednocześnie.
      Trochę więcej wysiłku myślowego doprowadzi nas do wniosku, że elektrony
      wokół atomu nie są zatem piłkami orbitującymi wokół jądra, a chmurami
      prawdopodobieństw, które w pewnych miejscach są troche bardziej gęste, a w
      pewnych trochę mniej (w zależności od prawdopodobieństwa znalezienia
      elektronu w danym miejscu).
    </Section>
    <FunFact>
      Chcąc rozumieć zasady fizyki kwantowej dosłownie dopóki nie odpakujesz
      swojego prezentu w środku jest jednocześnie piłka, deskorolka, kredki,
      milion dolarów i dokładna lokalizacja pobytu Jacka Jaworka. Dopiero
      odpakowując prezent okazuje się co jest w środku.
    </FunFact>
    <Section>
      Powtórzmy to jeszcze raz - cząstka nie ma określonego położenia zanim go
      nie zbadamy. Jest to tak zwana superpozycja - nie dowiesz się dopóki nie
      sprawdzisz, ale zanim to zrobisz będę wszędzie i nigdzie. Jedynym naszym
      zmartwieniem jest więc stopniowe badanie położeń cząstek naszego układu i
      jesteśmy w domu. Prawda? Prawda, że jedynym...?
    </Section>
    <Section>
      Otóż niestety nie. Nie tylko energia promieniowania jest podzielona na
      porcje. Każda dawka energii (a ściślej działanie, ale póki co wszystko
      upraszczam) jest podzielona na małe porcje. Dla nas ta dawka jest
      niewyobrażalnie mała, ale dla małych cząstek będzie spora. Nie można
      dokonać pomiaru bez ingerencji w obiekt, jednak im mniejsza skala tym
      bardziej ta pozornie malutka dawka energii potrzebnej do pomiaru będzie
      wydawać się większa. Próba zbadania przez nas stanu dowolnej cząstki
      będzie jak próba zbadania truskawki za pomocą koparki. Chcąc nie chcąc po
      tak solidnym pomiarze nasza truskawka nie będzie już taka jak wcześniej (o
      ile cokolwiek prócz plamy po niej zostanie). Właśnie dlatego jedną z
      najsmutniejszych dla nas informacji jest fakt, że
      <b>każdy pomiar niszczy stan kwantowy</b>.
    </Section>
    <Section>
      Zasada ta oznaczana jest zasadą nieoznczoności Heisenberga. Mówi ona, że
      istnieją takie wielkości, których nie możemy poznać jednocześnie. Jakie są
      to wielkości? W najprostszej postaci są to pęd (a więc i prędkość) i
      położenie. Znając dokładnie pęd nie znamy położenia. Znając położenie nie
      znamy pędu. Im bardziej dokładnie znamy jedno tym mniej dokładnie znamy
      drugie. Oznaczając niepewność pomiarową położenia jako <M s="\Delta x" />,
      natomiast pędu <M s="\Delta p" /> możemy się dowiedzieć jak te niepewności
      są ze sobą powiązane.
    </Section>
    <Formula nr="2.X"> \Delta x \Delta p= \frac{\hbar}{2} </Formula>
    <Section>
      Teraz widzisz, że jeśli jedna niepewność dąży do zera to druga dąży do
      nieskończoności. To o czym musisz wiedzieć to fakt, że ta niedokładność
      nie jest wynikiem naszego aparatu pomiarowego. To, co sprawia, że
      niemożliwe jest poznać wszystkie informacje o cząsteczce, to sama natura
      cząsteczek. No dobrze, czyli podsumujmy, co wiemy. Cząstki mają swoje
      właściwości, ale są bardzo ciężkie do zbadania. Po pierwsze nie jesteśmy w
      stanie ich poznać w całości (pomiar prędkości ingeruje w położenie, a
      pomiar położenia w prędkość etc.), gdyż pomiar jednej wielkości niszczy
      drugą. Po drugie dopóki nie poznamy tej wielkości cząstka zachowuje się
      tak jakby była wszędzie i nigdzie.
    </Section>
    <h3>Spin - król mechaniki kwantowej</h3>
    <Section>
      No dobrze, a teraz sobie zadajmy pewne pytanie. Wszysto spoko, nie
      jesteśmy w stanie poznać stanu cząstki, jakoś to przetrawimy. Jednak to
      tylko brak możliwości zbadania. Ona tak naprawdę gdzieś jest tylko nie
      wiemy gdzie. Ta zasada była nazwana zmiennymi ukrytymi - cząstka je
      posiada, ale o nich nie mówi. Do samej śmierci bronił jej Einstein i wiele
      innych wielkich fizyków. Jest tylko jeden problem, cząstki nie mają
      zmiennych ukrytych. Absurdu temu wszystkiemu dodaje fakt, że ona sama tego
      nie wie. Zanim nie zbadamy położenia cząstki cząstka sama nie wie gdzie
      jest. Zanim nie zbadamy spinu cząstka nie wie czy jest on zwrócony w górę
      i w dół. Eksperymenty zrobiły z naszego potężnego elektronu przegrywa,
      który nie ma pojęcia na co sie zdecydować do momentu, kiedy go do tego nie
      zmuszą.
    </Section>
    <Section>
      Właśnie, spin. Co to dokładnie jest? Każdy poważny wykład o fizyce musi
      zawierać wtrącenie o tej tajemniczej właściwości. Zacznijmy od początku.
      Spin to moment pędu cząsteczki. W uproszczeniu (skrajnym uproszczeniu)
      można powiedzieć, że spin mówi o tym czy cząstka kręci się w górę czy w
      dół. Spin jest zawsze wielokrotnością h kreślonego (jest więc wielkością
      skwantowaną czyli podzieloną na porcje, a <M s="\hbar" /> określa się
      mianem kwantu momentu pędu, bo jest jego minimalną porcją): 0,
      <M s="\frac{1}{2} \hbar" />, <M s="\hbar" />, <M s="\frac{3}{2} \hbar" />,
      <M s="2\hbar" />, <M s="\frac{5}{2} \hbar" /> etc. Cząstki o spinie
      połówkowym np. <M s="\frac{1}{2} \hbar" /> to fermiony, natomiast o spinie
      całkowitym np. <M s="2\hbar" /> to bozony. Po co ten podział? Otóż oba
      mają bardzo ciekawe odmienne właściwości, o których się dowiesz za chwilę.
    </Section>
    <FunFact>
      Pełen obrót cząstki nie zajmuje 360<M s="^\circ" />, a 720<M
        s="^\circ"
      />. Obracając ją o 360<M s="^\circ" /> otrzymamy cząstkę w stanie
      przeciwnym do tego w jakim była na początku.
    </FunFact>
    <Section>
      To czy spin jest dodatni czy ujemny tyczy się zwrotu jego momentu pędu.
      Jednak jak wiemy obracać można się w trzech różnych wymiarach: prawo/lewo,
      góra/dół oraz przód/tył lub bardziej matematycznie w kierunku osi x, y
      oraz z. I jakkolwiek by nas to nie drażniło pan maruda "fizka kwantowa"
      zabrania nam poznać jednocześnie więcej niż zwrot jednej składowej spinu.
      Jeśli wiemy czy jest zwrócony w prawo i lewo to nie wiemy czy jest
      zwrócony w górę czy w dół.
    </Section>
    <Section>
      Ostatnie, co musisz wiedzieć to w czym tak mocno cząstki o połowicznym
      spinie różnią się od cząstek o całkowitym. Fermiony cechuje to, że
      nienawidzą siebie nawzajem. Jeśli jeden ma spin zwrócony w górę drugi musi
      mieć zwrócony w dół. Jeśli pojawi się trzeci musi zwiększyć swoją energię,
      żeby tylko się od nich odróżnić. One nigdy nie mogą przebywać w tym samym
      stanie obok siebie. Zasada ta nazywa się zakazem Pauliego. Co natomiast z
      bozonami? Bozony się wręcz kochają. Im więcej takich samych tym weselej, a
      wręcz ich fale wzmacniają się nawzajem.
    </Section>
    <Section>
      Znając podstawy spróbuj obejrzeć ten film. Widząc to wszystko na własne
      oczy dowiesz się więcej niż przez tysiąc stron czytania (tak naprawdę nie
      chce mi się wklejać miliona obrazków) i to będzie ostatnie, co powinineś
      zrobić, aby w pełni móc się zachwycić tą niesamowitą dziedziną nauki.
      Powodzenia.
    </Section>
    <Video src="https://www.youtube.com/embed/emvyvg8tzug" />
  </Article>
</template>
