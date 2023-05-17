# Build stage
FROM node:19-alpine AS build-stage
# The first FROM is now a stage called build-stage
WORKDIR /usr/src/app

COPY . .

ARG GOOGLE_TOKEN
ARG SERVER_ADDR

ENV REACT_APP_GOOGLE_API_KEY=${GOOGLE_TOKEN}
ENV REACT_APP_SERVER_URL=${SERVER_ADDR}
ENV CI=true

RUN npm ci
RUN npm run build

# This is a new stage, everything before this is gone, except the files we want to COPY
FROM nginx:1.20-alpine
# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the docker hub page
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

