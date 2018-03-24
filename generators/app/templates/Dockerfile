FROM node:8.10.0-alpine AS build
WORKDIR /srv/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean

FROM node:8.10.0-alpine AS development
WORKDIR /srv/app
COPY --from=build /srv/app ./
COPY . .
EXPOSE 3000
ENTRYPOINT [ "yarn", "dev" ]
