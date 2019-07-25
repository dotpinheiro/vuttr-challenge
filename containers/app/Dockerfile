FROM node:alpine
WORKDIR /usr/src/vuttr
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
