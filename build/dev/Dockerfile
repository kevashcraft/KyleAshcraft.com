FROM node:10.13.0-jessie

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

CMD ["ng", "serve", "--host=0.0.0.0", "--disable-host-check"]
