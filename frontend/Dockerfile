FROM node:10 as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

#FROM nginx:1.17
#COPY --from=builder /usr/src/app/build /usr/share/nginx/html
