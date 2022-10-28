<template>
  <Article>
    <Begin nr="1.6" advanced="0"> Interferencja fotonu </Begin>
    <Section>
      <i>
        Całą mechanikę kwantową da się wyprowadzić z doświadczenia z dwiema
        szczelinami.
        <div>~ Richard P. Feynman</div>
      </i>
    </Section>
    <h3>Analiza doświadczenia Younga</h3>
    <Section>
      Rozważymy znane skądinąd doświadczenie ugięcia i interferencji światła na
      dwóch szczelinach (interferencyjne doświadczenie Young’a). Oba
      doświadczenia, o których będziemy mówić przedstawione są schematycznie na
      rysunku. Celem naszej analizy jest pokazanie, że korpuskularne
      (cząsteczkowe) i falowe aspekty natury światła są niezbędne do pełnej
      interpretacji zjawiska interferencji światła na dwóch szczelinach. W
      omawianych tu doświadczeniach światło pochodzi z pewnego źródła
      znajdującego się daleko w lewo. Praktycznie równoległa wiązka rozchodzi
      się zgodnie z kierunkiem osi z i pada z lewej na przesłonę P, w której
      znajdują się dwie szczeliny <M s="S_1" /> i <M s="S_2" />. Po przejściu
      przez nie, światło pada na ekran (<M c="E_1" /> w pierwszym,
      <M s="E_2" /> w drugim doświadczeniu). Na ekranie są gęsto rozmieszczone
      detektory, które zliczają padające fotony (mierzą natężenie światła).
      Zliczenia fotonów mogą być, w razie potrzeby, sumowane. Dają więc
      informację (w funkcji odległości od osi z) o powstałym na ekranie obrazie.
      Wyniki takich doświadczeń (tj. zależności natężeń od x) ilustrują wykresy
      "nad" ekranami <M s="E_1" /> i <M c="E_2" />.
    </Section>
    <Image src="1/2.png">Schemat doświadczenia</Image>
    <h3>Otwarta szczelina</h3>
    <Section>
      Jedna ze szczelin (najpierw S2) jest zasłonięta, czyli światło przechodzi
      przez szczelinę <M s="S_1" /> i ulega na niej ugięciu (dyfrakcji), a
      następnie pada na ekran <M s="E_1" />. W rezultacie, uśrednione po czasie
      natężenie <M s="I_1" /> światła na ekranie <M s="E_1" /> przedstawia linia
      ciągła. Następnie, w drugiej części eksperymentu, zakrywamy szczelinę
      <M s="S_1" /> i pozwalamy światłu przechodzić przez szczelinę
      <M s="S_2" />. Linia przerywana <M s="I_2" /> odpowiada uśrednionemu
      natężeniu mierzonemu w tej sytuacji. Linia kropkowana przedstawia sumę
      natężeń <M s="I_1 + I_2" /> zmierzonych w czasie obu części eksperymentu.
      Fala ugięta na szczelinie <M s="S_1" /> i padająca na ekran
      <M s="E_1" /> w pewnym punkcie odległym o x od osi z ma formalną postać
    </Section>
    <Math>
      {\displaystyle {E = E_0 \ cos (\omega t - \vec {k} \cdot \vec {r} +
      \varphi)}}
    </Math>
    <Section>
      Faza <M s="\varphi" /> zależy od długości drogi optycznej od szczeliny
      <M s="S_i" /> do danego punktu na ekranie, a więc także zależy od
      współrzędnej x. Natężenie takiej fali, mierzone przez detektory na ekranie
      wynosi
    </Section>
    <Math>
      {\displaystyle {I = c\varepsilon_0 E_0^2 \ cos^2 (\omega t - \vec {k}
      \cdot \vec {r} + \varphi)}}
    </Math>
    <Section>
      Jako, że średnią wartością cos<M s="^2" /> jest <M s="\frac{1}{2}" />,
      średnie natężenie w danym punkcie możemy opisać następująco:
    </Section>
    <Math>
      {\displaystyle {\langle I \rangle = \frac{1}{2}c\varepsilon_0 E_0^2}}
    </Math>
    <Section>
      Wykresy na rysunku ("nad" pierwszym ekranem) przedstawiają właśnie takie
      natężenia <M s="I_1" /> oraz <M s="I_2" /> , a także ich sumę, która jest
      złożeniem wyników dwóch części eksperymentu.
    </Section>
    <h3>Otwórzmy obie szczeliny</h3>
    <Section>
      Teraz odsłaniamy jednocześnie obie szczeliny. Światło przechodzi w
      kierunku ekranu <M s="E_2" />, na którym rejestrujemy charakterystyczne
      prążki interferencyjne. Natężenie światła na ekranie ma intensywne maksima
      oraz minima. W tym przypadku, na detektor w danym punkcie ekranu
      <M s="E_2" /> padają dwie fale pochodzące z dwóch szczelin, a detektor
      rejestruje ich natężenie.
    </Section>
    <Math>
      {\displaystyle I = c\varepsilon_0(E_1 + E_2)^2 = c\varepsilon_0[E_1 \
      cos(\omega t− \vec k \cdot \vec r +φ_1) + E_2 \ cos(\omega t− \vec k \cdot
      \vec r +φ_2]^2}
    </Math>
    <Section>
      Korzystając z kilku tożsamości trygonometrycznych, a następnie uśredniając
      po czasie otrzymujemy:
    </Section>
    <Math>
      {\displaystyle \langle I \rangle = \frac{1}{2} c\varepsilon_0(E_1^2 +
      E_2^2 + 2 E_1 E_2 \ cos(\varphi_1 - \varphi_2))}
    </Math>
    <Section>
      Co możemy zapisać z użyciem obu średnich natężeń otrzymując wzór na to jak
      się one <i>składają</i>.
    </Section>
    <Formula nr="1.X">
      { \displaystyle \langle I_1 + I_2 \rangle = I_1 + I_2 + 2 \sqrt{I_1 + I_2}
      \ cos(\varphi_1 - \varphi_2) }
    </Formula>
    <Section>
      Dla prostoty rozważań przyjmijmy że <M s="E_1" /> = <M s="E_2" />, a co za
      tym idzie <M s="I_1" /> = <M s="I_2" />, to wówczas natężenie I światła
      rejestrowanego na ekranie <M s="E_2" /> zmienia się od <M s="I_{min}" /> =
      0 do <M s="I_{max}" /> = 4<M s="I_1" />. Natężenie I nie jest więc prostą
      sumą natężeń światła biegnącego od każdej ze szczelin. Zauważmy ponadto,
      że zależność amplitud od x sprawia, że na obrazie możemy zaobserwować
      zanik fal, gdy odchylenie |x| od środka ekranu staje się duże. Ponaddto
      natężenie światła na ekranie ma intensywne maksima (gdy różnica dróg
      optycznych od szczelin do danego punktu na ekranie jest całkowitą
      wielokrotnością długości fali λ) oraz minima ( gdy różnica dróg optycznych
      jest nieparzystą wielokrotnością λ/2).
    </Section>
    <h3>Opis korpuskularny doświadczenia [do skrócenia]</h3>
    <Section>
      Interpretacja i opis zjawiska interferencji w języku teorii falowej nie
      sprawia poważniejszych trudności. Fale rozprzestrzeniają się w całej
      przestrzeni i w pewnych obszarach interferują konstruktywnie, a w innych
      destruktywnie. W naszym intuicyjnym podejściu cząstki to obiekty dobrze
      zlokalizowane przestrzennie, mające rozmiary znacznie mniejsze niż
      jakiekolwiek inne długości charakteryzujące doświadczenie (szerokość
      szczelin, czy odległość między nimi). Jak więc interpretować efekt
      interferencji w ujęciu korpuskularnym? Mówimy tu o świetle, a więc o
      fotonach, ale równie dobrze moglibyśmy mówić o innych cząstkach, np. o
      elektronach czy neutronach. Fala padająca na przesłonę ulega ugięciu na
      szczelinach w przesłonie. Możemy uznać, że ugięcie takie można wyjaśnić
      zderzeniami fotonów z brzegami szczelin. Bardziej dokładna analiza
      pokazałaby, że nie jest to wyjaśnienie całkiem wystarczające, choć
      intuicyjnie sensowne. Aby więc nie komplikować sytuacji, pozostańmy przy
      tym niezbyt ścisłym wyjaśnieniu. Jednocześnie jednak powinniśmy zdać sobie
      sprawę, że już tutaj pojawia się pierwszy znak zapytania nad słusznością
      naszych intuicji polegających na zastosowaniu klasycznego rozumienia ruchu
      cząstek. Zliczenia fotonów odbywające się na ekranach, mogą polegać na
      badaniu stopnia zaczernienia kliszy fotograficznej. Można także stosować
      fotopowielacze, które komputerowo zliczają poszczególne fotony (i w razie
      potrzeby sumują takie zliczenia). A więc i to co dzieje się w konkretnym
      punkcie "na ekranie" możemy dość łatwo zrozumieć w ramach korpuskularnej
      interpretacji zjawiska. Trudności pojawiają się, gdy chcemy zrozumieć
      charakter całego obrazu zarejestrowanego.
    </Section>
    <Section>
      Doświadczenie pierwsze (z otwartą jedną szczeliną) nie nastręcza
      specjalnych trudności interpretacyjnych. Fotony padające na otwartą
      szczelinę uginają swój tor lotu (ulegają na niej dyfrakcji). W rezultacie
      obserwujemy krzywą natężenia z maksimum naprzeciwko szczeliny otwartej.
      Rzeczywiście nie widać tu specjalnych kłopotów z interpretacją.
      Doświadczenie drugie jest już znacznie trudniejsze do interpretacji. Jak
      to się dzieje, że cząstki– fotony dają na ekranie E2 prążki
      interferencyjne? Być może fotony jakoś oddziałują ze sobą przed i za
      przesłoną? Nie ma jednak żadnych przesłanek fizycznych, aby sądzić, że
      takie oddziaływania w ogóle istnieją. Co więcej, współczesne urządzenia
      pozwalają wysyłać i rejestrować pojedyncze fotony (innymi słowy można
      wiązkę padającą bardzo osłabić). Detektory (fotopowielacze) będą więc
      rejestrować pojedyncze "kliknięcia". W takim przypadku lecący ku ekranowi
      foton nie ma partnera, z którym mógłby oddziaływać. Jeżeli więc za
      powstanie obrazu interferencyjnego odpowiedzialne są jakieś oddziaływania
      pomiędzy fotonami, to obraz interferencyjny powinien zniknąć. Jaki więc
      będzie obraz powstały na ekranie przy sumowaniu zliczeń, gdy padają nań
      pojedyncze fotony tak, aby zjawiska ugięcia kolejnych fotonów na
      szczelinie i potem ich detekcja były zdarzeniami niezależnymi? Gdy otwarte
      są obie szczeliny, a czas rejestracji jest krótki (tylko kilka fotonów
      zdążyło dolecieć do ekranu) obserwujemy dobrze zlokalizowane punkty, w
      których kolejne fotony uderzają w ekran. Rozkład tych punktów jest losowy,
      w tym sensie, że przy powtarzaniu doświadczenia punkty te są rozłożone za
      każdym razem w inny sposób. A zatem, w krótkim czasie, widzimy na ekranie
      pojedyncze punkty. Sugeruje to, że potrzebna jest interpretacja
      korpuskularna, która na dodatek powinna mieć charakter probabilistyczny.
      Rozumiemy przez to, że potrzebny jest jakiś sposób obliczania
      prawdopodobieństwa tego, gdzie padnie foton. Jeżeli jednak czas obserwacji
      rośnie, to rejestrujemy coraz więcej fotonów i widzimy, że zsumowany obraz
      na ekranie coraz lepiej odtwarza prążki interferencyjne. Obraz
      interferencyjny "buduje się" wraz z upływem czasu. A zatem wygląda na to,
      że w tej sytuacji potrzebne jest podejście na gruncie teorii falowej (bo
      właśnie ona daje poprawny opis prążków). Otrzymaliśmy więc dwa wnioski.
      Przy małej liczbie fotonów (krótki czas rejestracji) wydaje się, że
      potrzebujemy opisu korpuskularnego, a na dodatek mającego charakter
      probabilistyczny, bo identyczne fotony ulegają ugięciu w przypadkowy
      (losowy) sposób. Natomiast przy dużej liczbie fotonów (długi czas)
      właściwy jest opis falowy. Stwierdzenia te są nie do pogodzenia. Co bowiem
      trzeba wybrać, gdy liczba fotonów (i czas rejestracji) są średnie, ani
      małe ani duże ? Może foton, przy przejściu przez przesłonę dzieli się na
      jakieś subcząstki, które oddziałując ze sobą dają na ekranie obraz
      interferencyjny? Gdyby jednak tak było, to stosując odpowiednio czułe
      detektory rejestrowalibyśmy na ekranie kilka "kliknięć" (przy jednym
      fotonie padającym). To się jednak nigdy nie zdarza. Foton albo jest
      zarejestrowany, albo nie– jest niepodzielny. Może więc jego trajektoria
      jest bardzo skomplikowana (np. zapętlona przez obie szczeliny). Jednak
      taka hipoteza jest z jednej strony dziwaczna, a z drugiej nie może
      doprowadzić do jakiegokolwiek opisu rozkładu prążków interferencyjnych
      powstałych na ekranie. A więc droga do wyjaśnienia interferencji nie
      prowadzi przez wprowadzanie dziwnych hipotez. Zwróćmy uwagę na jeszcze
      jedną trudność. Intuicja (klasyczna) podpowiada, że foton, lecąc od źródła
      ku przesłonie, przelatuje następnie albo przez szczelinę S1, albo przez
      S2. Ugina się na niej i potem trafia w ekran w pewnym punkcie x. Jeżeli
      foton przeleciał przez jedną szczelinę, to co za różnica czy druga jest
      zasłonięta czy otwarta. Natrafiamy więc na jeszcze jeden trudny aspekt.
      Wyniki doświadczeń przy jednej szczelinie zasłoniętej i przy obu otwartych
      są przecież zasadniczo różne. Wskazuje to, że określenie przez którą
      szczelinę przeleciał foton, niszczy obraz interferencyjny. Rzeczywiście
      tak jest. W dalszym ciągu wykładu (po omówieniu zasady nieoznaczoności)
      głębiej uzasadnimy ten fakt.
    </Section>
    <Section>
      Na zakończenie podkreślmy raz jeszcze, że nasze rozważania dotyczące
      interferencji światła (fotonów) mogą równie dobrze dotyczyć dowolnych
      cząstek materialnych, jak np. elektrony czy protony. Co więcej dzisiejsza
      technika doświadczalna pozwala przeprowadzać eksperymenty interferencyjne,
      w których uczestniczą atomy. Odpowiednio przygotowane atomy tworzą tzw.
      kondensat Bose-Einsteina, w którym bada się różnorodne zjawiska.
      Zagadnienia te, ze względu na falowy charakter materii, nazywane bywają
      optyką atomową.
    </Section>
  </Article>
</template>
