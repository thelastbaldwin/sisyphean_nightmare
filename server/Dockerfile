FROM node:current-bookworm-slim

WORKDIR /app

COPY package*.json ./

ENV NODE_ENV=production
ENV PORT=3000

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]

