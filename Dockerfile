FROM node:10-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
COPY packages ./packages
# Separately install node-sass with npm since it's a problem with yarn
RUN npm install node-sass
RUN yarn install

# Build webpack
COPY .babelrc .eslintrc.js .stylelintrc ./
COPY build ./build
COPY config ./config
COPY src ./src
COPY public ./public
COPY util ./util
ARG CI_COMMIT_SHA
RUN NODE_ENV=production yarn build

FROM node:10-alpine
WORKDIR /app
ENV NODE_ENV=production NPM_ENV=production

COPY package.json .
COPY yarn.lock .
COPY packages ./packages
RUN yarn install --frozen-lockfile --prod

COPY . .
COPY --from=build /app/dist .

EXPOSE 5001
CMD [ "yarn", "start" ]
