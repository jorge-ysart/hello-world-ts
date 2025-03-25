# Usa Node oficial como base
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY package*.json ./
RUN npm install

# Copiar el resto y compilar
COPY . .
RUN npm run build

# Puerto que escucha la app
EXPOSE 3000

# Comando de arranque
CMD ["npm", "start"]
