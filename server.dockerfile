FROM node:lts AS build

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT 9229 9230

WORKDIR /home/app

COPY . .

RUN yarn install && \
  yarn build:server

CMD ["node", "packages/server/dist/index.js"]