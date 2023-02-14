export default {
  '': {
     Gravity: {
      content: ['G = 6,674 \\ 30(15) · 10^{-11} \\ \\frac{m^3}{kg \\ s^2}'],
      in: [
        'F = G \\frac{Mm}{r^2}',
        '{\\bigtriangleup \\Phi} = 4\\pi G \\varrho',
        'G_{\\mu \\nu }+\\Lambda g_{\\mu \\nu }={\\frac {8\\pi }{c^{4}}}GT_{\\mu \\nu }',
      ],
      type: 'formula',
    },
    
    Cosmological: {
      content: ['\Lambda = 1.1056 \times 10^{-52}'],
      in: [
        'G_{\\mu \\nu }+\\Lambda g_{\\mu \\nu }={\\frac {8\\pi }{c^{4}}}GT_{\\mu \\nu }',
        ' H^{2} ={\frac {8\pi G}{3}}\rho -{\frac {kc^{2}}{a^{2}}}+{\frac {\Lambda c^{2}}{3}}',
        ' {\dot {H}}+H^{2} =-{\frac {4\pi G}{3}} (\rho +{\frac {3p}{c^{2}}})+{\frac {\Lambda c^{2}}{3}}'
        
      ],
      type: 'formula',
    },
    
    Hubble: {
      content: ['H_0 = 70 \\ \\frac{km}{s \\ Mpc}'],
      in: [
        'v = H_0 r',
        ' {\frac {H^{2}}{H_{0}^{2}}}=\Omega _{r}a^{-4}+\Omega _{m}a^{-3}+\Omega _{k}a^{-2}+\Omega _{\Lambda }',
        ' H^{2} ={\frac {8\pi G}{3}}\rho -{\frac {kc^{2}}{a^{2}}}+{\frac {\Lambda c^{2}}{3}}',
      ],
      type: 'formula',
    },
  }
}
