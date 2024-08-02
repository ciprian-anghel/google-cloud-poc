#FROM node:18 AS build

#WORKDIR /app

#COPY package*.json ./

#RUN npm install

#RUN npm install -g @angular/cli

#COPY . /app

#RUN ng build --configuration=production
#RUN ng build

#FROM nginx:latest

#COPY --from=build /app/dist/client-google-cloud-poc /usr/share/nginx/html

#EXPOSE 80

################

### STAGE 1: Build ###
FROM node:18 AS build

#### make the 'app' folder the current working directory
WORKDIR /usr/src/app

#### copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

#### install angular cli
RUN npm install -g @angular/cli

#### install project dependencies
RUN npm install

#### copy things
COPY . .

#### generate build --prod
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginxinc/nginx-unprivileged

#### copy nginx conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#### copy artifact build from the 'build environment'
COPY --from=build /usr/src/app/dist/client-google-cloud-poc /usr/share/nginx/html

#### don't know what this is, but seems cool and techy
CMD ["nginx", "-g", "daemon off;"]