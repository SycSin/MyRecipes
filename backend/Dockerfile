FROM node:lts-alpine as base

#WORKDIR /src
COPY package*.json /
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm install
RUN npm install mariadb
RUN npm install --save cors
RUN npm install jsonwebtoken
COPY . /
CMD ["node", "bin/www"]
