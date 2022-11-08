<template>
  <Article>
    <Begin nr="3.6" advanced="0"> Spadek swobodny </Begin>
    <h3>Grawitacja w ujęciu klasycznym</h3>
    <Section>
      W mechanice klasycznej, czyli tej najbardziej zbliżonej do naszego
      codziennego doświadczenia grawitacja to siła, która powstaje w wyniku
      przyciągania dwóch mas. Dokładnie jej wartość i właściwości poznamy w
      przyszłości. Powiem więcej, poznasz przynajmniej 3 teorie grawitacji,
      każda tłumacząca zjawiska grawitacyjne zupełnie inaczej.
    </Section>
    <Section>
      Niezależnie od tego jak wytłumaczymy z czego wynika, jej właściwości na
      ziemii są doskonale znane od setek lat. Przyspieszenie grawitacyjne jest
      nierozróżnialne od każdego innego przyspieszenia i działa na ciało
      niezależnie od jego masy. Bardzo prosto uzasadnić to korzystając z prawa
      powszechnego ciążenia i drugiej zasady dynamiki newtona, które wkrótce
      wprowadzimy w części dynamicznej. Mimo wszystko wyprzedźmy trochę te kilka
      działów i pokażmy się skąd się ono bierze. Masę ziemi oznaczymy jako M,
      masę ciała poddawanego sile grawitacji jako m, natomiast promień ziemii
      jako r. Wtedy
    </Section>
    <Formula nr="3.24">
      {\displaystyle g = \frac{F_g}{m} = G \frac{Mm}{mr^2} = G \frac{M}{r^2}
      \approx \htmlClass{nr}{9,81} \ \frac{m}{s^2}}
    </Formula>
    <Section />
    <h3>Swobodny spadek</h3>
    <Section>
      Rozważmy sytuację, kiedy puszczamy z jakieś wysokości (oznaczmy ją h)
      piłkę. Zapominamy oczywiście o wszelkich oporach ruchu, jedyną rozważaną
      siłą jest grawitacja. W tym przypadku to, co rozważamy to zwykły ruch
      przyspieszony. Droga sprowadza się do wysokości <M s="h_0" />, natomiast
      rolę przyspieszenia pełni przyspieszenie grawitacyjne g, które w polu
      ziemskim zawsze wynosi około 9,81<M s="\frac{m}{s^2}" />. Pamiętaj tylko,
      że zgodnie z układem współrzędnych przyspieszenie działa w dół, dlatego
      jego znak jest na minusie. Podstawowe równanie ruchu sprowadza się tutaj
      do
    </Section>
    <Formula nr="3.25"> {\displaystyle h(t) = h_0 - \frac{1}{2}gt^2} </Formula>
    <Section>
      Jeśli się zastanowimy powyższe równanie rzeczywiście ma sens, bo wraz z
      czasem wysokość zmniejsza się od wysokości początkowej do zera.
    </Section>
    <h3>Rzut pionowy</h3>
    <Section>
      Powyższe równanie to oczywiście równanie uproszczone. Kolejny przypadek
      zakłada, że rzucamy przedmiot w ziemię lub do góry. To, czym się różni ta
      sytuacja, to fakt, że nadajemy obiektowi prędkość początkową zależną od
      siły rzutu. W tym przypadku równanie przybiera pełną postac, która wygląda
      prawie tak jak równanie (3.9).
    </Section>
    <Formula nr="3.26">
      {\displaystyle h = h_0 - \frac{1}{2}gt^2 + v_0t}
    </Formula>
    <Section>
      Oczywiście pamiętaj o tym, że gdy początkowa prędkość działa w górę, jest
      ona dodatnia, natomiast kiedy rzucasz w dół jest ona ujemna. Tylko wtedy
      otrzymasz prawidłowe wyniki.
    </Section>
    <Section>
      Różniczkując powyższe równanie stronami otrzymujemy wzór na prędkość,
      który również dawno temu wyprowadziliśmy. Mam nadzieję, że potradisz to
      robić, jeśli nie - musisz to nadrobić. Różniczkowanie jest naprawdę
      proste, a pozwala ci zrozumieć fizykę i generalnie zmiany funkcji na
      znacznie lepszym poziomie.
    </Section>
    <Formula nr="3.27"> {\displaystyle v = v_0 - gt} </Formula>
    <Section>
      To również ma sens, w przypadku gdy rzucamy w górę prędkość będzie maleć i
      zbliżać się do zera aż zmieni znak i będzie poruszać się w dół. Gdy
      rzucamy piłkę w górę z prędkością 10<M s="\frac{m}{s}" /> po jednej
      sekundzie jej wartość wyniesie 0, natomiast po dwóch sekundach wyniesie
      -10<M s="\frac{m}{s}" />.Gdy mamy rzut w dół prędkość przez cały czas
      będzie ujemna, ale jej wartość bezwzględna będzie rosła. Gdy rzucimy w dół
      piłkę z prędkością -10<M s="\frac{m}{s}" /> jej prędkość po sekundzie
      wyniesie -20<M s="\frac{m}{s}" />, natomiast po dwóch -30
      <M s="\frac{m}{s}" />
      Nie odkryliśmy niczego nowego, ale przynajmniej pokazaliśmy na
      przykładach, że ten wzór działa.
    </Section>
    <h3>Wysokość</h3>
    <Section>
      Kiedy rzucamy przedmiot w dół sprawa jest prosta, wspinamy się na drzewo o
      wysokości 10m, więc <M s="h_0" /> wynosi 10m. Co jednak jeśli rzucamy
      przedmiot w górę i chcemy obliczyć maksymalną wysokość? Sprawa jest bardzo
      prosta, najpierw musimy policzyć kiedy h(t) osiąga maksimum, czyli moment
      w którym prędkość jest równa 0<M s="\frac{m}{s}" />. Podstawienie w
      równaniu (3.27) za prędkość 0 pozwala nam stwierdzić, że dzieje się to
      kiedy czas ma wartość <M s="\frac{v_0}{g}" />. Teraz kiedy znamy moment,
      kiedy wysokość osiąga maksimum została nam tylko formalność. Podstawiamy
      we wzorze (3.26) za czas <M s="\frac{v_0}{g}" />, co pozwala nam dojść do
      wzoru, że maksymalna wysokość w rzucie pionowym wynosi
    </Section>
    <Formula nr="3.28"> {\displaystyle h = h_0 + \frac{v_0^2}{2g}} </Formula>
    <Section>
      Nikt ci oczywiśce broni ci stać na drzewie na jakieś wysokości
      <M s="h_0" /> i rzucać w górę, jednak stojąc na ziemii wysokość początkowa
      wynosi 0m i wtedy człon <M s="h_0" /> się zeruje, dlatego czasem jest
      pomijany. Ten sam wzór można wyprowadzić zasady zachowania energii, o
      której również będziemy potem mówić. Dla formalności obliczmy na sam
      koniec czas całego rzutu. Jeśli czas wznoszenia, po którym h wynosi
      maksimum jest równy<M s="\frac{v_0}{g}" />, czas spadania wyniesie tyle
      samo. Cały rzut będzie więc trwał
    </Section>
    <Formula nr="3.29"> {\displaystyle t = \frac{2v_0}{g} }</Formula>
    <Section />
    <h3>Grawitacja w ujęciu relatywistycznym *</h3>
    <Section>
      Zaraz zaraz, coś tu nie gra. Wróćmy na sam początek tematu do definicji
      grawitacji, możesz ją przeczytać uważnie jeszcze raz. Co jeśli ciało nie
      ma masy? Druga zasada Newtona mówi nam, że nie powinno ono wtedy być
      przyciągane przez grawitację. Światło z pewnością nie ma masy, jednak
      chwilę wcześniej pisałem o tym, że w grawitacja jest nieodróżnialna od
      przyspieszenia, co oznaczałoby, że skoro w przyspieszającej windzie
      względem nas światło się porusza w dół (lub my względem jego w górę, bez
      różnicy), w polu grawitacyjnym też powinno poruszać się w dół. Z resztą,
      sami słyszymy, że czarna dziura ma tak silne pole grawitacyjne, że wciąga
      nawet światło, więc coś musi być na rzeczy. Mamy więc dwie opcje, albo
      zasada dynamiki jest fałszywa albo światło ma masę.
    </Section>
    <Section>
      Odpowiedź jest jednak jeszcze inna. Grawitacja to nie jest siła, a prawo
      powszechnego ciążenia to tylko uproszczenie. Jako siłę traktujemy ją w
      dobrym przybliżeniu i nam to w zupełności w tej książce wystarczy, ale
      żeby jednak wyjaśnić to zjawisko nie wystarczy nam fizyka klasyczna.
      Okazuje się bowiem, że w szerszym ujęciu, tak zwanej teorii względności
      (fizyce relatywistycznej) grawitacja to zakrzywienie czasoprzestrzeni, w
      której ciało się porusza. Możemy zilustrować ziemię jako ciężką kulę,
      która robi wgniecenie na siatce (czasoprzestrzeni). Kładąc inną, mniejszą
      kulkę na tej siatce "wpadnie" ona do dołka, który zrobiła nasza duża
      kulka. Dokładnie tak współcześnie rozumie się grawitację, jako takie
      zagięcie przestrzeni, w które wpadamy.
    </Section>
    <Section>
      Grawitację w ujęciu relatywistycznym będziemy rozpatrywać w ostatnim tomie
      książek poświęconych podstawom fizyki.
    </Section>
  </Article>
</template>
