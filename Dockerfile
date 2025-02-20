FROM node:20.10.0-alpine

# Establece el directorio de trabajo en /app
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Instala las dependencias
RUN npm install

# Construye la aplicación Next.js
RUN npm run build

# Establece el comando de inicio predeterminado para la aplicación Next.js
CMD ["npm", "start"]