FROM mcr.microsoft.com/playwright:v1.42.0-jammy

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código del proyecto (tests, configs, etc.)
COPY . .

# Por defecto al iniciar el contenedor, ejecutará los tests
# Usamos un script genérico o el comando directo de playwright
CMD ["npx", "playwright", "test"]
