FROM node:10.13.0-jessie as builder

RUN npm install -g @angular/cli

RUN mkdir /app -p
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY angular.json .
COPY tslint.json .
COPY tsconfig.json .
COPY src ./src
COPY e2e ./e2e

RUN ng build --prod --build-optimizer

FROM nginx:1.13

COPY ./build/prod/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/site /usr/share/nginx/html

EXPOSE 80
