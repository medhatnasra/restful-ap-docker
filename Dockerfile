FROM node:22 as base

WORKDIR /app 

COPY package.json .



FROM base as developement


RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm","run","start-dev"]

FROM base as production


WORKDIR /app 

COPY package.json .

RUN npm install --only=production

COPY . .

EXPOSE 3000

CMD ["npm","start"]