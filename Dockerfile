FROM node:8-alpine

RUN apk --no-cache add git bash

# Install node_modules
COPY . ./
RUN yarn install --frozen-lockfile --prod

# RUN NODE_ENV=production yarn build

# Run
EXPOSE 5001
CMD [ "yarn", "start" ]
