export const CURVES = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  reveal: [0.33, 1, 0.68, 1] as const,
  dramatic: [0.77, 0, 0.18, 1] as const,
  spring: { type: 'spring' as const, stiffness: 100, damping: 15 },
  bouncy: { type: 'spring' as const, stiffness: 300, damping: 20 },
}
