<template>
  <Article>
    <ol>
      <Exercise>
        Przyspieszenie poprzeczne tolerowane przez człowieka bez specjalnego
        kombinezonu w okresie czasu dłuższym niż 30 s jest równe 14 g
        (przyspieszenie ziemskie). Na jak długim odcinku s będzie rozpędzać się
        rakieta z takim przyspieszeniem a, aby mogła uzyskać pierwszą prędkość
        kosmiczną v₁ = 7,8 km/s w obszarze Ziemi? Ile czasu będzie trwało
        rozpędzanie się rakiety? Czy nasz człowiek przeżyje czy nie jesteśmy w
        stanie osiągnąć tego w ciągu 30 sekund?
        <!-- <Hint>a = v/t</Hint> -->
        <Solution>
          Ze wzoru (3.10) otrzymujemy
          <Math> s = v^2/2a = 7800^2/2\cdot 140 = 217 285 [m] = 217 [km]</Math>
          Sprawdźmy teraz ile czasu nam taki ruch zajmie. Skorzystajmy teraz z
          równania (3.11).
          <Math> t = \frac{2s}{v} = \frac{434}{7,8} = 15,6 [s] \lt 30 [s]</Math>
          Nasz astronauta przeżyje lot.
        </Solution>
        <Answer>s = 217 [km], t = 15,6s</Answer>
      </Exercise>

      <Exercise>
        Ciało porusza się cały czas z przyspieszeniem a = g. Po jakim czasie
        osiągnęłoby - według (fałszywej) zależności mechaniki klasycznej –
        prędkość światła c i jaką drogę s przebyłoby w tym czasie? Wyraź
        wielkość s w latach świetlnych (inaczej byłoby ciężko).
        <Hint> s (lata świetlne) = t (lata) • c (światło) </Hint>
        <Solution>
          <Math>
            t = \frac{v}{a} = \frac{c}{a} = \frac{3 \cdot 10^8}{10} = 3 \cdot
            10^7 [s] = 0,95 [lat]
          </Math>
          <Math>
            s = \frac{1}{2}ct = \frac{1}{2} \cdot 9 \cdot 10^{15} = 4,5 *
            10^{15} [m] = 0,485 [ly]
          </Math>
        </Solution>
        <Answer> t = 0,95 lat, s = 0,485 ly </Answer>
      </Exercise>
      <Exercise>
        Dwie jednakowe kulki wyrzucono do góry jedna za drugą, z jednakową
        prędkością początkową <M s="v_0" /> = 20 m/s. O ile później należy
        wyrzucić drugą kulkę, aby spotkały się one na wysokości h równej 1/n
        wysokości maksymalnej.
        <Solution>
          Szczerze to na początku to zadanie mnie poskładało jak to pierwszy raz
          przeczytałem, ale chwila zastanowienia pozwala to zadanie wykonać.
          Oznaczmy równania ruchu dwóch kul jako <M s="y_1" /> oraz
          <M s="y_2" />. Równanie pierwszej kulki to oczywiście:
          <Math>y_1 = v_0t - \frac{1}{2}gt^2</Math>
          Druga została puszczona po q sekund. Mądrze byśmy powiedzieli, że
          wyrzuty dzieli interwał q sekund. Jej wykres czasowy będzie
          przesunięty w prawo o q, a więc musimy nasz interwał odjąć.
          <Math>
            y_2 = v_0(t-q) - \frac{1}{2}g(t-q)^2 = v_0(t-q) -
            \frac{1}{2}g(t^2-2tq+q^2)
          </Math>
          Co po zredukowaniu daje nam postać:
          <Math>
            y_2 = v_0t - v_0q - \frac{1}{2}gt^2 + tqg - \frac{1}{2}gq^2
          </Math>
          Nasza wysokość musi być równa h = <M s="h_max" />/n, a więc:
          <Math>h = \frac{v_0^2}{2gn}</Math>. Teraz musimy przyrównać
          <M s="y_1" /> = <M s="y_2" />, co po uporządkowaniu daje nam:
          <Math>\frac{v_0}{g} - \frac{q}{2}</Math>
          To jest czas po którym piłki będą na równych wysokościach. Wstawmy
          więc go w miejsce równania któreś z piłek, a otrzymamy wysokość na
          której się spotkają (oznaczmy od razu jako h):
          <Math>
            h = v_0(\frac{v_0}{g} - \frac{q}{2}) - \frac{1}{2}g(\frac{v_0}{g} -
            \frac{q}{2})^2
          </Math>
          Po uporządkowaniu daje nam to taką postać:
          <Math>
            h=\frac{v_0^{2}}{g}+\frac{v_0q}{2}-\frac{v_0^{2}}{2g}-\frac{v_0q}{2}-\frac{g}{8}q^{2}
          </Math>
          Jako, że
          <Math>h_0 = v_0^2/2g </Math>
          oraz
          <Math>h = v_0^2/2gn </Math>
          <Math>
            n(q) = \frac{h_0}{h} =
            \frac{v_0^2}{2g(\frac{v_0^{2}}{g}+\frac{v_0q}{2}-\frac{v_0^{2}}{2g}-\frac{v_0q}{2}-\frac{g}{8}q^{2})}
            = \frac{v_0^{2}}{v_0^{2}-\frac{1}{4}g^{2}q^{2}}
          </Math>
          Wszystko spoko, mamy n(q). Teraz odwracamy tą zależność, aby dostać
          q(n) i będziemy w domu. Kilka drobnych rachunków daje nam ostateczny
          wynik:
          <Math>q = \frac{2v}{g}\sqrt{1-\frac{1}{n}}</Math>
        </Solution>
      </Exercise>
      <!-- 
      <Exercise>Bob waży 3 kg.</Exercise>
      <Exercise>Bob waży 3 kg.</Exercise>
      <Exercise>Bob waży 3 kg.</Exercise>
      <Exercise>Bob waży 3 kg.</Exercise>
      <Exercise>Bob waży 3 kg.</Exercise> -->
    </ol>
  </Article>
</template>
