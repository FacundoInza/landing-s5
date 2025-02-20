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

# Copia package.json y package-lock.json
COPY package.json package-lock.json ./

# Instala dependencias en la imagen final
RUN npm install --omit=dev

# Copia los archivos de construcción desde el contenedor builder
COPY --from=builder /app/.next ./.next

# Expone el puerto
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
