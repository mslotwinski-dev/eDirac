<template>
  <Article>
    <Begin nr="3.9" advanced="0"> Ruch po okręgu </Begin>
    <h3>Ruch jednostajny po okręgu</h3>
    <Section>
      Kolejnym szczególnym przypadkiem ruchu jest ruch jednostajny po okręgu.
      Jest bardzo ciekawy z tego względu, że o ile wartość prędkości jest stała,
      ruch jest ruchem przyspieszonym. Zaraz, co?
    </Section>
    <Section>
      Przypomnij sobie czym jest przyspieszenie. Jest to zmiana wektora
      prędkości, jednak wcale nie jest powiedziane, że musi zmieniać się jego
      wartość. W tym przypadku zmienia się kierunek prędkości. Co ważne, jest on
      zawsze styczny do toru. Przyspieszenie natomiast jest prostopadłe do toru
      i zwrócone do środka okręgu. Dlatego właśnie przyspieszenie to nazywa się
      przyspieszeniem dośrodkowym.
    </Section>
    <Section>
      Przyspieszenie jak pamiętasz z rozdziału 3.5 dzieli się na przyspieszenie
      styczne i prostopadłe. Przyspieszenie styczne odpowiada tutaj za zmianę
      wartości prędkości, natomiast prostopadłe, działające do środka okręgu, za
      zmianę kierunku. Wykorzystując wzór (3.23) na przyspieszenie prostopadłe
      jawnie otrzymujemy, że przyspieszenie dośrodkowe wynosi:
    </Section>
    <Formula nr="5.37">\displaystyle a_{\eta} = \frac{v^2}{r}</Formula>
    <Section>
      Takie przyspieszenie działające do środka jest potrzebne, aby
      <i>utrzymać</i> ruch po okręgu. <i>Nadmiarowe</i> przyspieszenie jest
      <i>przetwarzane</i> w przyspieszanie ruchu po okręgu.
    </Section>
    <Image src="kinematyka/6.png" />
    <h3>Ruch kątowy</h3>
    <Section>
      Z każdą sekundą ruchu po okręgu nasze ciało zakreśla pewien kąt φ. Nie
      jest on bezpośrednio związany z odległością, jaką przebywa ciało, a jednak
      im większy tym większe przemieszczenie ciałą. Możemy więc przypuszczać, że
      jest on proporcjonalny do drogi, jaką przebuwa ciało. Okazuje się, że
      dokładnie tak jest, a współczynnikiem proporcjonalności jest tu promień.
    </Section>
    <Formula nr="5.38">\displaystyle \varphi = \frac{s}{r}</Formula>
    <Section>
      Określmy zatem miarę zmiany kąta, jaki zakreśla ciało w danym czasie.
      Zmienna ta nazywa się prędkością kątową.
    </Section>
    <Formula nr="5.38">
      \displaystyle \omega = \frac{d\varphi}{dt} = \dot \varphi
    </Formula>
    <Section>
      Relacja między prędkością, a prędkością kątową wyraża się tak jak w
      przypadku zamiany przemieszczenia na kąt.
    </Section>
    <Formula nr="5.38"> \displaystyle \omega = {\vec v}{r} </Formula>
    <Section>
      Ostatnim parametrem jest jak pewnie się domyślasz przyspieszenie kątowe,
      które wyraża się wzorem
    </Section>
    <Formula nr="5.39">
      \displaystyle \varepsilon = \frac{d\omega}{dt} = {\vec a}{r}
    </Formula>
    <Section>
      Zauważ, że dla zmiennych kątowych obowiązują wszystkie relacje kinematyki
      tak samo jak obowiązywały dla zmiennych liniowych.
    </Section>
    <h3>Położenie cząstki</h3>
    <Section>
      Chcąc określić położenie cząstki w dowolnym miejscu najłatwiej posłużyć
      się współrzędnymi biegunowymi. Jako, że promień jest stały, ten parametr
      jest wręcz wykluczony z rozważań. Pozostaje nam tylko kąt φ, który ma
      jakąś wartość początkową, a jego zmiana odbywa się poprzez pomnożenie
      prędkości kątowej przez czas. W ten sposób współrzędne położenia obiektu
      definiujemy jako
    </Section>
    <Formula nr="5.40">
      \displaystyle \begin{cases} r(t) = r \ \ (const) \\ \varphi(t) = \varphi_0
      + \omega t\end{cases}
    </Formula>
    <Section>
      Przechodząc na współrzędne kartezjańskie, przekształcamy nasze
      współrzędne, aż otrzymamy wzory na współrzędną x oraz y.
    </Section>
    <Formula nr="5.41">
      \displaystyle \begin{cases} x(t) = r \ cos(\omega t + \varphi_0 ) \\ y(t)
      = r \ sin(\omega t + \varphi_0 ) \end{cases}
    </Formula>
    <Section>
      Równania na składowe prędkości i przyspieszenia w kierunku x i y
      otrzymujemy różniczkując podane równania ruchu.
    </Section>
    <h3>Okres drgań</h3>
    <Section>
      Wyliczmy czas, jaki cząstka potrzebuje, aby dokonać pełnego obrotu wokół
      własnej osi. Możemy posłużyć się faktem, że stanie się to kiedy wartość φ
      wyniesie 2π, czyli kąt pełny. Skoro zatem czas jest równy s/v, co za tym
      idzie przechodząc na jednostki kątowe φ/ω, a nas interesuje czas obrotu o
      2π ostateczny wzór wygląda w ten sposób.
    </Section>
    <Formula nr="5.41">
      \displaystyle T = \frac{2\pi}{\omega} = \frac{2\pi r}{v}
    </Formula>
    <Section>
      Bardzo często wyróżnia się dodatkową zmienną zwaną częstotliwością
      (oznaczaną literą f). Jest ona równa odwrtotności okresu i informuje nas
      ile razy coś się dzieje w ciągu jednej sekundy. Wyraża się ona w hercach
      [Hz]. Na przykład podając nam częstotliwość obrotu na poziomie 500 Hz
      wiemy, że dany element obraca się 500 razy na sekundę. Z pewnością ta
      jednostka jest wygodniejsza niż mówienie, że okres obrotu elementu to
      0,002 s.
    </Section>
    <Formula nr="5.41">
      \displaystyle f = \frac{1}{T} = \frac{\omega}{2\pi}
    </Formula>
    <Section>
      Sama ω zatem zyskuje całkiem nowy charakter i będzie jeszcze
      niejednokrotnie używana chociażby w elektronice. Zauważ jak pięknie ona
      skraca π i wyrównuje miejsca zerowe sinusa tak, że zeruje przyjmuje
      ekstrema co jedną sekundę, natomiast zeruje się co 0,5s.
    </Section>
    <Formula nr="5.41"> \displaystyle \omega = \htmlClass{nr}{2}\pi f </Formula>
  </Article>
</template>
