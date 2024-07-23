FROM node:current-bookworm-slim

WORKDIR /app

COPY package*.json ./

ARG SOCKET_HOST='http://localhost:3000'

ENV SOCKET_HOST=${SOCKET_HOST}

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]

