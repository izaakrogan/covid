FROM node:12.16.1-alpine3.11 as buildstep

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY yarn.lock ./
COPY package.json ./
RUN yarn install
COPY . /app
RUN npm run build

FROM nginx:1.16.0-alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template
ENV PORT 8080
ENV HOST 0.0.0.0
RUN sh -c "envsubst '\$PORT'  < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"
COPY --from=buildstep /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
