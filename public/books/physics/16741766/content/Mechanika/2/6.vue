<template>
  <Article>
    <Begin nr="4.6" advanced="0"> Tarcie </Begin>
    <h3>Czym jest tarcie?</h3>
    <Section>
      Tarcie to zjawisko powstawania sił oporu na powierzchni styku dwóch ciał.
      Przyczyną powstawania sił tarcia jest chropowatość powierzchni tarć.
      Wskutek chropowatości powierzchnie ciał stykają się tylko na małych
      obszarach styku (rzędu 1 mikrometra), występujących na grzbietach
      chropowatości. Obszar tych styków jest znacznie mniejszy niż powierzchni
      całkowitej stykających się ciał. W miejscach styku powstają siły
      przyczepności. Ponadto, tam, gdzie zachodzi zahaczanie się nierówności oba
      ciała deformują się, a często także ścierają.
    </Section>
    <Section>
      Coulomb sformułował 3 postulaty tarcia (jak się później okaże jeden z nich
      nie jest zawsze prawdziwy). Pierwszy postulat mówił, że siła tarcia jest
      niezależna od stykających się powierzchni zależy natomiast od rodzaju
      materiału, ich gładkości, temperatury, smaru czy zanieczyszczeń.
    </Section>
    <Section>
      Jako drugi postulat założył, że siła tarcia statycznego może zmieniać się
      od zera do maksymalnej wartości zwanej wartością graniczną. Ostatnim
      prawem jest założenie, że siła tarcia ma zwrot przeciwny do ruchu ciała,
      po utracie stanu równowagi i nie zależy od prędkości.
    </Section>

    <h3>Tarcie Statyczne</h3>
    <Section>
      Wyobraź sobie ciało o ciężarze mg poczywające na jakimś podłożu.
      Chropowatość podłoża określa współczynnik tarcia, a jeśli w naszej
      sytuacji ciała spoczywają to będzie to współczynnik tarcia statycznego
      <M s="\mu" />. Siła tarcia wyraża się poprzez iloczyn nacisku i
      współczynnika tarcia.
    </Section>
    <Formula nr="4.8">F_{\ T} = N \mu</Formula>
    <Section>
      Oczywiście jest to siła tarcia maksymalna, gdyby cały czas taka działała
      ciało by nam uciekło w tył. Wiosek jest zatem taki, że im większą siłę
      przykładamy tym tarcie jest wyższe (aż do pewnej wartości). W przypadku
      braku zewnętrznych nacisków równanie upraszcza się oczywiście do:
    </Section>
    <!-- ＜ -->
    <Math>F_{\ T} = m g \mu</Math>
    <Section>
      Naszym warunkiem wprawienia ciała w ruch jest więc pokonanie siły tarcia,
      a więc <M s="F ＞ N \mu" />. Rozpatrzmy teraz co się będzie działo w miarę
      zwiększania naszej siły, a także oznaczmy kąt między wypadkową sił, tarcia
      i ciężkości, a siłą ciężkości. To samo dostaniemy licząc tym razem między
      wypadkową tarcia i rekacji z siłą reakcji, bowiem siły ciężkości i reakcji
      zgodnie z 3 zasadą dynamiki Newtona są równe.
    </Section>
    <Image src="dynamika/3.png" />
    <Section>
      Kąt θ możemy policzyć z funkcji tangens, w tym przypadku dostaniemy
      następującą zależność:
    </Section>
    <Math>F_{\ T} = N \ tg \theta</Math>
    <Section>
      Czegoś ci to nie przypomina? Przyrównajmy siłę tarcia z tego równania do
      tej z równania (4.8), a następnie podzielmy stronami przez N. Co
      dostajemy?
    </Section>
    <Formula nr="4.9">\mu = tg \theta</Formula>
    <Section>
      Otrzymaliśmy zależność między współczynnikiem sprężystości, a... No
      właśnie czym? Kąt ten nazywamy kątem tarcia. Możesz zrobić bardzo ciekawe
      doświadczenie rozsypując piasek i mierząc jaki jest kąt między podłożem a
      <i>stokiem piasku</i>. Kąt, który zmierzysz to własnie kąt tarcia.
    </Section>
    <Image src="dynamika/4.png">Kąt tarcia wewnętrznego piasku</Image>
    <h3>Tarcie kinetyczne</h3>
    <Section>
      Usypany piasek pozwala nam podać jeszcze jedną właściwość tarcia. Kiedy
      piasek jest w spoczynku to trzyma się sztywno, jednak wystarczy mały ruch,
      aby nagle nasz kopiec się posypał. Dlaczego?
    </Section>
    <Section>
      Współczynniki tarcia dzielimy na statyczne i kinetyczne. Pierwszy już
      poznałeś i działa gdy ciało jest w spoczynku, drugi natomiast działa gdy
      ciało już ruszymy. Jest on praktycznie zawsze mniejszy i dlatego znacznie
      ciężej ruszyć ciężką szafę niż ją pchać dalej. Wzór jednak jest
      analogiczny do (4.8), więc nie ma sensu kolejny raz go podawać, po prostu
      współczynnik tarcia jest inny.
    </Section>
    <Section>
      Albo może jednak nie... Wspólczynnik tarcia tylko w przybliżeniu jest
      stały, a w praktyce zależy od prędkości z jaką ciało się porusza i od
      powierzchni styku. Przyczyną takiego stanu rzeczy jest ilość ciepła, która
      wytwarza się podczas szybkiego tarcia.
    </Section>
    <Section>
      W ten sposób okazało się, że ostatni postulat Coulomba jest błędny. W
      praktyce jednak najczęściej to pomijamy i zakładamy, że współczynnik
      tarcia jest stały.
    </Section>
    <Image src="dynamika/5.png"><M s="\mu (t)" /></Image>

    <h3>Ograniczenia modelu Coulomba</h3>
    <Section>
      O pierwszym ograniczeniu modelu tarcia jaki założyliśmy przekonaliśmy się
      przy analizie tarcia kinetycznego. Okazało się, że tarcie wbrew modelowi
      zależy od prędkości. A co z powierzchnią styku?
    </Section>
    <Section>
      Przybliżenie kulombowskie wynika z założeń, że: powierzchnie są w bliskim
      kontakcie atomowym tylko na niewielkim ułamku ich całkowitej powierzchni,
      że ta powierzchnia kontaktu jest proporcjonalna do siły normalnej oraz że
      siła tarcia jest proporcjonalna do przyłożonej siły normalnej, niezależnie
      od powierzchni styku. Przybliżenie Coulomba jest zasadniczo konstrukcją
      empiryczną. Jest to praktyczna zasada opisująca przybliżony wynik
      niezwykle skomplikowanej interakcji fizycznej. Siłą przybliżenia jest jego
      prostota i wszechstronność. Chociaż zależność między siłą normalną a siłą
      tarcia nie jest dokładnie liniowa (a więc siła tarcia nie jest całkowicie
      niezależna od powierzchni styku powierzchni), przybliżenie Coulomba jest
      odpowiednim przybliżeniem tarcia do analizy wielu układów fizycznych.
    </Section>
    <Section>
      Kiedy powierzchnie są połączone, tarcie kulombowskie staje się bardzo
      słabym przybliżeniem (na przykład taśma klejąca jest odporna na
      przesuwanie, nawet gdy nie ma siły normalnej lub ujemnej siły normalnej).
      W tym przypadku siła tarcia może silnie zależeć od powierzchni styku. Z
      tego powodu niektóre opony wyścigowe są przyczepne. Jednak pomimo
      złożoności podstawowej fizyki stojącej za tarciem, zależności te są
      wystarczająco dokładne, aby były przydatne w wielu zastosowaniach.
    </Section>

    <h3>Tarcie w skali mikroskopowej</h3>
    <Section>
      Dotychczas analizowane problemy opierały się na uproszczonej makroskopowej
      naturze siły tarcia. Jednak w ostatnich dziesięcioleciach poczyniono
      ogromne postępy w zrozumieniu natury tarcia na poziomie atomowym. Naukowcy
      odkryli, że atomowa natura tarcia wydaje się mieć pewne fundamentalne
      właściwości. Właściwości te nie tylko wyjaśniają niektóre proste aspekty
      tarcia. Ich odkrycie ma również potencjał do zbudowania niemal
      beztarciowego ośrodka, który mogłoby pomóc zaoszczędzić setki miliardów
      dolarów na energii, która jest teraz (niepotrzebnie) przekształcana w
      ciepło.
    </Section>
    <Image src="dynamika/13.png">
      Makroskopowa struktura tarcia; Ilustracja z OpenStax.org
    </Image>
    <Section>
      Ilustracja przedstawia makroskopowy charakter tarcia, które z kolei
      wyjaśniane będzie w oparciu o analizę mikroskopową (w małej skali).
      Odkryliśmy, że tarcie jest proporcjonalne do siły normalnej i niezależne
      od powierzchni kontaktu między dwoma ciałami. Jest to nieco kontrowersyjna
      kwestia. Kiedy stykają się dwie szorstkie powierzchnie, styka się tylko
      najwyższy punkt, więc rzeczywista powierzchnia styku stanowi niewielki
      ułamek całkowitej powierzchni. Rzeczywista powierzchnia styku zwiększa
      się, gdy przyłożona jest większa siła normalna. Sugeruje to, że wartość
      siły tarcia jest proporcjonalna do wielkości tego obszaru.
    </Section>
    <Section>
      Jednakże obserwacje na poziomie atomowym mogą wyjaśnić znacznie więcej niż
      tylko proste właściwości tarcia. Na przykład możesz analizować w ten
      sposób mechanizm powstawania ciepła. Innymi słowy, dlaczego jest
      powierzchnie stają się gorące podczas pocierania? Atomy są zasadniczo
      połączone, tworząc sieć. Kiedy powierzchnie o siebie pocierają, atomy
      powierzchniowe przylegają do siebie i wywołują drgania sieci – tworząc
      fale dźwiękowe, które penetrują materiał. Fale dźwiękowe tłumią się wraz z
      odległością, a ich energia jest zamieniana na ciepło. Ponadto między
      atomami i cząsteczkami na powierzchniach tarcia mogą zachodzić reakcje
      chemiczne związane z to tak zwanym zużyciem ciernym.
    </Section>
    <Image src="dynamika/14.png">
      Mikroskopowa struktura tarcia; Ilustracja z OpenStax.org
    </Image>
    <Section>
      Na powyższym obrazku widać, jak końcówka sondy dotyka obiektu, w skutek
      czego materiał ulega deformacji. Jest ona związana z naprężeniem
      ścinającym, które jest szerzej omawiane w rozdziale Równowaga statyczna i
      sprężystość. Zróżnicowanie wartości naprężenia ścinającego jest ogromne
      (nawet rzędu <M s="10^{12}" /> ) i trudne do przewidzenia w sposób
      teoretyczny, ale to właśnie ono daje fundamentalne podstawy do zrozumienia
      zjawiska tarcia w dużej skali.
    </Section>

    <h3>Wartości współczynnika tarcia</h3>

    <Section>
      Na zakończenie pokażę ci tabelę przybliżonych wartości współczynników
      tarcia różych materiałów.
    </Section>
    <Grid>
      <Column grow="1">
        <GridH>Materiał</GridH>
        <div>Aluminium - Stal</div>
        <div>Aluminium - Aluminium</div>
        <div>Platyna - Platyna</div>
        <div>Srebro - Srebro</div>
        <div>Mosiądz - Stal</div>
        <div>Żeliwo - Miedź</div>
        <div>Żeliwo - Cynk</div>
        <div>Beton - Guma</div>
        <div>Miedź - Szkło</div>
        <div>Miedź - Stal</div>
        <div>Szkło - Szkło</div>
        <div>Stal - Stal</div>
        <div>Drewno - Metal</div>
        <div>Drewno - Drewno</div>
      </Column>

      <Column dark="1" width="calc(40px + 5vw)">
        <GridH><M s="\mu \ _{stat}" /></GridH>
        <div class="d">0.61</div>
        <div class="d">1.2</div>
        <div class="d">1.2</div>
        <div class="d">1.4</div>
        <div class="d">0.42</div>
        <div class="d">1.05</div>
        <div class="d">0.85</div>
        <div class="d">1</div>
        <div class="d">0.68</div>
        <div class="d">0.53</div>
        <div class="d">1</div>
        <div class="d">0.8</div>
        <div class="d">0.4</div>
        <div class="d">0.45</div>
      </Column>

      <Column width="calc(40px + 5vw)">
        <GridH><M s="\mu \ _{kin}" /></GridH>
        <div>0.47</div>
        <div>1.45</div>
        <div>3</div>
        <div>1.5</div>
        <div>0.44</div>
        <div>0.3</div>
        <div>0.21</div>
        <div>0.75</div>
        <div>0.53</div>
        <div>0.36</div>
        <div>0.4</div>
        <div>0.5</div>
        <div>0.5</div>
        <div>0.4</div>
      </Column>
    </Grid>
  </Article>
</template>
