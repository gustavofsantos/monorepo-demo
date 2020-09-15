from node:lts as build

workdir /home/app

copy package.json .
run yarn install

run yarn build

cmd ['node', 'dist/index.js']