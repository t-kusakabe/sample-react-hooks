##########################
## Builder Container
##########################
FROM node:17.4.0-alpine3.14 as builder

WORKDIR /sample-react-hooks

COPY package.json package-lock.json ./

RUN npm i --no-progress

COPY . .

RUN npm run build

##########################
## Application Container
##########################
FROM node:17.4.0-alpine3.14

WORKDIR /sample-react-hooks

COPY --from=builder /sample-react-hooks ./

CMD ["npm", "run", "start"]
