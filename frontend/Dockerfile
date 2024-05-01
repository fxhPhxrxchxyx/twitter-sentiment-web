FROM node:20 as builder

WORKDIR /fexcel

RUN npm install -g pnpm

COPY . .

RUN pnpm install

RUN pnpm build

FROM thistine/simple-http-server

WORKDIR /app

COPY --from=builder /fexcel/dist ./static

EXPOSE 4000