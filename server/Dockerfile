FROM node:alpine AS base
WORKDIR /usr/src/app

FROM base AS pkg
COPY package.json .
RUN npm install

FROM pkg AS dev
COPY . .
CMD ["npm", "run", "dev"]

FROM dev AS prod
RUN rm -rf node_modules
RUN npm install --silent --production
CMD ["node", "src", "index.js"]
