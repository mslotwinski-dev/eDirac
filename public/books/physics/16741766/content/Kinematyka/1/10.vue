<template>
  <Article>
    <Begin nr="3.10" advanced="2"> Orbity </Begin>
    <h3>Ruch planet</h3>
    <Section>
      Znając właściwości ruchu po okręgu spróbujmy zamodelować znacznie
      trudniejszy przypadek, jakim jest ruch planety wokół słońca. Startując ze
      zwykłego ruchu po okręgu wyprowadzimy I prawo Kepplera, mówiące, że
      planety poruszają się po orbitach eliptycznych (przypomnimy to prawo kiedy
      zajmować będziemy się grawitacją newtonowską) oraz wyznaczymy tor ruchu
      planety wokół gwiazdy. Zanim zaczniemy pamiętaj, że jest to na tle
      poprzednich bardzo trudny temat. Ba, najtrudniejszy w całej części
      kinematyki i spokojnie możesz go pominąć.
    </Section>
    <Section>
      Zakładamy, ze trajektoria ruchu Planety wokół Słonca lezy na płaszczyznie.
      Zarówno Słonce, jak i Planete traktujemy jako punkty materialne.
      Umieszczamy poczatek układu współrzednych w srodku Słonca i opisujemy
      połozenie Planety wzgledem Słonca za pomoca współrzednych kartezjanskich
      (x, y). Niech M oznacza mase Słonca, a m mase Planety. Przypomnijmy dwa
      podstawowe prawa mechaniki, z których będziemy korzystać.
    </Section>
    <Math>\displaystyle \vec F = \vec a m</Math>
    <Section>
      Zgodnie z prawami grawitacji Newtona masy przyciągją się do siebie.
    </Section>
    <Math>
      \displaystyle \vec F = \frac{GMm}{r^2} \hat r = \frac{GMm}{r^2} \frac{\vec
      r}{|r|}
    </Math>
    <Section>
      Przyrównując oba równania do siebie i zapisując w kartezjńskim układzie
      współrzędnych otrzymujemy następujące równania ruchu:
    </Section>
    <Formula nr="3.42">
      \displaystyle m \begin{bmatrix} \ddot{x} \\ \ddot{y} \end{bmatrix} =
      \frac{GMm}{x^2 + y^2} \frac{1}{\sqrt{x^2 + y^2}} \begin{bmatrix} x \\ y
      \end{bmatrix}
    </Formula>
    <Section>
      Zauważ, że masa planety się skróci. Dla uproszczenia załóżmy, że GM = 1.
      Wszystko jedno, gdyż nie wpływa to na tor ruchu. Niestety równania
      kartezjańskie są bardzo skomplikowane. Znacznie prościej wyrazić je w
      układzie współrzędnych biegunowych.
    </Section>
    <Section>
      Po obliczeniu pochodnych i wykonaniu odpowiednich przekształcen
      otrzymujemy nastepujace równania ruchu okreslone we współrzednych
      biegunowych:
    </Section>
    <Math>
      \displaystyle \begin{cases} \ddot r - r \dot \theta ^2 + \frac{1}{r^2} = 0
      \\ r \ddot \theta + \htmlClass{nr}{2} \dot r \dot \theta = 0 \end{cases}
    </Math>
    <Image src="kinematyka/7.png" />
    <h3>Niezmienniki</h3>
    <Section>
      Otrzymane równania różniczkowe są nieliniowe. Praktycznie nie ma
      możliwości rozwiązania ich czystą matematyką na tym etapie. Klasyczne
      zastosowanie metod mechaniki analitycznej przy rozwiazywaniu równan ruchu
      polega na wyznaczeniu tzw. niezmienników (stałych ruchu). Sa to wielkosci
      zalezne od połozen i predkosci, które pozostaja stałe podczas ruchu. W
      przyrodzie mamy 4 zasady zachowania - są to: energia, pęd, moment pędu
      oraz ładunek elektryczny. Mając do czynienia z ruchem po orbicie najlepiej
      użyć zasady zachowania energii i momentu pędu. Dokładnie operować energią
      i pędem nauczysz się w części poświęconej dynamice.
    </Section>
    <Section>
      Zacznijmy od momentu pędu. We współrzędnych biegunowych wyraża się on
      poprzez <M s="mr^2 \dot \theta" />. Możemy sprawdzić, czy aby na pewno nie
      zmienia się on w czasie ruchu. W ten sposób należy policzyć jego pochodną
      wzdłuż trajektorii.
    </Section>
    <Math>
      \displaystyle \dot L = 2mr \dot r \dot \theta + mr^2 \ddot \theta = mr \
      (r \ddot \theta + 2 \dot r \dot \theta) = 0
    </Math>
    <Section>
      Jak widać w ciągu ruchu moment pędu się nie zmienia. Drugim kandydatem na
      niezmiennik jest energia całkowita planety (kinetyczna i potencjalna).
      Oczywiście trzymamy się założenia, że GM = 1.
    </Section>
    <Math>
      \displaystyle E = \frac{1}{2}mv^2 - \frac{GMm}{r} = \frac{1}{2}m(\dot x^2
      + \dot y^2) - \frac{m}{r} = \frac{1}{2}m \dot r^2 + \frac{1}{2}L \dot
      \theta - \frac{m}{r}
    </Math>
    <h3>Równanie orbity</h3>
    <Section>
      Teraz zacznie się prawdziwa jazda. Okazuje sie, ze te dwa niezmienniki
      pozwola na rozwiazanie równan ruchu Planety wokół Słonca. Wprowadźmy
      funkcję pomocniczą u = 1/r. W celu wyrazenia energii poprzez funkcje u
      obliczamy
    </Section>
    <Math>
      \displaystyle \begin{cases} \dot r = \dot{(u^{-1})} =
      -u^{-2}\frac{du}{d\theta}\dot \theta = -r^2 \dot \theta \frac{du}{d\theta}
      \\ \dot \theta = \frac{L}{m}u^2 \end{cases}
    </Math>
    <Section>Energię możemy wyrazić w następujący sposób:</Section>
    <Math>
      \displaystyle E = \frac{1}{2} \frac{h^2}{m} \Bigg( \bigg(
      \frac{du}{d\theta} \bigg) ^2 + u^2 \Bigg) - mu
    </Math>
    <Section>
      Kilka przekształceń doprowadza nas do następującego liniowego równania
      różniczkowego, które już bez problemu umiemy rozwiązać.
    </Section>
    <Math>\displaystyle \frac{d^2 u}{d\theta ^2} + u = \frac{m^2}{L^2}</Math>
    <Section> Rozwiązaniem tego równania jest: </Section>
    <Math>\displaystyle u = \frac{m^2}{L^2} + C \ cos(\theta + \theta_0)</Math>
    <Section>
      Zakładając, że <M s="\theta_0" /> = 0, stałą C możemy wyliczyć z
      pierwotnego wzoru na energię na początku tego paragrafu.
    </Section>
    <Math>
      \displaystyle C = \frac{m^2}{L^2} \sqrt {\Bigg( 1 + \frac{2EL^2}{m^3}
      \Bigg)}
    </Math>
    <Section>Drugi element jest unikatową własnością </Section>
    <Formula nr="3.43">
      \displaystyle \varepsilon = \sqrt {\Bigg( 1 + \frac{2EL^2}{m^3} \Bigg)}
    </Formula>
    <Section>
      W przypadku ogólnym, kiedy GM jest różne od 1, wyraża się on następującym
      wzorem:
    </Section>
    <Formula nr="3.44">
      \displaystyle \varepsilon = \sqrt {\Bigg( 1 + \frac{2EL^2 (m + M)}{G^2
      (Mm)^3} \Bigg)}
    </Formula>
    <Section>
      Powracamy jednak do założenia, że GM = 1. Wprowadźmy też nowe oznaczenie
      na drugą część stałej jako <M s="l = \frac{L^2}{m^2}" />. Podstawiając to
      wszystko do równania ruchu planety wokół słońca, otrzymujemy ostateczne
      równanie ruchu.
    </Section>
    <Formula nr="3.45">
      \displaystyle r(1 + \varepsilon \ cos \ \theta) = l
    </Formula>
    <Section>
      Otrzymane równanie jest równaniem elipsy we współrzednych biegunowych.
      Stanowi ono kwintesencje I Prawa Keplera. Współczynnik ε nazywa sie
      mimosrodem, a współczynnik l parametrem elipsy. Oba współczynniki
      wyznaczają jednoznacznie dłuzsza a i krótsza b półoś elipsy, wystepujace w
      równaniu elipsy we współrzednych kartezjanskich.
    </Section>
    <Math>
      \displaystyle \Big( \frac{x}{a} \Big) ^2 + \Big( \frac{y}{b} \Big) ^2 = 1
    </Math>
    <Section>
      Korzystajac z definicji elipsy (miejsce geometryczne wszystkich punktów
      płaszczyzny, dla których suma odległosci od dwóch, ustalonych punktów,
      ognisk, jest stała) mozna pokazac, że
    </Section>
    <Math>
      \displaystyle a = \frac{l}{1 - \varepsilon^2} \qquad b = \frac{l}{\sqrt{1
      - \varepsilon^2}}
    </Math>
  </Article>
</template>
