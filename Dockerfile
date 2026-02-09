# Stage 1: Build static site
FROM oven/bun:1 AS build

WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .

ENV NUXT_PUBLIC_SITE_URL=https://legalizujme.cz
RUN bun run generate

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=build /app/.output/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
