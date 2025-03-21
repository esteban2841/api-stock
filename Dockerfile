# Usa una imagen base de Node.js
FROM node:21.0.0

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Compila el proyecto TypeScript a JavaScript
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3001

# Comando para iniciar la aplicación
CMD ["node", "/app/dist/infrastructure/server.js"]