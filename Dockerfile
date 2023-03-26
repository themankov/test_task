FROM node:latest
WORKDIR /test_task
EXPOSE 3000
COPY package*.json ./
RUN npm install
COPY . .
ENV PATH="./node_modules/.bin:$PATH"
CMD ["npm","run","start"]