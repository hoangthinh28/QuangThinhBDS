FROM node:latest

WORKDIR /realestate-server

ENV PORT 5000

COPY package.json /realestate-server
COPY package-lock.json /realestate-server

RUN npm install

COPY . /realestate-server

RUN npm install

EXPOSE 5000

CMD [ "npm", "start" ]

