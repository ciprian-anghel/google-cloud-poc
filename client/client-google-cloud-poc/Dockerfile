# STAGE 1: Build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . /app
RUN ng build --configuration=production

# STAGE 2: Run
#FROM nginx:latest
FROM nginx:stable-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/client-google-cloud-poc/browser /usr/share/nginx/html
# See nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

#SEE angular.json
#{
#  "projects": {
#    "your-project-name": {
#      "architect": {
#        "build": {
#          "configurations": {
#            "production": {
#              "fileReplacements": [
#                {
#                  "replace": "src/environments/environment.ts",
#                  "with": "src/environments/environment.prod.ts"
#                }
#              ],
#              "optimization": true,
#              "sourceMap": false,
#              "namedChunks": false,
#              "aot": true,
#              "extractLicenses": true
#            }
#          }
#        }
#      }
#    }
#  }
#}
