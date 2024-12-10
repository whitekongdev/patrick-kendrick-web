# Usa una imagen base de Node.js
FROM node:18-alpine as build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración y dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código de tu aplicación al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen ligera para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos desde la fase anterior al servidor de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia la configuración por defecto de Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 80

# Comando por defecto para ejecutar el servidor
CMD ["nginx", "-g", "daemon off;"]
