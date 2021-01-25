
FROM node:15.3.0

WORKDIR /usr/src/client

COPY ./package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]