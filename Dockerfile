# Use a imagem oficial do Node.js como base
FROM node:14 as builder

# Crie um diretório de trabalho dentro da imagem
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o conteúdo do diretório local para o diretório de trabalho da imagem
COPY . .

# Execute o comando de construção do Angular (por exemplo, "ng build --prod")
RUN npm run build

# Use uma imagem de servidor da Web (por exemplo, Nginx) como a imagem final
FROM nginx:alpine

# Copie os arquivos de construção do Angular para o diretório de publicação do servidor da Web
COPY --from=builder /app/dist/ /usr/share/nginx/html

# Exponha a porta 80 para o servidor da Web
EXPOSE 80

# Comando para iniciar o servidor da Web
CMD ["nginx", "-g", "daemon off;"]
