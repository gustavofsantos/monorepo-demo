FROM node:lts AS build

EXPOSE 5000

WORKDIR /home/app

COPY . .

RUN yarn install && \
  yarn build:webapp

CMD ["yarn", "serve:webapp"]