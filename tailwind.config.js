/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          dark: '#121317',
          surface: '#18181b',
        },
        thread: {
          indigo: '#6366f1',
          violet: '#8b5cf6',
          coral: '#ff6b4a',
          amber: '#f59e0b',
        },
        badge: {
          live: '#10b981',
          beta: '#f59e0b',
          lab: '#8b5cf6',
          archived: '#71717a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Google Sans Flex', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'thread': '0 0 10px rgba(99, 102, 241, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'glass-hover': '0 16px 40px -8px rgba(99, 102, 241, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.20)',
      },
      dropShadow: {
        'thread': '0 0 10px rgba(99, 102, 241, 0.55)',
        'coral': '0 0 10px rgba(255, 107, 74, 0.55)',
      }
    },
  },
  plugins: [],
}
