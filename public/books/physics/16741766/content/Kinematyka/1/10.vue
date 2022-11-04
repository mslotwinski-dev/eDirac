<template>
  <Article>
    <Begin nr="3.10" advanced="2"> Orbity </Begin>
    <h3>Orbity planet</h3>
    <Section>
      Znając właściwości ruchu po okręgu spróbujmy zamodelować znacznie
      trudniejszy przypadek, jakim jest ruch planety wokół słońca. Startując ze
      zwykłego ruchu po okręgu wyprowadzimy wszystkie prawa Kepplera
      (przypomnimy je kiedy zajmować będziemy się grawitacją newtonowską) oraz
      wyzbaczymy tor ruchu planety wokół gwiazdy. Zanim zaczniemy pamiętaj, że
      jest to na tle poprzednich bardzo trudny temat.
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
    <Formula nr="5.42">
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
  </Article>
</template>
