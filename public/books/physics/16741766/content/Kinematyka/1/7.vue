<template>
  <Article>
    <Begin nr="3.7" advanced="0"> Rzut poziomy i ukośny </Begin>
    <h3>Rzut poziomy</h3>
    <Section>
      Zacznijmy od szczególnego przypadku rzutu ukośnego, czyli rzutu poziomego.
      Rzut ten jest złożeniem ruchu jednostajnego poziomego oraz pionowego
      przyspieszonego (swobodny spadek). Zaniedbujemy opór powietrza dla
      uproszczenia opisu (a przynajmniej tymczasowo, wrócimy do rzutów, ale z
      oporem powietrza w następnym rozdziale). W ten sposób możemy zapisać
      równania dwóch współrzędnych jako:
    </Section>
    <Math>
      \displaystyle x = v_0 t \qquad \displaystyle y = \frac{1}{2}gt^2
    </Math>
    <Section>
      Czas ruchu się skończy, kiedy otrzymamy y wyniesie 0. Podstawiając za y 0
      oraz wyliczając czas z powyższego równania ruchu czas spadania wyniesie:
    </Section>
    <Math>\displaystyle t = \sqrt\frac{2h}{g}</Math>
    <Section>
      Natomiast zasięg definiuje to, jak zdąży urosnąć współrzędna x podczas
      rzutu, czyli:
    </Section>
    <Math>\displaystyle x_{max} = v_0t = v_0\sqrt\frac{2h}{g}</Math>
    <Section>
      To jest jednak tak proste, że aż nudne, zajmijmy się czymś ciekawszym i
      bardziej ambitnym.
    </Section>
    <h3>Rzut ukośny</h3>
    <Section>
      Dobrze, nareszcie przechodzimy do tego, co nazywamy rzutami ukośnymi. Tego
      typu ruchem jest na przykład kopnięta piłka lub kula wystrzelona z armaty.
      W tym przypadku sama prędkość początkowa jest wektorem.
    </Section>
    <Math> \displaystyle \vec v_0 = v_{0x} \hat x + v_{0y} \hat y </Math>
    <Section>
      To jest ten moment, kiedy wygodniej nam przejść na współrzędne
      krzywoliniowe. Jeśli jednak nie znasz tego pojęcia to nie przejmuj się
      (chociaż jednak warto znać to pojęcie). Wyobraź sobie to w ten sposób, że
      składowe <M s="v_{0x}" /> i <M s="v_{0y}" /> możemy wyznaczyć poprzez kąt
      <M s="\theta" />, jaki tworzą z osią X układu współrzędnych. W ten sposób
      otrzymujemy:
    </Section>
    <Math>
      \displaystyle v_{0x} = v_{0} cos \theta_0 \qquad v_{0y} = v_{0} \sin
      \theta_0
    </Math>
    <Section>
      Podczas tego ruchu wektor położenia, prędkości i kąta się ciągle
      zmieniają, jednak wektor przyspieszenia jest stały i zawsze skierowany
      pionowo w dół. Cząstka nie doznaje żadnego przyspieszenia w kierunku
      poziomym. Możemy jednak ponownie rozbić go na ruch w pionie i ruch w
      poziomie.
    </Section>
    <Section>
      Ruch w kierunku poziomym odbywa się bez przyspieszenia, dlatego też
      składowa pozioma prędkości pocisku nie ulega zmianie w czasie ruchu i
      pozostaje równa swej wartości początkowej. Jako, że x - <M s="x_0" /> jest
      równe <M s="v_{0x}" />t otrzymujemy wzór na poziomą składową rzutu.
    </Section>
    <Math>\displaystyle x = v_0 cos \theta \ t</Math>
    <Section>
      Ruch ciała w pionie jest taki sam, jak ruch ciała w rzucie pionowym ,
      który omówiliśmy w poprzednim temacie.
    </Section>
    <Math>
      y = v_{0y}t - \frac{1}{2}gt^2 = v_0 sin \theta_0 \ t - \frac{1}{2}gt^2
    </Math>
    <h3>Równanie toru</h3>
    <Section>
      Równanie ruchu cząstki możemy wyznaczyć eliminując z równań czas. Po kilku
      przekształceniach otrzymujemy równanie ruchu w rzucie ukośnym.
    </Section>
    <Formula nr="2.30">
      \displaystyle y = tg\theta_0x - \frac{gx^2}{2(v_0 cos\theta_0)^2}
    </Formula>
    <Section>
      Dla prostoty przyjmujemy, że rzut rozpoczyna się na początku układu
      współrzędnych.
    </Section>
  </Article>
</template>
