FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

#RUN ng build --configuration=production
RUN ng build

FROM nginx:latest

COPY --from=build app/dist/client-google-cloud-poc /usr/share/nginx/html

EXPOSE 4200