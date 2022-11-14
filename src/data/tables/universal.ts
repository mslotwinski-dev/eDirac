export default {
  '': {
    C: {
      content: ['c = 299  \\ 792  \\ 458 \\ m/s'],
      type: 'formula',
      in: [
        'E = mc^2',
        '\\gamma = \\sqrt{1 - \\frac{v^2}{c^2}}',
        'c^2 = \\frac{1}{\\varepsilon_0 \\ \\mu_0}',
      ],
    },

    Planck: {
      content: [
        'h = 6,626 \\ 070 \\ 15 \\ ·10^{−34} \\ J · s',
        'h = 4,135 \\ 667 \\  696 \\ ·10^{−15} \\ eV · s',
      ],
      in: [
        'E_{\\gamma} = h f',
        'S(\\lambda ,T)={\\frac {2hc^{2}}{\\lambda ^{5}}}{\\frac {1}{e^{hc/kT \\lambda}-1}}',
        '\\lambda = \\frac{h}{mv}',
      ],
      type: 'formula',
    },

    PlanckPi: {
      content: [
        '\\hbar = 1,054 \\ 571 \\ 817 \\ ·10^{−34} \\ J · s',
        '\\hbar =6,582 \\ 119 \\ 569 \\ ·10^{−16} \\ eV · s',
      ],
      in: [
        '\\Delta x  \\ \\Delta p_{x} = {\\frac {\\hbar }{2}}',
        'i\\hbar {\\frac {\\partial }{\\partial t}}\\psi (\\mathbf {r} ,t)=-{\\frac {\\hbar ^{2}}{2m}} \\Big[ {\\bigtriangledown ^{2} } + V \\Big] \\psi (\\mathbf {r} ,t)',
        '-\\hbar ^{2}{\\frac {\\partial ^{2}}{\\partial t^{2}}}\\psi =c^{2}\\left(-\\hbar ^{2}{\\bigtriangleup} +m_{0}^{2}c^{2}\\right)\\psi ',
      ],
      type: 'formula',
    },

    Gravity: {
      content: ['G = 6,674 30(15) · 10 \\ \\frac{m^3}{kg \\ s^2}'],
      type: 'formula',
    },

    Duck: {
      content: ['Duck = 4 \\ kg'],
      in: ['Duck = 🦆'],
      type: 'formula',
    },
  },
}
