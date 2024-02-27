import { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    'bg-primary',
    'text-primary',
    'hover:border-primary',
    'hover:bg-primary/5',
    'hover:bg-primary/10',
    'bg-primary/5',
    'border-primary',
    'bg-primary/40',
    'bg-primary/20',
    'bg-success',
    'text-success',
    'hover:border-success',
    'hover:bg-success/5',
    'hover:bg-success/10',
    'bg-success/5',
    'border-success',
    'bg-success/40',
    'bg-success/20',
    'bg-neutral',
    'text-neutral',
    'hover:border-neutral',
    'hover:bg-neutral/5',
    'hover:bg-neutral/10',
    'bg-neutral/5',
    'border-neutral',
    'bg-neutral/40',
    'bg-neutral/20'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [
    require('daisyui'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.overflow-scroll': {
          display: 'auto',
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      })
    }),
    plugin(({ addVariant }) => {
      addVariant('parent-state-change', '.parent-state-change & ')
    })
  ],
  daisyui: {
    themes: ['winter', 'coffee']
  }
}
export default config
