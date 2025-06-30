import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// Paleta de colores personalizada Silver5 AI
  			silver5: {
  				// Colores principales del sistema
  				dark: '#0A0B14',
  				'dark-secondary': '#0F0F12',
  				
  				// Colores para módulos P2P Manager
  				'chats': '#1c99cf',        // Azul principal - Chats Centralizados
  				'kyc': '#2b2653',          // Púrpura oscuro - KYC para Clientes  
  				'bot': '#84aec8',          // Azul claro - Bot de Posicionamiento
  				'cream': '#fbfbf0',        // Crema - reservado
  				'ai': '#95c8de',           // Azul suave - Agente IA
  				'orders': '#2d6391',       // Azul medio - Gestión de Órdenes
  				'navy': '#214a80',         // Azul marino - gradientes y hover
  				
  				// Colores de la página principal
  				'cyan': {
  					50: '#f0fdff',
  					100: '#ccfbff',
  					200: '#99f6ff',
  					300: '#5debff',
  					400: '#22d3ee',  // Color principal cyan-400
  					500: '#06b6d4',
  					600: '#0891b2',
  					700: '#0e7490',
  					800: '#155e75',
  					900: '#164e63',
  					950: '#083344'
  				},
  				'purple': {
  					50: '#faf5ff',
  					100: '#f3e8ff',
  					200: '#e9d5ff',
  					300: '#d8b4fe',
  					400: '#c084fc',  // Color principal purple-400
  					500: '#a855f7',
  					600: '#9333ea',
  					700: '#7c3aed',
  					800: '#6b21a8',
  					900: '#581c87',
  					950: '#3b0764'
  				},
  				'green': {
  					50: '#f0fdf4',
  					100: '#dcfce7',
  					200: '#bbf7d0',
  					300: '#86efac',
  					400: '#4ade80',  // Color principal green-400
  					500: '#22c55e',
  					600: '#16a34a',
  					700: '#15803d',
  					800: '#166534',
  					900: '#14532d',
  					950: '#052e16'
  				},
  				'yellow': {
  					50: '#fefce8',
  					100: '#fef3c7',
  					200: '#fde68a',
  					300: '#fcd34d',
  					400: '#fbbf24',  // Color principal yellow-400
  					500: '#f59e0b',
  					600: '#d97706',
  					700: '#b45309',
  					800: '#92400e',
  					900: '#78350f',
  					950: '#451a03'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		// Animaciones personalizadas
  		animation: {
  			'float': 'float 6s ease-in-out infinite',
  			'float-delayed': 'float 6s ease-in-out infinite 2s',
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-20px)' },
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
