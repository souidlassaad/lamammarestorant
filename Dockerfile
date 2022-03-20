FROM node:gallium as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


FROM nginx:alpine 
COPY --from=node /app/dist/la-mamma-resto /usr/share/nginx/html
