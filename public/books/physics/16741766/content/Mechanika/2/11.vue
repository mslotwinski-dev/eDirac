<template>
  <Article>
    <Begin nr="4.11" advanced="1"> Równania pola </Begin>
    <h3>Opis pól fizycznych</h3>
    <Section>
      Korzystając przy badaniu sił z pojęcia pola, potrzebujemu dwóch rodzajów
      praw odnoszących się do pól. Pierwszy rodzaj powinien mówić, jaka będzie
      reakcja ciała na działanie pola. I tak, na przykład kolejno dla pola
      grawitacyjnego, elektrycznego i magnetycznego są to:
    </Section>
    <Math>
      \vec F_G = m \vec g, \qquad \vec F_E = q \vec E, \qquad \vec F_B = q(\vec
      v \times \vec B)
    </Math>
    <Section>
      Drugą kategorię praw stanowić powinny prawa określające w jaki sposób
      powstaje pole i jaka jest jego wielkość w dowolnym punkcie. Ten rodzaj
      praw nazywany niekiedy równaniami pola. Dość często jest tak, że źródło
      pola najlepiej zapisać w formie dywergencji tego pola, a jego zaburzenia w
      formie rotacji. Dla przykładu równania dla pól grawitacyjnych czy
      elektrycznych są to:
    </Section>
    <Math>
      \bigtriangledown \cdot \vec g = -4\pi G \varrho_M, \qquad \bigtriangledown
      \cdot \vec E = \frac{\varrho_E}{\varepsilon}
    </Math>
    <Section>
      Pamiętaj tylko, że w pierwszym przypadku mamy gęstość masy, a w drugiej
      ładunku. Nie zawsze jednak przedstawienie równania pola w postaci
      dywergencji jest możliwe. Przykładem takiego pola jest pole magnetyczne,
      którego dywergencja jest równa 0. W tym przypadku, co prawda nie ma ono
      źródła, jednak to nie oznacza, że nie możemy go określić w danym punkcie
      za pomocą innego rodzaju równań.
    </Section>
    <h3>Właściwości równań pól</h3>
    <Section>
      Równania pól to liniowe równania różniczkowe, podlegają zatem wszystkim
      ich prawom. Pierwszym z nich jest zasada superpozycji, pole elektryczne
      jak i grawitacyjne wytwarzane przez wiele obiektów sumuje się, co można
      zapisać jako:
    </Section>
    <Math>E = E_1 + E_2 + E_3 + ... = \sum E</Math>
    <Section>
      Zgodnie z naszym obecnym stanem wiedzy zasada ta stosuje się w pełni w
      wypadku pola elektrycznego nawet jeśli ruch ładunków komplikuje prawa.
      Mimo, że zasada superpozycji stosuje się w pełni do sił elektrycznych nie
      jest ona słuszna w przypadku grawitacji, gdy pola są zbyt silne, przy czym
      zgodnie z teorią grawitacji Einsteina równanie grawitacji Newtona jest
      tylko przybliżeniem.
    </Section>
    <Section>
      Ściśle związana z siłą elektryczną jest siła magnetyczna, przy badaniu
      której również można korzystać z pojęcia pola. Jej źródłem jest zmiana
      pola elektrycznego, czyli ruch ładunku. Wartość pola magnetycznego w danym
      punkcie określana jest przez tzw. Prawo Biota-Savarta. Chociaż nie podamy
      jeszcze poprawnego prawa działającego między poruszającymi się w dowolny
      sposób ładunkami, ponieważ jest zbyt skomplikowane jak na tom o mechanice,
      powiemy tu o jednej jego postaci - gdy znamy zarówno pole elektyrczne jak
      i magnetyczne i są one niezmienne w czasie. W tym przypadku przypadku
      siła, jaką doznaje ciało przez pole elektyrczne jak i magnetyczne się
      sumuje dając ostatecznie:
    </Section>
    <Math>\vec F = \vec E q + q(\vec v \times \vec B)</Math>
  </Article>
</template>
