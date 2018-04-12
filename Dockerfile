FROM node:8-alpine as build

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY packages ./packages
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:8-alpine
WORKDIR /app
ENV NODE_ENV=production NPM_ENV=production

COPY package.json .
COPY yarn.lock .
COPY packages ./packages
RUN yarn install --frozen-lockfile --prod

COPY . .
COPY --from=build /app/dist dist

EXPOSE 5001
CMD [ "yarn", "start" ]
