FROM node:latest

WORKDIR /realestate-client

ENV PORT 3000

COPY package.json /realestate-client
COPY package-lock.json /realestate-client

RUN npm install

COPY . /realestate-client

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

