<template>
  <Article>
    <Chapter nr="7" book="physics"> Energia </Chapter>
    <Begin nr="7.1" advanced="0"> Energia kinetyczna i praca </Begin>
    <h3>Czym jest energia?</h3>
    <Section>
      Zasady dynamiki Newona umożliwiają analizowanie właściwie wszystkich
      rodzajów ruchów. Może to być jednak bardzo skomplikowane i wymagać
      szczegółowych paramatrów, których nie znamy. Na przykład wyobraź sobie
      krążek, który ześlizguje się po pochyłym torze, na którym jest wiele
      wzniesień i spadków. Przykładowym zadaniem może być obliczenie prędkości
      na samym końcu ruchu znając jedynie wysokość z jakiej krążek startuje. Czy
      możesz obliczyć to korzystając jedynie z zasad Newtona? W zasadzie tak,
      ale musisz dokładnie wiedzieć, jak zmienia się nachylenie toru wzdłuż
      całej drogi krążka, a obliczenia byłyby skrajnie złożone.
    </Section>
    <Section>
      Już dawno temu naukowcy i inżynierowie doszli do wniosku, że ruch można
      badać również w inny sposób. Metoda ta stała się tak użyteczna, że
      znalazła swoje zastosowanie we wszystkich działach fizyki, a nawet w
      chemii, geografii i biologii. W metodzie tej korzystamy z energii.
    </Section>
    <Section>
      Energia może mieć wiele postaci. Termin energia ma w rzeczywistości tak
      szerokie znaczenie, że ciężko wskazać jego klarowną definicję. Technicznie
      rzecz biorąc, jest to wielkość skalarna, charakteryzująca stan, w jakim
      znajduje się ciało lub układ ciał. Ta definicja jest jednak tak ogólna, że
      na wiele nam się nie przyda.
    </Section>
    <Section>
      Energia to liczba, jaką przypisujemy do układu ciał, jednak co ona
      dokładnie reprezentuje? Po pierwsze, jeśli siła zmienia stan jednego z
      ciał, na przykład wprawiając je w ruch, to liczba ta się zmienia.
      Zacznijmy od pierwszej i najprostszej postaci energii, jaką znamy, która
      jest energia kinetyczna.
    </Section>
    <Section>
      Energia kinetyczna (oznaczana <M s="E_k" />, EK lub T) jest zależna od
      prędkości ciała i od masy. Ciało, które porusza się z określoną prędkością
      po zderzeniu zmniejsza swoją energię działając przy tym siłą, na ciało, z
      którym się zderza. Definicja energii jest więc spełniona.
    </Section>
    <Formula nr="7.1">E_k = \frac{1}{2}mv^2</Formula>
    <Section>
      Jednostką energii jest dżul. Nazwa ta pochodzi od XIX-wiecznego
      angielskiego uczonego Jamesa Joule'a. Energia kaczki o masie 4kg, która
    </Section>
    <h3>Praca</h3>
    <Section>
      Obliczmy jak zmienia się się energai kinetyczna z punktu a do punktu b. W
      ten sposób policzmy pochodną energii kinetycznej. Jako, że
      <M s="v^2 = v \cdot v" />, otrzymujemy następującą zależność.
    </Section>
    <Math>
      \frac{d}{dt} E_k = \frac{1}{2}m \frac{d}{dt}(v \cdot v) = \frac{1}{2}m
      (\dot v \cdot v + v \cdot \dot v) = m \dot v \cdot v = F \cdot v
    </Math>
    <Section>Mnożąc przez dt otrzymujemy wzór na zmianę energii.</Section>
    <Formula nr="7.2">dE = \vec F \cdot d \vec s</Formula>
    <Section>
      Całkując po obu stronach otrzymujemy ostateczną zależność. Wyrażenie po
      prawej stronie nazywamy pracą i oznaczamy jako W. Przy takiej definicji
      zmiana energii między dwoma punktami po krzywej L jest równa pracy
      wykonanej przez siłę, działającą na cząstkę między dwoma punktami.
    </Section>
    <Formula nr="7.3">W = \int \limits _L \vec F \cdot d \vec s</Formula>
    <Section>
      W ogólności jest to całka krzywoliniowa. Są one niestety znacznie
      trudniejsze do liczenia niż standardowe całki. Dlaczego potrzebujemy całki
      krzywoliniowej? Zauważ, że od punktu A do punktu B możemy przemieszczać
      się po różnych drogach. Gdyby był to zawsze prosty odcinek wystarczyłaby
      standardowa całka, ale niestety nie zawsze droga między dwoma punktami to
      odcinek. Zależność między energią kinetyczną, a pracą redukuje się do
      następującej postaci.
    </Section>
    <Formula nr="7.4">\Delta E = W</Formula>
    <Section>
      Jeśli siła działająca na ciało jest stała pracę można przedstawić jako
      zwykły iloczyn:
    </Section>
    <Formula nr="7.5">W = \vec F \cdot \vec s</Formula>
    <Section>
      Zauważ teraz ważną rzecz. O ile energia kinetyczna jest dodatnia, praca
      może być ujemna. Dzieje się tak, gdy energia kinetyczna ciała się
      zmniejsza, a więc gdy ciało zwalnia. Patrząc na sam wzór na pracę, znając
      prawa działań na wektorach wiemy, że wzór ten będzie ujemny, gdy siła
      będzie działać w przeciwnym kierunku niż droga. Jeśli próbujemy zatrzymać
      niewyobrażalnie ciężką kulę mimo, że nasza siła działa w jedną stronę,
      kula przesuwa nas w drugą stronę. Praca jest więc ujemna. Nasz wysiłek
      jednak sprawił, że kula zwolniła, więc zgadza się to z naszą definicją.
      Marne pocieszenie będąc zgniecionym przez kulę, ale czego nie robi się dla
      nauki.
    </Section>
    <Section>
      Kolejną właściwością, która kłóci się ze zdrowym rozsądkiem jest fakt, że
      gdy siła i przemieszczenie są prostopadłe praca jest zerowa. Przenosząc
      więc walizkę nie wykonujesz pracy, bo przmieszczenie jest na przykład w
      przód, natomiast siła grawitacyjna jest zwrócona w dół.
    </Section>
    <Example title="Praca na różnych drogach">
      <Section>
        Oblicz pracę wykonaną przez siłę o wartości
        <M s="\vec F = (y, 2x)" /> przy przejściu z początku układu O, do punktu
        P = (1, 1) wzdłuż każdej z trzech krzywych.
      </Section>
      <Image src="dynamika/12.png" />
      <Section>
        A - Poruszamy się najpierw do punktu Q (1,0), a następnie dopiero do
        punktu P (1, 1)
      </Section>
      <Section> B - Poruszamy się po linii prostej do punktu P </Section>
      <Section> C - Nasza droga biegnie po fragmencie okręgu </Section>
      <b>Rozwiązanie</b>
      <Section>
        Całkę wzdłuż krzywej A łatwo obliczyć, rozbijając ją na dwie części.
        Jeśli zauwrażymy, że na odcinku OQ przemieszczenia mają postać
        <M s="d \vec s" /> = (dx, 0), a na odcinku QP — postać dr = (0, dy).
      </Section>
      <Math>
        W_A = \int \limits_A \vec F \cdot d\vec s = \int \limits_O^P \vec F
        \cdot d \vec s + \int \limits_Q^P \vec F \cdot d\vec s = \int
        \limits_0^1 \vec F_x(x, 0) dx + \int \limits_0^1 F_y(1,y) dy = 0 + 2 = 2
      </Math>
      <Section>Dla krzywej b mamy x = y, a zatem dx = dy, co daje:</Section>
      <Math>
        W_B = \int \limits_B \vec F \cdot d\vec s = \int \limits_B ( F_x dx +
        F_y dy ) = \int \limits_0^1 ( x + 2x )dx = 1,5
      </Math>
      <Section>
        Krzywą C najłatwiej napisać w postaci parametrycznej, gdzie s = (1 - cos
        <M s="\theta" />, sin <M s="\theta" />)
      </Section>
      <Math>
        W_C = \int \limits_C \vec F \cdot d\vec s = \int \limits_C ( F_x dx +
        F_y dy ) = \int \limits_0^{\pi / 2} \bigg[sin^2 \theta + 2(1-cos \theta)
        \ cos \theta\bigg] d \theta = 2 - \pi/4 = 1,21
      </Math>
      <Section>
        Możemy więc stwierdzić, że najmniejszą pracę wykonamy poruszając się po
        okręgu.
      </Section>
    </Example>
  </Article>
</template>
