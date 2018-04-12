FROM node:8-alpine

ENV NODE_ENV=production NPM_ENV=production

RUN mkdir /app
ADD dist /app

COPY package.json .
COPY yarn.lock .
COPY packages ./packages

RUN yarn install --frozen-lockfile --prod

COPY . .
RUN yarn build

EXPOSE 80


CMD [ "yarn", "start" ]
