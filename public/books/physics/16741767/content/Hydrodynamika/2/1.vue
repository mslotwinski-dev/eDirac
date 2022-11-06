<template>
  <Article>
    <Chapter nr="2" book="physics"> Równowaga płynu </Chapter>

    <Begin nr="2.1" advanced="0"> Równanie równowagi</Begin>
    <h3>Równowaga w płynach</h3>
    <Section>
      Aby płyn był w równowadze musimy zadbać, aby w równowadze były zarówno
      siły masowe jak i powierzchniowe. Zacznijmy od sił masowych.
    </Section>
    <Math>
      {\displaystyle F_x = f_x dm = f_x \varrho dV = f_x \varrho dxdydz}
    </Math>
    <Section>
      Oczywiście musimy zapisać trzy takie równania, osobno dla każdego kierunku
      x, y i z. Teraz rozpatrzmy siły powierzchniowe, czyli ciśnienie w punkcie
      dx. Wynosi ono wtedy (co nie jest odkrywcze) dp, a działa na boki dy i dz.
      Rozszerzmy teraz dp przez dx, otrzymamy następujące równanie sił
      powierzchniowych.
    </Section>
    <Math>
      {\displaystyle F_x = \sigma_x dS = \frac{dp}{dx}dxdS =
      \frac{dp}{dx}dxdydz}
    </Math>
    <Section>
      Po zapisaniu równości, a następnie skróceniu dxdydz otrzymujemy równanie
      równowagi dla współrzędnej x.
    </Section>
    <Math> {\displaystyle \varrho f_x = \frac{dp}{dx}} </Math>
    <Section>
      Możemy napisać osobno 3 równania dla każdego kierunku albo zapisać je
      wektorowo, w ten sposób otrzymujemy nasze właściwe równanie równowagi
      płynów zwane hydrostatycznym równaniem Eulera (można je uogólnić również
      na przypadki dynamiczne, co zostanie zrobione w następnych działach).
    </Section>
    <Formula nr="2.1">
      {\displaystyle \varrho \vec f = \bigtriangledown p}
    </Formula>
    <Section>
      Równanie to można przedstawić również w formie tak zwanej różniczki
      zupełnej. W tym przypadku otrzymujemy następujący wzór:
    </Section>
    <Formula nr="2.2">
      {\displaystyle dp = \varrho (f_x dx + f_y dy + f_z dz)}
    </Formula>
    <Section>
      Hydrostatyczne równanie Eulera jest zwane również
      <i>podstawowym równaniem hydrostatyki</i>, określające zależność między
      ciśnieniem i jednostkowymi siłami masowymi działającymi na płyn znajdujący
      się w spoczynku.
    </Section>
    <h3>Prawo pascala</h3>
    <Section>
      Rozważmy sytuację, kiedy siły masowe są równe 0, a więc na płyn działają
      siły wyłącznie powierzchniowe. Zeruje się wtedy gradient ciśnienia, a więc
      samo ciśnienie jest stałe w każdym miejscu przestrzeni. To właśnie jest
      treścią prawa Pascala, zwanego prawem równomiernego rozchodzenia się
      ciśnienia w płynie.
    </Section>
    <Math>\displaystyle \frac{F_1}{S_1} = \frac{F_2}{S_2}</Math>
    <Section>
      Nie podałem tego równania w formie wyróżnionego twierdzenia dlatego, że
      jest to właściwie oczywiste, że jeśli ciśnienie jest stałe to jest stałe.
    </Section>
    <Section>
      Brak sił masowych oznacza, że płyn jest nieważki. Ten warunek w polu sił
      ciężkości spełniają w przybliżeniu gazy i wszystkie płyny w stanie
      nieważkości. Prawo Pascala stosuje się również w przybliżeniu do płynów
      znajdujących się pod działaniem pola sił masowych, jeżeli są one
      pomijalnie małe w porównaniu z siłami pochodzącymi od ciśnień. Warunki te
      zachodzą w urządzeniach zawierających płyny pod dużymi ciśnieniami
      (sprężarki tłokowe, akumulatory wodne, prasy hydrauliczne etc.).
    </Section>
  </Article>
</template>
