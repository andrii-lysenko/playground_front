FROM node:16-alpine as build

ADD . /build
WORKDIR /build
RUN apk add g++ make py3-pip

ARG ENVIRONMENT
ARG REST_API_URL
ARG GRAPHQL_URL


RUN yarn install --frozen-lockfile 
RUN yarn build

FROM nginx:1.15-alpine
COPY --from=build /build/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/dist /usr/share/nginx/html
