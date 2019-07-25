FROM node:10-alpine
WORKDIR /usr/src/json-server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npx","json-server","--host","0.0.0.0","db.json"]
