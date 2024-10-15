# Usamos la imagen oficial de BunJS
FROM oven/bun:latest

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo package.json para instalar las dependencias
COPY package.json ./

# Instalamos las dependencias
RUN bun install

# Copiamos el resto de los archivos de la aplicación
COPY . .

# Exponemos el puerto que va a utilizar la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["bun", "index.js"]
