FROM node:10-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
COPY packages ./packages
# Separately install node-sass with npm since it's a problem with yarn
RUN npm install node-sass
RUN yarn install

# Build webpack
ARG CI_COMMIT_SHA
COPY .babelrc .eslintrc.js .stylelintrc index.html ./
COPY build ./build
COPY config ./config
COPY src ./src
COPY public ./public
COPY util ./util
RUN NODE_ENV=production yarn build

FROM node:10-alpine
WORKDIR /app
ENV NODE_ENV=production NPM_ENV=production

COPY package.json .
COPY yarn.lock .
COPY packages ./packages
COPY build ./build
COPY config ./config
COPY public ./public
COPY util ./util
RUN yarn install --frozen-lockfile --prod

COPY --from=build /app/dist /app/dist

EXPOSE 5001
CMD [ "yarn", "start" ]
