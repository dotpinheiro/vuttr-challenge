FROM node:10-alpine
WORKDIR /usr/src/vuttr
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm","start"]
