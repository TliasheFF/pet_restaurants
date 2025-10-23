FROM node:20-alpine AS base

FROM base as builder

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
