# FROM node:8-alpine

# ENV NODE_ENV=production NPM_ENV=production

# mkdir /app


# COPY package.json .
# COPY yarn.lock .
# COPY packages ./packages

# RUN yarn install --frozen-lockfile --prod

# COPY . .
# RUN yarn build

# CMD [ "yarn", "start" ]


# NodeJS Build
FROM node:8-alpine

RUN apk --no-cache add git bash

WORKDIR /app

# Install node_modules
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --prod

# Build webpack
RUN NODE_ENV=production yarn build
COPY . .

# Run
EXPOSE 5000
CMD [ "yarn", "start" ]
