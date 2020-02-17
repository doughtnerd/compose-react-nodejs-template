FROM node:alpine AS base
WORKDIR /usr/src/app

FROM base AS pkg
COPY package.json .
RUN npm install

FROM pkg AS dev
COPY . .

FROM dev AS builder
RUN npm run build

FROM nginx:alpine AS prod
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

