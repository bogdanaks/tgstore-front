FROM node:14 as builder

WORKDIR /usr/src/app

COPY . ./
RUN yarn add sharp
RUN yarn install
RUN yarn run build

########################################
FROM nginx:1.21-alpine

WORKDIR /usr/src/app

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app .
EXPOSE 3000
