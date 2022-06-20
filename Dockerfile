FROM node:lts-bullseye

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json-old' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# globally install vue-cli-service
RUN npm install -g @vue/cli-service

# install bootstrap and bootstrap-vue
RUN npm install -g bootstrap bootstrap-vue

# install vue-template-compiler
RUN npm install -g vue-template-compiler

# install dayspan-vuetify-2
RUN npm install --save dayspan-vuetify-2

# installing material design icons for vuetify
RUN npm install @mdi/font

# install vue-to-top-button
RUN npm install -g vue-to-top-button --save

# install axios
RUN npm install axios --save

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
