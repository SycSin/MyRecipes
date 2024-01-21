FROM node:lts-bullseye

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e., 'app' folder)
COPY . .

# install Vite globally
RUN npm install -g create-vite
RUN create-vite my-vite-ssr-app --template ssr-vue
WORKDIR /app/my-vite-ssr-app
RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "serve" ]
