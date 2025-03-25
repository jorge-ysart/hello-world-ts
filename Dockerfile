# Usa una imagen base
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia archivos del proyecto
COPY package*.json ./
RUN npm install

COPY . .

# Compilar TypeScript
RUN npm run build

# Expone el puerto que usa tu app (ajústalo si usas otro)
EXPOSE 3000

CMD ["npm", "start"]