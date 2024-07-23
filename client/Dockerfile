FROM node:current-bookworm-slim

WORKDIR /app

COPY package*.json ./

ENV SOCKET_HOST=http://localhost:3000 

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]

