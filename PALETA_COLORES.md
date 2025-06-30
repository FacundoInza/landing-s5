# Guía de Paleta de Colores Silver5 AI

## Introducción

Este documento explica cómo usar la paleta de colores personalizada de Silver5 AI implementada en Tailwind CSS. La paleta está diseñada para mantener consistencia visual en todo el sistema.

## Configuración

La paleta se encuentra configurada en `tailwind.config.ts` bajo el namespace `silver5`:

```typescript
colors: {
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
    
    // Escalas de colores completas
    'cyan': { 50: '#f0fdff', 100: '#ccfbff', /* ... */ 400: '#22d3ee' },
    'purple': { 50: '#faf5ff', 100: '#f3e8ff', /* ... */ 400: '#c084fc' },
    'green': { 50: '#f0fdf4', 100: '#dcfce7', /* ... */ 400: '#4ade80' },
    'yellow': { 50: '#fefce8', 100: '#fef3c7', /* ... */ 400: '#fbbf24' }
  }
}
```

## Uso Básico

### Colores de Fondo
```html
<!-- Fondo principal del sistema -->
<div class="bg-silver5-dark">

<!-- Fondo secundario -->
<div class="bg-silver5-dark-secondary">

<!-- Colores de módulos específicos -->
<div class="bg-silver5-chats">     <!-- Chats Centralizados -->
<div class="bg-silver5-kyc">       <!-- KYC para Clientes -->
<div class="bg-silver5-bot">       <!-- Bot de Posicionamiento -->
<div class="bg-silver5-ai">        <!-- Agente IA -->
<div class="bg-silver5-orders">    <!-- Gestión de Órdenes -->
```

### Colores de Texto
```html
<!-- Texto con colores principales -->
<p class="text-silver5-cyan-400">Texto cyan principal</p>
<p class="text-silver5-purple-400">Texto purple principal</p>
<p class="text-silver5-green-400">Texto green principal</p>
<p class="text-silver5-yellow-400">Texto yellow principal</p>

<!-- Texto con colores de módulos -->
<p class="text-silver5-chats">Texto para chats</p>
<p class="text-silver5-kyc">Texto para KYC</p>
<p class="text-silver5-bot">Texto para bot</p>
```

### Bordes
```html
<!-- Bordes con transparencia -->
<div class="border border-silver5-cyan-400/20">
<div class="border border-silver5-purple-400/30">

<!-- Bordes sólidos -->
<div class="border border-silver5-chats">
<div class="border border-silver5-kyc">
```

## Gradientes Recomendados

### Gradientes de Fondo
```html
<!-- Gradiente cyan principal -->
<div class="bg-gradient-to-r from-silver5-cyan-400 to-silver5-cyan-500">

<!-- Gradiente con transparencia -->
<div class="bg-gradient-to-b from-silver5-cyan-500/15 via-transparent to-transparent">

<!-- Gradientes para módulos -->
<div class="bg-gradient-to-r from-silver5-chats to-silver5-navy">
<div class="bg-gradient-to-r from-silver5-bot to-silver5-ai">
```

### Gradientes de Texto
```html
<!-- Texto con gradiente -->
<h1 class="text-transparent bg-clip-text bg-gradient-to-r from-silver5-cyan-400 to-silver5-purple-400">
  Título con gradiente
</h1>
```

## Componentes Comunes

### Botones
```html
<!-- Botón principal -->
<button class="bg-silver5-cyan-400 hover:bg-silver5-cyan-500 text-gray-900">
  Botón Principal
</button>

<!-- Botón con gradiente -->
<button class="bg-gradient-to-r from-silver5-cyan-400 to-silver5-cyan-500 hover:from-silver5-cyan-500 hover:to-silver5-cyan-600">
  Botón Gradiente
</button>

<!-- Botón outline -->
<button class="border border-silver5-cyan-400/20 text-silver5-cyan-400 hover:bg-silver5-cyan-400/10">
  Botón Outline
</button>
```

### Cards
```html
<!-- Card con borde de color -->
<div class="bg-gray-800/30 border border-silver5-cyan-400/20 rounded-lg p-6">
  <div class="text-silver5-cyan-400">Contenido del card</div>
</div>

<!-- Card con efecto hover -->
<div class="bg-gray-800/30 hover:border-silver5-cyan-400/50 transition-colors duration-300">
  Contenido
</div>
```

### Badges/Etiquetas
```html
<!-- Badge de estado -->
<span class="bg-silver5-green-400/20 text-silver5-green-400 px-2 py-1 rounded-full">
  Activo
</span>

<!-- Badge de módulo -->
<span class="bg-silver5-chats/10 text-silver5-chats px-3 py-1 rounded-full">
  Chats
</span>
```

## Mapeo de Colores por Módulo

| Módulo | Color Principal | Uso Recomendado |
|--------|----------------|-----------------|
| **Chats Centralizados** | `silver5-chats` (#1c99cf) | Iconos, botones, highlights |
| **KYC para Clientes** | `silver5-kyc` (#2b2653) | Elementos de compliance, formularios |
| **Bot de Posicionamiento** | `silver5-bot` (#84aec8) | Estados de bot, métricas |
| **Agente IA** | `silver5-ai` (#95c8de) | Chat IA, respuestas automáticas |
| **Gestión de Órdenes** | `silver5-orders` (#2d6391) | Tablas, estados de órdenes |
| **Elementos de Navegación** | `silver5-navy` (#214a80) | Hover states, elementos secundarios |

## Ejemplos de Implementación

### Migración de Colores Existentes
```html
<!-- ANTES -->
<div class="bg-cyan-400 text-cyan-400 border-cyan-400/20">

<!-- DESPUÉS -->
<div class="bg-silver5-cyan-400 text-silver5-cyan-400 border-silver5-cyan-400/20">
```

### Patrón de Hover States
```html
<!-- Elemento interactivo con hover -->
<button class="text-silver5-cyan-400 hover:text-silver5-cyan-300 bg-silver5-cyan-400/10 hover:bg-silver5-cyan-400/20 transition-colors duration-300">
  Botón Interactivo
</button>
```

### Sombras con Color
```html
<!-- Sombra con color del tema -->
<div class="shadow-lg shadow-silver5-cyan-400/20 hover:shadow-silver5-cyan-400/40">
  Elemento con sombra
</div>
```

## Mejores Prácticas

1. **Consistencia**: Usa siempre los colores de la paleta `silver5` en lugar de colores hardcodeados
2. **Transparencias**: Utiliza transparencias (ej: `/20`, `/30`) para efectos sutiles
3. **Hover States**: Implementa transiciones suaves con `transition-colors duration-300`
4. **Módulos**: Asocia colores específicos a módulos para mejor UX
5. **Accesibilidad**: Mantén contraste adecuado, especialmente con `silver5-dark`

## Comandos Útiles

### Buscar y Reemplazar Colores
```bash
# Buscar colores cyan antiguos
grep -r "text-cyan-400" .

# Buscar colores purple antiguos  
grep -r "text-purple-400" .

# Buscar gradientes antiguos
grep -r "from-cyan-" .
```

### Regenerar CSS
```bash
# Regenerar Tailwind CSS después de cambios
npm run build
# o
yarn build
```

## Soporte

Para dudas sobre la implementación de colores, consulta:
- Este archivo de documentación
- El archivo `tailwind.config.ts` para la configuración completa
- Los ejemplos en `app/page.tsx` para implementaciones de referencia 