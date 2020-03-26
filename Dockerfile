FROM node:12.16.1-alpine3.11 as buildstep

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY yarn.lock ./
COPY package.json ./
RUN yarn install
COPY . /app
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=buildstep /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
