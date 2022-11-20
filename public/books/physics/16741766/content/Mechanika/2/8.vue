<template>
  <Article>
    <Begin nr="4.8" advanced="0">
      Zasady dynamiki w układzie współrzędnych
    </Begin>
    <h3>Rozkład sił</h3>
    <Section>
      Zakładając, że masa jest stała siłę możemy zapisać jako iloczym
      przyspieszenia i masy. To jest dość oczywiste. Co jednak gdy mamy do
      czynienia z bardziej skomplikowanym rozkładem sił? Najczęściej ogólny wzór
      rozkładamy na 3 składowe. W ten sposób otrzymujemy równoważność.
    </Section>
    <Math>
      \displaystyle \vec F = m \vec a \quad \Leftrightarrow \quad \begin{cases}
      \ F_x = m \ddot x \\ \ F_y = m \ddot y \\ \ F_z = m \ddot z \end{cases}
    </Math>
    <h3>Równia pochyła</h3>
    <Section>
      Sztandarowym przykładem użycia równań Newtona do rozwiązywania problemów
      mechanicznych jest równia pochyła. Jest to w zasadzie jakakolwiek płaska
      powierzchnia pochylona pod pewnym kątem. Zacznijmy od analizy sił.
    </Section>
    <Image src="dynamika/6.png">Rozkład sił na równi pochyłej</Image>
    <Section>
      Ciężar ciała na równi jest równy mg, jednak jego nacisk na równie, jak i
      reakcja równi, są prostopadłe do jej powierzchni i wynoszą
      <M s="mg \ cos \theta" />. Siła styczna, która zsuwa naszą masę jest równa
      <M s="mg \ sin \theta" />.
    </Section>
    <Section>
      Zakładając, że siły tarcia nie występują możemy przyrównać siłę zsuwania
      do wzoru Newtona. W tym przypadku dostajemy:
    </Section>
    <Math>\displaystyle ma = mg \ sin \theta</Math>
    <Section>
      Co po skróceniu daje nam przyspieszenie, jakie doznaje zsuwane ciało.
    </Section>
    <Math>\displaystyle a = g \ sin \theta</Math>
    <Section>
      Nie jest to jednak przypadek, jaki nas interesuje. Dołożymy tutaj siłę
      tarcia. W tym przypadku wypadkowa siła zsuwająca będzie równa
    </Section>
    <Math>
      \displaystyle F = mg \ sin \theta - N \mu = mg \ sin \theta - mg \ cos
      \theta \mu
    </Math>
    <Section>Przyspieszenie zsuwającego ciężarku jest wtedy równe</Section>
    <Formula nr="4.11">
      \displaystyle a = g (sin \theta - \mu cos \theta)
    </Formula>
    <Section>
      Jako ćwiczenie dla bardziej zaawanaowanych możesz spróbować udowodnić ten
      wzór, który również możesz stosować.
    </Section>
    <Math>
      \displaystyle a = g \sqrt{ 1 + \mu^2} \ sin(\theta + arctg (-\mu))
    </Math>
    <Section>Dla kątów bliskich 0 możesz postąpić w ten sposób: </Section>
  </Article>
</template>
