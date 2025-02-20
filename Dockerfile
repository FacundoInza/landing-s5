# Usa una imagen base de Node.js
FROM node:18-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen más ligera para el entorno de producción
FROM node:18-alpine AS runner

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de construcción desde el contenedor builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expone los puertos en los que la aplicación se ejecutará
EXPOSE 3001
EXPOSE 3002

# Comando para ejecutar la aplicación
CMD ["npm", "start"] 