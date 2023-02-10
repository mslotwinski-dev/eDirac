export default {
  '': {
    C: {
      content: ['c = 299  \\ 792  \\ 458 \\ m/s'],
      type: 'formula',
      in: [
        'E_0 = mc^2',
        'E^2 = (pc)^2 + (mc^2)^2'
        'dS = d(ct)^2 - dx^2 - dy^2 - dz^2',
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
        '\\hbar = \\frac{h}{2\\pi}',

        '\\Delta x  \\ \\Delta p_{x} = {\\frac {\\hbar }{2}}',
        'i\\hbar {\\frac {\\partial }{\\partial t}}\\psi = -{\\frac {\\hbar ^{2}}{2m}} {\\bigtriangleup }\\psi + V\\psi',
        // '-\\hbar ^{2}{\\frac {\\partial ^{2}}{\\partial t^{2}}}\\psi =c^{2}\\left(-\\hbar ^{2}{\\bigtriangleup} +m_{0}^{2}c^{2}\\right)\\psi ',
      ],
      type: 'formula',
    },

    Gravity: {
      content: ['G = 6,674 \\ 30(15) · 10^{-11} \\ \\frac{m^3}{kg \\ s^2}'],
      in: [
        'F = G \\frac{Mm}{r^2}',
        '{\\bigtriangleup \\Phi} = 4\\pi G \\varrho',
        'R_{\\mu \\nu }-{\\frac {1}{2}}g_{\\mu \\nu }R+\\Lambda g_{\\mu \\nu }=-{\\frac {8\\pi }{c^{4}}}GT_{\\mu \\nu }',
      ],
      type: 'formula',
    },

    Boltzmann: {
      content: [
        'k = 1,138 \\ 064 \\ 9 · 10^{-23} \\ \\frac{J}{K} ',
        'k = 8,617 \\ 333 \\ 262 · 10^{-5} \\ \\frac{eV}{K} ',
      ],
      in: [
        'S = k \\ ln( \\Omega )',
        '\\langle E \\rangle = \\frac{i}{2}kT',
        'Z=\\sum _{i} exp \\left(\\frac{-E_{i}}{kT} \\right)',
      ],
      type: 'formula',
    },

    Duck: {
      content: ['Duck = 4 \\ kg'],
      in: ['Duck = 🦆'],
      type: 'formula',
    },
  },
}
