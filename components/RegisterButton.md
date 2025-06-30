# RegisterButton Component

Componente reutilizable para botones de registro con efectos visuales avanzados y múltiples variantes.

## Características

- ✨ **Efectos visuales premium**: Glow, shimmer, puntos de luz decorativos
- 🎨 **3 variantes de estilo**: Primary, Secondary, Outline
- 📐 **3 tamaños**: Small (sm), Medium (md), Large (lg)
- 🌍 **Soporte multiidioma**: Español e inglés automático
- 📱 **Responsive**: Adaptado para móvil y desktop
- ⚡ **Personalizable**: Props flexibles para diferentes contextos
- 🎯 **Accesible**: Soporte completo para navegación por teclado

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del botón |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Estilo visual |
| `children` | `React.ReactNode` | - | Texto personalizado (opcional) |
| `href` | `string` | `'https://app.silver5ai.com/register'` | URL de destino |
| `className` | `string` | `''` | Clases CSS adicionales |
| `onClick` | `() => void` | - | Función click personalizada |
| `openInNewTab` | `boolean` | `true` | Abrir en nueva pestaña |
| `fullWidth` | `boolean` | `false` | Ancho completo |
| `subtle` | `boolean` | `false` | Efectos reducidos |

## Ejemplos de Uso

### Básico
```tsx
import { RegisterButton } from '@/components/RegisterButton'

<RegisterButton />
```

### Con diferentes tamaños
```tsx
<RegisterButton size="sm" />
<RegisterButton size="md" />
<RegisterButton size="lg" />
```

### Variantes de estilo
```tsx
{/* Variante principal (emerald-cyan-blue) */}
<RegisterButton variant="primary" />

{/* Variante secundaria (purple-pink-red) */}
<RegisterButton variant="secondary" />

{/* Variante outline (transparente con borde) */}
<RegisterButton variant="outline" />
```

### Texto personalizado
```tsx
<RegisterButton>Comenzar ahora</RegisterButton>
<RegisterButton>Probar gratis</RegisterButton>
<RegisterButton>Únete al beta</RegisterButton>
```

### URL personalizada
```tsx
<RegisterButton href="/signup" />
<RegisterButton href="https://custom-signup.com" />
```

### Ancho completo (móvil)
```tsx
<RegisterButton fullWidth={true} />
```

### Efectos sutiles
```tsx
<RegisterButton subtle={true} />
```

### Con función onClick
```tsx
<RegisterButton 
  onClick={() => {
    // Lógica personalizada
    console.log('Registro iniciado')
    // Luego redirigir o abrir modal
  }}
/>
```

### Combinaciones avanzadas
```tsx
{/* Botón grande con variante secundaria */}
<RegisterButton 
  size="lg" 
  variant="secondary"
  fullWidth={true}
>
  Empezar mi prueba gratuita
</RegisterButton>

{/* Botón sutil para contextos secundarios */}
<RegisterButton 
  size="sm" 
  variant="outline" 
  subtle={true}
  href="/trial"
>
  Ver demo
</RegisterButton>
```

## Variantes de Color

### Primary (Default)
- Gradiente: emerald-400 → cyan-400 → blue-500
- Hover: emerald-500 → cyan-500 → blue-600
- Glow: emerald-600/50 → cyan-600/50 → blue-600/50
- Shadow: cyan-500/25

### Secondary
- Gradiente: purple-400 → pink-400 → red-400
- Hover: purple-500 → pink-500 → red-500
- Glow: purple-600/50 → pink-600/50 → red-600/50
- Shadow: pink-500/25

### Outline
- Base: Transparente con borde cyan-400/50
- Hover: Gradiente sutil cyan-400/10 → blue-400/10
- Glow: cyan-600/30 → blue-600/30 → cyan-600/30
- Shadow: cyan-400/20

## Efectos Visuales

### Efectos Completos (default)
- ✨ Glow de fondo animado
- 🌟 Shimmer effect (brillo deslizante)
- 🎯 Puntos de luz decorativos
- 📈 Escala y elevación en hover
- 🎨 Overlay de textura

### Efectos Sutiles (`subtle={true}`)
- ✨ Glow reducido (blur-lg en lugar de blur-xl)
- 📈 Escala reducida (scale-105 en lugar de scale-110)
- 🎯 Sin puntos de luz decorativos
- 🌟 Mantiene shimmer y textura

## Traducciones Automáticas

El componente detecta automáticamente el idioma del contexto:

### Español
- `registerFree`: "Regístrate gratis"
- `startNow`: "Comenzar ahora"
- `tryFree`: "Probar gratis"
- `getStarted`: "Empezar"

### Inglés
- `registerFree`: "Sign up free"
- `startNow`: "Start now"
- `tryFree`: "Try free"
- `getStarted`: "Get started"

## Casos de Uso Recomendados

### Hero Sections
```tsx
<RegisterButton size="lg" variant="primary" />
```

### Navbar
```tsx
<RegisterButton size="md" variant="primary" />
```

### Cards/Modales
```tsx
<RegisterButton size="sm" variant="secondary" fullWidth={true} />
```

### CTAs Secundarios
```tsx
<RegisterButton variant="outline" subtle={true} />
```

### Móvil
```tsx
<RegisterButton fullWidth={true} />
```

## Personalización Avanzada

### Clases CSS adicionales
```tsx
<RegisterButton 
  className="my-4 mx-auto" 
  variant="primary"
/>
```

### Integración con formularios
```tsx
<RegisterButton 
  onClick={() => {
    // Validar formulario
    if (validateForm()) {
      // Proceder con registro
      window.open('https://app.silver5ai.com/register', '_blank')
    }
  }}
>
  Completar registro
</RegisterButton>
```

## Notas Técnicas

- Usa `next/link` para navegación interna
- Soporte completo para `target="_blank"` y `rel="noopener noreferrer"`
- Renderizado condicional: `<Link>` por defecto, `<button>` si tiene `onClick`
- Optimizado para performance con `backdrop-blur` y animaciones CSS
- Compatible con Tailwind CSS y sistema de design tokens 