<template>
  <Article>
    <Begin nr="4.10" advanced="1"> Podstawy teorii pola</Begin>
    <h3>Pole</h3>
    <Section>
      Pole to jest rozciągnięty w przestrzeni rozkład pewnej wielkości. Często
      fizycy nie potrafią określić czym coś jest, jedynie znają tego skutki. Nie
      wiemy co jest rozciągnięte w polu grawitacyjnym, ale wiemy, że im jego
      natężenie jest większe tym większa siła grawitacyjna działa między dwoma
      ciałami. Co jest rozciągnięte w polu grawitacyjnym? Pole grawitacyjne. Ono
      po prostu istnieje, znamy jego przyczyny (ciała obdarzone masą), znamy
      jego skutki (przyciąganie między ciałami), ale czym dokładnie jest? Nie
      wiemy, po prostu istnieje.
    </Section>
    <Section>
      Podstawową wielkością charakteryzującą pole jest jego natężenie. Jak sama
      wskazuje wielkość ta wskazuje jak silne jest dane pole w danym miejscu. W
      oparciu o jego natężenie można zdefiniować tak jak w matematyce potencjał
      pola jako następującą funkcje. Oznaczmy natężenie jakiegoś pola skalarnego
      jako A i jego potencjał jako V. W ten sposób otrzymujemy następujący wzór:
    </Section>
    <Formula nr="4.19">A = - {\bigtriangledown \ V}</Formula>
    <Section>
      Potrafimy również określić czym są zaburzenia rozpatrywanego pola i to
      nawet na dwa sposoby - jako cząstke i jako falę. To jest właśnie ten
      słynny dualizm korpuskularno-falowy. Jeśli pytają się czy światło to
      cząstka czy fala to odpowiedź brzmi, że jednym i drugim. W polu
      elektromagnetycznym są to fale elektromagnetyczne, wśród których jest
      również światło. Są one jednak porcjowane w postaci cząstek zwanych
      fotonami. Zaburzeniem pola grawitacyjnego jest fala grawitacyjna
      (przypuszcza się, że wyrzucana w formie grawitonów), natomiast
      zaburzeniami pól kwantowych są znane nam cząstki - elektrony, kwarki czy
      neutrina.
    </Section>

    <h3>Podział pól</h3>
    <Section>
      Pola można podzielić na kilka sposobów. Po pierwsze można podzielić je
      podzielić wedle tego jakiego typu wielkość przyporządkowują. Chodzi tutaj
      o pola skalarne, wektorowe i tensorowe. Pole skalarne przyporządkowuje w
      każdym miejscu zwykłą liczbę, czego przykładem temperatura, ciśnienie czy
      energia. Pole wektorowe przyporządkowuje każdemu punktowi wektor, czego
      przykładem jest pole grawitacyjne, elektryczne, magnetyczne, pole sił
      (omówione na końcu) lub bardzo istotne w hydrodynamice pole prędkości.
      Pola tensorowe są już znacznie wyższą szkołą jazdy i każdemu punktowi w
      przestrzeni przyporządkowują tensor. Przykładem takiego pola jest pole
      naprężeń czy pole elektromagnetyczne jako całość (tensor pola
      elektromagnetycznego).
    </Section>
    <Section>
      Dość intuicyjny podział to podział na pola stacjonarne i niestacjonarne.
      Co się kryje pod tą nazwą? Pola stacjonarne to takie, które są niezmienne
      w czasie, one są i tyle, nie zmieniają się.
    </Section>
    <Formula nr="4.20">\frac{\partial A}{\partial t} = 0</Formula>
    <Section>
      Przykładem pola stacjonarnego to pole wytwarzane wokół gwiazdy lub wokół
      spoczywającego ładunku. Polem niestacjonarnym jest pole poruszającego się
      ładunku lub pola rozpędzające cząstki w akceleratorach.
    </Section>

    <Section>
      Ważną klasą pól są pola centralne i pola jednorodne. Pola centralne to
      pola, wytwarzane przez masy czy ładunki punktowe. Cechuje je to, że mają
      jeden centralny punkt, z którego wychodzą wszystkie linie pola. Jego
      zasadniczą cechą jest symetria ze względu ma obrót. Pole jednorodne
      natomiast ma taką samą wartość w każdym punkcie tego pola.
    </Section>
    <Image src="dynamika/8.png">Pole centralne wokół ładunku</Image>
    <Section>
      Kolejną możliwością klasyfikacji pól jest użycie operatorów analizy
      wektorowej. Pole bezwirowe to pole, którego dywergencja jest równa 0.
    </Section>
    <Formula nr="4.21">\bigtriangledown \cdot A = 0</Formula>
    <Section>
      Taki sam podział można zrobić z polem ze względu na jego rotację, która
      gdy jest równa 0 mówi nam, że pole jest bezwirowe.
    </Section>
    <Formula nr="4.22">\bigtriangledown \times A = 0</Formula>
    <Section>
      Ważnym wspomnienia jest fakt, że jedyne pole centralne, które spełnia
      warunek bycia bezźródłowym to pole postaci <M s="C/r^2" />, gdzie C jest
      stałą. Uniwersalnym stwierdzeniem jest jednak fakt, że każde pole
      centralne jest polem bezwirowym.
    </Section>
    <Image src="dynamika/9.png">
      Pole wirowe powstające np. przy turbulentnym przepływie płynu
    </Image>

    <h3>Pole elektromagnetyczne</h3>
    <Section>
      Zajmijmy się czymś, co nazywamy siłami podstawowymi. Intuicja może
      podpowiadać, że są to 4 podstawowe siły we wszechświecie, czyli
      oddziaływanie silne, elektromagnetyczne, słabe i grawitacyjne. Zacznijmy
      od elektryczności i magnetyzmu. Cząsteczki noszą ładunek oznaczany jako q
      lub Q i mierzymy w Coulombach (C). Jest to ich fundamentalna właściwość
      tak jak masa. Ładunek jednego elektronu (e) jest zwany ładunkiem
      fundamentalnym i jest najmniejszą ilością ładunku, jaki może swobodnie
      występować w przyrodzie. Podkreśliłem swobodnie, bo mamy przecież kwarki
      mają ładunek ułamkowy np. 1/3e czy 2/3e, jednak kwarki nie mogą występować
      samotnie, zawsze są <i>upakowane</i> w większe cząstki (hadrony), których
      ładunek zawsze jest wielokrotnością e.
    </Section>
    <Section>
      W makroskopowej skali całe ciała mogą być naładowane, a jest to
      spowodowane nadmiarem lub niedoborem elektronów. Naładowane ciała
      wytwarzają wokół siebie pole elektryczne. Pola te oddziałują ze sobą,
      czego skutkiem jest siła (siła Coulomba) między każdym naładowanym ciałem
      czy cząstką wynosząca:
    </Section>
    <Math>F = \frac{1}{4\pi \varepsilon} \frac{q Q}{r^2}</Math>
    <Section>
      Jedyny człon, który nie jest tu określony to <M s="\varepsilon" />. Jest
      to przenikalność elektryczna i określa jak sama nazwa wskazuje jak mocno
      dany ośrodek tłumi pole elektromagnetyczne w danym punkcie. Może być on
      zarówno skalarem, jak i tensorem. A jaki jest sens fizyczny oznaczenia
      przenikalności elektrycznej jako tensora? Oznacza to, że w ośrodku takim
      przenikalność ma różne wartości w różnych kierunkach. Najczęściej jednak
      przenikalność elektryczna to zwykła liczba, która w próżni jest oznaczana
      indeksem 0 i jest równa:
    </Section>
    <Math>
      \varepsilon_0 = 8,854 \cdot 10^{-12} \ \ \bigg[ \frac{C^2}{N \ m^2} =
      \frac{F}{m} \bigg]
    </Math>
    <Section>
      Jednostka oznaczona jako F to farad, którą poznasz w przyszłości, ale po
      prostu ładniej wygląda we wzorze. Siły elektryczne sa znacznie bardziej
      skomplikowane niż może się to wydawać, w końcu podaliśmy jedynie przykład
      dla dwóch pojedyńczych <b>spoczywających</b> ładunków nie wspominając
      nawet o naładowanych rurkach czy pierścieniach lub ich ruchomych wersjach
      gdzie w grę wchodzi magnetyzm. Elektromagnetyzmowi poświęcimy osobny
      (czwarty) tom.
    </Section>
    <Section>
      Wspominaliśmy, że ładunki generują pola, jednak dlaczego to robią, oraz
      jakie jest natężenie tych pól? To prawo Gaussa mówi nam o tym, że źródłem
      pola elektrycznego są ładunki. Matematycznie brzmi to tak:
    </Section>
    <Math>
      \oint \limits_{S} \vec E \cdot d \vec S = \frac{Q}{\varepsilon}
    </Math>
    <Section>
      To nie jest pora na zajmowanie się elektrodynamiką (jeżeli już musisz go
      wyprowadzić to scałkuj pole elektryczne po powierzchni sfery, zrobimy to
      wspólnie w tomie 4), ale ostatecznie okazuje się, że w przypadku
      równomiernego rozkładu pola elektrycznego (próżnia, powietrze etc.) wzór
      na pole elektryczne wytwarzane przez ładunek wygląda w ten sposób:
    </Section>
    <Math>E = \frac{Q}{4\pi \varepsilon \ r^2}</Math>
    <Section>
      Możemy zatem udowodić, że siła, jakiej doznaje naładowane ciało w polu
      elektrycznym jest iloczynem natężenia pola elektrycznego i ładunku.
    </Section>
    <Math>\vec F = \vec E q</Math>
    <Section>
      Po co robimy to wszystko? Chodzi o rozdzielenie zjawiska ruchu na dwie
      części. Najpierw stwierdzamy, że coś wytwarza pole, a następnie - że pole
      na coś działa. Ten podział umożliwia niezależne traktowanie obu części, co
      w wielu przypadkach pozwala uprościć rachunki. Jeśli mamy do czynienia z
      wieloma ładunkami najpierw szukamy pola w danym punkcie pochodzącego od
      wszystkich ładunków, a następnie znając ładunek znajdujemuy siłę, która na
      niego działa.
    </Section>

    <h3>Pole grawitacyjne</h3>
    <Section>
      W przypadku grawitacji w ujęciu Newtona możemy postępować zupełnie tak
      samo. Tu siła wyraża się wzorem:
    </Section>
    <Math>F = G\frac{mM}{r^2}</Math>
    <Section>
      Tu możemy rozumować dokładnie tak samo. Siła działająca na dowolne ciało
      umieszczone w polu grawitacyjnym równa się masie tego ciała mnożonej przez
      pole g, a więc F = mg.
    </Section>
    <Section>
      Mimo pozorów takie rozbicie oddziaływania na dwie części wcale nie jest
      banalne. Byłoby banalne, gdyby było to tylko zapisanie innym sposobem tego
      samego faktu. Okazuje się, że pola mają realny charakter prawie niezależny
      od obiektów, które je wytwarzają.
    </Section>
    <Section>
      Możemy potrząsać ładunkiem, aby wytworzyć pole w pewnej odległości. Jeśli
      przestaniemy nim potrząsać, pole będzie <i>pamiętało</i> o przeszłości,
      ponieważ oddziaływanie między dwiema cząstkami nie jest natychmiastowe. W
      próżni zmiany pól grawitacyjnych i elektromagnetycznych rozchodzą się z
      prędkością światła.
    </Section>

    <h3>Pole sił i energia potencjalna</h3>
    <Section>
      A co jeśli same siły też potraktować jako pole? W sumie, nic nie stoi na
      przeszkodzie, żeby to zrobić. Każda z sił może być opisana jako pole
      wektorowe opisujące wektor siły w każdym punkcie przestrzeni. Zakladając,
      że nasza siła jest zachowawcza (praca wykonana przez tą siłę zależy tylko
      od wartości drogi, a nie toru ruchu), rotacja tego pola jest równa 0, więc
      pole to posiada potencjał. Jest to jednak dość niezwykły potencjał.
      Potencjał sił zwany jest energią potencjalną i oznaczony jest U lub
      <M s="E_P" />.
    </Section>

    <Section>
      Każde bezwirowe pole posiada energię potencjalną. Energia w ogólności to
      zdolność wykonania pracy przez ciało, jednak ten szczególny rodzaj energii
      możemy rozpartywać jako pole skalarne, którego zmiany są miarą siły,
      jakiej doznaje ciało.
    </Section>

    <Section>
      Rozumowanie w kierunku odwrotnym mówi nam, że wektor wskazujący kierunek
      najszybszych zmian pola energii potencjalnej (jej gradient) jest co do
      wartości równy sile, jaka działa na ciało w tym polu w tym pukcie.
    </Section>
    <Formula nr="4.23"> F = - { \bigtriangledown U }</Formula>

    <Image src="dynamika/7.png">
      Zależność między energią potencjalną, a siłą
    </Image>
  </Article>
</template>
