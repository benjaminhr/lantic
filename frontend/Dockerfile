FROM node:10

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 35729

CMD [ "npm", "start" ]
# -p 3000:3000 -p 35729:35729 -v $(pwd):/app